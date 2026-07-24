# V2 — Motion Language

> **Status:** Complete — the production-ready motion specification and the **canonical authority** on movement for NOCTURNE.
> **Codename:** NOCTURNE. **Sources of truth (constitution):** `01-brand-system.md §13–15`. **Consumes/reconciles:** `02`–`06`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> Where `03`–`06` describe a motion narratively, **this document owns the numbers.** If a value here disagrees with a value there, this file wins and the other is corrected. A senior frontend engineer must be able to implement every animation from this document **without making a single design decision.**

---

## 0. Conventions & relationship

- Units, `svh`, `p` (hero dock progress), `w` (showcase progress): per `03 §0`, `04 §0`, `06 §0`.
- "Timed" motion = duration-based (entrances, state changes). "Scrubbed" motion = scroll-position-driven (reversible). "Idle" = ambient loops.
- All values below are **tokens** (name + value). Implementations reference the name; the value lives once (here, mirrored into the code token module).
- This file assumes the existing stack: **GSAP + ScrollTrigger**, a single **conductor** entry, `data-crew` registration targets, and native scroll (`01 §14`).

---

## 1. Motion Philosophy

### 1.1 The constitution (from `01 §13`, restated as law)

1. **Motion is camera and light, never UI.** Every animation is describable as a film move — dolly, rack focus, cross-dissolve, parallax, a light coming up. If it can only be described as *bounce / pop / slide / wiggle*, it is rejected.
2. **Inevitable, not impressive.** If a viewer notices the animation as an animation, it is too much.
3. **One spectacle.** The Threshold (`06 §2.2`) is the only virtuosic moment; everywhere else is quiet.

### 1.2 The three tests every animation must pass

- **The film-verb test:** name the camera/light move in one word. If you can't, cut it.
- **The subtraction test:** remove it — is the section worse? If not, it stays removed.
- **The budget test:** does it fit transform/opacity and ≤8ms (§17)? If not, redesign it.

**Reasoning.** A closed philosophy expressed as *tests* (not vibes) lets a team of engineers make consistent motion calls without a designer in the room — which is the entire purpose of this document.

---

## 2. The Easing System

NOCTURNE has **one timed curve, one scrub linearization, and one organic curve.** No others exist.

| Token | Value | Used for | Never for |
| --- | --- | --- | --- |
| `ease.glide` | `cubic-bezier(0.22, 1, 0.36, 1)` | **All timed motion** — entrances, exits, state changes, staggers. | anything scrubbed or idle |
| `ease.scrub` | `none` (linear) | **All scroll-driven motion** — the feel comes from the scrub lerp (§5.3), not the curve. | timed reveals |
| `ease.idle` | `sine.inOut` | **Idle/ambient only** — breath, pulse, light drift. | any discrete transition |
| `ease.swell` | `power2.out` (ease-out cubic-ish) | **One exception:** the key-light intensity swell on the Hero portrait discovery (§7.2). | anything else |

**Prohibited outright:** `back`, `elastic`, `bounce`, any overshoot, any spring, any `steps()`. (`01 §23.6`.)

**Reasoning.** `glide` is a strong ease-out with a soft ease-in head — it reads as *settling under gravity*, the opposite of a spring's *overshoot*. Scrubbed motion uses `none` because an eased scrub fights the visitor's hand (the feel must come from the lerp, not a curve baked over the scroll). `sine.inOut` is reserved for idle because breathing is the one motion in the world that is organic, not directed — so it gets the one organic curve. `swell` is a single sanctioned exception because "a light coming up" physically decelerates, and `glide` alone read as too abrupt in prototyping — logged as the lone easing exception.

---

## 3. Duration, Stagger, Scrub & Distance Scales

### 3.1 Duration tokens (timed motion)

| Token | Value | Meaning | Typical use |
| --- | --- | --- | --- |
| `dur.instant` | 120ms | a light noticing you | hover-in, focus-in, active |
| `dur.gesture` | 240ms | an element settling | hover-out, small reveals, furniture fades |
| `dur.passage` | 480ms | a scene reframing | line/beat reveals, nav reveal, page-transition overlay |
| `dur.cinematic` | 900ms | a camera move | name settle, title reveal, spine draw |
| `dur.portrait` | 1530ms (`cinematic × 1.7`) | the figure found by light | Hero portrait discovery |
| `dur.swell` | 2000ms | a lamp coming up | Hero key-light intensity swell |

