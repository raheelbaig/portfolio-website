# V2 — Homepage Architecture

> **Status:** Complete — the blueprint of the V2 homepage.
> **Codename:** NOCTURNE (see `01-brand-system.md`).
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This document decides *what the homepage is, in what order, at what tempo, and how it moves.* It inherits every rule from `01-brand-system.md` and may not contradict it. Section-level detail (exact copy, per-component composition) is delegated to `03`–`09`; this file owns the whole and the seams between the parts.

---

## 0. How to read this / relationship to the brand system

We are designing V2 **from scratch.** V1's twelve-scene structure is discarded as a layout; its *thesis* is kept — **one still figure, a world composed around him, cinema in the atmosphere and engineering in the details.**

The premium principles extracted from references like heynesh.com — and made ours:

1. **Darkness with intent.** The dark is a room, not a theme (`01 §2`).
2. **Motion is camera, not UI** (`01 §13`).
3. **Imagery is graded into the world, never dropped in raw** (`01 §16`).
4. **One idea per viewport; scarcity of spectacle** (`01 §2.2`, `§13`).
5. **The scroll is the projector** — native scroll drives a reversible film (`01 §14`).

We copy no layout. Everything below is composed for NOCTURNE.

---

## 1. The Visitor Journey — second by second

The homepage is a ~90-second film that a visitor can exit at any second having already understood enough. The table is the emotional score; the prose after it is the felt experience.

| Time | Where they are | What they see / do | What they feel | Why this beat exists |
| --- | --- | --- | --- | --- |
| 0.0–1.9s | Loader | Dark. A thin line of light breathes once; the name inhales. | Composure — "settle in." | Reset the pulse from *browsing* to *watching*; promise restraint. |
| 1.9–3s | Hero opens | Aperture parts; a figure is found by warm light, centred, name in monumental serif. | Arrest — unexpected eye contact. | Answer *who / what / how it feels* in one frame. |
| 3–8s | Hero holds | Role, then one line of intent, then the quiet scroll cue. | Recognition of quality. | Front-load the two facts a skimming hiring lead needs. |
| 8–14s | Hero → Sidebar | On first scroll, the figure and name shrink and dock into a left rail; the room opens. | Trust that the journey is guided. | Establish the *constant presence* and the wayfinding in one move. |
| 14–30s | About | The figure at one-third; a short first-person monologue lights line by line. | Warmth — a person, not a brand. | Convert the figure into a voice. |
| 30–45s | Approach & Instruments | A compact statement of how he works; the stack as a lit constellation. | Confidence in the craftsman. | Prove the tools before the work uses them. |
| 45–48s | The Threshold | The personal story narrows; light gathers and opens into the work. | Anticipation, then awe. | The one spectacle: the hinge from *him* to *the work*. |
| 48–95s | Selected Work | Three projects, each a full-frame cinematic exhibit entering from the right. | Conviction, compounding. | The emotional centre — proof he ships. |
| 95–105s | Services | The pronoun turns to *you*; three engagements, calm and exact. | Imagination — "I can picture my project here." | Convert conviction into concrete possibility. |
| 105–110s | The Attendant | A small warm intelligence offers to answer questions. | Charm — being anticipated politely. | Demonstrate *powered by AI* as courtesy, not claim. |
| 110s–∞ | Contact | The room from the start, warmer; one line, one lit action. | Ease — finishing a sentence he started. | Ask once, in the calmest voice. |
| — | Coda | A slim credit band. | Completeness. | End the film properly. |

**Reasoning.** Naming the target emotion per second (per `01 §3`) turns every later composition decision into a test: *does this frame produce the feeling in its row?* The journey is deliberately front-loaded (who/what/quality inside 8 seconds) so a hurried visitor is never punished, and back-weighted for time (the work gets half the runtime) because the work is the product.

---

## 2. Section Order & Specifications

Nine surfaces. Fewer, larger, more deliberate than V1. Each is specified below; heights are design targets (`vh` of scroll the section occupies, including its pinned/hold time), reading times are for the unhurried visitor.

### Section map

| # | Section | Scroll height | Reading time | Tempo | Emotion |
| --- | --- | --- | --- | --- | --- |
| 00 | Loader — *Aperture* | overlay (0 added) | 1.9s fixed | held | composure |
| 01 | Hero — *The Still Point* | ~120vh | 5–8s | slow | arrest |
| 02 | About — *Closer* | ~160vh | 12–18s | slow read | trust |
| 03 | Approach & Instruments | ~140vh | 8–12s | medium | confidence |
| 04 | Selected Work (×3) | ~420vh | 40–55s | spectacle → measured | conviction |
| 05 | Services | ~120vh | 8–12s | calm | imagination |
| 06 | The Attendant | ~90vh | 5s to pass | quiet | charm |
| 07 | Contact — *The Invitation* | ~120vh | unlimited | rest | ease |
| 08 | Coda — *Credits* | ~30vh | 2s | still | completeness |

Total scroll ≈ **1200–1300vh.** Long enough to be a film, short enough that no one checks the time.

