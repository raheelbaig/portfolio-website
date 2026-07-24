# V2 — Brand System

> **Status:** Complete — this is the single source of truth for the V2 visual identity.
> **Codename:** **NOCTURNE.**
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> Read this before designing or building any V2 surface. Every other document in `docs/v2/` inherits from this one and may specialise it, but may not contradict it. Where a later document needs a value not defined here, it proposes it back to this document first. A value that lives in two places is a bug.

---

## 0. How to read this document

Every decision below is written as **Decision → Reasoning**. The reasoning is not decoration; it is the thing you defend in a review. If a future designer wants to break a rule, they must first defeat the reasoning, not just dislike the rule. That is how a brand survives two years of contributors without drifting into mush.

Inspiration reference: **heynesh.com** for its courage — cinematic darkness, real motion, imagery treated with respect. We borrow the *ambition and the discipline*, never the layouts, type, colour, or compositions. NOCTURNE must be unmistakably Raheel's, such that placing our homepage next to heynesh reads as a peer, not a cover version.

---

## 1. Brand Philosophy

### 1.1 The one idea

**NOCTURNE — engineered light in a dark room.**

The portfolio is the recital, not the résumé. It is a builder's workshop after hours: the lights are down, the instruments are precise, and a few warm sources reveal exactly what deserves attention. The visitor is not reading a site; they are being shown work by someone who is quietly, obviously good at it.

**Reasoning.** Raheel's actual product is *modern web experiences powered by AI* — the felt evidence of engineering skill. A portfolio that is loud, busy, or template-shaped contradicts the product before a word is read. The most credible thing a senior frontend engineer can ship is restraint executed flawlessly. NOCTURNE makes that credibility the aesthetic.

### 1.2 The governing tension

**Cinema in the atmosphere. Engineering in the details.**

Every screen must hold both at once: an emotional, filmic mood *and* machined precision in the type, spacing, and alignment. Warmth without precision is a mood board. Precision without warmth is a dashboard. NOCTURNE is the narrow band between them.

**Reasoning.** This tension is the differentiator. Anyone can do dark-and-moody; anyone can do clean-and-technical. Holding both simultaneously is hard, and *being able to hold both is itself the pitch* — it is what hiring a senior engineer with taste actually buys you.

### 1.3 What "premium" means here

Premium is **subtraction, exactness, and confidence** — never ornament, gloss, or maximalism.

- Subtraction: the most expensive-feeling pages have the fewest elements.
- Exactness: nothing is *approximately* aligned, sized, or timed.
- Confidence: we state, we do not sell. No urgency, no badges, no "Awwwards-bait."

**Reasoning.** In 2026 the premium signal has inverted. Effects are cheap and everywhere; restraint and precision are rare and expensive to execute. We compete on the rare thing.

### 1.4 Heritage note

NOCTURNE evolves the V1 concept ("The Still Point"). We keep the north star — *one still figure, a world composed around him* — and re-cut the identity cooler, more architectural, and more instrument-driven. Where V1 was warm velvet and a single lamp, V2 is **the blue hour of a control room with warm signal lights**. This is a deliberate shift, documented in §4.1.

---

## 2. Visual Language

### 2.1 The five materials of the world

Everything on screen is made of exactly five things. If a proposed element is none of these, it does not belong.

1. **The Dark** — the room. A cool near-black field that most of the viewport is made of. Not a background; a space.
2. **Light** — the primary design material. Glow, key light, illuminated type. Attention is spent as light.
3. **Ink** — type. The second lead actor. Warm, precise, editorial.
4. **Glass** — surfaces that hold content: panels, mockup frames, the sidebar. Machined, thin-edged, semi-present.
5. **Signal** — the accent. One warm colour used as *light source*, never as paint.

**Reasoning.** A closed material vocabulary is what keeps a multi-contributor system coherent. When the only nouns are Dark, Light, Ink, Glass, and Signal, no one can invent a "card with a gradient border and an emoji" without it obviously being off-brand.

### 2.2 Composition stance

- **Cinematic framing over gridded filling.** We compose shots. Subjects sit on thirds or dead-centre; supporting matter aligns to the grid; the frame's edges stay calm.
- **Negative space is a feature, not a gap.** Large dark areas are intentional tension, always. If dark space reads as "unfinished," it is because something else in the frame failed to earn it — fix the something else, do not fill the dark.
- **One idea per viewport.** Each screenful says exactly one thing. Two ideas become two screens or lose one.

**Reasoning.** Filling space is the instinct of insecurity. Confident work leaves room. But dark space only reads as confidence when the lit elements are impeccable — hence the rule that empty space is a symptom to diagnose upward, never a hole to plug.

---

## 3. Emotional Goals

The visitor should move through a deliberate emotional sequence. Design decisions are judged by whether they serve the target emotion of their moment.

| Moment | Target emotion | The feeling in plain words |
| --- | --- | --- |
| Arrival | Composure | "This is going to be good. Settle in." |
| First frame (hero) | Arrest | "Oh." — unexpected eye contact with something composed. |
| Getting to know | Trust | Warmth; a person, not a brand. |
| The work | Conviction | "This person thinks clearly and ships." |
| The offer | Imagination | "I can picture my project in this." |
| The ask | Ease | Reaching out feels like finishing a sentence. |
| After | Completeness | A film that ended properly. |

