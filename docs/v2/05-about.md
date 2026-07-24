# V2 — About Specification

> **Status:** Complete — the buildable specification for Section 02, "Closer" (About).
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `03-hero.md`, `04-sidebar.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> **This is not a biography.** It is the moment the visitor stops *looking at* Raheel and starts *listening* to him — where they understand how he thinks. It is personal, cinematic, and engineering-focused. Detailed enough to build without guessing.

---

## 0. Conventions & relationship

- Units (`svh`), timings/eases, and the `glide` curve: per `03 §0`.
- The **sidebar occupies the left rail** (240px, `04`); the About content field begins to its right. All grid columns below are within the *content field*, not the full viewport.
- About is the first section that scrolls under the docked sidebar; the sidebar's `About` chapter lights while this section holds (`04 §4.3`).
- The portrait here is a **separate instance** from the docked chip — the photograph *returns* at Conversational scale. (The chip stays in the rail; the person reappears, closer.)

---

## 1. Purpose

### 1.1 Why this section exists

The Hero produced *arrest* — a composed figure, admired from a distance. About converts that figure into a **voice**. It is the pivot from spectacle to person: the visitor learns not what Raheel has done, but **how he thinks and decides** — the thing a hiring lead actually needs to feel before trusting anything that follows.

### 1.2 The emotional change

**From admiration → trust. From *looking at* → *listening to*.**

Everything is engineered to produce that single shift: the frame goes asymmetric and intimate; the light warms; and for the first time he speaks in complete sentences. If the visitor leaves this section feeling they've *met someone who thinks clearly*, it has worked.

**Reasoning.** Trust requires a voice, not just a face. Placing warmth immediately after the composed opening creates the film's essential contrast — cinema, then humanity — and gives every later claim (the work, the services) a person to belong to. Without this section, the portfolio is impressive and cold.

---

## 2. Composition

### 2.1 The editorial spread

About is composed as a **two-page editorial spread**, deliberately **asymmetric** — the opposite of the Hero's symmetry.

```
 rail │  content field (12-col)
──────┼──────────────────────────────────────────────
      │
      │   ╭─────────╮                                    ← portrait: Conversational
      │   │ PORTRAIT│      I build interfaces the        (46svh), sticky, one-third
      │   │ (convers│      way films are cut —           (content cols ~1–4)
      │   │  -ation)│      restraint, rhythm,
      │   ╰─────────╯      one idea per frame.            ← monologue: right page
      │   ─────────                                        (content cols ~6–12),
      │   5+ YRS · REMOTE   The web is the most            measure-read (680px),
      │   (Console fact)    expressive medium we have.     one line lit at a time
      │                     …