**No value between rungs may be invented.** A motion picks a rung.

### 3.2 Stagger

| Token | Value | Use |
| --- | --- | --- |
| `stagger.glance` | 75ms | sequential reveals (the interval of one intentional glance) |
| `stagger.beat` | 195ms | deliberate one-after-another (furniture cluster, CTA group) |

### 3.3 Scrub scale (scroll-driven catch-up)

ScrollTrigger `scrub` is the seconds of lerp between scroll and animation. Three rungs:

| Token | `scrub` value | Use | Why |
| --- | --- | --- | --- |
| `scrub.tight` | 0.6 | reading illumination (About lines, beats) | responsive to the reader; text should track attention closely |
| `scrub.medium` | 1.0 | dock, showcase procession, parallax | weighted, "heavy curtain on rails" feel |
| `scrub.loose` | 1.2 | large-range establishing parallax | the biggest moves get the most glide |

### 3.4 Distance & delta scale (keep everything small)

| Token | Value | Use |
| --- | --- | --- |
| `offset.rise` | 8px | small reveal y-offset |
| `offset.settle` | 16px | "settle under gravity" y-offset (name, titles) |
| `offset.release` | −20px | passed-content release upward |
| `delta.enter` | 0.985 → 1.0 | entrance scale |
| `delta.push` | 1.0 → 1.02 | idle push-in / establishing settle |
| `delta.establishing` | 1.08 → 1.03 | showcase establishing push |
| `enter.x` | `xPercent 7 → 0` (worlds), `−9 → 0` (About lateral step) | directional entrance |
| `parallax.sm / md / lg` | 3% / 5% / 7% | depth parallax ranges |
| `breath.scale` | ±0.8% | idle portrait breath |
| `breath.light` | ±4% intensity | idle key-light breath |
| `lerp.pointer` | 0.06 | pointer-lean smoothing |

**Reasoning.** Cinematic motion is *small* motion — a 2% push, an 8px settle. Large translations read as UI. Codifying the tiny deltas as tokens is what prevents an implementer from "making it more visible" and breaking the register.

---

## 4. Motion Taxonomy

Every animation in the product is exactly one of six categories. Its category dictates its curve, timing source, and reduced-motion behaviour.

| # | Category | Timing source | Curve | Reduced-motion |
| --- | --- | --- | --- | --- |
| 1 | **Timed reveal** (entrance/exit) | duration | `glide` | present instantly (opt. `instant` fade) |
| 2 | **Scrubbed** (scroll-driven) | scroll (`scrub.*`) | `none` | static end-state; no scrub |
| 3 | **Idle/ambient** | loop | `idle` | disabled |
| 4 | **State** (hover/focus/press) | duration (120/240) | `glide` | kept (opacity/colour), no transform |
| 5 | **Handoff** (section→section) | scroll or duration | `none`/`glide` | simple cut/cross-fade |
| 6 | **Spectacle** (the Threshold) | scroll (`scrub.medium`) | `none` | replaced by light-gather dissolve |

**Reasoning.** Assigning every motion a category up front means an engineer never guesses which curve or reduced-motion rule applies — they read the category and the answer is fixed.

---

## 5. Scroll Choreography

### 5.1 Native scroll is law

The browser scroll position is the single source of truth. **No smooth-scroll library, no wheel hijack, no `scroll-behavior` takeover of the document** (`01 §14`). Scrollbar, keyboard (Space/PgUp/PgDn/Home/End), and find-in-page behave natively.

### 5.2 How motion binds to scroll

- **Scrubbed tweens:** `ScrollTrigger` with `scrub: <scrub.*>`; `start`/`end` in viewport-relative terms; fully reversible.
- **Triggered reveals:** `ScrollTrigger` with `toggleActions: "play none none reverse"` for timed entrances that should play once and reverse on scroll-up.
- **Pins:** `ScrollTrigger pin` (transform/position pinning with a pin-spacer) **or** CSS `position: sticky`. Both keep native scroll honest — the page still scrolls; only the pinned layer holds. Pinning is **not** scroll-hijacking and is permitted (§17.4).