**Reasoning.** A portfolio's job is not to inform; it is to *change how the visitor feels about hiring Raheel* within seconds. Naming the target emotion per moment turns "does this look nice?" into "does this produce composure / arrest / trust?" — a question a team can actually answer and disagree about productively.

**The single overriding emotional rule:** never trade a real emotion for a cheap impression. A clever effect that produces "huh, neat" has *failed* if the moment's target was "trust."

---

## 4. Color System

Colour in NOCTURNE is not decoration; it is **lighting**. We are grading a dark scene, not painting a bright one. The palette is small on purpose — a large palette is the surest sign of a system without a point of view.

### 4.1 The core decision: cool room, warm light

**Decision.** The room is cool (blue-hour black). The light and the ink are warm.

**Reasoning.** A warm/cool tension across the whole page is inherently cinematic and inherently sophisticated — it mimics real night photography, where ambient shadow goes blue and practical lights go amber. It also cleanly separates V2 from V1's all-warm velvet, giving NOCTURNE its own temperature signature while keeping the "one warm light" soul.

### 4.2 The Dark (surfaces)

| Token | Hex | Role | Reasoning |
| --- | --- | --- | --- |
| `night-900` | `#080A0D` | Deepest recess: behind glass, the void behind the portrait, page under-scroll. | Near-absolute, but not `#000`. |
| `night-800` | `#0B0E12` | **Base.** The room itself; the default page field. | Cool undertone reads as "night air," gives warm accents maximum separation. |
| `night-700` | `#12161C` | Elevated surface: panels at rest, sidebar. | One step toward the light = one step forward in depth. |
| `night-600` | `#1A1F27` | Higher surface: hovered panels, active console rows. | Elevation by lightening, never by shadow (see §12). |
| `night-500` | `#252B35` | Hairlines, dividers, glass edges at rest. | The lowest-contrast structural line that still reads. |

**Never use pure `#000000`.** Pure black reads as *absence* (a dead pixel, a missing asset). Our black reads as *a room with the lights down*.

### 4.3 Ink (text)

Text never uses grey. It uses **warm neutrals** — a single warm axis so every neutral feels lit by the same source.

| Token | Hex | Role | Contrast on `night-800` | Usage rule |
| --- | --- | --- | --- | --- |
| `bone-100` | `#F4F1EA` | Primary ink: headlines, the line being read. | ~17:1 (AAA) | The active voice. |
| `bone-70` | `#BDBBB4` | Secondary: supporting copy, passed lines. | ~9:1 (AAA) | Context, not the point. |
| `bone-45` | `#87857F` | Tertiary: metadata, captions, technical margin notes. | ~4.8:1 (AA normal) | Verify per use; large/secondary safe. |
| `bone-25` | `#4C4B47` | Faint: disabled, decorative rules. | fails AA | **Decorative only. Never essential text.** |

**Reasoning.** A warm-neutral ink ladder (not grey) keeps the whole page on one lighting temperature, which is the difference between "designed" and "assembled." The tiers map to *narrative distance*: full attention → context → record → absent. That mapping is reused by motion (§13) so a "passed" line dims to a defined token, not an arbitrary opacity.

### 4.4 Signal (the accent)

**Decision.** One primary accent — **Sol**, a sodium-vapour amber-gold. One cool structural tone — **Ion**, a desaturated steel-cyan. Signal is *light*, never fill.

| Token | Hex | Role |
| --- | --- | --- |
| `sol-400` | `#F2B45C` | **Primary accent.** The warm practical light: the single CTA, focus, the one thing to look at. |
| `sol-300` | `#F8CD8A` | Bloom / halo of Sol only. Never a solid fill. |
| `sol-600` | `#C98F3E` | Sol pressed / underlines / hairline accents where a solid is unavoidable. |
| `ion-400` | `#84A7B8` | The machine voice: technical labels, code, the AI/instrument register, cool UI states. |
| `ion-600` | `#4A5E68` | Ion at rest / structural cool lines. |

**Hard rules for Signal:**
- **One strong Sol moment per viewport.** If two things glow warm, neither is special. This is a review rule with the force of law.
- **Sol is never large flat fill.** No amber buttons-as-blocks, no amber panels. Sol appears as glow, thin illuminated edges, a single lit word, or a focused halo.
- **Ion never competes with Sol.** Ion is always quieter and cooler; it is instrumentation, not attention. If a screen needs Ion to shout, the screen is wrong.
- **No third accent, ever.** Success/error states borrow from the system (see §4.5), not from a new hue.

**Reasoning.** A single warm accent used *as a light source* is the entire cinematic trick — it makes the dark mean something and makes attention direct-able. Amber specifically reads as "practical light in a real space" (sodium lamps, filament bulbs, dawn) rather than "brand colour," which keeps it emotional instead of corporate. Ion exists because engineering needs a voice that is legibly *not* the emotional one; pairing warm-emotion with cool-machine literally colours the brand's core tension.

