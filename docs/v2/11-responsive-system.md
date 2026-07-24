# V2 — Responsive System

> **Status:** Complete — the **canonical responsive specification** for NOCTURNE.
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md §22`, `02`–`06`, `10-motion-language.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This document owns *how every section recomposes across viewports.* It is the authority on breakpoints, viewport classes, responsive tokens, and per-section recomposition. Detailed enough that a senior frontend engineer implements every responsive behaviour **without making a design decision.**
>
> **The first law of this document: mobile is not a compressed desktop. It is a separately directed cut of the same film.** Every section below is *re-blocked* for its frame — re-staged like a scene reshot for a different aspect ratio — never proportionally shrunk.

---

## 0. Conventions & relationship

- Units: **`svh`/`dvh`** for viewport-height composition (stable against mobile URL-bar changes; `dvh` where the element must track the live bar). Widths in `px`/`rem`.
- Motion behaviours reference `10` by category (Cat 1–6) and token (`dur.*`, `scrub.*`, etc.).
- "Rail" = the sidebar (`04`). "Reel" = the mobile vertical cut. "Stage" = the wide desktop composition.

---

## 1. Responsive Philosophy

### 1.1 Re-block, never squeeze

A layout is **re-composed** for each frame, not scaled down. A phone is a **portrait frame**, not a narrow monitor; a section that only survives by shrinking has failed. Each viewport class gets a composition that looks *intended for that screen.*

### 1.2 Mobile is a separately directed cut

The mobile experience is the same story, **re-shot**: same beats, same emotions, same order — new blocking, new framing, new type sizes. We do not ask "how does the desktop layout fit on a phone?" We ask "how is this *scene* shot for a tall frame?" The film survives every frame or the scene is too complex (`01 §22`).

### 1.3 Two orthogonal axes: **frame** and **input**

Responsiveness has **two independent variables**, and conflating them is the classic mistake:

- **Frame** (width + aspect) decides **composition** — via `@media (width …)` / `(aspect-ratio …)` / container queries.
- **Input** (pointer vs touch) decides **interaction** — via `@media (hover: hover) and (pointer: fine)` vs `(pointer: coarse)`.

A 1024px landscape tablet and a 1024px laptop share a **composition** but differ in **interaction** (touch vs hover). Treating these separately is what lets us support the full device spectrum with a small number of compositions.

**Reasoning.** Frame and input are genuinely independent (a large touchscreen exists; a small pointer window exists). Splitting them means we author ~4 compositions × 2 input modes instead of a combinatorial mess of device profiles — fewer decisions, more coverage.

---

## 2. Breakpoints & Viewport Classes

### 2.1 The seven viewport classes

| Class | Width range | Frame character | Primary input |
| --- | --- | --- | --- |
| **Small phone** | `< 375px` | tall, cramped | touch |
| **Large phone** | `375–767px` | tall | touch |
| **Tablet portrait** | `768–1023px`, portrait aspect | tall-ish, roomy | touch |
| **Tablet landscape** | `1024–1279px`, landscape aspect | wide, roomy | touch |
| **Laptop** | `1024–1439px` | wide | pointer |
| **Large laptop** | `1440–1679px` | wide | pointer |
| **Desktop** | `≥ 1680px` (cinema) | wide, generous | pointer |

**Tier boundaries: 768 / 1024 / 1280 / 1440 / 1680.** The **phone↔tablet boundary is `768` everywhere** (REEL `<768`, COLUMN `768–1023`) — consistent with §4.1, §6 and §7. `640` is *not* a tier boundary; it is a within-phone type-scaling step only (small vs large phone).

Express in `em` for the media queries (`48 / 64 / 80 / 90 / 105 em`) so they respect user font-size (`01 §22`, WCAG reflow). Tablet portrait vs landscape is disambiguated by an **`(orientation: portrait)` / `(aspect-ratio < 1)`** modifier layered over the width query.