### 5.3 The lerp (visual smoothing) — where "weight" comes from

The "heavy curtain on rails" feel is the **scrub lerp** (§3.3), applied *inside* the animation layer — never to the scroll position. `scrub.medium` (1.0s catch-up) gives the dock and procession their weight; `scrub.tight` (0.6) keeps reading responsive. Pointer-lean uses a manual lerp `lerp.pointer` (0.06) in the rAF loop.

### 5.4 Reversibility

Every scrubbed animation must play backward gracefully. Scroll up = the film runs in reverse. This is a hard acceptance criterion, tested per section.

**Reasoning.** Binding to native scroll with a lerp inside the visual layer delivers the identical premium weight of a scroll-hijack library at zero honesty cost — the reconciliation that lets the site feel like film *and* pass an engineer's accessibility scrutiny.

---

## 6. Loader Handoff

CSS-only; runs with or without JS (`02 §00`, `03 §5.1`).

```
t(s)  0.0        0.95   1.0            1.9   1.95
      │  breathe  │      │  aperture    │      │
line  ██▓▒░█▓▒░██ │      │              │      │   ← breathes once (scaleX+opacity)
name  ░▒▓ inhale  ●release              │      │   ← tracking widens, then releases
panel ─────────────────╱ scaleY 1→0 ╲──────────    ← top+bottom part (glide, cinematic)
hero  (painted underneath from frame 0) ● entrance begins as aperture opens
veil  ████████████████████████████████████ gone   ← visibility:hidden at 1.95s
```

- Panels: `scaleY 1 → 0`, origin top/bottom, `dur.cinematic`, `ease.glide`, start `1.0s`.
- The Hero portrait is painted from frame 0 (LCP protected); its entrance (§7.2) is scheduled to begin as the aperture opens (~1.05s).
- **Hard cap 1.9s.** If assets are slow, the loader holds its breath — it never adds animation to fill time.
- **Reduced motion:** loader not rendered; hero present at rest.

**Reasoning.** A CSS-only, no-JS loader that reveals an already-painted hero is the only design that satisfies the LCP amendment, the Set-stands-alone law, and the 2s cap simultaneously.

---

## 7. Hero Transformations

Canonical timings for `03`. This section supersedes `03`'s tables where numeric.

### 7.1 Entrance master timeline (t = 0 at aperture-open ≈ 1.05s)

| t (s) | Target | Property | From→To | Duration | Curve |
| --- | --- | --- | --- | --- | --- |
| 0.00 | portrait | opacity / scale / y | 0→1 / 0.985→1 / +10→0 | `dur.portrait` | glide |
| 0.00 | key light | intensity | 0→1 | `dur.swell` | swell |
| 0.35 | name | opacity / y | 0→1 / +16→0 | `dur.cinematic` | glide |
| 0.90 | role, tagline | opacity / y | 0→1 / +8→0, `stagger.beat` | `dur.passage` | glide |
| 1.20 | CTA row | opacity / y | 0→1 / +8→0 | `dur.passage` | glide |
| 1.35 | metadata, scroll label | opacity | 0→1, `stagger.glance` | `dur.gesture` | glide |
| 1.45 | scroll-cue line | scaleY | 0→1 (origin top) | `dur.cinematic` | glide |
| 2.20 | portrait | scale (idle push) | 1→1.02 | 10s | power2.out |

**Late-arrival guard:** if the conductor initialises after `performance.now() > ~1.8s`, skip the entrance; render content at rest (never yank content a reader already sees).

### 7.2 Idle (Category 3 — pauses off-screen, off on reduced motion)

- **Push-in:** `delta.push` over 10s, then hold.
- **Light breath:** key intensity `±breath.light` on `ease.idle`, period ~6s.
- **Pointer-lean:** key *position* leans toward pointer, `lerp.pointer`; **only the light moves — never the figure** (`03 §3.3`).

### 7.3 Dock (Category 2 — scrubbed, `scrub.medium`, over first 24svh)

Canonical `p`-keyframes: see `03 §8.1` (portrait/name) and `04 §2.2` (furniture) — those tables are correct; this document ratifies their `scrub.medium` binding and the x-leads-then-y arc (§8 there). Reversible.