**Scroll heights above are in `svh`** (`03 §0`) — read every `vh` in this document as `svh`.

### Section ↔ document index

Document numbers are **not** scroll order. Use this map:

| Homepage section | Scroll order | Canonical document |
| --- | --- | --- |
| Loader — *Aperture* | 00 | `02` §00 (+ `10 §6`) |
| Hero — *The Still Point* | 01 | **`03-hero.md`** |
| Sidebar (born from the Hero) | persistent chrome | **`04-sidebar.md`** |
| About — *Closer* | 02 | **`05-about.md`** |
| Approach & Instruments (**Experience**) | 03 | **`08-experience.md`** |
| Selected Work (Threshold + ×3 worlds) | 04 | **`06-project-showcase.md`** |
| Services — *What We Could Build* | 05 | **`07-services.md`** |
| The Attendant | 06 | ⚠ **no doc yet** — see §06 spec gap |
| Contact — *The Invitation* | 07 | **`09-contact.md`** |
| Coda — *Credits* | 08 | `02` §08 (+ `11 §5.8`) |

Cross-cutting authorities: **`01`** (brand/tokens) · **`10`** (motion, numeric authority) · **`11`** (responsive) · **`12`** (assets).

---

### 00 — Loader ("Aperture")

- **Purpose.** The theatre going dark before the projector. Reset attention; promise restraint.
- **Visual composition.** Near-total `night-900`. A single 1px warm line at centre; a whispered wordmark in Console voice, tracking widening like an inhale. Nothing else.
- **Narrative purpose.** The threshold between the outside world and the film.
- **Transition from previous.** N/A (page load). The hero is painted *underneath* from the first frame.
- **Transition into next.** The line widens vertically — an aperture opening — and the dark resolves into the hero *already in progress*. No cut.
- **Height / reading.** Overlay; ≤1.9s hard cap.
- **Motion.** CSS-only, runs with or without JS. Reduced-motion: the overlay never appears.

**Reasoning.** The loader is an overlay over an already-painted hero so it can never delay the largest paint (inherited LCP amendment). Its fixed ≤1.9s and no-JS operation make it a designed threshold, not a spinner.

---

### 01 — Hero ("The Still Point")

- **Purpose.** Introduce the protagonist; produce arrest in one frame.
- **Visual composition.** Full frame. The portrait at **Monumental** scale, centred on the warm key light, edges dissolved into `night`. The name in **Marquee-xl** (contrast serif), occupying the same physical space as the figure (partly behind, partly ahead). Role in Console beneath; one line of intent in Plate a beat later. A single drawn scroll-line at the lower edge. 60%+ of the frame is dark.
- **Narrative purpose.** *Who, what, and how it will feel* — settled in seconds.
- **Transition from previous.** The aperture becomes this frame; the key light swells up as the figure is discovered.
- **Transition into next.** First scroll begins the **hero → sidebar dock** (§3) — the figure and name shrink into the left rail as the room opens below.
- **Height / reading.** ~120vh (100vh hold + ~20vh of dock). Arrest in 5–8s.
- **Motion.** Extremely slow push-in (~2% over ~10s, felt not seen); an idle light-breath; a subtle key-light lean toward the pointer. The one big move is the dock.

**Reasoning.** The name sharing space with the figure is the brand thesis rendered literally. Reserving the exact portrait box up front means zero layout shift when the graded asset loads. See `03-hero.md` for internal detail.

---

### 02 — About ("Closer")

- **Purpose.** Turn the figure into a voice.
- **Visual composition.** Editorial spread. The portrait at **Conversational** scale on the left page (with one Console fact beneath it like a museum label); a short first-person monologue on the right, `measure-read`. The key light warms a few hundred kelvin.
- **Narrative purpose.** Trust — the shift from *looking at* to *listening to*.
- **Transition from previous.** As the hero portrait docks into the sidebar, a *second* instance of the figure resolves here by a lateral camera step — the reframe is performed by the scroll.
- **Transition into next.** The monologue's last line lands on intent; its final light becomes the first light of the Approach section.
- **Height / reading.** ~160vh. 12–18s of reading; the monologue is ≤4 short sentences or it is a biography and gets cut.
- **Motion.** Type does not travel — it *illuminates*: each line brightens into the reading zone and dims once passed. No positional animation while a line can be read.

**Reasoning.** Placing warmth immediately after the composed opening creates the film's essential contrast (cinema then humanity) and gives every later claim a person to belong to. See `05-about.md`.

---

### 03 — Approach & Instruments

- **Purpose.** State *how* he builds, and lay out the tools — briefly, without worship.
- **Visual composition.** A single Plate statement of approach (the working philosophy in 1–2 lines), then the stack as a **lit constellation** — instrument names in Console, grouped by nature (interface / state & data / foundation / intelligence) by proximity and shared pools of light, never boxes or bars. The *intelligence* group carries a slow Ion pulse — a promise planted for the Attendant.
- **Narrative purpose.** Confidence in the craftsman; the receipt for the craft already felt.
- **Transition from previous.** The About light hands off; the constellation resolves out of the dark.
- **Transition into next.** **The Threshold** — the instruments' lights drift and gather toward a point; the personal act narrows and opens into the work.
- **Height / reading.** ~140vh. 8–12s; skimmable in 4.
- **Motion.** Overhead-drift feel; each group lifts a breath as attention passes; the intelligence pulse. Then the gather that becomes the spectacle.