> **Token note:** `1440` is a **new V2 breakpoint** introduced by this document (the V1 code token set uses `1536` for `2xl`). Adopt `1440` when the V2 tokens are generated, or reconcile at token time — but do not assume the V1 token values match this table.

### 2.2 The four composition tiers (what actually gets authored)

The seven classes collapse into **four compositions**; within a tier, classes differ only in the noted small ways.

| Tier | Classes it serves | Sidebar | Showcase | Notes on within-tier differences |
| --- | --- | --- | --- | --- |
| **STAGE** | Desktop, Large laptop | 240px rail | pinned procession, full Threshold | Desktop adds `cinema` margins + max type; otherwise identical |
| **COMPACT STAGE** | Laptop, Tablet landscape | ~200px rail | pinned, reduced Threshold fidelity | Laptop = hover; Tablet-landscape = touch (targets/press-states swap) |
| **COLUMN** | Tablet portrait | collapsed 64px icon-rail | pinned but stacked-within-world | touch |
| **REEL** | Large phone, Small phone | top-bar + overlay | **un-pinned vertical exhibition** | Small phone reduces type min + drops non-essential elements |

**Reasoning.** Four compositions cover the entire spectrum because the *frame* only changes shape ~4 meaningful times; the rest is type scale and input mode. This is the buildable core — an engineer implements four layouts and two input modes, not seven device layouts.

---

## 3. Responsive Token System

All responsive values are tokens. Implementations reference names; values live once.

### 3.1 Safe margin & container

| Token | Value | Notes |
| --- | --- | --- |
| `margin.safe` | `clamp(20px, 5vw, 112px)` | symmetric always; the letterbox on wide, breathing on narrow |
| `container.read` | `min(680px, 100% − 2×margin)` | reading measure |
| `container.panel` | `min(960px, 100% − 2×margin)` | instrument panels / mockups |
| `grid.cols` | 12 (STAGE/COMPACT), 8 (COLUMN), 4 (REEL) | column count re-blocks per tier |
| `grid.gutter` | `24px` STAGE → `20px` COMPACT → `16px` COLUMN/REEL | |

### 3.2 Spacing scale (section rhythm re-blocks)

The within-component scale (`space-1..5`) is constant. The **between-scene rests shrink per tier** (the dark between frames stays proportionate to the frame, never compressed away):

| Token | STAGE | COMPACT | COLUMN | REEL |
| --- | --- | --- | --- | --- |
| `space.thought` (between thoughts) | 64 | 64 | 56 | 48 |
| `space.passage` | 104 | 96 | 80 | 64 |
| `space.scene` (between scenes) | 160 | 136 | 112 | 96 |
| `space.act` (act breaks) | 240 | 200 | 160 | 120 |

**Never below these floors** — a scene rest is content, not slack (`01 §7`).

### 3.3 Typography tokens (fluid at the top, stepped below)

Marquee is fluid (viewport-composed); Plate/Console step per tier.

| Token | STAGE | COMPACT | COLUMN | REEL (lg→sm phone) |
| --- | --- | --- | --- | --- |
| `marquee-xl` (name) | `clamp(72px,13vw,220px)` | (same clamp) | `clamp(56px,12vw,120px)` | `clamp(44px,13vw,80px)` |
| `marquee` (large / case-study title) | `clamp(64px,8vw,168px)` | (same) | `clamp(44px,8vw,96px)` | `clamp(36px,9vw,72px)` |
| `marquee-sm` (closing action · showcase world title) | `clamp(48px,6vw,96px)` | (same) | 44–64px | 34–48px |
| `plate-line` (spoken) | 27px | 25px | 22px | 20px |
| `plate-lead` | 21px | 20px | 19px | 18px |
| `plate-body` | 17px | 17px | 16px | 16px |
| `console` | 15px | 15px | 14px | 13px |
| `console-sm` | 13px | 13px | 13px | 12px |

Line-length cap: prose always within `container.read`; never exceed ~70ch on wide frames.