### 4.5 Semantic states

We do not introduce new hues for success/error/warning. We modulate the existing system:

- **Positive / confirmed:** Sol at reduced intensity + a check. (Warmth = good.)
- **Attention / caution:** Ion at raised intensity. (Cool alert, never alarmist.)
- **Error / destructive:** a single reserved desaturated red `#C46A5A` (token `ember-danger`) — the *only* red permitted anywhere in the system, used exclusively for genuine data-loss or failure states, never for decoration or emphasis.

**Reasoning.** Semantic colours are where design systems get ugly — a portfolio does not need a five-colour status rainbow. Reusing Sol/Ion keeps state changes on-brand; the one reserved red exists because a real destructive action must be unmistakable, and borrowing the accent for danger would be a lie.

### 4.6 Colour usage law

- 60%+ of any viewport is `night` (the Dark). Non-negotiable.
- Ink covers most of the remainder.
- Signal (Sol + Ion together) is a *rounding error* of the pixels — a few percent, always. Its scarcity is its power.

**Reasoning.** Quantifying the budget stops accent-creep, the most common way premium dark UIs slowly become gamer-RGB dashboards.

---

## 5. Typography System

Type is the second lead actor. NOCTURNE runs **three voices**, mapped directly onto the brand's core tension. Three is the maximum; a fourth voice is a decision to be made in this document, not in a component.

### 5.1 The three voices

| Voice | Character | Carries | Candidate faces (license TBD) |
| --- | --- | --- | --- |
| **Marquee** (display) | High-contrast, editorial, cinematic | The name, project titles, the closing line — the emotional peaks | A contrast display serif (e.g. Reckless / PP Editorial New / Canela-class) |
| **Plate** (text/UI) | Neutral, precise grotesk | Reading copy, subheads, navigation, most UI | A neo-grotesk (e.g. Söhne / Neue Haas Grotesk / Inter-class) |
| **Console** (technical) | Monospaced, engineered, dry | Metadata, years, stacks, code, the AI/instrument voice | A refined mono (e.g. Berkeley Mono / Commit Mono / JetBrains Mono) |

**Decision — the serif marquee is the signature.** V2's biggest type is a contrast serif, not a grotesk.

**Reasoning.** V1 was all-grotesk. Introducing an editorial contrast *serif* for the largest moments does three things at once: it differentiates NOCTURNE instantly, it injects genuine cinema/luxury warmth that pure grotesks cannot, and it completes the tension triad — **serif = cinema, mono = engineering, grotesk = the connective human voice between them.** The pairing itself expresses the brand. Serifs also age far better than trend-driven display grotesks, which matters for a two-year identity.

### 5.2 Type scale

A modular scale for reading sizes (ratio ~1.25 from a 17px base), and a separate *fluid, frame-composed* range for Marquee. **The gap between the two ranges is intentional and load-bearing** — nothing is sized between the largest reading size and the smallest Marquee size.

| Token | Voice | Size (desktop) | Use |
| --- | --- | --- | --- |
| `console-sm` | Console | 13px | Micro-labels, captions |
| `console` | Console | 15px | Metadata, code, stacks |
| `plate-body` | Plate | 17px | Reading copy |
| `plate-lead` | Plate | 21px | Subheads, leads |
| `plate-line` | Plate | 27px | Spoken lines, section statements |
| `plate-line-lg` | Plate | 34px | Section headlines |
| `plate-line-xl` | Plate | 42px | The largest *non-Marquee* type |
| — *the gap* — | — | — | *nothing lives here* |
| `marquee-sm` | Marquee | clamp(48px, 6vw, 96px) | Contact closing action · **showcase world titles (small at distance)** |
| `marquee` | Marquee | clamp(64px, 8vw, 168px) | Large titles — case-study heroes (`/work/[slug]`) |
| `marquee-xl` | Marquee | clamp(72px, 13vw, 220px) | The name — largest type in the product |

**Reasoning.** The forbidden gap *is* the hierarchy. When there is no size between 42px and 48px+, "important" and "monumental" are unmistakably different registers rather than a smooth ramp the eye ignores. Fluid Marquee sizes are composed to the frame (viewport-relative) because a title card is a *composition*, not a font size.

### 5.3 Weights, tracking, casing

- **Marquee:** one or two weights only (Regular + Medium). Tight tracking (−1% to −2%). Sentence case for warmth; the name may be an exception. Serifs at scale need *less* weight, not more — thin air around confident letterforms.
- **Plate:** Regular and Medium. Neutral tracking. Sentence case always. Headlines are declarative sentences with periods.
- **Console:** Regular only. Wide tracking (+4% to +8%) when uppercase (labels); natural tracking when lowercase (values, code). Tabular numerals mandatory.

**Reasoning.** Weight restraint is a premium signal; heavy display type reads as shouting. The Console tracking split (wide-uppercase vs. natural-lowercase) is the visual difference between *a label* and *a value*, which lets the mono voice do two jobs without a second font.

### 5.4 The copy voice (words, not just letters)

- Headlines **state**; they never tease, pun, or exclaim. Target 4–9 words.
- First person is welcome — one person is speaking, and the site never hides behind brand-speak.
- Numbers are exact, never rounded up. The Console voice never sells.