**Reasoning.** Merging career-approach and stack into one compact section (vs. V1's two) protects momentum before the work. Equality of type across all instruments is the fluency claim; no proficiency bars exist to render (`01 §23`). Full career depth lives in `08-experience.md` and, if warranted, a sub-route — not on the critical path.

---

### 04 — Selected Work (the emotional centre)

Specified in full in **§5**. Summary here for the map:

- **Purpose.** Deliver proof; make the projects the emotional core of the site.
- **Composition.** Three full-frame cinematic exhibits (SalHub, StrangerUs, NZH), one owning the frame at a time, each entering from the right.
- **Narrative.** Conviction compounding: *he can build → he can build differently → he can build for anyone.*
- **Transition in.** The Threshold spectacle delivers the visitor into the first project.
- **Transition out.** The last project's light cools and lifts into the Services calm.
- **Height / reading.** ~420vh (pinned sequence). 40–55s.
- **Motion.** The single virtuosic hinge (the Threshold), then *expensive but quiet* per-project reveals.

---

### 05 — Services ("What We Could Build")

- **Purpose.** Turn the film outward; convert conviction into possibility.
- **Visual composition.** Calm and spacious. Three engagements, each one Plate line indexed like a reel (`01`/`02`/`03` in Console) with two Console specifics. The portrait returns small (**Distant**) at the frame's edge — the builder back in the room. Balanced, warm-neutral light; no background state, the bare room.
- **Narrative purpose.** Imagination — the visitor casts their own project into what they've seen.
- **Transition from previous.** The last project's cool light settles into an even, comfortable studio light.
- **Transition into next.** Beneath the final offering, a small point of light detaches and drifts down toward the Attendant — the first element in the film that moves *toward* the visitor.
- **Height / reading.** ~120vh. 8–12s; countable on one hand.
- **Motion.** Offerings surface into light one at a time; the offering under attention lifts a breath. The film is exhaling.

**Reasoning.** Deliberate plainness reads as honesty — services in the film's calmest voice are confidence, not sales. See `07-services.md`.

---

### 06 — The Attendant

- **Purpose.** Demonstrate *powered by AI* as a lived courtesy.
- **Visual composition.** The drifting point settles into a small, softly-lit round presence (the one reserved round shape, `01 §9`) in the site's own light-language, with one Plate line — *"Ask me anything about Raheel's work."* — and two or three suggested Console questions. It waits; it does not bounce, badge, or beg.
- **Narrative purpose.** Charm — the pleasure of being anticipated.
- **Transition from previous.** The Services point of light arrives and becomes the presence; a gentle rack focus softens the background.
- **Transition into next.** Scrolling past dims the studio light; the presence follows to the frame's edge as a lantern for the last scenes.
- **Height / reading.** ~90vh. 5s to understand and pass; unlimited to engage.
- **Motion.** The Ion pulse promised in §03, and nothing else.

**Reasoning.** Presented in-world and optional, AI becomes attentiveness rather than a bolted-on chatbot — the most buzzword-prone promise made the most polite feature.

> **⚠ SPEC GAP (Design QA, 2026-07-24) — the Attendant has no dedicated `docs/v2/` document.**
> Its **endpoint, streaming, and abuse-hardening** are specified in the V1 **Software Architecture §11 + Amendment 4** (server-side transcript validation, hard input/output token caps, per-client rate limiting, automatic daily-spend kill switch → the designed graceful-absence state).
> Its **visual/interaction** spec currently exists only as this paragraph plus scattered references (`07 §3`, `09 §5`, `10 §14`, `11 §5`).
> **Before the Attendant is built, a canonical spec must be written** (recommended: `docs/v2/13-attendant.md`) covering: the round presence's material/light/pulse, the input affordance and its states, suggested-question behaviour, the follow-at-frame's-edge lantern, engaged vs. at-rest composition, reduced-motion, and the kill-switch absence state. **Until it exists, the Attendant must not be implemented from inference.**

---

### 07 — Contact ("The Invitation")

- **Purpose.** Ask, once, warmly.
- **Visual composition.** The room returns: the portrait centred at **Monumental** as in the hero, but the visitor knows this room now — a degree closer, a degree warmer. One Plate line (the last spoken dialogue), and beneath it a single **Sol-lit action** treated with the typographic dignity the name had. Beside it, small in Console: the email written out, and socials. No form, no fields, one ask. The action is the brightest object in the frame — the only time the key light's focal point is an action.
- **Narrative purpose.** Ease — the natural last line of the story.
- **Transition from previous.** The Attendant's lantern rests at the edge; the studio light dims to the opening register, warmed by everything between.
- **Transition into next.** A gentle settle into the coda.
- **Height / reading.** ~120vh. No clock.
- **Motion.** A slow push-in mirroring the opening, settling slightly closer than the hero ever came; the idle breath returns, slower.

**Reasoning.** Mirroring the opening gives the ask the weight of a completed arc — the visitor answers a person they've spent 90 seconds meeting, not a form at the bottom of a page. See `09-contact.md`.

---

### 08 — Coda (Credits)

- **Purpose.** Close the file with the care it opened.
- **Visual composition.** A slim, evenly-dim band in Console: name, year, email once more, socials, and one dry line of character. Set exactly, aligned perfectly.
- **Narrative purpose.** Completeness — a film that ends properly.
- **Transition from previous.** A settle downward; the projector cooling.
- **Transition into next.** None. Films end.
- **Height / reading.** ~30vh. 2s of glance.
- **Motion.** None.

**Reasoning.** Excellence in the invisible places (`01 §24.7`): the footer is the site's firm handshake goodbye, kept flawless because it is the last thing juries inspect.

---

## 3. Sidebar Behavior — the hero becomes the sidebar

The signature structural move of V2. The persistent left rail is *born from the hero*, so the protagonist is never gone — he recedes into a constant presence the visitor travels beside.

### 3.1 When it happens

On the **first scroll gesture out of the hero**, across the first **`24svh`** of travel — the canonical dock distance; `03 §8` and `04 §2` own the exact `p` keyframes — scrubbed to scroll position (native scroll; visual-only lerp per `01 §14`). It is reversible: scroll back up and the sidebar *returns* to being the hero.

### 3.2 What moves, what stays

| Element | Hero state | Docked (sidebar) state | Behavior |
| --- | --- | --- | --- |
| **Portrait** | Monumental, centred | Distant chip, top of rail | Scales down and travels left along an arc; edge-dissolve preserved; stays lit. It **stays** — the constant. |
| **Name** | Marquee-xl, centre | Console wordmark, top of rail | Cross-fades register (serif → mono) and shrinks; it does not fly letter-by-letter. |
| **Role / intent lines** | Plate beneath name | — | Dim and release upward (passed dialogue), then unmount. |
| **Scroll cue** | Lower edge | — | Fades as the dock begins. |
| **Navigation (chapters)** | absent | resolves in the rail | Fades in *after* the portrait/name settle — appears, never slides mechanically. |
| **The room** | full-frame stage | content field beside the rail | Opens; About composes in the freed space. |

### 3.3 How each behaves

- **Portrait:** one continuous transform (position + scale), never a swap between two images. In the rail it holds a small, quietly-lit Distant presence; it may carry the faintest idle breath so the rail feels alive, never busy.
- **Typography:** the name changes *voice* (Marquee → Console) via cross-dissolve, honouring that the rail is instrumentation, not a title card. No character-level theatrics.
- **Navigation:** a short chapter list (About · Approach · Work · Services · Contact) in Console, with the active chapter lit in Sol and progress implied by light, not a filled bar. It appears by illumination once the dock completes.

### 3.4 Sidebar at rest

A fixed rail (~`space-9` wide on desktop), `night-700` / Smoke, hairline right edge lit at the top. Contents top-to-bottom: portrait chip, wordmark, chapter nav, and a quiet base cluster (email / socials as Console links). It is chrome, outside the 12-col content grid (`01 §6.1`). Full spec in `04-sidebar.md`; this document owns only the *birth from the hero*.

**Reasoning.** Docking the hero into the sidebar solves three problems with one gesture: it establishes persistent wayfinding, it keeps the protagonist present (the "still point" literally stays on screen the whole film), and it makes the transition *out* of the hero a designed camera move rather than a scroll-away. Doing it as one reversible transform (not a hero that unmounts and a sidebar that mounts) is what makes it feel expensive and continuous.

---

## 4. Scroll Rhythm — the tempo map

The film breathes. Tempo is a designed variable, not a side effect of content length. Native scroll is the source of truth; "weight" is visual-layer lerp only.

```
composure   ░░░  Loader        held / silent
arrest      ███  Hero          slow, heavy first scroll (the handshake)
             ·   ── dock ──     one deliberate transform
trust       ░░   About         slow read; light-paced, restful
confidence  ▒▒   Approach      medium; a walk across the bench
AWE         ████ Threshold     SPECTACLE — the one virtuosic moment
conviction  ▓▓▓  Work ×3       measured; each project holds, then releases
imagination ░░   Services      calm; exhaling
charm       ░    Attendant     quiet; frictionless to pass
ease        ░░   Contact       rest; the cushioned bottom
completeness ·   Coda          still
```

- **Fast sections:** none are truly fast; the closest is the Attendant, which must cost a hurried visitor nothing (frictionless pass-through).
- **Slow sections:** Hero, About, Contact — reading and feeling, never rushed.
- **Pause / silence:** the `space-8`+ dark between scenes (`01 §7`); the Loader; the held beat before the Threshold opens; the settle into the Coda. Silence is content.
- **High emotion:** Hero (arrest), the Threshold + Work (awe → conviction), Contact (ease).
- **Low emotion (deliberately):** Approach and the top of Services — the film banking contrast so the peaks land.
- **Spectacle:** exactly one — the Threshold into the work (`01 §13` budget). Everywhere else is quiet.

**The first scroll is the most important interaction on the site.** It must feel weighted and smooth — pulling a heavy curtain on perfect rails — because it is where the visitor decides to trust the rest of the journey.

**Reasoning.** A cinematic site fails when every section moves at the same speed — the eye stops distinguishing importance. Designing rests as long as the peaks are loud is what makes the peaks read as revelation. Rationing spectacle to one moment is the entire premium strategy: restraint everywhere buys brilliance once.

---

## 5. Project Showcase Architecture — the emotional centre

> Completely redesigned. V1's launch-frame layout is discarded. This is the surface the whole homepage is built to deliver the visitor to.

### 5.1 The governing idea — "Three Worlds, entered"

The projects are not cards, not a grid, not a scroll of case studies. They are **three worlds you approach one at a time**, each a full-frame cinematic exhibit that enters from the right, holds the frame while it tells its essence, and releases to the next. The homepage **teases**; the full story lives at `/work/[slug]`.

**Reasoning.** The failure mode of every developer portfolio is the dashboard-of-cards that flattens great work into equal tiles and kills momentum. One dominant world at a time, entering like a shot, is what makes the work feel like *product launches* rather than a portfolio grid — and it is where an award-level site distinguishes itself.

### 5.2 The Threshold (the one spectacle) — entering the work

Between Approach and the first project, the film spends its entire wonder budget once:

- The instruments' lights (from §03) drift and converge toward a point; for half a second the frame is as empty as the loader — a deliberate echo.
- Light erupts outward into *structure*: threads and panes of glass resolving into architecture, the sense of a world assembling.
- The camera performs its one orbital move as the first world's establishing visual resolves out of the structure.
- No cut — the momentum *delivers* the visitor into SalHub.

This is the only place in the product where depth, parallax, volumetric light, and orchestrated motion appear at full intensity (`01 §11`, `§13`).

**Reasoning.** Placing the one spectacle at the hinge from *identity* to *proof* reframes everything after it — the projects arrive as revelation, not as a list. Because five restrained sections precede it, it reads as earned.

### 5.3 One world — anatomy of a project exhibit

Each of the three occupies the frame in turn (SalHub → StrangerUs → NZH). The frame while a world holds:

- **The visual (dominant).** The project's real interface, **graded into the room** and presented in a minimal glass window (`01 §18`). It carries the shot's light. On the homepage this is the establishing shot — one commanding image (or a short seamless loop, if a video asset is provided per `12-asset-guide.md`); art-directed crops of the interface may punctuate as the world holds.
- **The title.** Project name in **Marquee**, small at this distance.
- **One positioning line.** Plate — the tension the product answered, one sentence.
- **The instruments.** Stack in Console, as specimen text (never logos, never chips).
- **Quiet metadata.** Role, year, context in Console.
- **The actions.** One primary threshold — *Enter [Project]* → `/work/[slug]` — and, when a live URL exists, *Visit live* as a quiet secondary. (Live URLs are pending per `12`; the layout reserves the secondary without inventing it.)

**Each world keeps its own signature light temperature**, *within the NOCTURNE palette* — the project's real UI colour lives inside its graded window; the chrome, type, and accents around it stay Sol/Ion. The trilogy reads as range within one language:

- **SalHub** — daylight-neutral clarity. The register of trust and utility (a multi-role marketplace).
- **StrangerUs** — the warmest of the three; human-hour tones. The register of people and connection (location-based social).
- **NZH (New ZhengHe)** — cool, exact, international. The register of professional polish (bilingual cross-border platform).

**Reasoning.** Letting each world carry a temperature proves range without three different websites. Grading the real screenshots into the room (rather than showing them raw) is what stops a bright marketing screenshot from blowing a hole in the dark — the single most important rule for making real product imagery feel cinematic.

### 5.4 Choreography — enter, move, expand, exit

The sequence is pinned; vertical scroll advances a horizontal-feeling procession. All scrubbed to native scroll, fully reversible.

- **Enter (right → left).** The incoming world's visual slides in from the right edge with a slow parallax and a light bloom, arriving to settle just past centre. The title and positioning resolve *by illumination* a beat after the visual lands. Copy rises a few pixels to meet it. *Entrance feels like a shot being set, not a card sliding in.*
- **Move / hold.** While the world owns the frame, its visual carries a slow internal drift (the camera never quite frozen); if punctuating crops are used, they cross-dissolve — they never stack or scroll as a feed. The world holds long enough to read three things (name, tension, stack) and no longer.
- **Expand (intent).** On hover/focus of the world's threshold, the visual lifts one step in light and its glass edge catches more — a *lean-in*, not a scale-jump. Activating *Enter* routes to `/work/[slug]`; the world's light narrows into that route's palette so the navigation feels like walking through the door, not a page swap.
- **Exit (left / dissolve).** As the next world's entrance begins, the outgoing world cools, drifts left, and dissolves into the dark — never a hard cut, never a disappearance. The darkness beyond it becomes the next world's canvas.

**Motion character:** expensive and quiet — Apple-keynote / Linear / Stripe restraint, never flashy. One project is fully present at a time; the others are dark. Timing uses the glide and the four durations only (`01 §13`).

**Reasoning.** Right-to-left entrance reads as *forward procession* in left-to-right reading cultures — you are advancing through a gallery. Expanding by light rather than by scale keeps every state change inside the one-light fiction (`01 §15`). Narrowing the world's light into the case-study route makes the homepage-to-detail jump feel like continuous travel, which is what separates a showcase from a link list.

### 5.5 Homepage vs. `/work/[slug]`

- **Homepage teases:** essence in one held frame per world — enough to feel the range and want more. A visitor can pass all three in three scrolls.
- **`/work/[slug]` documents:** the full three-beat story (tension → decision → resolution), composed close-ups, responsibilities, full stack, engineering decisions, and links. These routes already exist and are statically generated; they are reading documents and carry minimal motion.

**Reasoning.** Moving the case-study depth off the critical path is what keeps the homepage a *showcase* and preserves momentum, while still serving the hiring manager who wants the commentary. The homepage sells the film; the detail routes are the director's cut.

### 5.6 Asset honesty

Available now: real screenshots for all three worlds; project logos/brand context; live-site context. **No project video assets currently live in the repo** — video is an *optional enhancement* only where a graded, seamless loop genuinely beats a still (`01 §17`), and its inventory/spec is owned by `12-asset-guide.md`. The showcase is designed to be complete and premium on **graded screenshots alone**; video, if added, upgrades a shot without changing the architecture. The current square hero portrait and the modest screenshot resolutions are flagged in `12` as the two assets to re-export for full fidelity.

**Reasoning.** We design to the assets we have, not the ones we wish for (`01 §16` bans invented content). Making the showcase excellent on stills first means video is a bonus, never a dependency.

---

## 6. Section Composition — the rules of the frame

How every section is composed, so the whole film feels shot by one director.

- **Alignment.** Text snaps to the 12-col grid inside the safe margins; the sidebar sits outside it. Light, portrait, and full-bleed media are framed by the shot, not the grid (`01 §6.3`). Columns 1 and 12 stay empty — the letterbox.
- **Spacing.** Within a component, `space-1`–`space-4`; between thoughts, `space-6`+; between scenes, `space-8`+ of true dark, never compressed (`01 §7`).
- **Negative space.** 60%+ dark per viewport, always intentional. Empty dark that reads as unfinished is a symptom to diagnose upward (fix the lit element), never a hole to fill (`01 §2.2`).
- **Portrait placement.** Three sanctioned scales and positions only: Monumental centre (Hero, Contact), Conversational one-third (About), Distant edge (Services), plus the docked chip (sidebar). Never inside a project world; never in nav or footer (`01 §19`).
- **Text hierarchy.** Marquee for the peaks (name, project titles, closing line); Plate for spoken lines and reading; Console for all instrumentation. The forbidden size-gap between Plate and Marquee is preserved (`01 §5.2`).
- **Lighting.** One key light per frame defines the subject; whatever it holds is what the section is about. Rim only to separate a subject from the dark; ambient 2–4%; one strong glow per viewport with a real source (`01 §11`).
- **Depth.** Expressed as layers of dark and steps of light — no cast shadows (`01 §12`). Foreground content on lit surfaces; atmosphere on darker planes behind.
- **Background.** A small closed set of lighting states — bare stage, key-light falloff, two-layer depth, and (only in the Threshold/Work) the assembled world. Never pattern fills, mesh gradients, or decorative geometry.
- **Camera feeling.** Each section has an implied camera: Hero = slow push-in; About = lateral track; Approach = overhead drift; Threshold = the one orbit; Work = establishing pushes and composed holds; Services = locked tripod; Contact = push-in mirroring the open. The camera moves *through* the visitor's scroll — they perform every move themselves.

**Reasoning.** A shared composition grammar is what makes nine independently-built sections read as one film. Assigning each section an implied camera turns "how should this animate?" into "what shot is this?" — a question with a cinematic, not a UI, answer.

---

## 7. Interaction Rules

| Input | Behaviour | Reasoning |
| --- | --- | --- |
| **Hover** | Response in light, not geometry — brighten, edge-catch, bloom. Fast in (~120ms), slow out (~240ms). | Keeps state changes inside the one-light fiction; the asymmetry is what feels alive (`01 §15`). |
| **Focus** | Lit with the same dignity as hover — a warm ring + edge, never suppressed, never the browser default. | Keyboard users get the cinema, not a fallback (`01 §21`). |
| **Scroll** | Native, source of truth; drives all scrubbed motion; visual-only smoothing. Reversible everywhere. | Honesty + reversibility = "one continuous film" (`01 §14`). |
| **Cursor** | The system default. No custom cursor, no magnetic pull, no trailing glow. | Decorative cursors read as junior; we don't (`01 §23.8`). |
| **Click / activate** | One primary Sol action per view; secondaries are quiet lit-underline. Project *Enter* narrows light into `/work/[slug]`. | Single clear intent per frame; navigation feels like travel. |
| **Navigation** | Sidebar chapter list, active chapter lit in Sol, progress by light not bar. Anchored, deep-linkable. | Wayfinding without chrome noise. |
| **Keyboard** | Full traversal in logical order; visible focus; no traps; Space/PgDn/Home/End behave natively. | Engineering credibility is disproven by a broken keyboard path (`01 §21`). |
| **Touch** | First-class; hover meaning always has a non-hover equivalent; hit targets ≥44px; the sidebar has a defined touch form (`04`). | A phone is a frame, not a narrow desktop (`01 §22`). |

**Reasoning.** Interaction is where the "engineering in the details" half of the brand is proven or lost — a single trapped focus or hover-only affordance undoes the whole premium impression.

---

## 8. Responsive Behavior — designed for every screen, not compressed

Philosophy: **re-block, never squeeze** (`01 §22`). Each viewport is its own composition.

- **Desktop (wide, ≥`cinema`).** The full film: persistent sidebar rail, portrait at full Monumental, projects entering right-to-left with full parallax, the Threshold at full intensity.
- **Laptop (standard desktop).** Same structure; the Threshold may reduce fragment density (quality tier), portrait scales within Monumental band, margins tighten. No structural change.
- **Tablet.** The sidebar becomes a slim top bar or a summonable rail; the About spread stacks figure-over-voice; the project procession becomes a vertical sequence of full-width held exhibits (still entering, still one-at-a-time). Portrait re-blocks per scene.
- **Mobile.** A re-composed portrait film: the hero is a tall portrait frame (figure top, name and intent below); the sidebar collapses to a bottom-or-top nav affordance (defined in `04`); projects are full-bleed vertical exhibits, each holding one screen with its visual, title, one line, and *Enter*; the Threshold simplifies to a light-gather transition (no heavy 3D on low tiers). Every scene has a composed mobile cut that preserves its narrative and emotion.

**Reasoning.** Squeezing a desktop composition is why cinematic sites collapse on mobile. Treating each viewport as its own shot is more work and the entire point — the mobile cut is where craft is proven to the largest share of real visitors.

---

## 9. Performance Constraints

Performance is part of the aesthetic — a cinematic site that stutters breaks its own spell (`01 §1.3`, `§13`).

- **Animation budget.** The Crew (motion layer) targets ≤8ms of its 16ms frame; all timed motion is transform/opacity on the glide; scrubbed motion is `ease: none` with a short lerp. No layout-thrashing properties animated.
- **Video loading.** Default is *no video.* If used: muted, short, seamless loop, poster-first, plays only in view, honours reduced-data and reduced-motion, graded to the room. Never a background hero video (`01 §17`).
- **Image loading.** Graded assets in AVIF/WebP with responsive size sets; the hero portrait is the LCP element — highest priority, preloaded, never lazy. Project visuals load on approach/intent; below-the-fold and detail-route imagery deferred. Reserve exact aspect boxes to hold CLS ≈ 0.
- **GPU usage.** DPR capped (≈1.5 mid-tier, 1 low); depth expressed by light-stepping (no shadow passes); glass blur used sparingly (max two glass materials per viewport). The grain is one fixed overlay, never animated.
- **Three.js usage.** Scoped to exactly what earns it — the stage depth, the Threshold assembly, and the living-portrait light. Everything expressible in DOM+CSS at equal fidelity stays DOM. One persistent canvas behind the DOM; inactive stages fully unmounted; a QualityManager resolves a device tier and can demote or disable the canvas entirely. Three graceful floors: low-tier canvas → no-WebGL DOM cut → no-JS held-frame film — each a designed state.

**Reasoning.** Naming the budgets here (not just in an architecture doc) keeps design decisions honest at the moment they're made — a proposed effect that can't fit ≤8ms or that threatens LCP is rejected in design review, not discovered in a Lighthouse run later.

---

## 10. The Homepage as One Continuous Movie

*Read this aloud. If the words don't move you, the pixels won't either.*

---

The screen is black — not empty-black, *velvet*-black, the black of a theatre after the doors close. A single thread of warm light draws itself across the centre and breathes: brighter, softer, brighter. Beneath it, almost too quiet to read, a name spreads its letters apart like a slow inhale. Two seconds. That's all it asks.

Then the light doesn't fade — it *opens*, parting vertically like an aperture, and you realise the film was already running behind it. A figure is there, found by a warm key light from the upper left, his edges dissolving into the dark so he seems to stand *in* the room rather than on it. His name arrives in a serif built like a movie title, so large it occupies the same space he does — man and name, one object. A beat later, lower and quieter: *Frontend Engineer.* Another beat, quieter still, like a second line of dialogue: one sentence of what he believes. At the bottom edge, a single line of light is slowly drawn downward. It is an invitation to move.

You move. And the whole frame answers — but not by scrolling away. The figure and his name *shrink and travel*, gliding to the left edge of the screen where they settle into a slim rail: the portrait now a small, quietly-lit presence, the name now a precise monospace mark. He didn't leave. He receded into a constant. Below him, by illumination rather than motion, a short list of chapters appears — and the rest of the room opens to your right, ready to be read. This is the promise the whole site keeps: *he stays; the world composes around him.*

In the opened room, he is here again — closer now, off to one third of the frame, and for the first time he speaks in full sentences. The lines don't slide in; they *light up*, one at a time, brightening as they reach the centre of your attention and dimming, politely, once you've passed them. You read at the pace of light. Three or four sentences — who he is, what he believes about the web, why he builds — and the last one lands on intent, its final glow bleeding forward into the next breath of the film.

That glow becomes a statement of *how* he works, and then the tools themselves: names in cool monospace, arranged not in boxes but in quiet pools of light, grouped by nature. One group — the intelligence, the AI — pulses faintly, once every few seconds, a promise made early. The camera drifts across the bench like it's looking down at a workspace, granting each cluster a moment of centre frame.

And then the film holds its breath. The tool-lights lift from their places and drift toward a single point below, converging — and for half a second the frame is as empty as the loader was, a deliberate echo. Then light *erupts outward*: threads and panes of glass resolving into architecture, an entire world building itself in one continuous, orchestral movement, the camera curving around it in the only orbit the film will ever make. This is the one moment the whole experience has been saving its wonder for. You spent it here, and it was worth it, because out of that structure the first world resolves.

It arrives from the right — a product, real and running, graded into the dark so its own light carries the shot. **SalHub.** The name in serif, small at this distance; one line naming the problem it solved; the stack in monospace; the register clean and daylight-neutral — trust, utility. It holds just long enough for you to understand it, then cools and drifts left into the dark, and the darkness beyond it is already the canvas for the next. **StrangerUs** slides in warmer — human-hour tones, the register of people finding each other. Then **New ZhengHe**, cool and exact and international, the crispest light of the three. Three worlds, one grammar, entered one at a time — and beneath each, a quiet door: *step inside for the whole story.* You could. Or you could keep moving; the film rewards both.

The light settles now, even and comfortable, the lighting of a good meeting after the performance is over. The pronoun changes. For the first time the film is about *you* — three ways he could build something, each stated in one calm line, indexed like reels, nothing sold. And there he is again at the edge of the frame, small, back in the room now that the work has spoken. Beneath the last offering, a single point of light detaches and drifts *toward* you — the first thing in the entire film to move in your direction.

It settles into a small, softly-lit presence, round and warm, native to this world — not a chat box thrown over the film, but a made-of-this-light object. One line beside it: *Ask me anything about Raheel's work.* A few questions it could answer, in monospace. It waits. It doesn't bounce or beg. Whether you speak to it or scroll past, it follows you to the frame's edge from here on, a lantern for the last of the film.

And the last of the film is the room from the beginning — the same darkness, the same figure centred and lit exactly as he was in the opening frame, except now you know this room. The light is a degree warmer; the framing a degree closer, the way a film earns its final close-up. One line: *Let's build something worth the light.* And beneath it, glowing warmer than anything else on the screen — the first time the light's focal point has ever been an *action* — a single ask. No form. No fields. Beside it, small, the plain truth of an email address. Pressing it is the cut to black.

After the black, a slim band, evenly dim: his name, the year, the email once more, and one dry, confident line with a wink in it. Set exactly. Aligned perfectly. The last thing anyone inspects, kept flawless — because the details no one is forced to check are the most credible ones of all.

The projector cools. Films end.

---

## 11. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- Nine-surface homepage; V1's twelve-scene layout discarded, thesis retained. *(§2)*
- **Hero docks into the sidebar** as one reversible transform — the signature structural move. *(§3)*
- **The Threshold** (identity → work) is the single reserved spectacle. *(§4, §5.2)*
- Projects redesigned as **three worlds entered one at a time, right-to-left**, homepage teases / `/work/[slug]` documents. *(§5)*
- Video is optional-enhancement only; the showcase is complete on graded stills. *(§5.6)*

**Open (resolve in the owning document before build):**
- Sidebar's exact rest width, mobile form, and progress treatment → `04-sidebar.md`.
- Whether Approach and Instruments are one section or two on mobile → `08-experience.md`.
- Per-world exact signature temperatures (within palette) and which crops punctuate each hold → `06-project-showcase.md`.
- Live project URLs and any video loops → `12-asset-guide.md` (currently pending; layout reserves their slots).
- Final Threshold fidelity per device tier → `10-motion-language.md` + `06`.

**Amendment protocol:** changes to section order (§2), the sidebar birth (§3), the tempo peaks (§4), or the spectacle placement (§5.2) are homepage-level amendments — proposed here, with reasoning, dated in this log, before any downstream doc or component relies on them.

---

*North star for this file: nine surfaces, one film — composure to arrest to trust to awe to conviction to ease to completeness, with the protagonist never leaving the frame and the work at the emotional centre. The homepage teases; the film continues; nothing looks unfinished, because every dark space is earned.*