**Reasoning.** One ordered entrance (found → named → speaks → asks → whispers) is the storyboard as a timeline; giving it exact `t`/duration/curve per row is what makes it reproducible frame-for-frame.

---

## 8. Sidebar Docking

Ratifies `04 §2`. The **identity evolves** (Category 2, scrubbed) and the **furniture is revealed by light** (Category 1, timed, triggered at `p≥0.8`). Key bindings:

- Recede: `scrub.medium`, portrait scale 62svh→56px along the two-sub-curve arc (x reaches rail before y).
- Name→wordmark: cross-dissolve, opacity only, overlapping `p 0.4–0.85`.
- Furniture (nav/spine/status/CTA/links): opacity reveals, `dur.passage`/`dur.gesture`, `stagger.glance`/`stagger.beat`, **not remounted** (present in DOM, revealed by light).
- Progress spine updates via `scaleY` only (never height) — §17.3.

**Reasoning.** Distinguishing *evolve* (scrubbed transform) from *reveal* (timed opacity) is the whole reason the dock feels continuous while the rail still "dresses itself" — and it keeps "nothing remounts" true.

---

## 9. Project Showcase Transitions

Ratifies `06`. All scrubbed to `w`, `scrub.medium`.

### 9.1 The Threshold (Category 6 — the one spectacle)

- Convergence: instrument lights `scaleY 0→? ` gather to a point; ~half-beat of near-dark (the loader echo).
- Assembly: fragments/threads resolve outward (`opacity` + small `y`), one slow orbit (canvas camera).
- Resolve: World 1's establishing visual emerges. `scrub.medium`, reversible.
- **This is the only place peak GPU/3D is spent** (§17.6).

### 9.2 Per-world exhibit (Category 2)

| Beat | Property | Value | Scrub |
| --- | --- | --- | --- |
| Enter | visual `xPercent` / opacity | `enter.x` (7→0) / 0→1 | `scrub.medium` |
| Establishing push | visual scale / yPercent | `delta.establishing` (1.08→1.03) / −3→+3 | `scrub.loose` |
| Copy resolve | title/sentence/stack opacity+y | +`offset.rise` , `stagger.beat` | timed, `glide`, on world-enter |
| Layered crops | opacity + counter-parallax | `parallax.sm` | `scrub.medium` |
| Lighting | key temperature | → world signature temp | `scrub.medium` |
| Exit | visual xPercent / opacity | drift left + 0 | `scrub.medium` |

### 9.3 The seam (world A → B)

Cross-dissolve by **light and depth**, never horizontal panel translation (§7 in `06`): A cools+dissolves to a dark ghost → half-beat dark → B's warmth rises → B resolves. One world legible at a time.

**Reasoning.** Confining 3D to the Threshold and expressing per-world transitions as light/opacity/parallax (DOM+CSS) is what makes the emotional climax also a performance success.

---

## 10. Section Handoffs (light bleed)

No hard boundaries; each section's exit light becomes the next's entrance light (Category 5). Between scenes sits `space-8`+ of true dark (a *rest*, not a gap — `01 §7`).

| Handoff | Mechanism |
| --- | --- |
| Loader → Hero | aperture opens into hero mid-entrance (§6) |
| Hero → About | portrait docks (rail) as About's Conversational figure arrives by lateral step |
| About → Approach | closing line's glow bleeds forward; the road/bench light draws itself |
| Approach → Threshold | instrument lights gather to a point (the spectacle overture) |
| Showcase → Services | World 3's cool light evens into warm studio light |
| Services → Attendant | a point of light detaches and drifts *toward* the visitor |
| Attendant → Contact | studio light dims to the opening register; the lantern follows to the edge |
| Contact → Coda | a settle downward; the projector cools |

**Reasoning.** Designing handoffs as light continuity (not fades between boxed sections) is the mechanical source of the "one continuous film" feeling — the seams are dissolved, not hidden.

---

## 11. Page Transitions — `/work/[slug]` ("walk through the door")

Navigating from a showcase world into its case study must read as *stepping inside*, not a page load.

### 11.1 Behaviour