**Reasoning.** Typography and tone are one system. A cinematic serif set with hype copy would be a costume. Precise, quiet, first-person copy is the linguistic form of the same restraint the visuals promise.

---

## 6. Grid System

### 6.1 The frame

- **12 columns**, with an explicit **empty safe margin** on both sides that content never touches.
- Horizontal margins: `clamp(24px, 5vw, 112px)`, always symmetric.
- Gutter: `24px` desktop, tightening on smaller frames.
- **The persistent sidebar** (see `04-sidebar.md`) occupies a fixed rail outside the 12-col content field; the content grid begins after it. The sidebar is chrome, not a column.

**Reasoning.** The empty outer columns are the letterbox — they make every page feel *framed* like a shot rather than filled like a document. Keeping the sidebar out of the content grid means the editorial grid stays a clean 12 everywhere and the sidebar can restyle or collapse without renumbering columns.

### 6.2 Container widths

| Token | Width | Use |
| --- | --- | --- |
| `measure-read` | 680px | Editorial reading measure (monologue, case-study prose) |
| `measure-panel` | 960px | Instrument panels, technical content, mockups |
| `measure-frame` | full (within margins) | Hero, project visuals, full-bleed moments |

**Reasoning.** Three widths, no more. A reading measure exists because line length is a legibility law, not a taste. A panel measure exists because technical blocks want more room than prose. Everything else is the frame. A fourth width is a design review, not a prop.

### 6.3 Cinematic override

Text blocks snap to the grid. **Light, portrait, atmosphere, and full-bleed media are framed by the shot, not the grid** — they may bleed, off-centre, and break columns deliberately. The grid is the crew; the frame is the shot.

**Reasoning.** A rigid grid applied to imagery produces a "component library demo," not a film. Letting atmosphere ignore the grid — while text obeys it — is exactly the cinema/engineering split expressed in layout.

---

## 7. Spacing Scale

Base unit **4px**, expressed on an 8-anchored scale that grows unevenly at the top (cinematic pacing grows in leaps, not linearly).

| Token | Value | Use |
| --- | --- | --- |
| `space-1` | 4px | Icon-to-text, hairline insets |
| `space-2` | 8px | Within a tight element |
| `space-3` | 16px | Within a component |
| `space-4` | 24px | Within a component (loose) |
| `space-5` | 40px | Between components |
| `space-6` | 64px | **Between thoughts** (minimum gap between ideas) |
| `space-7` | 104px | Between passages |
| `space-8` | 160px | **Between scenes** (the dark between frames) |
| `space-9` | 240px | Act breaks / hero breathing room |

**Two laws:**
1. Within a component: `space-1`–`space-4` only.
2. Between thoughts: `space-6` minimum. Between scenes: `space-8`+ of true dark — and **scene gaps are content, not slack; they may never be compressed to fit more in.**

**Reasoning.** The uneven top of the scale (64 → 104 → 160 → 240) mirrors film editing, where rests are dramatic and get *longer*, not shorter, at act breaks. Enforcing a minimum "between thoughts" gap is what prevents the dense, anxious spacing that instantly reads as a template. The two laws make unlawful rhythm literally unavailable to a builder using tokens.

---

## 8. Icon Language

- **Almost none.** Icons appear only where language genuinely fails.
- Style: **geometric line icons, 1.25px stroke, Ion-toned, never filled, never Sol.** A single consistent set; no mixing.
- Size: 16px inline, 20px standalone. Nothing larger; icons are annotations, not illustrations.
- **Never** an icon beside a text label that says the same thing (redundant), never as bullet decoration, never as skill/logo imagery.

**Reasoning.** Icon soup is the fastest way to look like a SaaS dashboard — the exact thing we are not. A near-empty, hairline, cool-toned icon set reads as *instrumentation* (aircraft panel, mixing console) rather than *UI kit*. Keeping icons off Sol protects the one-warm-light budget.

---

## 9. Border Radius

Two radii, chosen to read as *machined*, not *soft*.

| Token | Value | Use |
| --- | --- | --- |
| `radius-precise` | 3px | Default: panels, inputs, mockup frames, buttons — everything structural |
| `radius-glass` | 14px | Large glass surfaces where a precise corner would feel brittle |
| `radius-round` | 9999px | **Reserved** for exactly one element type: the AI attendant's presence |

**Reasoning.** Small radii read as engineered and intentional; large blobby radii read as friendly-consumer-app, which undercuts the senior-engineer signal. The reserved full-round is a semantic marker — roundness means "the intelligence," and nothing else earns it, so its shape alone communicates.

---

## 10. Glass Materials

Glass is how content sits in the dark without becoming an opaque box. Three materials, maximum **two per viewport**.

| Material | Composition | Use |
| --- | --- | --- |
| **Smoke** | `night-800` at ~65% + backdrop blur 20–24px; hairline edge (`night-500`), top edge lit one step brighter | Default panel: the room stays visible behind it |
| **Slate** | `night-700` solid, no blur; lit top edge | When content must be maximally legible (dense data, mockup chrome) |
| **Signal Glass** | Smoke + a 4–6% Sol tint + inner Sol bloom | *Invitational* surfaces only: the primary CTA field, doorways into work |

