# V2 — Hero Specification

> **Status:** Complete — the buildable specification for Section 01, the Hero ("The Still Point").
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This document is detailed enough to build the Hero without guessing. Where a value is a design token, it is named as one (`night-800`, `space-6`, `glide`, etc.) and defined in `01`. Numeric values below are the design intent; if a token already carries the value, the token wins. **Motion authority:** where a timing/easing value here differs from `10-motion-language.md`, **`10` wins** (`10 §0`).

---

## 0. Conventions used in this document

- **`svh`** = small-viewport-height unit (stable against mobile URL-bar changes). All vertical anchors use `svh`.
- **Vertical anchor** = distance of an element's reference line from the top of the frame, as a % of `svh`.
- **Dock progress `p`** = the scroll-driven 0→1 value that runs the hero→sidebar transformation (§8).
- **Timings** are in ms; **eases** reference the single `glide` curve `cubic-bezier(0.22, 1, 0.36, 1)` and the four durations: `instant` 120, `gesture` 240, `passage` 480, `cinematic` 900 (`01 §13`).
- **Reduced motion** overrides are collected in §10 but noted inline where load-bearing.

---

## 1. Purpose

### 1.1 Why the Hero exists

The Hero is the opening shot of the film. It has one job: **produce arrest and answer *who / what / how it will feel* in a single composed frame**, before the visitor has decided whether to stay. It is not a banner; it is a character study's first frame.

**Reasoning.** Every audience decides in seconds whether a film has authority. A senior engineer's portfolio is judged the same way. The Hero converts "another dev site" into "sit up" — and it front-loads the two facts a skimming hiring lead needs (name, role) so no patience is spent before value is delivered.

### 1.2 What the visitor should feel, over time

| By | Feeling | What has landed |
| --- | --- | --- |
| **3s** | *Arrest.* Unexpected eye contact with someone composed. | A real person, lit like a film still, name in monumental serif. |
| **5s** | *Recognition of quality.* "This is unusually crafted." | Role read; the restraint and precision register as intentional. |
| **10s** | *Orientation.* "There's a story here and it's guided." | Tagline understood; the scroll cue invites; the frame feels alive (idle light). |
| **20s** | *Trust in the journey.* "I want to see where this goes." | The visitor has felt the living light, understood the invitation, and is ready to make the first, weighted scroll. |

**Reasoning.** Naming the per-interval target turns composition into a testable question (`01 §3`). The curve is intentionally front-loaded — arrest first, information immediately after — because the Hero must reward a 3-second visit and a 20-second one equally.

---

## 2. Composition

### 2.1 The frame

- Full viewport: `100svh × 100vw`.
- Horizontal safe margin: `clamp(24px, 5vw, 112px)`, symmetric (`01 §6.1`). Columns 1 and 12 stay empty — the letterbox.
- **No sidebar yet.** The Hero owns the full frame; the sidebar is *born* from it on scroll (§8). The composition is therefore **centred and symmetric**.
- 60%+ of the frame is `night` dark (`01 §4.6`).

**Reasoning for symmetry.** A centred, symmetric portrait under a single key light *is* the classic character-study opening — symmetry reads as composure, which is the target emotion. Asymmetry is introduced later (About); the Hero earns the right to be still and centred.

### 2.2 Vertical composition (desktop, ≥1024px)

```
 0 svh ┌───────────────────────────────────────────────┐  ← top safe (space-7)
       │                                               │
       │                    ( head )                   │  portrait head ~17–33 svh
       │                 ╭───────────╮                 │
 8 svh │                 │           │                 │  portrait box: 62svh sq, centred
       │                 │  PORTRAIT │                 │  (spans 8 → 70 svh)
       │                 │  (chest)  │                 │
46 svh │            R A H E E L   B A I G              │  Name (Marquee-xl), baseline ~62svh
       │                 ╰───────────╯                 │  head reads ABOVE the name
70 svh │             FRONTEND ENGINEER                 │  Role (Console 15) ~71svh
       │        Building modern web experiences        │  Tagline (Plate lead 21) ~77svh
       │                                               │
       │            [ Let's talk ]   See the work      │  CTA row ~85svh
       │  ─────────────────────────────────────────    │  hairline strip top ~89svh
93 svh │  EST. 2021 · REMOTE            SCROLL  │       │  metadata (L) / scroll cue (R)
100svh └───────────────────────────────────────────────┘
```

