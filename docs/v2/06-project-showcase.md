# V2 — Project Showcase Specification

> **Status:** Complete — the buildable specification for Section 04, "Selected Work." **The most important document in the system.**
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `03-hero.md`, `04-sidebar.md`, `05-about.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This is the emotional climax of the homepage. **Forget V1. Forget grids. Forget cards. Forget dashboard screenshots. Forget inline case studies.** The three projects are *worlds you walk through*; the full case study lives at `/work/[slug]`. Detailed enough to build without guessing.

---

## 0. Conventions & relationship

- Units (`svh`), timings/eases, `glide` curve: per `03 §0`. Dock progress `p` is the sidebar's; here the driving value is **showcase progress `w`** (0→1 across the pinned Selected Work stage).
- The **sidebar** is present throughout; its `Work` chapter is lit for the entire section (`04 §4.3`).
- **The three worlds are real:** **SalHub** (multi-role event marketplace, EN/DE), **StrangerUs** (location-based social + venue console), **NZH / New ZhengHe** (bilingual EN/ZH cross-border employment platform). Content is drawn from the supplied briefs; positioning copy is grounded but final wording is copy-pending (`§3.5`).
- The full case study for each lives at the already-generated `/work/[slug]` route; **this section teases, it never documents** (`02 §5.5`).
- **Asset honesty (see `12`):** screenshots exist for all three; **project video and live URLs are pending.** This document designs the *slots and behaviour* for video/mockup/live-CTA and is complete and premium **on graded stills alone** — video is an upgrade, never a dependency (`01 §17`).

---

## 1. Purpose

### 1.1 Why the showcase exists

Everything before this — the arrest of the Hero, the trust of About — is *setup*. The showcase is the **payoff**: the proof that the taste and thinking on display actually ship as products. It is the section a hiring lead came for, and the reason the whole film rations its wonder until now.

### 1.2 The emotion

**Conviction, compounding.** Three exhibits, three escalating realisations:

- SalHub → *"He can build."*
- StrangerUs → *"He can build differently."*
- NZH → *"He can build for anyone, anywhere."*

The visitor should feel they are being *walked through an exhibition* by someone quietly confident — one commanding work revealed at a time, each given the space of a gallery wall. Not browsing a portfolio; **attending a show.**

### 1.3 Why it comes after About

Conviction requires a person to attach to. About made Raheel a mind that thinks clearly; the showcase now proves that mind ships. Reversed, the work would be impressive but ownerless — screenshots without a builder. The order is **person → proof**, so every product reads as *his*.

**Reasoning.** Naming the exact escalating sentence per world turns "show the projects" into a directable emotional arc. Placing proof after person is the structural reason the work lands as conviction rather than as a gallery of unattributed UI.

---

## 2. Overall Structure

### 2.1 The core decisions (and the reasoning)

| Question | Decision | Why |
| --- | --- | --- |
| **How many visible at once?** | **Exactly one legible world at a time.** | One idea per viewport (`01 §2.2`); a single commanding work reads as an exhibition wall, three-up reads as a grid. |
| **Pin, or let each scroll?** | **Pin the stage** (native, sticky-based). | Pinning turns the section into a *hall the exhibits are brought into* and lets light and camera do the transitions. Three stacked scrolling sections would feel like three pages, not one show. |
| **Slide (carousel)?** | **No.** Worlds **cross-dissolve by light and depth**, not horizontal translation of equal panels. | A carousel of equal cards is the exact cheap trope we reject (`01 §23.10`). The gallery metaphor is "the lights come up on the next exhibit," never a conveyor belt. |
| **Overlap at the seam?** | **A brief cross-dissolve only** — the outgoing world cools to a dark ghost as the incoming warms. Never two legible worlds. | Overlap dissolves the seam (no hard cut); single-legibility protects the one-idea law. |
| **What drives it?** | **Native scroll** through a tall spacer behind a `position: sticky` stage; `w` = scroll progress; visual lerp only. | Honesty (`01 §14`): scrollbar, find-in-page, keyboard all behave; no hijack. Reduced-motion/no-JS get the un-pinned stacked cut (§9). |

### 2.2 The shape of the section (~420vh)

```
   w=0.00 ── The Threshold (overture / the ONE spectacle) ......  ~60vh
   w~0.12 ── World 1: SalHub        (enter → hold → exit) ......  ~120vh
   w~0.42 ── World 2: StrangerUs    (enter → hold → exit) ......  ~120vh
   w~0.72 ── World 3: NZH           (enter → hold → exit) ......  ~120vh
   w=1.00 ── release → Services light ..........................   handoff
