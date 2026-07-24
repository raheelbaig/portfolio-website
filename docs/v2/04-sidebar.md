# V2 — Sidebar Specification

> **Status:** Complete — the buildable specification for the persistent identity anchor.
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `03-hero.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> The sidebar is **not a navigation widget**. It is the Hero, continued — the still point made permanent. The Hero transforms into it as one reversible motion. Nothing teleports; nothing remounts; the identity *evolves*. This document is detailed enough to build without guessing.

---

## 0. Conventions & relationship to other documents

- Units, `svh`, dock progress `p`, timings/eases: identical to `03 §0` (glide `cubic-bezier(0.22,1,0.36,1)`; durations `instant`120 / `gesture`240 / `passage`480 / `cinematic`900).
- **`p`** is the same 0→1 dock progress defined in `03 §8` (completes over the first `24svh` of scroll). This document *extends* that keyframe table for the rail furniture (§2), and owns the sidebar's rest state, behaviour, and responsive forms.
- **Set/Crew split (load-bearing, see §8.1):** the sidebar's semantic structure — identity link, chapter nav, links — exists in the static DOM **from first paint**. The Crew only *choreographs* its appearance. With no JS, the sidebar is simply present in its rest state. This is why the sidebar can be "born from the Hero" without ever being inaccessible.

---

## 1. Purpose

### 1.1 Why it exists

The sidebar is the **permanent identity anchor**: the protagonist, having filled the opening frame, recedes into a constant presence the visitor travels *beside* for the rest of the film. It carries the identity (portrait chip + name), the chapters, the always-available quiet ask, and a whisper of where-you-are.

### 1.2 Emotional role

It is the felt reassurance that **someone is guiding this**. In a dark, cinematic scroll it would be easy to feel adrift; the rail is the steady hand at the edge of the frame — never speaking, always present. Its emotion is *company*, not *chrome*.

### 1.3 Why it stays visible

Because the brand's one idea is **"Raheel is the constant; the world composes around him."** A sidebar that appeared and disappeared would contradict the thesis. Keeping him at the frame's edge from the first scroll to the final footer is the thesis expressed as persistent UI: the world (content) moves; he does not.

**Reasoning.** Naming the sidebar an *anchor* rather than a *nav* reframes every later decision — its job is presence first, wayfinding second. That ordering is what keeps it quiet enough to never distract yet permanent enough to reassure.

---

## 2. Transformation — Hero → Sidebar

The Hero and the sidebar are **one object in two states.** `03 §8` owns the portrait/name/nav keyframes; this section restates the spine of it and adds the rail furniture, and defines precisely *what never changes*.

### 2.1 Two motions, sequenced

1. **The recede (the identity evolves)** — `p` 0→1 over the first `24svh`. The portrait travels centre→rail along an arc (x-leads-then-y), scaling 62svh→56px chip; the name cross-dissolves from Marquee to the Console wordmark; the hero dialogue (role/tagline/CTA/strip) dims-as-read then releases. *Continuous transform, never a swap.* (Canonical table: `03 §8.1`.)
2. **The furniture is revealed (the rail assembles)** — the elements that did **not** exist in the Hero (chapter nav, status, quiet CTA, links, progress spine) **appear by illumination** once the identity has settled, lowest priority, so they never compete with the recede.

### 2.2 Furniture reveal keyframes (extends `03 §8.1`)

| Element | Appears at `p` | Motion | Duration | Ease |
| --- | --- | --- | --- | --- |
| Rail surface (Slate) | 0.30 → 1.0 | edge hairline → full surface, opacity | scrubbed | none |
| Chapter nav | 0.80 → 1.0 (+tail) | fade in by light, stagger `~75ms` | `passage` | glide |
| Progress spine | 0.85 → 1.0 | the hairline draws (`scaleY 0→1`, origin top) | `cinematic` | glide |
| Status dot + label | ~1.0 (+120ms) | fade | `gesture` | glide |
| Quiet CTA | ~1.0 (+195ms) | fade | `gesture` | glide |
| Links (email/social) | ~1.0 (+270ms) | fade, stagger `~75ms` | `gesture` | glide |

**Reveal, not remount.** The furniture is present in the DOM from load (§8.1); "appears by illumination" means opacity/light only — it is not created on scroll. This distinction is what keeps the "nothing remounts" law true.

### 2.3 What never changes

Across the entire transformation and the rest of the film, these are invariant:

- **The person is present.** The portrait exists on screen at every scroll position from the Hero onward.
- **The light temperature.** The chip stays lit by the same warm key temperature it had in the Hero, only dimmer and smaller.
- **The identity's screen edge.** Once docked, the rail's left edge and the chip's position are fixed; the anchor does not drift.
- **Reversibility.** Scrolling up runs everything backward to the full Hero, exactly.

### 2.4 Timing summary

Recede: `24svh` of scroll, visual lerp ~0.1. Furniture: begins at `p 0.8`, completes ~450ms after `p=1` (the staggered tail). Total felt duration of "the Hero becoming the rail": ~one comfortable scroll gesture.

**Reasoning.** Sequencing recede-before-furniture (identity settles, *then* the rail dresses itself) is what makes the move read as a camera recede rather than a UI panel sliding in with its contents pre-loaded. Revealing furniture by light (not by mounting) honours both the "nothing remounts" law and the "appears by illumination" grammar from `02 §3`.

---

## 3. Layout

Desktop rail: fixed left, **width 240px** (`space-9`), full height, material **Slate** (`night-700`, solid — see §9 for why not blurred glass), hairline right edge lit toward the top. It sits **outside the 12-column content grid**; page content is offset right by the rail width (`02 §6.1`).

### 3.1 Anatomy (top → bottom)

```
┌────────────────┐  240px
│  ● Raheel      │  ← Identity: portrait chip (56px) + wordmark (Console)
│    Baig        │     (RB monogram substitutes when collapsed / mobile — §3.3)
│                │
│  ┌──────────┐  │
│  │ About    │  │  ← Chapter nav (Console), active lit in Sol
│ ▓│ Approach │  │     progress spine runs the rail's inner-left edge
│ ▓│ Work   ● │  │     (● = active chapter; ▓ = spine lit segment)
│  │ Services │  │
│  │ Contact  │  │
│  └──────────┘  │
│                │
│  ◦ Available   │  ← Status (dot + Console label) — copy-pending
│                │
│  Let's talk →  │  ← Quiet CTA (Console link, NOT Sol glass)
│                │
│  Email         │  ← Links: email + socials (Console / Ion micro-icons)
│  GH · LI · X   │
└────────────────┘
```

### 3.2 Element table

| Element | Voice / form | Colour | Notes |
| --- | --- | --- | --- |
| **Portrait chip** | 56×56 graded image, edge-feathered | warm chip glow | the constant presence; links to top (§5) |
| **Name (wordmark)** | Console 13–14, +6% tracking | `bone-70` | "Raheel Baig"; part of the top-link |
| **RB monogram** | compact serif/geometric mark | `bone-70` | compact-state identity (collapsed rail, mobile bar) — §3.3 |
| **Chapter nav** | Console 14, list | `bone-45` rest / `bone-100`+Sol active | §4 |
| **Progress spine** | 2px vertical rule | `night-500` track / `bone-70`→Sol lit | §6 |
| **Status** | 6px dot + Console-sm 13 | Ion or Sol dot / `bone-45` label | availability; **copy-pending, do not invent** |
| **Quiet CTA** | Console 14 + arrow, lit underline on hover | `bone-70` → `bone-100` | *not* a Sol primary — §3.4 |
| **Links** | Console-sm 13 or 16px Ion line-icons | `bone-45` → `bone-70` | email + socials; socials copy-pending |

### 3.3 The monogram's role

The **RB monogram** is the *compact-state identity* — used wherever the portrait-chip + full wordmark won't fit or shouldn't intrude: the mobile top bar, the collapsed tablet rail, and (optionally) the favicon/OG mark. On the full desktop rail the identity is chip + wordmark; the monogram is **not** shown there (it would duplicate). One mark, one job: identity where space is scarce.

### 3.4 Why the sidebar CTA is *quiet*

The rail carries a persistent "Let's talk" affordance, but as a **Console link with a lit underline — never a Sol-glass primary.** The brand law is *one Sol-lit primary action per viewport* (`01 §15`); each section owns that one (the Hero's ask, the Contact ask). A glowing rail CTA would create a second primary in every viewport and defeat the law. The quiet form keeps the ask always-available without ever competing.

### 3.5 Alignment, spacing, negative space

- **Alignment:** left-aligned throughout (Console reads as instrumentation from a left rail); inner padding `space-4` (24px) left/right.
- **Vertical rhythm:** identity → nav is `space-7` (a passage); nav items are `space-4` apart; nav → status → CTA → links each separated by `space-6` (a thought). The base cluster (status/CTA/links) gravity-sits toward the bottom.
- **Negative space:** the rail is mostly dark and mostly empty — the middle third between nav and base cluster is intentional quiet. A crowded rail reads as chrome; a sparse one reads as an anchor.

**Reasoning.** The top-to-bottom order is a hierarchy of permanence: *who* (identity), *where* (nav + progress), *state* (status), *action* (CTA), *reach* (links). Left-alignment and generous emptiness are what keep a permanent element from ever feeling busy.

---

## 4. Navigation

### 4.1 How & when it appears

The chapter list is **present in the DOM from load** (§8.1) and is **revealed by illumination** at `p 0.8→1.0` (§2.2) — after the identity settles. It never slides or mounts; it lights up.

### 4.2 Chapters

`About · Approach · Work · Services · Contact` — anchor links to the section ids. Console 14, left-aligned, `space-4` apart.

### 4.3 Active-section indication

- The **active chapter** is lit: label to `bone-100` with a small Sol tick to its left; `aria-current` set.
- **Passed chapters** dim to `bone-45`; **upcoming** chapters sit at `bone-45` too — only the present is lit. (The distinction of *direction* is carried by the progress spine, §6, not by the labels.)
- The active state updates from scroll position (an IntersectionObserver-class signal), eased — it **cross-fades** between chapters; it never snaps or flickers at boundaries.

### 4.4 Interaction

| Input | Behaviour |
| --- | --- |
| **Hover** | label lifts one step in light (`bone-45`→`bone-70`), in ~120ms / out ~240ms; no motion, no underline-slide. |
| **Focus** | lit ring + label brighten; identical to hover, never suppressed. |
| **Click** | smooth-scrolls to the section (native smooth or Crew-eased); updates the URL hash for deep-linking. |
| **Touch** | same as hover-brighten on press; ≥44px hit target (the row, not just the text). |
| **Keyboard** | Tab through in order; Enter/Space activates; visible focus; `aria-current` announced. |

**Reasoning.** Reveal-by-light and cross-faded active states keep the nav inside the one-light fiction — even wayfinding obeys "interaction is a change in light, not geometry" (`01 §15`). Only-the-present-is-lit prevents the rail from becoming a busy status board.

---

## 5. Portrait behaviour (in the sidebar)

The docked chip is the still point, kept small and quiet.

- **Size.** 56×56px, Distant register, square, edge-feathered — the same master image, graded (`01 §19`).
- **Lighting.** The Hero's warm key has *released* (dimmed to near-zero on the canvas); the chip carries a small **ambient chip glow** so it reads as lit, not flat. Same warm temperature, far lower intensity.
- **Idle.** Optionally a *barely*-perceptible light breath (opacity/scale ≤1%, period ~8s) so the anchor feels alive — but this is **off by default on a repaint budget** and always off on reduced motion / low tier (§9). Stillness is acceptable; busyness is not.
- **Hover.** The chip (and wordmark) form one link; on hover it lifts one step in light. It is a **"return to the top"** affordance (scrolls to the Hero).
- **Pointer.** No pointer-lean here — at 56px the effect is imperceptible and would only cost repaint. Lean belongs to the Hero's Monumental portrait only.
- **Scroll.** The chip is fixed in the rail; it does not parallax or move with scroll. It simply *is there*, always.
- **Reduced motion.** Static chip, static glow, no breath. Present, calm, unchanged.

**Brand reconciliation (see §11 decisions).** `01 §19` states the portrait "never appears in navigation." The docked chip is a **sanctioned exception**: it is the *identity anchor / constant presence* that the entire brand thesis requires, not a decorative corner logo. §19 is hereby narrowed to prohibit the face as a generic clickable brand-logo and its use in the footer/attendant/meta — the sidebar anchor is intended. On compact states, the **monogram** stands in for the chip, which further honours "the person is a presence, not a logo."

**Reasoning.** A 56px, quietly-lit, non-parallaxing chip is the maximum presence that stays an *anchor* rather than becoming *chrome*. Dropping pointer-lean and defaulting the breath off is a deliberate spend of the repaint budget on stillness — the rail's job is to be reliably there, not to perform.

---

## 6. Progress system

Two coordinated signals, both quiet:

1. **The active chapter** (§4.3) answers *which* part of the film you are in.
2. **The progress spine** answers *how far.* A 2px vertical rule on the rail's inner-left edge: a `night-500` track with a lit segment (`bone-70`, warming toward Sol as it nears the end) whose length/position maps to scroll progress through the whole film.

Rules that keep it from distracting:

- The spine is a **hairline**, never a chunky bar; the lit segment eases (visual lerp), never jitters with raw scroll.
- **No numbers, no percentages, no scrollbar mimicry.** Progress is felt, not read.
- The spine dims further while the visitor is actively reading (idle-scroll), brightening a touch during active scroll — it responds to *motion*, receding during *stillness*.

**Reasoning.** Splitting "where" (chapter) from "how far" (spine) lets each be minimal — neither has to do both jobs, so neither needs to shout. Tying the spine's brightness to scroll *activity* means it is present exactly when useful (moving) and invisible when not (reading), which is the whole art of a non-distracting progress cue.

---

## 7. Responsive behaviour

Re-block, never squeeze (`01 §22`). The anchor persists in spirit at every size; its *form* changes.

| Device | Form | Behaviour |
| --- | --- | --- |
| **Desktop (≥1280)** | Full 240px Slate rail | All elements (§3); the canonical experience. |
| **Laptop (1024–1280)** | Rail ~200–220px | Same structure; tighter padding; wordmark may truncate to first name + monogram. Content offset shrinks accordingly. |
| **Tablet (768–1024)** | **Collapsed icon-rail ~64px** | Portrait chip + nav as lit **ticks/dots** (labels hidden) + a subtle expand affordance; tapping/holding expands labels in an overlay Slate panel. Progress spine remains. Status/CTA/links move into the expanded panel. |
| **Mobile (<768)** | **Top bar 56px + summoned overlay** | Bar: **RB monogram** (left, → top) + a menu affordance (right) + a hairline **progress line beneath the bar** (horizontal, replacing the vertical spine). Nav + status + CTA + links live in a full-screen **Smoke-glass overlay** summoned by the menu, focus-trapped, Esc/tap-scrim to close. The portrait chip may appear small in the bar or in the overlay header. |

Mobile note: this matches `03 §9.2` (the Hero docks to a top-bar chip; nav is a summonable menu). The vertical rail is a desktop/laptop affordance; on touch the identity persists as the monogram bar and the nav becomes an intentional overlay, not a cramped rail.

**Reasoning.** A 240px vertical rail on a phone would eat the frame; forcing it there is the "squeeze" we forbid. The monogram-bar + overlay is a *composition for touch*, keeping the anchor (identity + progress) always visible while making the fuller nav a deliberate, focus-managed moment.

---

## 8. Accessibility

### 8.1 The Set/Crew principle (why the sidebar is always accessible)

The sidebar's **semantic DOM exists from first paint** as part of the static Set: the identity link, the `<nav>` with real anchor links, the status text, and the contact links. The Crew's dock/reveal choreography is a *visual enhancement over already-present, already-reachable structure.* Therefore:

- **No JS:** the sidebar renders in its rest (docked) state; fully usable.
- **Keyboard/SR at page top:** the nav links are reachable even before the visual rail has "assembled," because they were never absent — only visually managed.

This is the single most important accessibility decision in this document.

### 8.2 ARIA & landmarks

- The rail is a landmark region; the chapter list is a `<nav aria-label="Chapters">`.
- The active chapter link carries `aria-current="page"` (or `"true"`).
- The identity chip/wordmark is one link with an accessible name ("Raheel Baig — back to top"); the **portrait image is `aria-hidden` / `alt=""`** (described once in the Hero — `01 §21`).
- The progress spine is `aria-hidden` (decorative); progress is also conveyed by the visible active chapter (which is programmatically exposed).
- Mobile overlay: `role="dialog"`, `aria-modal="true"`, labelled; focus trapped while open; Esc closes and returns focus to the menu affordance.

### 8.3 Keyboard & focus

- Logical tab order: identity link → chapter links → status (if interactive) → quiet CTA → links.
- Visible lit focus on all interactive elements; never suppressed.
- Skip-to-content link (from the Hero) lets keyboard users bypass the rail.
- No focus traps except the intentional, escapable mobile overlay.

### 8.4 Reduced motion

The rail **appears without animation** — present in rest state (the furniture reveal and the dock become instant/cross-fade state, per `03 §10.4`). No spine draw, no chip breath, no active-state easing beyond an optional `instant` cross-fade.

### 8.5 SEO

- Real internal anchor links in a `<nav>` aid crawl and give the page a clear section map.
- The identity wordmark links home; no text is baked into images; the monogram, if an image, has an accessible name.

**Reasoning.** Grounding the sidebar in the Set (DOM-from-load) is what lets a heavily-choreographed element remain flawless for keyboard, screen-reader, and no-JS visitors — the exact "excellence in the invisible places" the brand claims (`01 §24.7`).

---

## 9. Performance

### 9.1 Material choice for the rail

The rail uses **Slate (solid `night-700`), not Smoke (backdrop-blur).** A full-height blurred glass surface is a large, persistent GPU cost (continuous backdrop filtering of everything scrolling behind it). A solid rail is free to composite and still reads as a lit surface via its top-lit edge. Blur is reserved for small elements (a CTA, the mobile overlay).

### 9.2 Animation budget

- The dock (transform + opacity) and furniture reveal (opacity) are compositor-only; they run once per direction and are scrubbed to scroll.
- Once docked, the rail is **static** — no per-frame work except the progress spine.
- The optional chip breath is off by default (§5).

### 9.3 Repaint & GPU budget

- **Progress spine updates via `transform: scaleY()` (or translate), never `height`/`top`** — avoids layout and keeps it on the compositor. Driven off the shared scroll service at rAF cadence, not a raw scroll listener.
- Active-chapter changes are class/opacity toggles (cheap), debounced to intersection changes, not fired every scroll frame.
- No blur on the persistent rail (§9.1); DPR and Crew frame budget per `01 §13` / `03 §11`.
- The mobile overlay's Smoke blur exists only while open (transient), so its cost is bounded.

**Reasoning.** A *permanent* element must be nearly free to render, because its cost is paid on every frame of the entire session. Choosing Slate over Smoke and driving the spine by transform are the two decisions that keep an always-on sidebar off the frame budget.

---

## 10. The Sidebar as a Cinematic Sequence

*From the first scroll to the final footer.*

You make the first scroll, and the man in the frame does not leave — he *withdraws.* His portrait and his monumental name glide toward the left edge and shrink, the serif softening into a small precise mark, until he is a quiet lit presence in a slim dark rail that gathers itself around him. He is still lit by the same warm light, only smaller now, only quieter. Beneath him, by illumination rather than motion, a short list of chapters resolves out of the dark — About, Approach, Work, Services, Contact — and a hairline of light draws itself down the rail's inner edge. The opening shot has become the frame's steady companion.

From here, you never travel alone. As you descend into his voice, the word *About* lights warm and a small amber tick appears beside it; the hairline spine has filled a little. You read; the spine dims, respecting your stillness. You move again and it brightens, filling further as *Approach* takes the light and *About* falls back to a whisper. He is there the whole time at the edge of your eye — not narrating, not nagging, just present, the way a good director stands quietly at the side of the set.

When the film spends its one moment of wonder and delivers you into the work, the rail holds steady while the frame erupts; *Work* lights and stays lit through all three worlds, the spine creeping toward warm as you near the end. If you ever want to leave — to write to him — the quiet *Let's talk* waits at the base of the rail, never glowing, never demanding, always there. And should you want to begin again, his face at the top is a door back to the first frame.

You pass through what he could build for you, and the small round intelligence that offers help, and at last the room returns — darker, warmer, familiar. The rail is still there, still him, as it has been the whole way down. And when the film settles into its final credits, the anchor holds to the last pixel: the constant, at the edge of the frame, exactly where he has been since the moment you first decided to move.

The world moved. He did not. That was the whole idea.

---

## 11. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- The sidebar is the *identity anchor*, born from the Hero as one reversible transform; furniture **revealed by light**, never remounted. *(§2)*
- Rail = **Slate (solid), not blurred glass**, for the repaint budget. *(§9.1)*
- Quiet Console CTA, **not** a Sol primary, to preserve one-primary-per-viewport. *(§3.4)*
- Progress = active chapter (which) + eased hairline spine (how far), activity-responsive. *(§6)*
- **Semantic DOM present from first paint** (Set); Crew only choreographs. *(§8.1)*
- Responsive: 240px rail → ~200px → 64px icon-rail → mobile monogram-bar + overlay. *(§7)*

**Brand amendment (dated 2026-07-24) — `01 §19`:** the docked identity chip is a **sanctioned exception** to "the portrait never appears in navigation." Rationale: the constant presence is the core thesis; the chip is an anchor, not a decorative logo. §19 is narrowed to prohibit the face as a generic corner brand-logo and its use in footer/attendant/meta. The **monogram** substitutes in compact states. *This amends a brand-level rule and is logged per `01`'s amendment protocol.*

**Cross-doc reconciliation — `03 §3.5 / §8`:** those tables define the dock endpoint as a 56px **photo** chip. This document keeps the photo chip on the *expanded* rail and introduces the **monogram** for compact/mobile states. No conflict on desktop; on mobile the endpoint is the monogram bar (`03 §9.2` already implies this). If a future decision prefers a *photo→monogram cross-fade* even on desktop, that is a change to both docs, proposed here first.

**Open (resolve before build):**
- Status content and whether it is live/dynamic (availability) — **copy-pending; do not invent** (§3.2).
- Final social platforms/handles and the monogram artwork → `12-asset-guide.md`.
- Exact laptop rail width (200 vs 220px) and whether the wordmark truncates to first-name + monogram (§7).
- Tablet expand affordance interaction (tap vs hover-hold) → prototype and decide (§7).
- Whether the optional chip breath ships on by default after a real repaint-budget measurement (§5, §9).

**Amendment protocol:** changes to the transformation (§2), the anchor's permanence/edge (§2.3), or the §19 exception above are anchor-level amendments — proposed here, dated, and (where they touch the dock) co-agreed with `03-hero.md`.

---

*North star for this file: the Hero, continued. A permanent, quiet presence at the frame's edge — the person who does not move while the world composes around him — carrying identity, chapters, a whisper of progress, and an always-open door, from the first scroll to the last pixel of the credits. Company, not chrome.*