### 2.3 Element specification

| Element | Horizontal | Vertical anchor | Voice / size | Max width |
| --- | --- | --- | --- | --- |
| Portrait box | centred | top edge `8svh`, `height = width = min(62svh, 100vw − 2×margin)` | graded image | — |
| **Name (h1)** | centred | baseline `~62svh` (block spans ~46–62svh) | Marquee-xl `clamp(72px, 13vw, 220px)` | `measure-frame` |
| Role | centred | `~71svh` | Console 15, uppercase, +6% tracking, `bone-45` | — |
| Tagline | centred | `~77svh` | Plate lead 21, `bone-70` | `measure-read` (680px) |
| CTA row | centred | `~85svh` | — | auto |
| Control strip (hairline) | full content width | top `~89svh` | 1px `night-500`, top-lit | grid 2–11 |
| Metadata | left (grid col 2) | `~93svh` | Console-sm 13, `bone-45` | — |
| Scroll cue | right (grid col ~11) | line `~90→96svh` + label | 1px line + Console-sm | — |

### 2.4 Spacing & negative space

- Between name and role: `space-4` (24px) — tight, they are one identity cluster.
- Between role and tagline: `space-3` (16px).
- Between tagline and CTA: `space-6` (64px) — a *thought* gap; the ask is a new idea.
- Between CTA and control strip: `space-5`–`space-6`.
- The upper ~8svh and the empty side columns are **intentional tension**, never filled (`01 §2.2`). If the frame feels empty, the portrait or name failed to earn the dark — fix upward.

### 2.5 Camera framing

The implied camera is a **locked medium shot on a slow push-in** — a tripod, not handheld. The figure sits on the vertical centre line (portrait convention), face in the upper third (rule-of-thirds headroom), name crossing the chest so *man and name occupy one space*. The name renders in front of the torso; the head reads above the name's cap height.

> **Optional enhancement (not required for v1 build):** a masked duplicate of the head-and-shoulders layered *in front* of the name produces a true "partly behind, partly ahead" interlock. Default is name-in-front-of-torso, head-above — simpler, and reads identically at a glance.

**Reasoning.** The centred stack is disciplined, not generic, *because* the spacing steps (tight identity cluster → thought-gap → ask) encode hierarchy the eye feels without reading. The name-crosses-chest overlap is the brand thesis rendered literally in one frame.

---

## 3. Portrait

The lead actor. One master image, directed (`01 §19`).

### 3.1 Lighting (how it is graded)