```

- The **stage** is one pinned frame; the three worlds pass through it as `w` advances. Each world's life is *enter (by light, from the right) → hold (long enough to read three things) → exit (cool, drift, dissolve left)*.
- The **Threshold** is the section's overture and the film's single virtuosic moment (`02 §5.2`) — the doorway from identity into the work. After it, the per-world reveals are **expensive but quiet.**

### 2.3 Handoff in / out

- **In:** the **Experience** section's instrument lights drift and gather (`08 §10` — Experience is the section immediately before this one); that convergence feeds the Threshold, which erupts into structure and resolves into World 1. (Upstream of that, About's closing light became Experience's path — `05 §5.5`.) No boundary. **Ownership:** the Threshold is rendered and owned by *this* section (the Showcase); Experience only supplies the converging instrument nodes.
- **Out:** World 3's cool light lifts and evens into the Services studio light (`02 §05`). The exhibition ends; the room brightens for conversation.

**Reasoning.** Pinning + light-driven cross-dissolve is the whole reason this reads as *an exhibition* rather than *a scroll of projects*. Choosing sticky-native over scroll-hijack keeps the honesty promise while still delivering the pinned, cinematic feel.

---

## 3. Project Composition — one premium exhibit

Design one world; the three share this grammar (range within one language). This is the anatomy of a single held exhibit.

### 3.1 The frame

```
 rail │                    content field
──────┼───────────────────────────────────────────────────────
      │                                    ┌───────────────────┐
      │   ◦ salhub        (01)             │                   │
      │                                    │   PRODUCT VISUAL  │   ← dominant, graded,
      │   SalHub                           │   in machined     │     in a machined glass
      │   ──────                           │   glass window    │     window (device mockup)
      │   One place to discover, book,     │   [video/still]   │
      │   and coordinate every event.      │                   │   ← layered crops recede
      │                                    │        ╌╌┐        │     behind at depth
      │   NEXT.JS · SUPABASE · TYPESCRIPT  │          ╌╌┐      │
      │                                    └───────────────────┘
      │   Enter SalHub →     Visit live ↗                        ← one primary + quiet secondary