- On **Enter** activation, the world's light **narrows into its signature-temperature palette**: a full-screen overlay in that temperature blooms from the world's visual position and covers the transition (`dur.passage` ~480ms, `glide`).
- The `/work/[slug]` route (statically generated) paints beneath; the overlay dissolves to reveal it, sharing the world's temperature grade so the arrival feels like the same room, deeper.
- **Back** reverses: the case-study route dissolves out under the same temperature overlay, returning to the showcase at the originating world.

### 11.2 Implementation

- Use the **View Transitions API** where supported (cross-document, progressive enhancement) with a custom transition named per world; the `::view-transition` layers cross-fade in the world's temperature.
- **Fallback** (no VT API): a Crew-driven fixed overlay (opacity/temperature) covering a client-side navigation, then dissolving. Native back/forward preserved.
- Never block navigation on the animation — the route is reachable instantly; the overlay is decoration over an already-committed navigation.

### 11.3 Reduced motion

Instant navigation, no overlay (or an `instant` cross-fade). The destination simply appears.

**Reasoning.** A themed cross-fade that carries the world's light into the route is the difference between "clicked a link" and "walked through a door" (`06 §5`) — and layering it over an already-committed, instantly-reachable navigation keeps it honest and non-blocking.

---

## 12. Hover / Focus / Press States (Category 4)

The signature interaction: **the world notices you fast and lets you go slow.**

### 12.1 The asymmetry

- **In (hover/focus):** `dur.instant` (120ms).
- **Out:** `dur.gesture` (240ms).
- Curve: `ease.glide`. Properties: `color, background-color, border-color, text-decoration-color, opacity, filter, box-shadow` — **light, never geometry** (no transform on hover; no scale/translate/shadow-lift).

### 12.2 Per-affordance

| Affordance | Rest → Hover/Focus |
| --- | --- |
| Primary CTA (Signal Glass) | brighten + edge-catch + Sol bloom lift |
| Secondary / QuietAction | `bone-70`→`bone-100`, Sol underline brightens |
| Nav chapter | `bone-45`→`bone-70`, +Sol tick (active); lit ring on focus |
| Instrument (skill) | lifts one step in brightness (`01 §-` bench rule) |
| Showcase Enter | visual lifts one light step, glass edge catches (the lean-in) |
| Sidebar chip/wordmark | one light step; it is the return-to-top link |
| Press/active | dim ~10% (`filter: brightness(0.9)`), `dur.instant` |

### 12.3 Focus

Focus produces the **same visual as hover** plus a **lit focus ring** (`outline`/`box-shadow` in warm light) — never the browser default, never suppressed. Focus states are **kept even under reduced motion** (opacity/colour transitions only).

**Reasoning.** Light-only state change keeps every hover inside the one-light fiction (`01 §15`); the 120/240 asymmetry is the subtle thing that makes the interface feel *alive* rather than mechanical, and it is cheap (no layout, no transform).

---

## 13. Micro-interactions (enumerated)

| # | Interaction | Category | Spec |
| --- | --- | --- | --- |
| 1 | Nav active-chapter change | 4/2 | cross-fade label brightness + Sol tick; eased (no snap); driven by intersection, debounced |
| 2 | Progress spine | 2 | `scaleY` lit segment, `scrub.medium`; brightens on active scroll, dims on idle-read |
| 3 | Scroll-cue line draw | 1 | `scaleY 0→1`, origin top, `dur.cinematic`, once on Hero entrance |
| 4 | CTA bloom | 4 | box-shadow Sol bloom, 120/240 |
| 5 | Services offering lift | 4/2 | offering under attention brightens a step |
| 6 | Instrument bench lift | 4 | per-item brightness step on hover; group pool brighten on scroll pass (`scrub.tight`) |
| 7 | About line illuminate/dim | 2 | opacity 0.22→1 (`scrub.tight`), then →`bone-45` floor when passed |
| 8 | Attendant suggested-question hover | 4 | `bone`→brighter, 120/240 |
| 9 | Copy-to-clipboard (email, if any) | 1 | a brief Console confirmation flash, `dur.gesture`, no motion |

**Reasoning.** Enumerating every micro-interaction with its category + spec is the payload that lets an engineer build them all without a design review each time.

---