### 3.4 Portrait sizing table

| Scale · appearance | STAGE | COMPACT | COLUMN | REEL |
| --- | --- | --- | --- | --- |
| **Monumental** (Hero, Contact) | 62svh sq, centred | 58svh | fill-width sq (`100vw−2margin`), ≤60svh, top | fill-width sq, ~52–58svh, top |
| **Conversational** (About) | 46svh, one-third | 42svh, one-third | ~42svh, **top of stack** | fill-width chest-up, top of stack |
| **Distant** (Career/Services edge) | 12svh, frame edge | 12svh | inline small (~10svh) or omit | **omit** (edge figure not shown; person implied) |
| **Chip** (sidebar) | 56px photo | 56px photo | 48px photo (icon-rail) | **monogram (no photo)** in top-bar |

**Reasoning.** Anchoring Monumental to width on narrow frames (not height) is why the figure fills a phone's portrait frame instead of floating tiny in a shrunk desktop box. Dropping the Distant edge-figure on phones (rather than shrinking it to an illegible speck) is re-blocking, not squeezing — the person is felt through composition, not a 6px dot.

---

## 4. Global Responsive Rules

These apply to every section unless a section overrides.

### 4.1 Sidebar collapse (summary; full rules §7)

`≥1024` → rail (240 STAGE / 200 COMPACT). `768–1023` → 64px icon-rail. `<768` → top-bar + summoned overlay.

### 4.2 Motion tiers (summary; full adjustments §8, authority `10`)

- Pin the showcase on `≥768`; **un-pin (vertical) on `<768`.**
- Threshold: full on STAGE → reduced fragments on COMPACT → light-gather dissolve on COLUMN/REEL & low tier.
- Idle: full on STAGE/COMPACT (pointer) → reduced amplitude on touch → several off on REEL.
- Pointer-lean (Hero light) → **device-orientation** on touch (opt-in), else off.
- Parallax ranges reduce one step per tier down (`parallax.lg→md→sm`).

### 4.3 Reading order (DOM is the source of truth)

DOM order **is** reading order and never changes across tiers; CSS re-blocks *visual* position only where a spread's visual L–R differs from logical order. On stacked tiers, visual top-to-bottom must equal DOM order (portrait → voice, visual → copy). No `order`/`grid` reordering that breaks logical/tab order.

### 4.4 Negative-space strategy

Restraint is preserved by **redistributing** dark, never by filling freed space. On wide frames the empty is horizontal (letterbox margins); on tall frames the empty becomes **vertical breathing room** (dark between stacked beats). 60%+ dark holds on every tier (`01 §4.6`). When a spread stacks, the freed horizontal space is *not* filled with new content — it becomes vertical rest.

### 4.5 Scroll behaviour

Native scroll everywhere (`10 §5`); pin via sticky/ScrollTrigger on `≥768`; smooth anchor navigation; `svh`/`dvh` for stable vh; no horizontal scroll at any width (hard rule, §11 checklist).

### 4.6 Image cropping & video (global)