**Edge law:** borders are *light catching an edge*, not drawn outlines — 1px, `night-500`, with the top edge raised toward a lit tone. No full 4-side high-contrast borders.

**Reasoning.** Backdrop-blurred glass keeps the "one continuous room" illusion — panels feel like they are *in* the space, not pasted over it. Capping at two materials per viewport prevents the layered-glass casino look. Signal Glass is restricted to invitational surfaces so that warm-tinted glass always *means* "step through here," making the material itself a wayfinding cue.

---

## 11. Lighting System

Light is the primary material; this section is effectively our colour-in-motion spec. The whole product obeys **one light rig.**

- **Key light** — a single warm source, high and slightly off-centre (upper-left by default), Sol-temperatured. *Whatever the key light holds is what the frame is about.* Two key-lit subjects in one frame is a frame with two subjects — re-block it.
- **Rim light** — a thin cool Ion separation, used only to part a subject (portrait, hero panel) from the dark. Structural, never decorative: if an element reads clearly without it, it does not get it.
- **Ambient** — a 2–4% Ink lift that keeps pure dark from swallowing form. Ambient never rises "to make things easier to see"; legibility is solved by the key light or by removing content to another frame.
- **Glow / bloom** — the visible breath of a light source, governed by the one-strong-glow-per-viewport budget. **Glow always has a source element.** Free-floating glow — a gradient pretending to be light — is forbidden.
- **Practical lights** — small in-world Sol sources (a CTA field, a doorway, the attendant) that must have a *location and a falloff*, like real lamps in a set.

**Reasoning.** Codifying a single physical light rig is what makes a dark site feel like one coherent space instead of a stack of independently-styled sections. The "key light defines the subject" rule turns lighting into a composition tool a whole team can apply consistently. Banning sourceless glow is the single most important rule for not looking cheap — sourceless glow is the tell of decorative dark UI.

---

## 12. Shadow System

**Decision.** NOCTURNE has **no cast shadows.** Depth is expressed as **layers of dark and steps of light**, never drop shadows.

- Elevation = a surface one step lighter (`night-700` → `night-600`) and/or a slightly brighter lit top edge.
- Recession = a surface one step darker and softer.
- The only permitted "shadow-like" effect is a **local deepening of the dark** behind text over busy imagery (an in-fiction gradient of the room), never a boxed scrim.

**Reasoning.** In a dark room there is rarely a lit surface for a shadow to fall on, so drop shadows read as fake immediately. Expressing depth through light-stepping is both more physically honest and cheaper to render (no shadow passes), which serves the performance budget. It also forces designers to think in *lighting*, keeping §11 and §12 as one idea.

---

## 13. Motion Philosophy

> Full spec lives in `10-motion-language.md`; this section sets the constitution it must obey.

- **Motion is camera and light, never UI.** Every animation must be describable in film terms — dolly, rack focus, cross-dissolve, parallax, a light coming up. If it can only be described as "bounce," "pop," "wiggle," or "slide-in," it does not belong.
- **Inevitable, not impressive.** The best motion is felt, not noticed. If a visitor thinks "nice animation," it was too much.
- **The glide is the only *timed* easing.** One signature ease — a strong ease-out with a soft ease-in head — for everything duration-based. Scrubbed motion is linear (the feel comes from the scroll lerp) and idle motion uses one organic sine curve; the complete easing set and its single sanctioned exception (the Hero key-light swell) are defined in `10 §2`. Springs, bounces, elastic, and overshoot are prohibited.
- **Four durations, no in-betweens:** ~120ms (a light noticing you), ~240ms (an element settling), ~480ms (a scene reframing), ~900ms (camera moves / the one spectacle). Motion picks a rung; it does not invent a value.
- **Restraint budget:** the product gets *one* genuinely virtuosic set-piece. Everywhere else is quiet. Scarcity is what makes the one moment land.
- **Reduced motion is a designed cut, not a stripped fallback** — see §21.

**Reasoning.** A closed motion vocabulary (film verbs, one ease, four durations, one spectacle) is the only way a team keeps motion coherent over years. The "inevitable not impressive" test is the single most useful review question we have, because it correctly kills 90% of the animations designers are tempted to add.

---

## 14. Scroll Philosophy

- **Native scroll is the source of truth.** The browser scroll position is never hijacked, never re-implemented, never smoothed at the document level.
- **Smoothing is visual only.** Any "weight" or "glide" is applied as lerp *inside the visual/animation layer* (camera, parallax, scrub interpolation) — never to the actual scroll position.
- **Scroll honesty:** the scrollbar, keyboard traversal (Space, PgUp/PgDn, Home/End), find-in-page, and browser gestures all behave exactly as the visitor expects. Assistive tech is never trapped.
- **Scroll drives narrative.** The visitor is the camera operator; scrubbed, reversible motion means scrolling back plays the film backward, gracefully.