## 14. Idle / Ambient Animations (Category 3)

All idle motion: **`ease.idle` (sine), low amplitude, pauses when off-screen, disabled on reduced motion and low tier.**

| Idle | Spec | Default |
| --- | --- | --- |
| Hero push-in | `delta.push` over 10s then hold | on |
| Hero light breath | `±breath.light` intensity, period ~6s | on |
| Hero pointer-lean | key position, `lerp.pointer` | on (desktop) / device-orient (mobile, opt-in) |
| Intelligence pulse (Approach) | Ion glow swell, period ~1.4s, repeatDelay ~2.8s | on, paused off-screen |
| Attendant lantern pulse | same Ion pulse; the promise kept | on |
| Sidebar chip breath | ≤1% opacity/scale, period ~8s | **off by default** (repaint budget — `04 §5`) |
| Two-layer depth drift (bg) | ≤2% parallax, very slow | on high tier only |

**Off-screen pause:** every idle loop is gated by a `ScrollTrigger onToggle` (or IntersectionObserver) so it consumes zero frames when not visible.

**Reasoning.** Idle motion is what makes the film feel alive between interactions, but it is also the easiest way to waste the frame budget — hence sine-only, tiny, off-screen-paused, and reduced-motion-disabled, with the most marginal one (chip breath) off by default.

---

## 15. Reduced-Motion Behaviour

`prefers-reduced-motion: reduce` is honoured as a **designed cut, not a disabled build** (`01 §21`).

### 15.1 Global policy

Implement one guard — `gsap.matchMedia()` / `ScrollTrigger.matchMedia()` with a `(prefers-reduced-motion: reduce)` query — that registers the **reduced timelines** instead of the full ones. Never ship animations that check the query ad-hoc inside each tween.

### 15.2 Per-category behaviour

| Category | Reduced-motion behaviour |
| --- | --- |
| 1 Timed reveal | content present at rest; optional single `instant` opacity fade |
| 2 Scrubbed | jump to end-state; no scrub. (About: all lines full contrast; dock: sidebar present docked; showcase: **un-pinned stacked** exhibits) |
| 3 Idle | disabled entirely (static) |
| 4 State | **kept** — opacity/colour only, no transform (already true) |
| 5 Handoff | simple cut or `instant` cross-fade |
| 6 Spectacle | replaced by a light-gather cross-dissolve into World 1; no orbit, no assembly |

### 15.3 The readability contract

Any opacity-dim that could reduce text contrast (About passed lines, showcase dim ghosts) has an **AA floor** (`bone-45`), and the **static Set renders all text at full contrast** — the dim is a Crew enhancement layered over already-readable content, never the source of truth (`05 §8.4`).

**Reasoning.** A single global `matchMedia` guard is the only maintainable way to keep the reduced cut coherent; per-tween checks rot. Treating reduced-motion as a first-class alternate cut is both the ethics and the flex.

---

## 16. Timing Diagrams

### 16.1 Hero entrance (see §7.1 for values)

```
t(s)  0.0   0.35   0.9        1.2    1.35  1.45         2.2 ──── 12.2
port  █▉▊▋▌▌ (found by light, dur.portrait) ─────────── push-in 10s ──▶
key   ╱▔▔▔ swell 2s ▔▔▔ breath ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
name         █▊▋ settle (cinematic)
role/tag           █▋ ▍(passage, stagger.beat)
cta                        █▋ (passage)
meta                             █▍ (gesture, glance)
cue-line                            ╿ draw (cinematic)
```

### 16.2 Dock (scrubbed over first 24svh, `scrub.medium`)

```
p     0.0        0.3        0.6        0.8        1.0
port  ●──────── arc up-left, scale 62svh→56px ──────▶ chip
name  ▊▊▊▊▊ fade out ──────────
word                 ░▒▓ fade in (cross-dissolve overlap) ███
copy  ▊ dim→release↑ fade ──
rail        · hairline ─── surface fill ─────────────── ███
nav                                        ░▒▓ reveal by light ██
```

### 16.3 Showcase seam (world A → B, scrubbed)

```
w    …A.exit───────────seam───────────B.enter…
Alt  ██ cool+dim → drift left → dissolve ░ (dark ghost)
dark                    ▓▓ half-beat ▓▓
Bwarm                        ░▒ warmth rises ▒▓
Bvis                              ← resolve from right ██
```