```

### 3.2 Elements & decisions

| Element | Form | Decision & reasoning |
| --- | --- | --- |
| **Large product visual** | The project's real interface, **graded into the room**, dominant on the right (content cols ~7–12). | The interface is the hero; it carries the shot's light (`01 §18`). Graded (blacks→`night`, highlights warmed) so a bright screenshot never blows a hole in the dark — the single most important rule here. |
| **Device mockup** | A **machined glass window** — `radius-glass` (14px), Slate/Smoke, lit top edge, straight-on or one subtle consistent tilt. Silent chrome. | No glossy skeuomorphic phone/laptop renders (`01 §18`) — those say "product ad," we say "specimen on a bench." The frame recedes; the graded UI carries it. |
| **Embedded product video** | *Optional slot inside the window:* muted, short, seamless loop, poster-first, plays only while the world is present, graded, no controls. | Real running UI beats a still *when motion is the point* (`01 §17`). Poster-first + in-view-only protects performance. **Pending asset; still frame is the default.** |
| **Layered screenshots** | 1–2 secondary crops **layered behind** the primary at receding depth planes, graded darker, softly edged into the dark. | Depth by layered dark (`01 §12`) — the world has *dimension*, a composed macro detail behind the establishing shot, not a flat single image or a stacked feed. |
| **Logo** | The project's mark, small, near the title, **rendered restrained** — monochromed to `bone`/`ion` or subtly graded, never a bright colour chip. | A bright coloured logo would be a second accent and break the one-warm-light budget (`01 §4.4`). The mark is present for recognition, quiet in the room. |
| **Project title** | **Marquee**, small at this distance (`marquee-sm` band). | The serif is the emotional register; "small at this distance" keeps the *product* dominant over its name. |
| **One sentence** | **Plate lead**, `bone-70`, the tension the product answered. | One line, not a paragraph — the essence for the skimmer; the full story is `/work/[slug]`. |
| **Tech stack** | **Console**, specimen text, interpunct-separated. | Instruments as specimens, never logos or chips (`01 §8`, `§23.9`). Equality of type = fluency. |
| **Metadata** | **Console-sm**, `bone-45` — role · year · context. | The quiet record; instrumentation, subordinate to the story. |
| **Visit Website CTA** | Quiet secondary — Console + `↗`, lit underline. Appears only when a live URL exists. | The live product is the ultimate proof, but secondary to *entering* the story. **Pending live URLs — slot reserved, not invented.** |
| **View Case Study CTA** | **The one primary** — *"Enter [World]" →* `/work/[slug]`. A small Sol practical light / lit threshold. | One primary action per view (`01 §15`); "Enter" (not "Read case study") frames the route as *walking through the door*, matching the world metaphor. |

### 3.3 Negative space

The left third is copy; the right two-thirds is the visual and **a great deal of intentional dark** around it. The product floats in a lit pocket of the room; the rest is the gallery wall. 60%+ dark holds (`01 §4.6`). Emptiness makes the one work feel *important*, the way a single painting on a large wall does.

### 3.4 Lighting, depth, camera

- **Lighting:** one key pocket of light on the product visual (the viewport's one strong glow), tuned to the world's **signature temperature** (§7.2). The Enter threshold is a small Sol practical light that never rivals the product. Copy sits in ambient light.
- **Depth:** product on the subject plane (full light) → layered crops on context/depth planes (dimmer, softer) → `night` gallery wall behind. No cast shadows; depth is layered dark.
- **Camera:** each world opens on a **slow establishing push across the product**, then holds; the camera *respects* the product — no swooping, only deliberate reveals (`02 §5.3`). The push is scrubbed to `w`.

### 3.5 The three worlds — grounded identities

| World | Essence (from brief) | Signature temperature | Escalation |
| --- | --- | --- | --- |
| **SalHub** | Multi-role marketplace to discover, book, and coordinate business events (EN/DE); Next.js + Supabase, RLS, real-time workspaces. | **Daylight-neutral clarity** — trust & utility. | "He can build." |
| **StrangerUs** | Location-based platform connecting nearby strangers at real venues, plus an establishment console; Next.js + Maps + Redux. | **The warmest** — human-hour dusk; people & connection. | "He can build differently." |
| **NZH** | Bilingual (EN/ZH) cross-border employment platform; multi-role, real-time chat; Next.js + next-intl + Socket.IO. | **Cool, exact, international** — the crispest, most engineered light. | "He can build for anyone." |

Positioning sentences are grounded in these briefs; **final copy is copy-pending** — do not ship placeholders (`01 §16`).

**Reasoning.** Every element earns its place against the same test: *does it make the work feel like a launched product rather than a portfolio tile?* The graded window, the receding crops, the quiet mark, the dominant visual over its own name — each is a decision to keep the *product* the star and the chrome silent.

---

## 4. Motion Choreography

All scrubbed to `w`, `ease: none` + visual lerp; timed accents on the glide (`01 §13`). Every movement has a narrative reason.

| Beat | Motion | Narrative purpose |
| --- | --- | --- |
| **Enter** | The product visual slides in **from the right** (`xPercent ~7 → 0`) with a slow parallax and a light bloom, settling just past centre. | The exhibit is *brought to you* — a shot being set, not a card sliding. Right-to-left reads as forward procession. |
| **Establishing push** | Inside the window, the visual eases from slightly wide+high to settled (`scale 1.08→1.03`, `yPercent −3→+3`). | The camera crossing the product with respect — the establishing dolly. |
| **Copy resolves** | Title, sentence, stack rise a few px and **light** a beat after the visual lands, staggered a glance apart. | The work speaks first; its name and story follow — you see it before you're told about it. |
| **Video begins** | If present: poster shows on enter; the loop **starts only once the world is fully present** (`w` within the world's hold), fades from poster. | Motion arrives when the world has your attention, never competing with the entrance; in-view-only protects perf. |
| **Layered crops appear** | Secondary crops fade up at their depth planes with a smaller counter-parallax as the world holds. | The world gains dimension — a macro detail revealed, like stepping closer to an exhibit. |
| **Lighting shift** | The key pocket warms/cools to the world's signature temperature as it enters; holds through the hold. | Range proven through light *before a word is read* (`02 §5.3`). |
| **Expand (intent)** | On hover/focus of the Enter threshold, the visual lifts **one step in light** and its glass edge catches more — a lean-in, not a scale-jump. | Interaction as light (`01 §15`); a lean toward the door, not a UI hover-pop. |
| **Exit** | As the next world's enter begins, the outgoing world **cools, drifts left, and dissolves** into the dark. | Never a hard cut or a disappearance; the dark it leaves becomes the next world's wall. |

**Reasoning.** Tying every motion to a narrative beat is the discipline that keeps the showcase from becoming a reel of effects. The establishing-push + hold + layered-crops sequence is literally the grammar of an establishing shot followed by composed close-ups — cinema, not UI.

---

## 5. Interaction

| Input | Behaviour | Reasoning |
| --- | --- | --- |
| **Hover** (product / Enter) | Lean-in of light: visual brightens one step, glass edge catches, Enter threshold blooms slightly. In ~120ms / out ~240ms. No scale, no shadow. | Light not geometry (`01 §15`); the fast-in/slow-out is the alive signature. |
| **Focus** | Identical to hover, plus a lit focus ring on the actual link; never suppressed. Focusing any world's link brings that world to legible presence (see §9 keyboard). | Keyboard users get the cinema and never a hidden target. |
| **Click — Enter (primary)** | Routes to `/work/[slug]`; on activation the world's light **narrows into the route's palette** so navigation reads as *walking through the door*, not a page swap. | Continuity of travel (`02 §5.4`) — the seam between homepage and detail dissolves. |
| **Click — Visit Website (secondary)** | Opens the live product in a new tab (`rel="noopener"`), when a URL exists. Quiet; never competes with Enter. | The live product is proof, but the *story* is the primary path. |
| **Touch** | Enter/Visit are ≥44px targets; the whole exhibit's primary is a comfortable tap zone. Hover-lean has a reduced press-state equivalent. | Touch-first (`01 §22`); hover meaning never stranded. |
| **Keyboard** | Tab order per world: Enter → Visit (if present) → next world. Enter/Space activates. Visible lit focus. | Full operability regardless of the visual pin. |

**Reasoning.** Every interaction routes the visitor toward one of two honest destinations — the *story* (`/work`) or the *live product* — with the story primary. Making Enter narrow the light into the route is the single most premium interaction in the section.

---

## 6. Visual Hierarchy

Attention order, by design:

1. **The product visual** — largest, brightest, its own graded colour in a lit pocket against the dark. *You see the work first.*
2. **The project title (Marquee)** — the second-brightest, second-largest; the serif names what you're looking at.
3. **The one sentence (Plate) + the Enter threshold (small Sol light)** — the tension, then the door deeper.
4. **Stack & metadata (Console, `bone-45`)** — the quiet instrumentation, read only if wanted.

**Reasoning.** The order encodes the experience: *see the product → learn its name → understand its tension → choose to go deeper → (optionally) check the specs.* Putting the visual first (over even the name) is the deliberate inversion that makes this feel like a product launch — Apple shows the thing before it says the thing.

---

## 7. Transition Between Projects — directing A → B

*How SalHub becomes StrangerUs without a slide, without a carousel.*

There is no track, no conveyor, no two equal panels swapping places. There is a **gallery, and the lights change.**

- As `w` crosses SalHub's exit threshold, its daylight-neutral key **cools and dims**; the product visual drifts left and **dissolves into the dark**, its layered crops receding first, until the wall is nearly black — a held half-beat, an echo of the loader's emptiness.
- Out of that dark, from the right, **a new warmth rises** — StrangerUs's dusk temperature blooming before its visual is even legible — and the product resolves *into* the incoming light, sliding to settle as its copy lights a beat later.
- The seam is a **cross-dissolve of light and depth**, driven by scroll and fully reversible: scroll back and StrangerUs cools and dissolves right, SalHub warms and returns. One world is ever legible; the other is a dark ghost mid-dissolve.

The felt difference from a carousel: a carousel *moves panels*; this **changes the light on a wall.** The exhibit doesn't slide away — the lights come down on it, and come up on the next. That is the difference between a slideshow and an exhibition.

**Reasoning.** Transitioning by light-and-depth rather than horizontal translation is the entire anti-carousel principle. The brief dark echo between worlds is what gives each exhibit its own *arrival* — every world is discovered, not delivered on a belt.

---

## 8. Responsive

Re-block, never squeeze (`01 §22`). Each device is a deliberate composition of the same exhibition.

> **Canonical tiers live in `11 §2.2` / `§6`** (STAGE · COMPACT · COLUMN · REEL). The device labels below are indicative only and **defer to `11` wherever they differ**; the load-bearing rules are: **pin retained `≥768`, un-pinned vertical `<768`.**

| Device | Composition |
| --- | --- |
| **Desktop (≥1280)** | The full pinned procession: one world at a time, copy left / graded visual right, enter-from-right by light, Threshold at full intensity. The canonical experience. |
| **Laptop (1024–1280)** | Same structure; the Threshold reduces fragment density (quality tier); the visual scales; margins tighten. No structural change. |
| **Tablet (768–1024)** | Pin retained but simplified: the visual sits **above** the copy within each held world (portrait-friendly), the establishing push shortened, layered crops reduced to one. Cross-dissolve seam preserved; sidebar is the collapsed icon-rail. |
| **Mobile (<768)** | **Un-pin into a vertical exhibition:** each world is a full-bleed held screen — graded visual dominant, title, one sentence, stack, **Enter** — entering by light as it scrolls into view (still one-at-a-time, still light-not-slide). The Threshold simplifies to a light-gather transition (no heavy 3D on low tiers). *Not compressed — recomposed as a vertical gallery you walk down.* |

**Reasoning.** The desktop pin is a wide-frame luxury; on a phone the *same idea* — one commanding work at a time, arriving by light — is expressed as a vertical walk. The mechanic (one world, revealed by light, Enter to go deeper) is viewport-agnostic, so the emotion survives every screen.

---

## 9. Accessibility

### 9.1 The Set/Crew foundation (why a pinned section stays accessible)

All three worlds exist in the **static DOM from first paint** as real `<article>` elements — heading, positioning, stack list, links, `alt` text — in reading order. The pin/scrub/cross-dissolve is a **Crew visual layer over already-complete, already-navigable content.** Therefore:

- **No JS / reduced motion:** the section renders as a **plain vertical stack** of three complete exhibits — no pin, no scrub, no dissolve. A designed cut, legible and ordered (`01 §21`).
- **Keyboard:** the un-pinned stacked layout is used when a user is tabbing (or reduced-motion is set), so focusing an Enter/Visit link never fights a pinned scrub. Where the pinned visual is active, focusing a world's link brings that world to legible presence.

### 9.2 Screen readers

Three `<article>`s, each `<h2>` (project name, part of the document outline) + the positioning as text, stack as a `<ul>`, and clearly-labelled links ("Enter SalHub — case study", "Visit SalHub — opens in new tab"). Product visuals carry meaningful `alt`; layered crops and the graded window are `aria-hidden` decoration. Any video loop is `aria-hidden` + muted (decorative); if a video ever conveys unique information, a text alternative is required.

### 9.3 Reduced motion

The stacked cut (§9.1): worlds simply present, in order, at full contrast; no enter-from-right, no push, no dissolve, no video autoplay (poster only, or a play control). Complete and premium as a static exhibition.

### 9.4 SEO

Three `<article>`s with `<h2>` names, real positioning text, and internal links to `/work/[slug]` give the crawler a strong work map and pass authority to the case-study routes. No text baked into images; graded visuals have descriptive `alt`.

**Reasoning.** A pinned, scrubbed climax is exactly where portfolios abandon accessibility. Grounding all content in the Set and shipping the stacked cut as a first-class designed state means the most cinematic section is also fully operable by keyboard, screen reader, and no-JS — the credibility flex (`01 §24.7`).

---

## 10. Performance

- **Video loading.** At most **one video in memory** — the present world's. Others show a graded poster only. Loops are muted, `preload="none"`/poster, start on in-view, pause and unload off-screen, honour reduced-data and reduced-motion. Never a hero-background video (`01 §17`). *(All pending assets; stills are the default.)*
- **Image loading.** Graded AVIF/WebP with responsive size sets; the **approaching** world's establishing shot is fetched on approach (priority), layered crops lazy; off-screen worlds' heavy media are not decoded. Exact aspect boxes reserved → CLS ≈ 0.
- **GPU usage.** The exhibits are **DOM + CSS** (graded `<img>`/`<video>` in glass windows), not canvas — parallax/push/dissolve are transform/opacity. DPR capped 1.5. Backdrop blur only on small glass, not the full stage. Grain is one static overlay.
- **Three.js usage.** **Only the Threshold** (the one spectacle) uses the persistent canvas — assembly fragments, orbit, volumetric light — governed by the QualityManager (fewer fragments / no volumetrics / demote on low tier). The three world exhibits use **no 3D**. Floors: low-tier → simplified Threshold + lighter exhibits; no-WebGL → DOM Threshold (a light-gather dissolve) + full exhibits; no-JS → stacked cut.
- **Animation budget.** The procession is transform/opacity scrubs (≤8ms Crew frame, `01 §13`); only one world's media is live at a time; the Threshold is the one place peak GPU is spent, once.

**Reasoning.** Concentrating 3D and peak GPU in the single Threshold, keeping the exhibits themselves DOM+CSS, and holding one video in memory at a time is what lets the *emotional* climax also be a *performance* success — the cinema never stutters, which is itself part of the pitch.

---

## 11. The Exhibition — from the first project to `/work/[slug]`

*Walk through it.*

About's last warm word bleeds forward into the dark, and the dark begins to *gather.* Points of light — the instruments you just saw named — drift toward a single point, and for half a second the frame is as empty as the very first moment of the film. Then it breaks open: threads and panes of glass erupt outward into structure, a world assembling itself around you, the camera curving through it in the one slow orbit the film will ever allow itself. This is the doorway, and you have been brought to it deliberately, after everything else held its breath. Out of the assembling light, the first exhibit resolves.

It arrives from the right — not sliding like a card, but *resolving into a pocket of light* that warms to a clean, daylight-neutral clarity. A real product, its interface graded into the room so its own screen is the brightest thing on the wall, framed in a thin machined window with a lit top edge, a quieter crop receding into the dark just behind it. A beat later, its name lights in serif — **SalHub** — small against the size of the work itself, because the work speaks first. One line beneath: the tension it answered. A row of instruments in monospace. And a single lit threshold: *Enter SalHub.* You understand it in three seconds. *He can build.*

You keep scrolling, and the lights on SalHub come *down* — its clarity cooling, its visual drifting left and dissolving until the wall is nearly black again, a held breath — and from that black a new warmth rises, dusk-toned, human, before you can even read what it is. **StrangerUs** resolves into the warmer light, a different register entirely, and you feel the temperature change before your eyes finish focusing. *He can build differently.* Then, once more, the wall darkens and cools to something crisp and exact and international, and **NZH** arrives in the most engineered light of the three, bilingual and precise. *He can build for anyone.* Three worlds, one grammar, each discovered rather than delivered — an exhibition where the lights change, never a carousel where panels slide.

And when one of them holds you — when you want the whole story, not the wall label — you reach for its threshold. As you do, the light *leans toward you*, the glass edge catching, the door brightening. You cross it. The world's light narrows and carries forward, and the homepage doesn't so much *navigate* as *let you walk through* — the exhibition wall becoming the room beyond it, `/work/[slug]`, where the tension becomes a story, the single image becomes composed close-ups, and the quiet instruments become the decisions behind them. You didn't click a link. You stepped inside.

---

## 12. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- **One legible world at a time**, in a **pinned (sticky-native) stage**; worlds **cross-dissolve by light and depth**, never slide/carousel. *(§2)*
- The **Threshold** is the section's overture and the film's one spectacle; the exhibits themselves are **DOM+CSS, no 3D**. *(§2.2, §10)*
- Exhibit anatomy: graded product visual dominant in a **machined glass window**, layered crops for depth, quiet mark, Marquee title small over the work, one Plate sentence, Console stack, **Enter (primary) → `/work/[slug]`**, quiet **Visit live (secondary)**. *(§3)*
- Hierarchy: **visual → title → sentence+Enter → stack**. *(§6)*
- Transition = **the lights change on a wall**, with a dark echo between worlds. *(§7)*
- Accessibility: all worlds in the **static DOM**; reduced-motion/no-JS/keyboard get the **un-pinned stacked cut**. *(§9)*

**Open (resolve before build):**
- **Video loops and live URLs** — pending; slots reserved, not invented → `12-asset-guide.md`.
- Final positioning sentence per world (grounded in briefs; wording pending) — copy pass.
- Which composed crops punctuate each world's hold, and their art-directed framing → `12`.
- Higher-resolution / art-directed exports of the establishing visuals (current screenshots are full-page) → `12`.
- Exact `w` sub-ranges per world and Threshold fidelity per device tier → prototype + `10-motion-language.md`.
- Project mark (logo) treatment source files (monochrome/graded) → `12`.

**Amendment protocol:** changes to the pin-and-cross-dissolve structure (§2), the one-legible-world law, the Threshold-as-sole-spectacle decision, or the Enter→`/work/[slug]` primary are climax-level amendments — proposed here, dated; anything touching the Threshold must be co-agreed with `10-motion-language.md`, and anything touching assets with `12-asset-guide.md`.

---

*North star for this file: an exhibition, not a portfolio. One commanding work at a time, brought into a pocket of light on a dark gallery wall, its own interface the brightest thing in the room; the lights change — never slide — to reveal the next; and when a work holds you, the light leans toward you and you walk through the door into its story. Conviction, compounding — the payoff the whole film was saving itself for.*