**Reasoning (and an inherited amendment).** Document-level scroll-hijacking (Lenis-style takeover) quietly breaks find-in-page, native scrollbars, and some assistive tech — violating our accessibility and "engineering credibility" promises to save an effect we can get another way. Applying smoothing only to the visual layer delivers the same felt weight at zero honesty cost. This is a standing constraint carried forward from the project's architecture amendments; do not relitigate it without a very good reason.

---

## 15. Interaction Philosophy

- **The world notices you and lets you go.** Hover/focus responses arrive fast (~120ms) and release slower (~240ms) — attention is quick, forgetting is gentle. This asymmetry is the signature interaction feel.
- **Interaction is a change in light, not geometry.** Elements brighten, their edge catches more light, a glow blooms — they do not scale, jump, or shadow-lift on hover.
- **Focus is lit with the same dignity as hover** — a warm ring + edge, never the browser default, never suppressed.
- **One primary action per view.** Exactly one Sol-lit invitation; everything else is a quiet, underlined-in-light secondary.
- **No decorative interactivity.** Custom cursors, magnetic buttons, hover-parallax-tilt, and particle-on-move exist to prove cleverness; we don't. If an interaction doesn't aid orientation or narrative, it's cut.

**Reasoning.** Light-based interaction keeps every state change inside the one-light-rig fiction, so hovering never breaks the cinema. The fast-in/slow-out asymmetry is subtle but is *the* thing that makes an interface feel alive rather than mechanical. Banning decorative interactivity protects the senior-engineer signal — gimmick interactions read as junior portfolio, always.

---

## 16. Image Treatment

- **Everything is graded into the room.** No image arrives with its native white background, native contrast, or native colour temperature. Blacks lift to `night`, highlights warm slightly toward Sol, and edges dissolve into the dark where appropriate.
- **Dark-first crops.** Prefer imagery with dark negative space; light-heavy screenshots are darkened, vignetted, or windowed inside glass so they never blow a hole in the room.
- **Grain, always, everywhere, forever** — one fine film grain at 2–3% over the entire product (slightly stronger in the darkest scenes). One grain, never per-section, never animated.
- **No stock photography of people.** The only human in the product is Raheel.

**Reasoning.** Ungraded imagery is the fastest way to shatter a cinematic dark world — a bright, cool screenshot dropped into a warm dark room looks like a bug. Grading everything into a single lighting temperature is the post-production step that makes disparate assets feel shot on one set. The universal grain is a unifier and a texture that reads as *film*, quietly premium.

---

## 17. Video Treatment

- **Default position: no video.** Project motion is shown by animating the real interface (as a live/looped exhibit) or not at all.
- If video is unavoidable: **muted, short, seamless loop, poster-first, plays only in view, respects reduced-data and reduced-motion.** Graded to the room like any image. No controls chrome unless the video is the content.
- **Never** autoplaying sound. **Never** a background hero video used as decoration.

**Reasoning.** In a portfolio *about craft*, a video usually signals that the craft couldn't be rebuilt — the more impressive move is real, running interface. Video also threatens the performance budget and the "engineering is the aesthetic" promise. Permitting it only under strict, honest constraints keeps the door open without inviting the lazy background-video trend.

---

## 18. Device & Mockup Language

- **Frames are machined, not skeuomorphic.** No glossy iPhone renders, no floating perspective laptops with reflections. Mockups are minimal glass windows (`radius-precise`, Slate or Smoke, lit top edge) that present the interface like a specimen on a bench.
- **Straight-on or single subtle tilt** — one consistent angle per surface; never a scattered perspective collage.
- **The interface is the hero, the frame is silent.** Chrome recedes; the screenshot's own graded light carries the shot.
- **Consistency is law:** same locale, same demo data, same theme, same density across all shots of one project. Mixed states read as unfinished.

**Reasoning.** Realistic device renders are a consumer-marketing trope that fights our engineered, cinematic register — they say "product ad," we say "workshop." Presenting UI as a lit specimen keeps the focus on the work and matches the instrument/console metaphor. The consistency law is what separates a portfolio from a screenshot dump.

---

## 19. Portrait Treatment

The portrait is the product's lead actor and is *directed*, not placed.

- **One master image**, graded into the world: blacks lifted to `night`, skin warmed toward the key, **edges dissolved into the dark** with a soft mask so the figure *inhabits* the room. Never a hard-cut sticker, never a drop shadow, never an outline glow.
- **Lighting must match the world's rig:** high, slightly off-centre warm key + a thin cool Ion rim on the far shoulder. This single rule fuses person and world into one fiction.
- **Three sanctioned scales, and the gaps are the meaning:** Monumental (hero/contact, ~60–75% of frame height), Conversational (about, chest-up, one-third position), Distant (career/services, a small figure at the edge or end of a path). No intermediate scales.
- **The portrait always holds the subject plane** — full focus, full light — even when a world assembles around it. Constancy of focus is the visual spelling of "the still point."
- **Where it never appears:** inside project worlds (shipped work stands alone), in the footer, or in the attendant. The person is a presence, not a logo. **Sanctioned exception (amends this rule):** the docked **sidebar identity chip** (`04 §5`, `§11`) — the constant-presence anchor the thesis requires — shown as the graded photo on rail tiers (`≥768`) and as the **monogram** on compact/phone tiers. This is the *only* place the face persists as chrome; it is an anchor, not a corner logo.