- **Art-directed crops, not CSS scaling:** wide frames get wide establishing shots; narrow frames get **tighter focal crops** delivered via `<picture>`/`<source media>` (`12` owns the crop set). Portrait uses one graded master with `object-fit` + `sizes`; face crop preserved at every scale.
- **Video:** at most one loop in memory (the present world's), muted, poster-first, in-view only; on `(prefers-reduced-data)` or REEL-default → **poster/still only**, play on explicit tap. Never a background video (`01 §17`).

**Reasoning.** These globals encode the two hardest responsive temptations away: "fill the empty space" (banned — redistribute dark) and "just `background-size: cover` the screenshot" (banned — art-directed crops), which are the two ways cinematic sites usually degrade on small frames.

---

## 5. Per-Section Recomposition

Each section is specified per composition tier. Facets not listed for a tier inherit the global rules (§4) and the tokens (§3).

### 5.1 Hero

| Tier | Composition | Motion / nav / touch |
| --- | --- | --- |
| **STAGE** | Centred symmetric: Monumental 62svh, name crossing chest, role/tagline/CTAs stacked, control strip at base (`03 §2`). | Full entrance + idle (push/breath/pointer-lean); dock to 240px rail. |
| **COMPACT** | Same, portrait 58svh, tighter margins; control strip may wrap metadata. | Entrance full; idle full (laptop) / reduced (tablet-landscape touch: no pointer-lean, device-orient opt-in); dock to 200px rail. |
| **COLUMN** | Portrait fills width (top), name below crossing lower edge, role/tagline centred, CTAs stacked, scroll cue at base. | Entrance simplified (fade+settle, no big push); dock to top-bar chip. Touch press-states. |
| **REEL** | Portrait fills width (~52–58svh), name below (may wrap 2 lines), role/tagline, **CTAs stacked full-comfortable-width** (primary above secondary), scroll cue. | Entrance = opacity+settle only; idle push ~1%; light-lean via device-orient (opt-in) else static; dock to monogram top-bar. |

- **Reading order (all tiers):** name → role → tagline → primary CTA → secondary CTA → metadata → scroll cue.
- **Type/portrait:** per §3.3/§3.4. **Negative space:** horizontal on STAGE, vertical on REEL. **Video:** none (Hero has no video, ever).
- **Perf:** portrait is LCP on every tier — priority, preloaded, art-directed `sizes` per tier. **Reduced-motion:** held frame, no entrance/idle; dock = cross-fade state (`10 §15`).

### 5.2 Sidebar → see §7 (its own section).

### 5.3 About

| Tier | Composition | Notes |
| --- | --- | --- |
| **STAGE** | Editorial spread: sticky Conversational portrait one-third left + Console fact caption; monologue right (`container.read`), one line lit at a time (`05`). | Lateral-step entrance; illuminate-not-travel. |
| **COMPACT** | Same spread, portrait 42svh, tighter; monologue holds `container.read`. | Same motion. |
| **COLUMN** | **Stacks:** portrait top (Conversational, centred or one-third) + fact beneath; monologue below; lines still illuminate on scroll; portrait sticky for first lines then releases. | |
| **REEL** | **Figure over voice:** portrait fill-width top + fact; each monologue line holds ~one screen and lights as it passes reading-centre; generous vertical dark between lines. | The intimacy survives: one face, one voice, one lit line. |

- **Reading order (all):** portrait → fact → line 1 → … → closing line.
- **Motion:** illuminate/dim (`scrub.tight`); lateral-step on STAGE/COMPACT only (stacked tiers: portrait fades in, no x-step). **Reduced-motion:** all lines full contrast, static (`05 §8.4`).
- **Media:** one Conversational portrait, lazy, art-directed crop on REEL (tighter chest-up). **No video.**

### 5.4 Project Showcase → see §6 (deep treatment; the climax).

### 5.5 Services

| Tier | Composition | Notes |
| --- | --- | --- |
| **STAGE** | Three offerings, indexed (`01/02/03`), one Plate line + two Console specifics each; Distant portrait at frame edge; bare warm room. | Offerings surface one at a time; point-of-light drift to Attendant on exit. |
| **COMPACT** | Same; portrait edge 12svh; margins tighter. | |
| **COLUMN** | Offerings stack full-width, index in the left margin; **Distant portrait inline-small or omitted**. | |
| **REEL** | Offerings stack, each ~holds a screen or flows with generous dark; index above each line; **portrait omitted** (person implied). | |

- **Reading order:** offering 1 (line → specifics) → 2 → 3.
- **Motion:** offering-under-attention lift (`scrub`/hover); drift handoff. **Reduced-motion:** all present, static. **Media:** none.

### 5.6 Experience (Approach & Instruments)

| Tier | Composition | Notes |
| --- | --- | --- |
| **STAGE** | Approach statement + instrument constellation in pooled light, grouped by nature; intelligence group pulses. | Overhead-drift feel; pools brighten on pass. |
| **COMPACT** | Same, tighter constellation. | |
| **COLUMN** | Constellation re-flows to a **2-column** grouped list, pools preserved; approach statement above. | |
| **REEL** | **Single column**, groups stacked with a label-less pool per group; approach statement top; the intelligence pulse remains (one idle kept). Consider merging Approach + Instruments into one continuous scroll (decide per `08`). | |

- **Reading order:** approach → interface group → state/data → foundation → intelligence.
- **Motion:** pool brighten (`scrub.tight`), intelligence pulse (idle, in-view). **Reduced-motion:** pulses off, groups present. **Media:** none. **Perf:** the pulse is the only idle here; paused off-screen.

### 5.7 Contact

| Tier | Composition | Notes |
| --- | --- | --- |
| **STAGE** | Mirror of Hero: Monumental portrait centred, one Plate line, one Sol action (Marquee dignity), email/socials in Console beside. | Push-in mirror; the action is the brightest object. |
| **COMPACT** | Same, portrait 58svh. | |
| **COLUMN** | Portrait fills width top, line beneath, **action full-comfortable-width**, email/socials stacked Console. | |
| **REEL** | Portrait fill-width, line, **action full-width tappable**, email as tappable Console link, socials as a quiet row. No form, no fields — one ask on every tier. | |

- **Reading order:** line → action → email → socials.
- **Motion:** push-in (idle/enter); action bloom on attention. **Reduced-motion:** static, present. **Media:** none.

### 5.8 Footer / Coda

| Tier | Composition | Notes |
| --- | --- | --- |
| **STAGE / COMPACT** | Slim single-line band: name · year · email · socials · dry credit line, aligned exactly. | Static, no motion. |
| **COLUMN** | Two rows: identity + credit line; links wrap. | |
| **REEL** | Stacked, comfortable tap targets for email/socials; credit line last; generous bottom safe-area (`env(safe-area-inset-bottom)`). | |

- **Reading order:** name/year → email → socials → credit line. **Motion:** none, all tiers. **Reduced-motion:** identical (already static).

**Reasoning.** Each section keeps its *beat and emotion* on every tier while re-blocking its geometry — About stays "one lit line at a time," Contact stays "one ask," Services stays "three, countable" — proving §1.2: the cut changes, the film does not.

---

## 6. Project Showcase Adaptations (the climax)

The showcase is the section most at risk of degrading; its adaptations are specified explicitly (extends `06 §8`).

| Tier | Structure | Per-world composition | Threshold |
| --- | --- | --- | --- |
| **STAGE** | Pinned procession; one legible world at a time; enter-from-right by light. | Copy left (cols ~1–4) / graded visual right in machined glass, layered crops behind. | Full spectacle (assembly, orbit, volumetrics). |
| **COMPACT** | Pinned procession retained. | Same, tighter; layered crops reduced to one; establishing push shortened. | Reduced fragment count; volumetrics optional. |
| **COLUMN** | **Pinned but stacked-within-world:** visual **above** copy per held world; still one-at-a-time; cross-dissolve seam preserved. | Visual full-width top, title/sentence/stack/Enter beneath. | Light-gather dissolve (no heavy 3D). |
| **REEL** | **Un-pinned vertical exhibition:** each world is a full-bleed held screen, entering by light as it scrolls into view; Enter tap → `/work/[slug]`. | Visual dominant top; title (Marquee small); one sentence; stack; **Enter** (full-width tap); Visit-live secondary if URL. | Simplified light-gather between identity and first world. |

- **Cross-dissolve seam** (lights change, never slide) preserved on all tiers ≥COLUMN; on REEL, worlds enter by light on scroll (one-at-a-time, not a carousel — never horizontal swipe panels).
- **Visit / Enter:** ≥44px tap zones on touch tiers; Enter is the primary on every tier; light narrows into the route (page transition, `10 §11`) on all tiers (instant on reduced-motion).
- **Media per tier:** one video max (present world) on STAGE/COMPACT; COLUMN one video or poster; **REEL poster/still by default**, tap-to-play, `(prefers-reduced-data)` forces still. Art-directed establishing crops per tier (`12`).
- **Accessibility:** all three worlds are `<article>`s in the DOM on every tier; reduced-motion/no-JS/keyboard → the **un-pinned stacked cut** regardless of width (`06 §9`).

**Reasoning.** The showcase must feel like an exhibition on a phone too. Un-pinning into a vertical walk (rather than trying to pin-and-scrub on a small touch screen, which fights the user) is the re-block that keeps the climax premium on REEL — one commanding world at a time, arriving by light, exactly as on STAGE.

---

## 7. Sidebar Collapse Rules

Extends `04 §7`. The identity anchor persists in spirit at every size; its form changes at fixed breakpoints.

| Breakpoint | Form | Contents | Nav |
| --- | --- | --- | --- |
| `≥1680` (Desktop) | 240px Slate rail | photo chip + wordmark + nav + spine + status + quiet CTA + links | inline list |
| `1440–1679` (Large laptop) | 240px rail | same | inline list |
| `1024–1439` (Laptop / Tablet-landscape) | ~200px rail | chip + (wordmark or first-name+monogram) + nav + spine + base cluster | inline list; touch tiers get ≥44px rows |
| `768–1023` (Tablet portrait) | **64px icon-rail** | chip (48px) + nav as lit ticks/dots + expand affordance; base cluster in expanded panel | ticks; tap/hold expands labels in an overlay Slate panel |
| `<768` (Phone) | **56px top-bar + overlay** | bar: **RB monogram** (→ top) + menu affordance + horizontal progress line; nav/status/CTA/links in a full-screen Smoke overlay | summoned overlay (`role=dialog`, focus-trapped, Esc/scrim close) |

- **Photo → monogram:** the face is shown in the rail (chip) at `≥768`; on phone the identity is the **monogram** (honours `01 §19` and the amendment in `04 §11`).
- **Progress:** vertical spine on rail tiers; **horizontal line under the top-bar** on phone.
- **Content offset:** page content is offset right by the rail width on rail tiers; full-width beneath the top-bar on phone.

**Reasoning.** Collapsing the rail at fixed frame widths (not device names) keeps the anchor present without ever eating a small frame; the phone's monogram-bar + overlay is a *composition for touch*, not a crushed rail — the anchor's job (identity + progress always visible; fuller nav a deliberate moment) is preserved.

---

## 8. Animation Adjustments (per tier)

Authority is `10`; this is the per-tier delta.

| Aspect | STAGE | COMPACT | COLUMN | REEL |
| --- | --- | --- | --- | --- |
| Showcase pin | yes | yes | yes (stacked-within) | **no (vertical)** |
| Threshold | full | reduced fragments | light-gather | light-gather |
| Hero dock | full arc → 240 rail | arc → 200 rail | → top-bar chip | → monogram bar |
| Idle (push/breath) | full | full | reduced | push ~1%, several off |
| Pointer-lean | on | on (laptop) / device-orient (tablet) | device-orient opt-in | device-orient opt-in / off |
| Parallax | `lg` (7%) | `md` (5%) | `sm` (3%) | `sm` or off |
| Depth drift (bg) | on | on | off | off |
| Page transition overlay | on | on | on | on (or instant) |
| Scrub values | per `10 §3.3` | same | same | reveals become simple in-view fades |

Implement via **`gsap.matchMedia()`** registering tier + reduced-motion + input variants; contexts auto-revert when a query stops matching. Rotating a device mid-session re-matches and re-composes cleanly (§10).

**Reasoning.** Reducing amplitude and 3D per tier down protects the frame budget on the weaker GPUs that correlate with smaller/touch devices, while the *shape* of each motion (its film-verb) stays the same — the motion identity survives even as fidelity scales.

---

## 9. Accessibility (responsive-specific)

- **Reflow (WCAG 1.4.10):** content is readable and operable at 320px width and at 400% zoom **with no horizontal scroll** and no loss of content/function. The REEL cut is validated at 320px.
- **Orientation (1.3.4):** both orientations supported; nothing is locked to landscape or portrait. Rotating recomposes to the matching tier.
- **Target size (2.5.8):** all touch targets ≥ 24×24 CSS px minimum, **≥44×44 preferred** on touch tiers (CTAs, nav rows, Enter, email/socials).
- **Overlay (mobile nav):** `role="dialog"`, `aria-modal`, focus-trapped, Esc + scrim close, focus returns to the summoning control.
- **Reading/DOM order preserved** across all tiers (§4.3); tab order equals visual order on stacked tiers.
- **Reduced motion & reduced data** honoured on every tier (§4.2, §4.6).
- **Hover-free operability:** every hover-conveyed meaning has a touch/focus equivalent on coarse-pointer tiers (`01 §22`).
- **Dynamic viewport:** `svh`/`dvh` used so content is never hidden behind the mobile URL bar; bottom actions respect `env(safe-area-inset-*)`.

**Reasoning.** The responsive layer is where accessibility is most often lost (horizontal scroll at zoom, tiny tap targets, landscape-locks). Making 320px/400%-zoom a hard acceptance criterion turns "responsive" into a testable contract, not an aspiration.

---

## 10. Engineering Constraints & Implementation Notes

- **Query strategy:** CSS media queries in `em` for width/orientation; `@media (hover:hover) and (pointer:fine)` for hover behaviours; `(pointer:coarse)` for touch; `(prefers-reduced-motion)`, `(prefers-reduced-data)`, `(prefers-color-scheme)` (dark is the only scheme — `01 §17` — but declare it). Prefer CSS over JS width-sniffing.
- **Container queries** for components that live in variable-width slots (showcase copy column, offering rows) so they respond to *their container*, not the viewport — critical when the rail's width changes the content field.
- **Units:** `svh` for stable composition, `dvh` where an element must track the live URL bar, `env(safe-area-inset-*)` for notches/home-indicators. Never `100vh` for full-frame sections on mobile.
- **Images:** `<picture>` + `<source media>` for **art-directed crops** per tier; `sizes`/`srcset` for resolution; graded AVIF/WebP; reserve aspect boxes (CLS ≈ 0). One portrait master, responsive `sizes` (`12`).
- **Video:** `preload="none"` + `poster`; `IntersectionObserver` play/pause; `(prefers-reduced-data)` → poster only; unload off-screen.
- **Motion:** one `gsap.matchMedia()` block owns tier/input/reduced-motion timelines; pin swap (on ≥768 / off <768) lives here; `ScrollTrigger.refresh()` on breakpoint change and after font load; debounce resize.
- **Layout:** fl<br>ex/grid with `minmax`, `clamp`, and logical properties; **no fixed pixel heights** on content sections; the property allowlist for animation stays transform/opacity (`10 §17.2`).
- **No horizontal overflow:** `overflow-x: clip` on wrappers only as a safety net, never as a substitute for correct layout; wide media scrolls inside its own `overflow-x:auto` container.
- **RTL:** the portfolio UI is English; RTL is out of scope for the site chrome (the *projects* being bilingual is their concern, not ours). Use logical properties anyway so a future RTL is cheap.

**Reasoning.** Container queries + art-directed `<picture>` + a single `matchMedia` motion block are the three engineering choices that make the four compositions maintainable — the rail can change width, the crops can change per frame, and the motion can retier, each from one place.

---

## 11. Testing Checklist

Verify on every composition tier (and both orientations for tablet/phone):

- [ ] **No horizontal scroll** at any width from 320px up; validated at 320px and at 400% zoom (WCAG 1.4.10).
- [ ] Each section **re-blocks** (not shrinks) — visually recomposed, not a scaled desktop.
- [ ] Portrait uses **width-anchored** sizing on narrow frames; face crop preserved; correct scale per §3.4.
- [ ] Type sizes match §3.3 per tier; reading measure ≤ ~70ch.
- [ ] Section rests match §3.2 floors; negative space redistributed (vertical on REEL), never filled.
- [ ] Sidebar form correct per §7 at each breakpoint; overlay focus-trapped; monogram (not photo) on phone.
- [ ] Showcase: pinned ≥768, **un-pinned vertical on <768**; one world legible at a time; cross-dissolve (not carousel/swipe); Enter → `/work/[slug]` with light narrowing (instant on reduced-motion).
- [ ] Touch targets ≥44px on touch tiers; hover meaning has focus/touch equivalent.
- [ ] Reduced-motion cut correct on every tier; reduced-data → posters/stills; one video max in memory.
- [ ] LCP (Hero portrait) within budget per tier; art-directed `sizes` correct; CLS ≈ 0.
- [ ] Rotating device mid-scroll recomposes cleanly (`matchMedia` re-match + `ScrollTrigger.refresh`).
- [ ] Dynamic viewport: content never hidden behind URL bar; bottom actions clear the home indicator.
- [ ] DOM/reading/tab order equals visual order on stacked tiers.
- [ ] Idle loops pause off-screen; frame budget ≤8ms held on a mid-tier phone.

**Reasoning.** A checklist turns the spec into a pass/fail gate — the responsive layer is where regressions hide, and a rotating-device / 320px / reduced-data list catches the exact failures cinematic sites ship.

---

## 12. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- **Four compositions** (STAGE / COMPACT / COLUMN / REEL) serve the seven classes; **frame decides composition, input decides interaction.** *(§1.3, §2.2)*
- Breakpoints **640/768/1024/1280/1440/1680** (`em`), with orientation modifier for tablet. *(§2)*
- **Mobile = separately directed cut**, not compressed desktop; negative space redistributed, never filled. *(§1.2, §4.4)*
- Portrait **width-anchored** on narrow frames; Distant edge-figure **omitted** on phone; sidebar identity becomes the **monogram** on phone. *(§3.4, §7)*
- Showcase **pinned ≥768, un-pinned vertical <768**; cross-dissolve preserved, never a swipe carousel. *(§6)*
- Art-directed **`<picture>` crops per tier** (not CSS cover-scaling); one video max; reduced-data → still. *(§4.6, §10)*
- **320px / 400%-zoom / no-horizontal-scroll** is a hard acceptance criterion. *(§9, §11)*

**Open (resolve at build/prototype):**
- Whether Approach + Instruments merge into one scroll on REEL → co-decide with `08-experience.md`.
- Exact tablet-portrait icon-rail interaction (tap vs hold to expand) → prototype (§7).
- The art-directed crop set per world and tier → `12-asset-guide.md`.
- Confirm COMPACT rail width (200 vs 220) and wordmark truncation rule (§7, `04`).
- Device-orientation permission UX for Hero light-lean on touch (§8, `03 §9.3`).

**Amendment protocol:** the tier model (§2.2), the frame-vs-input split (§1.3), the spacing/type/portrait token tables (§3), and the showcase pin/un-pin rule (§6) are responsive-constitution items — changes are proposed here, dated, and (where they alter a section's felt composition) co-agreed with that section's document and with `10-motion-language.md` for any motion retiering.

---

*North star for this file: not one layout that bends, but four compositions of one film — the stage, the compact stage, the column, and the reel — each blocked for its own frame, each keeping every beat and emotion of the whole. Mobile is a scene reshot for a tall aspect ratio, never a desktop crushed to fit; the dark is redistributed, never filled; and the person fills the frame at every size.*