**Reasoning.** ASCII timelines are the fastest way for an implementer to see *simultaneity and sequence* at a glance — which tween starts when, and what overlaps what.

---

## 17. Implementation Constraints

### 17.1 Library & structure

- **GSAP + ScrollTrigger** (already installed). Register `ease.glide` as a `CustomEase`; register `sine`/`power2` from GSAP core.
- **One conductor** (`experience/conductor`) initialises inside a single `gsap.context(() => { … })`; each scene script registers its tweens/triggers against **`data-crew` targets** already present in the Set.
- **Teardown:** on unmount / route change, `ctx.revert()` — kills tweens, triggers, and inline styles. No orphaned ScrollTriggers.

### 17.2 Property allowlist (hard rule)

**Animate only `transform` (translate/scale/rotate) and `opacity`** — plus `filter`/`box-shadow`/`color` for state light. **Never animate** `width, height, top, left, right, bottom, margin, padding, font-size` (layout/reflow). The progress spine uses `transform: scaleY`, not `height`. Text illumination uses `opacity`, not `color` transitions (colour transitions are for discrete states only).

### 17.3 `will-change` discipline

Apply `will-change: transform/opacity` on elements **entering** an animation; **remove it when idle** (GSAP handles most; verify for long-lived pinned elements). Never blanket `will-change` — it costs memory and can force layers unnecessarily.

### 17.4 Pinning & native scroll

`ScrollTrigger pin` (transform/pin-spacer) and CSS `position: sticky` are both permitted — they hold a layer while **native scroll continues**; they are not scroll-hijacking (`01 §14`). No `scroll-behavior: smooth` on the document, no wheel/touch interception, no scroll-to libraries that seize control.

### 17.5 Frame budget

- Crew targets **≤8ms of the 16.67ms frame** (`01 §13`); measure in dev (a small FPS/long-task monitor).
- One scrubbed timeline per section where possible (batch tweens); avoid dozens of independent ScrollTriggers firing per frame — use `ScrollTrigger.batch` for lists.
- Debounce active-section detection (IntersectionObserver), don't compute on every scroll frame.

### 17.6 Canvas / Three.js

- One persistent canvas behind the DOM. **3D is confined to the Threshold** (`06`, `09`). Elsewhere lighting is CSS.
- R3F `frameloop="demand"` or freeze via `ScrollTrigger onToggle` so the canvas renders **only while the spectacle is in view**; frozen otherwise.
- DPR capped **1.5** (mid) / **1** (low) via the QualityManager; fragment counts/volumetrics scale by tier; canvas can be demoted entirely (floors per `06 §10`).

### 17.7 Reduced motion & breakpoints

- `gsap.matchMedia()` registers reduced vs full timelines and per-breakpoint variants; contexts auto-revert when a query stops matching.

### 17.8 Accessibility guards

- Motion never blocks interaction (navigation reachable instantly, §11.2).
- Focus states never suppressed (§12.3); focus-visible only.
- No motion begins before first paint of content (Set stands alone).

**Reasoning.** These constraints are the difference between a motion system that *demos* and one that *ships* — one context to tear down cleanly, a transform/opacity allowlist to protect the frame, pinning that respects native scroll, and 3D quarantined to the one place it earns its cost.

---

## 18. The Complete Motion Inventory

Master reference — every animation, its category, tokens, and reduced-motion state. (Values per the sections above.)