**Reasoning.** A photographed person is the single strongest differentiator a developer portfolio can have — most hide behind logos and screenshots. Directing the portrait (grading, matched lighting, dissolved edges, fixed scales) is what turns "a photo of a guy" into "the protagonist of a film." The subject-plane rule is the mechanical guarantee of the brand's whole thesis: the builder is constant while the world moves.

---

## 20. Project Presentation Language

- **Launch, not documentation.** On the homepage, each project is presented as a *product reveal*: one dominant graded visual, the title (Marquee), one line of positioning, the stack (Console), quiet metadata, and a single clear action. Never a wall of case-study text mid-homepage.
- **One project owns the frame at a time.** Projects enter as composed shots (a considered directional reveal), never as a scrollable grid of equal cards.
- **Depth of engagement is layered:** the homepage rewards the skimmer (essence in one viewport); the diver follows a threshold into a dedicated deep-cut route for the full story, decisions, and details.
- **Each project may carry its own light temperature** (within the palette) as its signature — the trilogy reads as *range within one language*, never as three different websites.
- **Never** "cards." The word is banned in reviews. Surfaces are lit panels / windows / worlds.

**Reasoning.** The failure mode of every developer portfolio is the dashboard-of-cards that kills momentum and flattens great work into equal tiles. Presenting one dominant, cinematic project at a time — with the deep case study moved off the critical path — keeps the homepage a *showcase* and preserves narrative momentum, while still serving the hiring manager who wants to dig. Per-project temperature proves range without breaking the single visual language.

---

## 21. Accessibility Rules

Accessibility is a *design quality*, not a compliance afterthought — it is felt evidence of engineering care.

- **Contrast:** all essential text meets WCAG 2.2 **AA** (4.5:1 normal, 3:1 large); the ink ladder in §4.3 is tuned to pass and must be re-verified whenever a value changes. `bone-25` is decorative and may never carry essential text.
- **Reduced motion:** `prefers-reduced-motion` receives a **designed alternate cut** — the composed, legible, held-frame version of every scene, not a broken or stripped one. Reaching the reduced-motion state should feel like a deliberate edit, not a downgrade.
- **Keyboard:** every interactive element is reachable and operable by keyboard, in a logical order, with a visible lit focus state. No keyboard traps, ever (see §14).
- **Semantics:** correct heading outline, landmark regions, real lists/buttons/links — the DOM is meaningful with all motion and imagery removed.
- **Motion safety:** no strobing, no large-field rapid motion, no parallax that induces vestibular discomfort; the one spectacle respects reduced-motion.
- **Assistive-tech honesty:** decorative elements are hidden from AT; the portrait is described once at introduction and treated as decorative on repeat appearances.

**Reasoning.** For a frontend engineer, inaccessible work is *disproven skill*. Treating the reduced-motion and no-JS states as designed cuts (not fallbacks) is both an ethics stance and a flex — excellence where no one is forced to look is the most credible signal there is.

---

## 22. Responsive Principles

- **Re-block, never squeeze.** Small screens get a re-composed shot (elements re-staged in a new frame), not a proportionally shrunk desktop layout. A phone is a portrait frame, not a narrow monitor.
- **Breakpoints follow frame shape, not device marketing names.** We think in aspect and available frame, not "iPhone/iPad/desktop."
- **The film survives every frame.** Every scene has a composed mobile cut that preserves its narrative and emotion; if a scene can't survive re-blocking, the scene is too complex.
- **Touch is first-class.** Hover-dependent meaning always has a non-hover equivalent; hit targets are ≥44px; the sidebar has a defined touch form (see `04-sidebar.md`).
- **Type scales fluidly at the top, steps at the bottom.** Marquee is viewport-composed; reading sizes step at breakpoints to protect measure and rhythm.

**Reasoning.** Squeezing a desktop composition is why most cinematic sites collapse into mush on mobile. Re-blocking treats each viewport as its own shot, which is more work and the entire point — it is where the craft shows. Aspect-based breakpoints keep the *composition* correct across the real diversity of 2026 devices instead of chasing model names.

---

## 23. Things We Never Do

A negative space is as defining as a positive one. We **never**:

1. Use pure `#000` or pure `#FFF`.
2. Introduce a third accent hue, or use Sol as a large flat fill.
3. Show more than one strong glow / one primary action per viewport.
4. Use sourceless glow, mesh gradients, or "gradient pretending to be light."
5. Cast drop shadows.
6. Use bounce, spring, elastic, or overshoot motion.
7. Hijack, smooth, or re-implement document scroll.
8. Ship a custom cursor, magnetic buttons, or hover-tilt gimmicks.
9. Use skill bars, percentage meters, badges, chips, pills, or logo walls.
10. Call anything a "card," or present projects as a grid of equal tiles.
11. Use stock photos of people, glossy device renders, or decorative background video.
12. Autoplay sound.
13. Mix icon styles, or place an icon next to a label that says the same thing.
14. Add an effect whose only justification is that it is impressive.
15. Let a section look unfinished — dark space must be *earned*, never a hole.
16. Ship inaccessible or reduced-motion-broken states.

