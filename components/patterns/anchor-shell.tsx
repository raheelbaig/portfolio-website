"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { anchor as copy } from "@/content/copy/sidebar";

/**
 * The anchor's interactive chrome (`docs/v2/04-sidebar.md` §6, §7, §8).
 *
 * This is the *only* client code the sidebar needs, and it exists for exactly
 * two behaviours that cannot be expressed statically:
 *
 *   1. **The summoned overlay** on phones (§7) — open state, focus trap, Esc,
 *      scrim, and returning focus to the affordance that opened it (§8.2).
 *   2. **The progress spine** (§6) — how far through the film, eased.
 *
 * Everything else — identity, chapters, status, CTA, links — arrives as
 * server-rendered `children`. That is the point of §8.1: the semantic DOM
 * exists from first paint, so with no JS the rail is simply present in its
 * rest state and fully usable. Nothing here creates content; it only manages
 * state around content that is already there.
 *
 * Performance (§9.3): the spine is driven by `transform: scaleY()` through a
 * single custom property, on a rAF loop that **only runs while scrolling and
 * stops when it settles** — never a per-frame listener, never `height`.
 */
export function AnchorShell({
  identity,
  children,
}: {
  /**
   * The single identity link, server-rendered. It lives in the head so that
   * the phone bar and the rail top are the *same* element re-blocked — there
   * is exactly one identity link, and one accessible name, in the document.
   */
  identity: React.ReactNode;
  /** The rail body: chapters and the base cluster. */
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  /** True below the COLUMN tier, where the rail becomes a bar + overlay (§7). */
  const [compact, setCompact] = useState(false);

  const rootRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  /* ── Tier watch ─────────────────────────────────────────────────────────
     The overlay's dialog semantics are only true on phones; on rail tiers the
     same DOM is a plain landmark region. Rotating a device re-matches and the
     overlay closes itself rather than stranding an open dialog (11 §10). */
  useEffect(() => {
    const query = window.matchMedia("(max-width: 47.999rem)");
    const sync = () => {
      setCompact(query.matches);
      if (!query.matches) setOpen(false);
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  /* ── Overlay: focus trap, Esc, scroll lock, focus return (§8.2, §8.3) ─── */
  useEffect(() => {
    if (!open || !compact) return;

    const panel = panelRef.current;
    const opener = menuRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      /* The trap is intentional and escapable — the only one in the product. */
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      const activeEl = document.activeElement;

      if (event.shiftKey && (activeEl === first || !panel.contains(activeEl))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open, compact, close]);

  /* ── The progress spine (§6, §9.3) ──────────────────────────────────────
     Scroll progress through the whole film, written to one custom property.
     The lit segment eases toward its target so it never jitters with raw
     scroll; under reduced motion it tracks directly, with no lerp at all. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let target = 0;
    let current = 0;
    let frame = 0;
    let idleTimer = 0;
    let running = false;

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const write = (value: number) => {
      root.style.setProperty("--anchor-progress", value.toFixed(4));
    };

    const tick = () => {
      /* A visual-layer lerp only — it never touches scroll position (01 §14). */
      current += (target - current) * (still.matches ? 1 : 0.12);
      if (Math.abs(target - current) < 0.0005) {
        current = target;
        running = false;
        write(current);
        return;
      }
      write(current);
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      measure();
      /* The spine responds to *motion*: bright while moving, receding into
         the dark while the visitor is reading (§6). */
      root.dataset.scrolling = "true";
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        delete root.dataset.scrolling;
      }, 600);

      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    measure();
    current = target;
    write(current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(idleTimer);
      cancelAnimationFrame(frame);
    };
  }, []);

  const dialogProps =
    compact && open
      ? ({
          role: "dialog",
          "aria-modal": true,
          "aria-label": copy.menu.overlayLabel,
        } as const)
      : {};

  return (
    <aside
      ref={rootRef}
      id="anchor"
      aria-label={copy.regionLabel}
      className="anchor"
      data-open={open ? "true" : undefined}
    >
      {/*
       * The head (§3.1, §7). On phones this is the 56px bar; on every rail
       * tier it is the top of the rail. Same element, re-blocked by CSS — so
       * the identity is never rendered twice and never remounts on rotation.
       * The menu affordance beside it is hidden from rail tiers, where the
       * chapters are always visible and nothing needs summoning.
       */}
      <div className="anchor-head">
        {identity}

        <button
          ref={menuRef}
          type="button"
          className="anchor-menu light-response"
          aria-expanded={open}
          aria-controls="anchor-panel"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? copy.menu.close : copy.menu.open}
        </button>
      </div>

      {/* The scrim closes the overlay; it is decorative, so the Esc key and
          the labelled close button carry the real semantics. */}
      <div
        aria-hidden="true"
        className="anchor-scrim"
        onClick={close}
        data-testid="anchor-scrim"
      />

      <div
        ref={panelRef}
        id="anchor-panel"
        className="anchor-panel"
        /* Any chapter tapped inside the overlay dismisses it — delegation, so
           the server-rendered links need no client wrapper of their own. */
        onClick={(event) => {
          if (!open) return;
          if ((event.target as HTMLElement).closest("a")) close();
        }}
        {...dialogProps}
      >
        {children}
      </div>

      {/* The spine (§6): a hairline track with a lit segment scaled by
          progress. Decorative — the active chapter carries this meaning
          programmatically (§8.2). */}
      <div aria-hidden="true" className="anchor-spine">
        <div className="anchor-spine-lit" />
      </div>

      {/*
       * §8.1 promises the sidebar is fully usable with no JavaScript. On phones
       * the documented form is a *summoned* overlay (§7), which by definition
       * cannot be summoned without JS — so without it the rail stops being an
       * overlay at all and simply flows down the page: bar, then chapters,
       * status, CTA and links, then the film. Nothing is unreachable.
       *
       * This is scoped to <noscript> rather than a mount flag on purpose: a
       * flag would leave the overlay open across the pre-hydration frames.
       */}
      <noscript>
        <style>{`.anchor{position:static;pointer-events:auto}.anchor-head{position:static}.anchor-menu{display:none}.anchor-panel{position:static;inset:auto;opacity:1;visibility:visible;pointer-events:auto}.anchor-spine{display:none}.anchor-offset{padding-block-start:0}`}</style>
      </noscript>
    </aside>
  );
}