| Element / moment | Cat | Trigger | Curve · Duration/Scrub · Offset | Reduced-motion |
| --- | --- | --- | --- | --- |
| Loader breath + aperture | 1 | load | glide · cinematic | not rendered |
| Hero portrait discovery | 1 | aperture | glide · dur.portrait · scale/ y | present at rest |
| Hero key swell | 1 | aperture | swell · 2000ms | full, static |
| Hero name settle | 1 | +0.35s | glide · cinematic · settle | present |
| Hero role/tagline/CTA/meta | 1 | staggered | glide · passage/gesture · rise | present |
| Hero scroll-cue draw | 1 | +1.45s | glide · cinematic · scaleY | present (static line) |
| Hero push-in / breath / lean | 3 | idle | idle · loops | disabled |
| Hero → sidebar dock | 2 | scroll 0–24svh | none · scrub.medium · arc | docked at rest |
| Sidebar furniture reveal | 1 | p≥0.8 | glide · passage/gesture · glance | present |
| Progress spine | 2 | scroll | none · scrub.medium · scaleY | static (or hidden) |
| Nav active change | 4/2 | intersection | glide · gesture | instant swap |
| About lateral step | 2 | section enter | none · scrub.medium · enter.x | present |
| About line illuminate | 2 | per line | none · scrub.tight · opacity | full contrast |
| About line dim (passed) | 2 | per line | none · scrub.tight · →bone-45 | full contrast |
| Approach cluster reveal | 1 | scroll | glide · passage · glance | present |
| Intelligence pulse | 3 | idle (in view) | idle · ~1.4s | disabled |
| Threshold (spectacle) | 6 | scroll | none · scrub.medium · assembly/orbit | light-gather dissolve |
| World enter (from right) | 2 | w | none · scrub.medium · enter.x | stacked, present |
| World establishing push | 2 | w | none · scrub.loose · delta.establishing | static |
| World copy resolve | 1 | world enter | glide · passage · rise/beat | present |
| World layered crops | 2 | w | none · scrub.medium · parallax.sm | present/static |
| World seam cross-dissolve | 5/2 | w | none · scrub.medium · light | cut between stacked |
| Showcase → /work overlay | 5 | Enter click | glide · passage · temperature | instant nav |
| Services offering lift | 4/2 | attention | glide · gesture | static |
| Services point-of-light drift | 5 | scroll | none · scrub.medium | cut |
| Attendant lantern pulse | 3 | idle | idle · ~1.4s | disabled |
| Contact push-in (mirror) | 3/1 | enter+idle | swell/idle | present, static |
| All hover/focus/press | 4 | pointer/kbd | glide · 120 in / 240 out · light | kept (no transform) |

**Reasoning.** This table is the document's deliverable core: an engineer can pick any row and implement it with no further decisions — category fixes the pattern, tokens fix the numbers, and the last column fixes the reduced-motion behaviour.

---

## 19. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- **Three curves only:** `glide` (timed), `none` (scrub), `idle`/sine — plus the single `swell` exception for the Hero key. *(§2)*
- **Scrub scale** 0.6 / 1.0 / 1.2; **distances tiny** (8–16px, ≤2% scale); parallax 3/5/7%. *(§3)*
- **Six-category taxonomy** dictating curve + reduced-motion per animation. *(§4)*
- Native scroll + scrub-lerp for weight; **pinning is permitted** (not hijacking). *(§5, §17.4)*
- **Page transition = themed light overlay** over an already-committed nav; View Transitions API where available. *(§11)*
- **Property allowlist** transform/opacity; spine via `scaleY`; one `gsap.context`; `ctx.revert()` teardown; 3D confined to the Threshold. *(§17)*
- **Reduced motion via one `matchMedia` guard**; readability AA floor; static Set is the source of truth. *(§15)*

**Open (resolve at build/prototype):**
- Exact `swell` curve tuning (`power2.out` vs a custom) — confirm on real portrait (§2).
- View Transitions API browser coverage vs the overlay fallback ratio — measure (§11.2).
- Whether the sidebar chip breath ships on after a real repaint-budget measurement (§14, `04 §5`).
- Threshold assembly fidelity per device tier — prototype against the 8ms budget (§17.6, `06 §10`).
- Final `w` sub-ranges per world (§9) — tune with real asset heights.

**Amendment protocol:** the easing set (§2), the duration/scrub scales (§3), the taxonomy (§4), the native-scroll/pinning stance (§5/§17.4), and the property allowlist (§17.2) are motion-constitution items — changes are proposed here, dated, and (where they alter a section's felt motion) co-agreed with that section's document.

---

*North star for this file: one curve that settles like gravity, motion so small and so inevitable it is felt but never seen, bound to the visitor's own scroll and reversible to the frame — camera and light, never UI. Every animation in NOCTURNE has a category, a set of tokens, and a reduced-motion twin; nothing here requires a design decision to build.*