**Reasoning.** This list is the fastest onboarding tool in the system. New contributors internalise a brand faster from its prohibitions than its permissions — "we never cast shadows" is unambiguous in a way "use depth tastefully" is not. Each item maps to a specific way premium dark portfolios usually fail.

---

## 24. Design Principles

The seven laws every decision is tested against:

1. **Restraint is the flex.** The premium signal is what we leave out.
2. **Light means something.** Nothing glows without a reason and a source.
3. **One idea per frame.** If a screen says two things, split it or cut one.
4. **State, don't sell.** Confidence is quiet; exactness is the persuasion.
5. **Motion is inevitable, not impressive.** Felt, not noticed.
6. **Cinema in the atmosphere, engineering in the details.** Both, always, in the same frame.
7. **Excellence in the invisible places.** The 404, the reduced-motion cut, the keyboard path, the load time — the details no one is forced to check are the most credible ones.

**Reasoning.** Seven memorable, arguable principles beat a hundred rules no one recalls. In a review, the useful question is always "which principle does this serve, and does it?" — these are chosen to make that question decisive.

---

## 25. Creative Constraints

Constraints are the engine of originality here, not its limit.

- **Five materials** (Dark, Light, Ink, Glass, Signal) — nothing else exists.
- **Two accent tones** (Sol, Ion) — one warm, one cool, and a single reserved danger red.
- **Three type voices** (Marquee, Plate, Console).
- **Two radii** (+ one reserved round).
- **Three glass materials**, max two per viewport.
- **One light rig** across the whole product.
- **One easing curve, four durations.**
- **One virtuosic motion moment** in the entire experience.
- **60%+ Dark** in every viewport; Signal is a rounding error of pixels.
- **One primary action** per view.

**Reasoning.** These caps are deliberately tight because a small, closed vocabulary is what lets many hands produce one coherent thing over two years. When the vocabulary is small, originality is forced into *composition and craft* — the durable kind — rather than novelty of parts, which dates in months. Any expansion of these numbers is an amendment to *this document*, made in review, with reasoning — never an ad-hoc component decision.

---

## 26. Token Architecture (handoff to build)

- **Source of truth is code-side design tokens** (a typed module), from which the CSS/theme layer is generated. Values live once; the CSS is a build artifact.
- The generated theme **clears default framework vocabularies** (default palette, shadows, radii, eases, spacing) so unlawful values are not merely discouraged but *nonexistent* in the utility layer.
- Naming mirrors this document's section language (`night-*`, `bone-*`, `sol-*`, `ion-*`, `space-*`, `radius-*`, `marquee/plate/console`), so a designer's word and an engineer's token are the same word.
- Motion durations, the glide curve, glass specs, and the light rig are tokens too — motion and lighting are part of the design system, not per-component decisions.

**Reasoning.** Making unlawful values *impossible* at the token layer is how the constraints in §25 survive contact with deadlines. Shared vocabulary between design and code removes the translation layer where brand fidelity usually leaks.

---

## 27. Do & Don't (quick gallery)

| Do | Don't |
| --- | --- |
| Grade every asset into the cool room | Drop a bright native screenshot into the dark |
| Spend attention as one warm light | Scatter multiple glows and accents |
| Present a project as a lit reveal | Lay projects out as equal cards |
| Express depth by stepping light | Cast a drop shadow |
| Let dark space create tension | Fill dark space because it "looks empty" |
| Animate like a camera | Slide/bounce/pop like a UI kit |
| State a headline in 6 words | Tease, pun, or exclaim |
| Show the real interface running | Fake it with a glossy device render |

---

## 28. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- Codename **NOCTURNE**; concept "engineered light in a dark room." *(§1)*
- Temperature flipped to **cool room / warm light**, differentiating from V1's warm velvet. *(§4.1)*
- Signature type move: **contrast serif Marquee** + grotesk Plate + mono Console. *(§5.1)*
- **No cast shadows**; depth by light-stepping. *(§12)*
- **Native scroll only**, visual-layer smoothing (inherited amendment reaffirmed). *(§14)*
- One reserved danger red; no third accent. *(§4.5)*

**Open (decide before the surface that needs them):**
- Final licensed typefaces for all three voices (candidates listed; licensing + performance/subsetting TBD). → resolve before `03-hero.md` build.
- Exact per-project signature temperatures for the three worlds. → resolve in `06-project-showcase.md`.
- Whether the AI attendant's reserved round shape carries a unique micro-material beyond Signal Glass. → resolve in `08-experience.md` / attendant spec.
- Precise numeric contrast values for `bone-45` in each real context. → verify with a validator at token implementation.

**Amendment protocol:** any change to §4 (colour), §5 (type), §11 (light), §14 (scroll), or §25 (constraints) is a brand-level amendment — proposed here, with reasoning, dated in this log, before any file or component relies on it.

---

*North star, restated: engineered light in a dark room — one still figure, warm signal in cool dark, cinema in the atmosphere and engineering in every detail. Restraint is the flex; light is the material; the work speaks.*
