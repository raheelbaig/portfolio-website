import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { AnchorChapters } from "@/components/patterns/anchor-chapters";
import { AnchorShell } from "@/components/patterns/anchor-shell";
import { anchor as copy } from "@/content/copy/sidebar";
import { site } from "@/content/site";
import { heroPortraitSrc } from "@/lib/assets";

/**
 * The Anchor — the permanent identity rail (`docs/v2/04-sidebar.md`).
 *
 * It is **not a navigation widget**: it is the Hero, continued. The
 * protagonist, having filled the opening frame, recedes into a constant
 * presence the visitor travels beside for the rest of the film (§1). Its
 * emotion is *company*, not *chrome* — which is why it is mostly dark, mostly
 * empty, and never speaks.
 *
 * ── Set/Crew split (§8.1, the load-bearing decision) ───────────────────────
 * Every semantic part of this rail — the identity link, the `<nav>` of real
 * anchors, the status, the CTA, the links — is in the static DOM from first
 * paint, in its **rest (docked) state**. With no JavaScript the sidebar is
 * simply present and fully usable. The Crew never creates any of it; it only
 * choreographs when it becomes *visible*, by driving one custom property.
 *
 * ── The dock contract ─────────────────────────────────────────────────────
 * The rail's appearance is a pure function of `--dock-p`, the same 0→1 dock
 * progress defined in `03 §8`. It defaults to `1` (docked), so the rest state
 * is what renders without the Crew and under reduced motion (§8.4). The Crew's
 * only job is to scrub that one number from 0→1 across the first 24svh, and
 * the §2.2 furniture keyframes then fall out of the CSS automatically. Nothing
 * mounts, nothing unmounts, nothing teleports — the furniture is revealed by
 * light, exactly as §2.2 requires.
 *
 * Server Component. The only client code is `AnchorShell` (overlay + spine)
 * and `AnchorChapters` (active-chapter detection).
 */
export function Anchor() {
  return (
    <AnchorShell
      identity={
        /*
         * Identity (§3.1, §3.3, §5) — ONE link back to the opening frame, in
         * the whole document. Its three presentational forms are switched by
         * tier in CSS, never duplicated:
         *
         *   monogram  phone only — the compact-state mark (11 §3.4: the phone
         *             identity is the monogram, not the photo)
         *   chip      ≥768 — the docked figure, Distant register
         *   wordmark  ≥1024 — once the rail is wide enough to carry a name
         *
         * §3.3 is explicit that the monogram is *not* shown on the expanded
         * rail, where it would duplicate the chip + wordmark. The accessible
         * name is written once, here, and never changes across tiers.
         *
         * The portrait itself is `alt=""`: the figure is described exactly
         * once, in the Hero (01 §21, §8.2).
         */
        <Link
          href={"/#hero" as Route}
          className="anchor-identity light-response"
        >
          <span aria-hidden="true" className="anchor-monogram">
            {copy.identity.monogram}
          </span>
          <AnchorChip />
          <span aria-hidden="true" className="anchor-wordmark">
            {copy.identity.wordmark}
          </span>
          <span className="sr-only">{copy.identity.toTop}</span>
        </Link>
      }
    >
      <AnchorChapters />

      {/*
       * The base cluster gravity-sits toward the bottom (§3.5): state, then
       * action, then reach — a hierarchy of permanence.
       */}
      <div className="anchor-base">
        {/*
         * Availability (§3.2). Renders only when real copy exists; the spec
         * marks it copy-pending and forbids inventing it, so the slot is
         * reserved and the rail composes identically without it.
         */}
        {copy.status !== null && (
          <p className="anchor-status">
            <span
              aria-hidden="true"
              className="anchor-status-dot"
              data-tone={copy.status.tone}
            />
            {copy.status.label}
          </p>
        )}

        {/*
         * The quiet ask (§3.4). A Console link with a lit underline — never a
         * Sol-glass primary, which would put a second lit action in every
         * viewport and break the one-primary law (01 §15).
         */}
        <a href={copy.cta.href} className="anchor-cta light-response">
          {copy.cta.label}
          <span aria-hidden="true"> →</span>
        </a>

        <ul className="anchor-links">
          <li>
            <a
              href={copy.links.emailHref}
              className="anchor-link light-response"
            >
              {copy.links.emailLabel}
            </a>
          </li>
          {/*
           * Socials are driven by `site.socials`, which is still empty pending
           * the copy pass (04 §11). The row appears with no component change
           * the moment real handles exist — nothing is invented here.
           */}
          {site.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.url}
                className="anchor-link light-response"
                rel="me noreferrer"
                target="_blank"
              >
                {social.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </AnchorShell>
  );
}

/**
 * The docked chip (§5): 56×56, Distant register, edge-feathered, carrying a
 * small ambient glow so it reads as lit rather than flat. It does not
 * parallax and it does not lean — at this size both would be imperceptible
 * and cost repaint for nothing.
 *
 * `data-crew="anchor-chip"` is the dock's handoff point. See the report: the
 * docs disagree about whether the Hero's portrait *becomes* this node
 * (02 §3.3 — "never a swap between two images") or cross-dissolves into it,
 * and §8.1 requires a chip to exist here with no JS regardless.
 */
function AnchorChip() {
  const src = heroPortraitSrc();

  if (src === null) {
    return (
      <span
        aria-hidden="true"
        data-crew="anchor-chip"
        className="anchor-chip anchor-chip-absent"
      />
    );
  }

  return (
    <span data-crew="anchor-chip" className="anchor-chip">
      <Image src={src} alt="" fill sizes="56px" className="anchor-chip-image" />
    </span>
  );
}