```

- **Left page (content cols ~1–4):** the portrait at **Conversational** scale (`46svh`), positioned to one third, **sticky** (holds vertically centred in the viewport while the monologue scrolls past). Beneath it, one Console "fact" — a museum label, not a résumé.
- **Right page (content cols ~6–12):** the monologue, `measure-read` (680px), Plate at line scale, one sentence lit at a time.

### 2.2 Portrait placement

Conversational scale, one-third horizontal position, sticky-centred vertically. The figure is *closer and off-centre* — the camera has stepped sideways and in from the Hero's locked centre. Same grade, edge-dissolve preserved; the key light warms (§2.5).

### 2.3 Typography

- Monologue: **Plate line (27px)**, `bone-100` when lit, sentence case, generous leading. Mid-scale — larger than body, far smaller than the name; the *forbidden gap* keeps it clearly "spoken," not "titled."
- Fact caption: **Console-sm (13px)**, `bone-45`, one line beneath the portrait.
- Hidden section heading: a visually-hidden `<h2>` "About" (the frame shows no headline — §8).

### 2.4 Negative space & visual rhythm

- The freed two-thirds is **mostly dark**, holding one lit line at a time. Emptiness is the point: a quiet room with one lamp and one voice.
- **Rhythm = one line, one breath.** Lines are distributed vertically so the visitor descends through them one at a time (§5.2); the eye moves at the pace of light, never faced with a wall of text.
- Between the monologue and the closing line, a `space-7` rest before intent lands.

### 2.5 Camera framing

**A slow lateral track — stepping sideways and closer** — performed *through* the visitor's scroll as the section enters, then locking (the portrait goes sticky). Documentary grammar: the reframe from formal portrait to conversation, which the visitor performs themselves.

### 2.6 Lighting

- The key **warms ~200K toward candlelight** versus the Hero — the difference between meeting someone on stage and talking after the show. Not brighter; *warmer*.
- A faint volumetric softness around the light (a barely-visible glow in the black) — a quiet room with one lamp.
- The monologue's lit line carries no glow of its own; it is simply *found by the reading light*.

### 2.7 Depth

Layers, not shadows (`01 §12`): `night-900` behind the figure → the portrait on the subject plane (full focus, full light) → the monologue on the reading plane → grain over all. The portrait holds the subject plane throughout — the still point, even here.

**Reasoning.** Asymmetry is intimacy; the sticky portrait + one-line-at-a-time monologue turns reading into a paced, cinematic act rather than a text block. Warming the key (not brightening it) is the entire emotional move of the section rendered in light.

---

## 3. Narrative

### 3.1 The story being told

Not a history — a **point of view.** Four beats, in the cadence of voiceover:

1. **How he sees the work** (a way of seeing, e.g. composition/restraint).
2. **What he believes** (a value about the web / craft / trust).
3. **How he decides** — the engineering-philosophy beat (a decision-making principle).
4. **The turn to intent** — a closing line that lands forward, handing the visitor to the work.

### 3.2 How much text

- **One monologue, 3–4 sentences. Full stop.** ~30–45 words total.
- Each beat is **one sentence = one line**, 4–9 words, declarative, ending in a period.
- One Console fact beneath the portrait (a single quiet line).
- **If it needs a scrollbar's patience, it is a biography and gets cut.**

### 3.3 Paragraph length & reading rhythm

- There are no paragraphs — there are **lines.** Each is a self-contained sentence.
- Total reading time **12–18s**: ~3–4s per line as the visitor scrolls, one lit at a time.
- Rhythm target: inhale (see the line) → read → exhale (it dims) → next.

### 3.4 Illustrative draft (COPY-PENDING — must be Raheel's real voice)

> These demonstrate structure and cadence only. Final copy is owned by a copy pass; **do not ship placeholders** (`01 §16`).

1. *"I build interfaces the way films are cut — restraint, rhythm, one idea per frame."*
2. *"The web is the most expressive medium we have; craft is what makes people trust it."*
3. *"When two good solutions tie, I ship the one the next engineer will thank me for."*
4. *"The rest of this page is how — and what I've built."* (handoff to Approach/Work)

Console fact: *"5+ years · building for the web"* (base/availability optional — copy-pending).

**Reasoning.** Four short spoken lines is the exact width between "cold" and "rambling." Line 3 is the load-bearing one — it reveals *how he decides* without a single credential, which §4 explains is the whole trick.

---

## 4. Engineering Philosophy — communicating craft without a résumé

This is the section's hardest job: convey problem-solving, decision-making, craftsmanship, and attention to detail **without listing skills or sounding like a CV.** Five rules.

### 4.1 Speak in beliefs and decisions, not credentials

Say *"When two good solutions tie, I ship the one the next engineer will thank me for"* — not *"5 years of React, TypeScript, and clean-code best practices."* A revealed decision-value demonstrates judgment; a credential list demonstrates nothing but a search of keywords.

### 4.2 Show thinking; never claim traits

**Banned words:** *passionate, detail-oriented, hardworking, problem-solver, pixel-perfect, ninja/rockstar,* and every self-adjective. You may never *say* you have attention to detail — you may only *demonstrate* it. Traits claimed are discounted; traits shown are believed.

### 4.3 One idea, not a list

Attention to detail is proven by the monologue being **four perfect sentences**, not by an inventory of the things he's careful about. Restraint in the copy *is* the evidence of the trait the copy would otherwise claim.

### 4.4 The section is the proof

The most powerful engineering statement here is **the section itself.** A hiring lead reading this is *inside* a piece of Raheel's work — the reading-paced light, the flawless type, the engineered-but-invisible motion. The medium is the portfolio. So: this section must be the most impeccably crafted reading experience on the site, because its subject is craftsmanship and its execution is the argument.

### 4.5 The Console fact carries the engineering register

The one dry, exact, monospaced fact beneath the portrait (years, base) is the *instrument reading* — precise, unembellished, numbers-not-adjectives. It signals "engineer" in one line without a résumé, exactly as an instrument label would.

> **Optional engineering-signal device:** a single faint structural hairline or baseline tick near the portrait (a measure mark), read as *instrumentation*, never decoration. Ships only if it reads as engineered, not styled; omit if in doubt (`01 §23.4`).

**Reasoning.** Portfolios fail here by *telling* — a paragraph of adjectives no one believes. NOCTURNE's About wins by *showing*: the judgment is in the decision-line, the craft is in the execution, the engineering register is in the one exact fact. Nothing is claimed; everything is demonstrated.

---

## 5. Motion

All motion obeys the glide + four durations; scrubbed motion is `ease: none` with visual lerp (`01 §14`).

### 5.1 Entrance — the lateral step

As About scrolls into view, the Conversational portrait **arrives by a lateral camera step**: `xPercent −9 → 0` + `opacity 0 → 1`, scrubbed over the section's first ~`20svh` of entry (start `top 85%`, end `top 40%`). The visitor performs the reframe by scrolling. (Reduced motion: present, no step — §8.)

### 5.2 Reading progression — type illuminates, never travels

Each monologue line has two scrubbed phases (the Bible's law for this scene — `01 §13`, *type does not travel, it only illuminates*):

| Phase | Trigger | From → To | Scrub |
| --- | --- | --- | --- |
| **Light** | line `top 82% → 58%` | `opacity 0.22 → 1.0` | 0.6 |
| **Dim (passed)** | line `top 30% → 12%` | `opacity 1.0 → ~0.5` (floor `bone-45`, AA) | 0.6 |

**No positional animation on any line, ever.** Lines brighten and dim in place. The dim floor is a readable tone (§8.4).

### 5.3 Lighting progression

The warm key holds throughout (warmer than the Hero). An optional, imperceptible additional warming as the monologue reaches its intimate middle line — never a visible change, only a felt one. The portrait's key may carry the barely-there breath (§6); no pointer-lean here.

### 5.4 Scroll behaviour

Portrait **sticky** (holds centred) while the monologue scrolls past and lights line by line; native scroll, fully reversible (scroll up and the lines un-light in reverse). The fact caption fades in with the portrait.

### 5.5 Exit transition — the light handoff

The final line lands on **intent** and its light **bleeds forward**: as About releases, the closing line's glow becomes the **first light of the Approach section** — a line of light drawing across the dark (the road/bench being born). The portrait recedes a step as the section exits. *No hard boundary; the monologue's last light is the next section's first.*

**Reasoning.** Illumination-not-travel is what makes About read as *listening* rather than *scrolling a UI* — the discipline that separates this from every other portfolio's fade-in-on-scroll. The light handoff on exit dissolves the seam into the next section, keeping the "one continuous film" promise (`02 §4`).

---

## 6. Interaction

About is a **reading scene** — interaction is by *attention* (scroll), not by pointer. There are **no interactive elements** in the content besides the ever-present sidebar.

| Input | Behaviour |
| --- | --- |
| **Hover** | Nothing in the content responds to hover (the portrait is not a control; the monologue is not links). Reserving hover-inertness *is* a decision — a reading scene should not fidget. |
| **Focus** | No focusable elements here; focus passes through to the next section / sidebar. (If a future "read more" link is added, it inherits the standard lit-underline QuietAction — but the default About has none.) |
| **Touch** | Same as desktop; scroll drives the reveal. No tap targets. |
| **Reduced motion** | All lines present at full readable tone; no light-pacing, no lateral step, no breath. A calm, complete editorial spread (§8.4). |

**Reasoning.** The absence of interaction is a positive design choice: a section whose subject is *how he thinks* should invite reading, not clicking. Anything hoverable here would be a fidget that breaks the intimacy.

---

## 7. Responsive behaviour

Re-block, never squeeze (`01 §22`).

| Device | Composition |
| --- | --- |
| **Desktop (≥1280)** | Full editorial spread: sticky Conversational portrait one-third left, monologue right (`measure-read`), one line lit at a time. Sidebar rail present. |
| **Laptop (1024–1280)** | Same spread, tighter margins; portrait may reduce within the Conversational band; monologue holds `measure-read`. |
| **Tablet (768–1024)** | **Stacks:** portrait top (Conversational re-scaled, centred or one-third), Console fact beneath, then the monologue below — lines still light on scroll. Portrait may sticky-top for the first lines, then release. Sidebar is the collapsed icon-rail (`04 §7`). |
| **Mobile (<768)** | **Figure over voice:** portrait full-ish-width at top (smaller Conversational), fact beneath, then each monologue line holds roughly a screen and lights as it passes reading-centre. Generous vertical dark between lines. Sidebar is the monogram top-bar (`04 §7`). The scene keeps its intimacy — one face, one voice, one line at a time. |

**Reasoning.** The spread is a desktop composition; on a phone the same *narrative* (a face, then a voice speaking one line at a time) is re-blocked vertically rather than squeezed. The emotion survives because the mechanic — one lit line at a time — is viewport-agnostic.

---

## 8. Accessibility, SEO, Reduced Motion

### 8.1 Semantics & SEO

- `<section aria-labelledby>` → a **visually-hidden `<h2>` "About"** (keeps the document outline correct though the frame shows no headline — `04`-style pattern).
- Monologue lines are real, server-rendered `<p>` elements (strong content signal; genuine text, not images).
- The fact is a `<dl>` or `<p>` in Console.
- Portrait `<img>` is `aria-hidden` / `alt=""` (described once in the Hero — `01 §21`).

### 8.2 Screen readers

The monologue reads as ordered paragraphs in DOM order; the hidden heading names the section; decorative light/glow/grain are `aria-hidden`. The content is fully meaningful with all motion and imagery removed.

### 8.3 Keyboard

No interactive content elements → nothing to trap; the sidebar remains keyboard-reachable; visible focus everywhere it applies.

### 8.4 Reduced motion & the readability floor (critical)

- **Reduced motion:** every line renders at full readable tone (`bone-100`/`bone-70`); no light-pacing, no lateral step, no breath. The section is a complete, legible editorial spread.
- **The dim floor is an accessibility contract:** the "passed" state dims only to `bone-45` (AA for normal text) — **never below**; the "unlit" `0.22` state exists *only* under the Crew's scrubbed animation and only for lines about to be read. **The static Set renders all lines at a readable tone**, so no-JS, SR, and reduced-motion visitors always read full contrast. Opacity-dimming is a visual enhancement layered over already-readable text, never the source of truth.

**Reasoning.** The single a11y risk in this scene is contrast-by-opacity. Anchoring the dim floor to an AA tone and rendering full-contrast in the static Set means the beautiful light-pacing never costs a single visitor their ability to read.

---

## 9. Performance

- **Animation budget.** ~4 line-opacity tweens + one portrait transform (lateral step) + sticky positioning — all compositor-only, trivial. Comfortably within the ≤8ms Crew frame (`01 §13`).
- **GPU budget.** About's warm key is a **CSS radial gradient**, not a canvas pass — the persistent canvas is reserved for the Hero and the one spectacle (`02 §5.2`), so a reading scene spends no GPU on 3D. Grain is the one static overlay; **no backdrop blur** in this section.
- **Image usage.** One Conversational portrait, graded AVIF/WebP, ~500–700px served (`sizes` ≈ Conversational box), **lazy-loaded on approach** (not LCP — the Hero portrait is). Exact aspect box reserved → CLS ≈ 0. Uses the same master flagged for ≥1400² re-export (`12`).

**Reasoning.** A reading scene must be nearly free. Using CSS lighting instead of the canvas here is the decision that keeps GPU spend concentrated where it earns its cost (the Hero, the spectacle) and off the many quiet sections.

---

## 10. The About Section as a Cinematic Scene

*What the visitor experiences.*

The opening frame has receded; he is a small, quiet presence now at the left edge, and the room has opened to your right. And then — as you scroll — he *returns.* Not the whole figure this time, but closer: he steps in from the side of the frame and settles at one third of it, the camera having quietly walked sideways and nearer, the way a documentary reframes from a formal portrait to a conversation. The light on him has changed. Not brighter — *warmer*, a couple hundred kelvin toward candlelight, the difference between meeting someone on a stage and sitting with them after the show. Around the lamp, the black goes soft, volumetric, like a quiet room with one light on.

He holds there, steady, while the rest of the frame stays dark and waiting. And then he speaks — but the words do not slide in or fly up. They are *found by the light.* A single line surfaces out of ninety-percent darkness as it reaches the centre of your attention, brightening to full as if a reading lamp had found it: *how he sees the work.* You read it. You keep scrolling, and as that line drifts up and past, it dims — politely, not gone, just *read* — and the next line rises into the light: *what he believes.* You are reading at the pace of light, one thought at a time, and he is right there beside each one.

The third line is the one that matters. It doesn't list what he knows; it shows you how he *decides* — a single sentence of judgment, the kind of thing you only say if you've shipped enough to have earned an opinion. There is no résumé here, no wall of logos, no "passionate, detail-oriented engineer." There doesn't need to be. You are, at this exact moment, *inside* a piece of his work — reading it, feeling how carefully it was made — and the craftsmanship you'd otherwise have to be told about is simply happening to you. Beneath his face, one dry exact line in a monospace hand records the plain fact of the years. An instrument reading. No adjectives.

And then the last line lands — not on a fact, but on *intent*, tilting forward toward what comes next. As you scroll past it, its light doesn't switch off; it *leans ahead*, bleeding into the dark below, and out of that dark a thin line of light begins to draw itself across the frame — the road, the bench, the work, being born from the last thing he said. You came in looking at a man. You leave listening to one. The trust the rest of the film will spend was earned in four sentences and one warm light.

---

## 11. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- About is an **asymmetric editorial spread**: sticky Conversational portrait one-third, monologue right, **one line lit at a time**. *(§2, §5.2)*
- **Not a biography** — four spoken lines, ≤~45 words; the third reveals *how he decides*. *(§3)*
- Engineering craft is **shown, not claimed**: banned self-adjectives; *"the section is the proof."* *(§4)*
- Key **warms ~200K** (not brightens); light handoff bleeds into Approach on exit. *(§2.6, §5.5)*
- Reading scene = **no content interaction**; CSS lighting (no canvas) for GPU. *(§6, §9)*
- **Readability floor** = `bone-45` (AA); static Set renders all lines readable. *(§8.4)*

**Open (resolve before build):**
- Final monologue copy in Raheel's real voice (structure fixed; words pending) — **do not ship the drafts** (§3.4).
- The exact closing/handoff line, dependent on the Approach section's final identity → coordinate with `08-experience.md`.
- Whether the optional engineering-signal hairline ships (§4.5).
- Console fact fields (years / base / availability) — copy-pending (§3.4).
- Conversational portrait master at higher resolution → `12-asset-guide.md`.

**Amendment protocol:** changes to the "not a biography / four lines" narrative shape (§3) or the illuminate-not-travel law (§5.2) are section-level amendments — proposed here, dated; the exit light-handoff must be co-agreed with `08-experience.md`.

---

*North star for this file: not a biography — a point of view. A face that steps closer and warmer, and speaks four perfect sentences one lit line at a time, until the visitor stops admiring and starts trusting. Craft is never claimed here; it is the very thing the visitor is reading.*