- **Blacks lifted** to `night` (never crushed below the room's floor); **skin warmed** a few hundred K toward the Sol key; **edges dissolved** into the dark with a soft radial mask so the figure inhabits the room, not sits on it.
- **Key** (fictional, matched to the photo): high, slightly camera-left. **Rim:** a thin cool Ion separation on the opposite (camera-right) shoulder, applied as a light-following glow, static.
- No hard alpha edge, no drop shadow, no outline glow (`01 §19`).
- Implementation: an edge-feather mask (radial, centred high) + two static filters — a warm key `drop-shadow` (upper-left, low-opacity Sol) and a cool rim `drop-shadow` (lower-right, low-opacity Ion). The behind-figure void is `night-900` so the dissolve has somewhere to go.

### 3.2 Entrance — "found by light"

The portrait is *discovered*, not faded in.

| Property | From | To | Duration | Ease | Start |
| --- | --- | --- | --- | --- | --- |
| opacity | 0 | 1 | `cinematic × 1.7` (~1530) | glide | as aperture opens (~1.05s) |
| scale | 0.985 | 1 | same | glide | same |
| translateY | +10px | 0 | same | glide | same |
| key-light intensity | 0 | 1 | ~2000 | ease-out cubic | same |

The light swells *with* the fade so the figure appears to be revealed by the key coming up, not by an opacity ramp. (Reduced motion: present at rest, no swell — §10.)

### 3.3 Idle — the living portrait

Three subtle, simultaneous behaviours, all sub-perceptual:

1. **Push-in:** portrait `scale 1.00 → 1.02` over ~10s (ease-out), then holds. The classic opening dolly — felt, never seen.
2. **Light breath:** key-light intensity oscillates ±~4% on a sine, period ~6s. The still that hasn't quite frozen.
3. **Pointer lean:** the key-light *position* leans a few degrees toward the cursor (desktop) or device tilt (mobile), lerped (smoothing ~0.06). **Only the light moves — the portrait never tilts or parallax-shifts.**

**Reasoning.** Moving the *light* rather than the *figure* keeps the interaction inside the one-light fiction and avoids the hover-tilt gimmick we ban (`01 §23.8`). The three behaviours together make the frame alive without a single element ever looking "animated."

### 3.4 Scroll reaction & sidebar transform

Covered in full in §8. In brief: on the first scroll the portrait travels along an arc from centre-Monumental to the top of the left rail at Distant-chip scale, as one continuous transform, staying lit throughout. Nothing swaps; nothing teleports.

### 3.5 Exact scale at every stage

| Stage | State | Portrait size | Notes |
| --- | --- | --- | --- |
| A | Hero rest (Monumental) | `min(62svh, 100vw − 2×margin)`, square | face upper third |
| B | Docking (scrubbed, `p` 0→1) | interpolates A→C along an arc | scale + position eased separately |
| C | Docked chip (Distant) | `56px × 56px` | top of sidebar rail |
| — | About appearance | Conversational `46svh` (separate instance, `05`) | not part of this transform |

**Reasoning.** Defining the two endpoints (62svh → 56px) and the arc precisely is what lets the transform be built as one interpolation rather than guessed. The chip is 56px so it sits comfortably inside the ~240px rail with padding.

---

## 4. Typography

### 4.1 The name

- **Semantic:** the single `<h1>`, text = **"Raheel Baig"** (full name, for SEO and screen readers).
- **Voice:** Marquee (contrast serif), `clamp(72px, 13vw, 220px)`, weight Regular–Medium, tracking −1.5%, `bone-100`.
- **Treatment:** may set "Raheel" as the dominant word with "Baig" one step smaller on the same line or a second line — both visible; no `sr-only` hack. Sentence/title case, not all-caps, so the serif keeps its warmth (all-caps display serif reads cold).
- **Line length:** 1 line desktop; may wrap to 2 lines ≤ tablet; the composition tolerates both (name block is bottom-baseline-anchored).

### 4.2 Role

- **Semantic:** `<p>` (not a heading).
- **Voice:** Console 15, uppercase, +6% tracking, `bone-45`.
- **Content:** "Frontend Engineer." A recorded fact, not a headline — hence the machine voice.

### 4.3 Tagline

- **Semantic:** `<p>`.
- **Voice:** Plate lead 21, `bone-70`, sentence case with a period.
- **Content:** one sentence of intent (the second line of dialogue). ≤ ~9 words; wraps at most to 2 lines within `measure-read`.

### 4.4 Supporting information (control strip)

- **Metadata:** Console-sm 13, `bone-45`, left of the strip. Exact fields TBD in copy pass (e.g. availability / base / since); render as a `<dl>` or interpunct-separated Console line. **No invented values** — reserve the slot (`01 §16`).
- **Scroll cue:** a 1px vertical line (drawn on entrance, §5) + Console-sm label "SCROLL", right of the strip.

### 4.5 Hierarchy, alignment, reading order

- **Visual hierarchy (brightness × size):** Name (Marquee, `bone-100`) → Tagline (Plate, `bone-70`) → CTA (Sol glow) → Role (Console, `bone-45`) → metadata/scroll cue (`bone-45`, smallest). The primary CTA is deliberately the *second-brightest* thing after the name.
- **Alignment:** everything centred except the control strip contents (metadata left / scroll cue right — a cockpit strip).
- **Reading order (DOM & visual agree):** name → role → tagline → primary CTA → secondary CTA → metadata → scroll cue.

**Reasoning.** The three voices are cast to meaning (`01 §5.1`): the serif *is* the person, the mono *records* the facts, the grotesk *speaks* the intent. Making the CTA the second-brightest object routes the eye name → ask, which is the exact path a hiring lead should take.

---

## 5. Motion

All motion obeys the glide + four durations (`01 §13`); scrubbed motion uses `ease: none` with visual-layer lerp (`01 §14`).

### 5.1 Loader → Hero transition

The loader (`02 §00`) is an overlay *above an already-painted hero*. Its aperture panels part (`scaleY 1→0` from top and bottom edges, `cinematic`, glide, starting ~1.0s), revealing the hero mid-entrance. **No cut.** The hero's own entrance is timed to begin as the aperture opens, so the film is "already in progress." (Reduced motion: no loader — §10.)

### 5.2 Entrance choreography (master timeline)

Times are relative to aperture-open (t=0 ≈ 1.05s after page load). If the Crew arrives late (>~1.8s), the entrance is skipped and content is simply present (never yank content a visitor is reading).

| t (s) | Element | Motion | Duration | Ease |
| --- | --- | --- | --- | --- |
| 0.00 | Portrait | found-by-light (opacity+scale+y) + key swell | ~1530 / 2000 | glide / ease-out |
| 0.35 | Name | settle under gravity (y +16→0, fade) | `cinematic` | glide |
| 0.90 | Role, Tagline | fade + y +8→0, stagger ~225 | `passage` | glide |
| 1.20 | CTA row | fade + y +8→0 | `passage` | glide |
| 1.35 | Metadata, Scroll label | fade, stagger `space` (~75) | `gesture` | glide |
| 1.45 | Scroll-cue line | draw (`scaleY 0→1`, origin top) | `cinematic` | glide |
| 2.20 | Portrait | begin idle push-in | 10000 | ease-out |

**Reasoning.** Reveal *order* is the storyboard: the person is found first, then named, then speaks, then asks, then the instruments (metadata) whisper in. Nothing "pops"; every element is found by light or settles by gravity.

### 5.3 Idle movement

Push-in + light breath + pointer lean (§3.3). All three pause when the Hero is scrolled out of view and on reduced motion.

### 5.4 Scroll choreography → §8.

### 5.5 Motion philosophy (Hero-local)

The Hero contains **no impressive motion** — its power is stillness that is *barely* alive. The only "big" move is the dock, and even that is a camera recede, not a flourish. If any Hero motion draws attention to itself, it is wrong (`01 §13`).

---

## 6. Lighting

One key-light rig (`01 §11`), realised as a full-screen fragment shader on the persistent canvas behind the DOM (with a CSS-gradient fallback — §11).

- **Key light.** Warm (Sol temperature), positioned upper-left (~35% x, ~28% y). A *beam*, not a bulb: the falloff space is rotated ~12° and elongated vertically, composited as a focused **core** (`exp(−d²·7.5)`) plus a broad **halo** (`exp(−d²·2.1)`). Intensity: swells 0→1 on entrance, breathes ±4%, leans to pointer, releases to 0 as `p→1`. *This is the one strong glow of the viewport.*
- **Fill light.** None. The room is dark by design; a fill would flatten the drama. Legibility is solved by the key or by removing content (`01 §11`).
- **Ambient.** A 2–4% `bone` vertical lift keeps pure dark from swallowing the figure's edges. Never raised "to see better."
- **Glow.** Only the key (strong) and the primary CTA's small practical light (weak, located on the CTA). The CTA glow must never rival the key.
- **Depth.** Layers, not shadows (`01 §12`): `night-900` void behind the figure → figure on the subject plane (full light) → name on a plane just ahead → grain over all. No cast shadows anywhere.
- **Background atmosphere.** `night-800` base with the key-light falloff; a corner vignette (one step toward `night-900`); optional, very subtle two-layer depth drift on the canvas (disabled on low tier). The universal film grain overlays everything at 2–3% (`01 §16`).

**Reasoning.** Codifying the Hero as one physical rig is what makes it read as a *shot* rather than a styled section, and lets the same rig drive both the canvas and any CSS light so they can never disagree.

---

## 7. CTA

One primary, one secondary (`01 §15`: one primary action per view).

### 7.1 Primary CTA

- **Label / action:** "Let's talk" → `mailto:` (Contact's ask is echoed here as the warm option).
- **Material:** Signal Glass (Smoke + 4–6% Sol tint + inner Sol bloom), `radius-precise` (3px), min-height 44px, padding `space-3`/`space-4`, `bone-100` label in Plate. Carries the small practical Sol light.
- **Interaction:** hover/focus → brighten + edge-catch + bloom lift, **in ~120ms, out ~240ms**; **no scale, no shadow**. Active → dim ~10%. Touch → identical; ≥44px target.
- **Focus:** warm ring + lit edge (never the browser default, never suppressed).

### 7.2 Secondary CTA

- **Label / action:** "See the work" → `#work` anchor (smooth-scrolls to Selected Work).
- **Material:** no container — `bone-70` Plate label with a 1px Sol-600 underline of light. Hover/focus → label to `bone-100`, underline brightens to Sol. Same 120/240 asymmetry.

### 7.3 Placement & relationship

Centred row beneath the tagline; primary then secondary, gap `space-4`. The primary is visually dominant (glass + glow); the secondary is a quiet alternative. **Never two glowing actions.**

**Reasoning.** A single Sol-lit primary keeps the eye's terminus unambiguous. Interaction as light (not geometry) keeps hover inside the cinema; the fast-in/slow-out asymmetry is the "alive" signature (`01 §15`).

---

## 8. Sidebar Transition — every frame

The Hero becomes the sidebar as **one reversible, scrubbed transform** driven by native scroll. Nothing teleports; every element evolves. `p` = `clamp(scrollY / (0.24 × svh), 0, 1)` — the dock completes over the first **24svh** of scroll; a visual lerp (~0.1) smooths it.

### 8.1 Keyframe table (by dock progress `p`)

| Element | `p=0` | `p=0.3` | `p=0.6` | `p=1.0` | Curve |
| --- | --- | --- | --- | --- | --- |
| **Portrait — scale** | 62svh | ~40% of path | ~78% of path | 56px chip | ease-out along path |
| **Portrait — position** | centre | arcing up-left | near rail | rail top-left | arc (x leads, then y), not straight diagonal |
| **Portrait — light** | full key | full | dimming | ambient chip glow | key releases as figure docks |
| **Name (Marquee)** | full | fading, −6% scale | ~gone | 0 | fade out `p` 0→0.5 |
| **Wordmark (Console)** | 0 | 0 | fading in at rail | full | fade in `p` 0.4→0.85 (cross-dissolve overlap) |
| **Role + Tagline** | full | dim to `bone-45` | releasing up (y −20) | 0 | dim `p` 0→0.3, release+fade 0.3→0.5 |
| **CTA row** | full | fading | 0 | 0 | fade+rise `p` 0→0.35 |
| **Control strip** | full | 0 | 0 | 0 | fade `p` 0→0.25 |
| **Key-light (canvas)** | 1 | 0.6 | 0.2 | 0 (chip only) | release with figure |
| **Sidebar rail surface** | 0 | hairline appears | filling | full Smoke rail | `p` 0.3→1 |
| **Chapter nav** | 0 | 0 | 0 | fading in by light | appears `p` 0.75→1 (after settle) |
| **About content** | below fold | edging in | composing | reading position | rises with continued scroll |

### 8.2 The path detail

The portrait's position uses **two sub-curves**: x reaches the rail earlier than y (the figure drifts left, *then* rises to the rail top), tracing a gentle arc rather than a mechanical diagonal. Scale eases out (fast shrink early, gentle settle late) so it never looks like a linear zoom.

### 8.3 What stays, what leaves

- **Stays (evolves):** the portrait (→ chip) and the name (→ wordmark). *The protagonist never leaves the frame.*
- **Leaves (releases):** role, tagline, CTAs, control strip — passed dialogue; they dim first (become "read"), then release upward and unmount.
- **Arrives (by illumination):** the chapter navigation, *after* the portrait and wordmark have settled, so nav never competes with the dock.

### 8.4 Reversibility

Scrolling up runs `p` backward exactly: the sidebar un-docks, the portrait grows back to centre, the name re-blooms, the CTAs return. The Hero and the sidebar are the same object in two states, never two components.

**Reasoning.** One continuous transform (not unmount/mount) is the entire reason the move feels expensive and the "still point" thesis holds — he is literally always on screen. Splitting position into x-leads-then-y is the small craft that separates a camera recede from a CSS translate.

---

## 9. Mobile Hero (<768px) — redesigned, not compressed

A phone is a **portrait frame**, so the Hero is re-blocked as a vertical portrait film, not a shrunk desktop.

### 9.1 Composition

```
 0 ┌───────────────┐  top safe (space-5)
   │   ( head )    │  portrait fills width: box = 100vw − 2×margin (square)
   │  ╭─────────╮  │  spans ~8 → 62svh
   │  │PORTRAIT │  │
   │  ╰─────────╯  │
   │ RAHEEL BAIG   │  Name Marquee, clamp(48px→ ~13vw), crossing ~56svh
   │FRONTEND ENG.  │  Role Console ~70svh
   │ Building …    │  Tagline Plate ~76svh
   │ ┌───────────┐ │
   │ │ Let's talk│ │  Primary CTA — full comfortable width, ~84svh
   │ └───────────┘ │
   │  See the work │  Secondary CTA beneath, ~90svh
   │      SCROLL   │  scroll cue centred, bottom
100└───────────────┘
```

- Portrait re-scaled to fill width (square, `100vw − 2×margin`), spanning ~8–62svh.
- Name centred, crossing the figure's lower edge; may wrap to two lines.
- Role + tagline centred beneath.
- **CTAs stack vertically**, primary above secondary, comfortable width (not edge-to-edge), ≥44px.
- Metadata may drop to a single Console line or be omitted on the smallest frames (the scroll cue stays).

### 9.2 Mobile dock

No persistent rail (no room). On first scroll:

- The portrait docks to a **small chip in a slim top bar** (top-left), name → Console wordmark beside it.
- Navigation becomes a **summonable menu** (a single affordance in the top bar → a full Smoke-glass overlay), *not* a persistent list. Defined in `04-sidebar.md`.
- The transform is the same reversible scrub, simplified (shorter arc, top-bar destination).

### 9.3 Mobile motion & light

- Pointer-lean is driven by **device orientation** (if permitted) at reduced amplitude, else disabled.
- Push-in reduced to ~1%. Canvas key-light may drop to the CSS-gradient fallback on low tiers (§11).

**Reasoning.** The largest share of real visitors are on phones; the mobile cut is where craft is proven, not conceded. Full-width portrait + stacked CTAs is a *composition for the frame*, not a squeezed desktop.

---

## 10. Accessibility, SEO, Reduced Motion

### 10.1 Semantics & screen readers

- `<section aria-labelledby>` → the `<h1>` "Raheel Baig".
- Role and tagline are `<p>`. CTAs are real `<a>`. Metadata is a `<dl>` or list.
- Portrait `<img>` carries a **descriptive alt** here (its one introduction); every later portrait instance is `aria-hidden`/`alt=""` (`01 §21`).
- Decorative layers — key-light canvas, scroll-cue line, glow, grain, aperture — are `aria-hidden`.
- DOM order equals reading order (§4.5); the visual is meaningful with all motion and imagery removed.

### 10.2 SEO

- One `<h1>` with the full name; role and tagline present as real text (server-rendered).
- `<title>`: "RAHEEL BAIG — FRONTEND ENGINEER". Meta description = the tagline.
- The portrait has meaningful alt; no text baked into images.

### 10.3 Keyboard

- A skip-to-content link precedes the Hero.
- Focus order: skip link → primary CTA → secondary CTA → (post-dock) chapter nav.
- Visible lit focus on every interactive element; no traps; native scroll keys behave (`01 §14`).

### 10.4 Reduced motion (the designed cut)

`prefers-reduced-motion: reduce` →

- **No loader overlay** (never rendered).
- **No entrance** — the Hero's held frame is simply present (an optional ≤`instant` opacity fade is permitted, nothing positional).
- **No idle** — no push-in, breath, or lean; the key light is static at full.
- **No scrubbed dock** — on scroll, the sidebar **cross-fades into its docked state** (portrait chip + wordmark + nav appear; hero dialogue cross-fades out); no arc, no scale animation. Still reversible, but as a state swap, not a transform.
- Reaching this state must feel like a deliberate edit, not a downgrade (`01 §21`).

**Reasoning.** Treating reduced motion as a *cut* (not a disabled build) is both the ethical requirement and the flex — the still version is composed, not broken.

---

## 11. Performance

### 11.1 LCP

- **The LCP element is the hero portrait.** It is `priority`, preloaded (`<link rel=preload as=image>`), and painted *underneath* the loader from the first frame — the aperture never gates it (`01 §21`, `02 §00`).
- Target: LCP ≤ 1.8s on mid-tier mobile. The exact aspect box is reserved (§2.3) so CLS ≈ 0.

### 11.2 Portrait loading

- Served as **graded AVIF with WebP fallback**, pre-graded and edge-feathered at build (never runtime-filtered for the base image; runtime filters are only the light `drop-shadow`s).
- Responsive size set for the Monumental slot: ~700px @1x / ~1400px @2x; `sizes="(min-width:768px) 700px, 92vw"`.
- **Asset gap:** the current master `hero.png` is 500×500 — insufficient for Monumental at 2x. Re-export ≥ **1400×1400** graded master is required for full fidelity (owned by `12-asset-guide.md`). Until then it upscales slightly; not blocking, but the top visible-quality ceiling.

### 11.3 Video policy

- **No video in the Hero.** No background video, ever (`01 §17`). The living quality comes from light, not footage.

### 11.4 Three.js / GPU budget

- The Hero's key light is **one full-screen shader quad** on the single persistent canvas — one draw call, no geometry, no textures. Cheap.
- The portrait and all type remain **DOM** (never in WebGL) — real, selectable, crawlable.
- **Floors:** (1) full canvas shader; (2) no-WebGL / low tier → CSS radial-gradient key light (visually close, static-breath via CSS if allowed); (3) no JS → the composed CSS held frame. Each is a designed state.
- DPR capped at 1.5 (1 on low tier). Backdrop blur only on the primary CTA glass (small area). Grain is one static overlay. The canvas freezes (`frameloop: never`) once the Hero is docked out of view.
- Crew frame budget ≤ 8ms (`01 §13`); the Hero is comfortably under it (one shader pass + transform/opacity tweens).

**Reasoning.** Stating the budgets at the spec level means a proposed Hero effect is judged against LCP and the 8ms frame in *design review*, not discovered later. Keeping the portrait in the DOM protects SEO, a11y, and selectability while still allowing cinematic light.

---

## 12. Cinematic Storyboard — the opening, second by second

*Direct it like this.*

**0.0s —** Black. Not empty-black; velvet-black, a theatre with the doors shut. Dead centre, a single warm thread of light draws itself horizontally and breathes — up, down, up. Beneath it, almost too faint to read, a name spreads its letters apart like a slow inhale. Hold. Two seconds is all it asks.

**1.0s —** The thread of light does not fade. It *opens* — parting vertically, top and bottom edges sliding apart like an aperture, or like elevator doors made of pure light. And behind it, the film is already running.

**1.3s —** A figure. Found by a warm key from the upper left, his edges dissolving into the dark so he stands *in* the room, not on it. He arrives as the light swells to meet him — you can't tell if he faded in or the lamp came up; it is the same motion. His face is in the upper third, lit; his shoulders fall away into shadow, a thin cool rim separating the far one from the black.

**1.6s —** His name settles beneath — no, *across* him, a serif built like a movie title, so large it crosses his chest. It doesn't fly in letter by letter; it rises a few pixels and sets, as if under its own weight. Man and name, one object, occupying one space.

**2.0s —** A beat. Then, lower and quieter, in a precise monospace: **FRONTEND ENGINEER.** A recorded fact, not a boast.

**2.4s —** Another beat, like a second line of dialogue, warmer: one sentence of what he builds and why. It brightens into place and holds.

**3.0s —** Now the ask — a single warm field, glowing just enough to be the second-brightest thing in the frame after his name: *Let's talk.* Beside it, quieter, underlined in a thread of light: *See the work.* You know exactly where to look and exactly what you could do.

**3.5s —** At the bottom edge, a hairline strip draws itself — a cockpit line — and along it, small cool facts, and a single vertical line slowly drawn downward beside the word *SCROLL.* An invitation to move.

**5–10s —** Nothing "happens," and yet the frame is alive. The light leans a few degrees toward your cursor, as if your attention were itself a source. The whole shot pushes in, so slowly you'd swear it was still — two percent over ten seconds, the classic opening dolly of a character study. He breathes in light. You settle.

**~12s —** You move. And the film answers — not by scrolling away, but by *receding.* His portrait and his name shrink and glide to the left edge of the frame, the serif becoming a small precise mark, the figure becoming a quiet lit presence in a slim rail that assembles around him. He didn't leave. He became the constant you'll travel beside. The dialogue — role, line, the ask — dims as if read, then lifts away. The room opens to your right.

**~14s —** By illumination, not motion, a short list of chapters appears beneath him in the rail. The opening shot is over. The film has begun, and the still point is exactly where it will stay.

---

## 13. Naming reconciliation & Open Questions

**Naming (resolved 2026-07-24, Design QA).** This document is the single canonical "03." The superseded scaffolding skeleton `03-hero-design.md` has been **deleted**, and the two stale references to it (in `01 §28` and `02 §01`) now point here.

**Resolved (2026-07-24):**
- Centred, symmetric composition; name crosses chest; face upper third. *(§2)*
- Portrait endpoints 62svh → 56px chip, arced dock over 24svh. *(§3.5, §8)*
- Entrance = found-by-light; idle = push-in + breath + pointer-lean (light only). *(§5, §3.3)*
- One Sol-lit primary + quiet secondary; interaction is light, not geometry. *(§7)*
- No Hero video; key light = one shader quad with CSS/no-JS floors. *(§11)*

**Open (resolve before build):**
- Final metadata fields for the control strip (availability / base / since) — copy pass; **do not invent** (§4.4).
- Whether to build the optional masked head-in-front-of-name interlock (§2.5).
- Re-exported ≥1400² graded portrait master → `12-asset-guide.md`.
- Exact rail width and mobile menu affordance → `04-sidebar.md` (this doc assumes ~240px rail, 56px chip).
- Device-orientation permission UX for mobile light-lean (§9.3).

**Amendment protocol:** changes to the composition (§2), the portrait scale endpoints (§3.5/§8), or the dock mechanics (§8) are Hero-level amendments — proposed here, dated, before any component relies on them; changes that touch the sidebar destination must be co-agreed with `04-sidebar.md`.

---

*North star for this file: the opening shot of a premium film — a real person found by one warm light in a cool dark room, named in monumental serif, alive without moving, who recedes into a constant presence the moment the visitor decides to begin. Arrest in three seconds; trust in twenty; nothing ever pops, teleports, or shows off.*
