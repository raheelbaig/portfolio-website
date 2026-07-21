# Design Language Bible — "The Still Point"

**The single source of truth for every visual decision on raheelbaig's portfolio.**

Upstream documents: the Product Vision (the concept) and the Cinematic Storyboard (the journey). This document defines the *material* those two are made of. When any future decision is ambiguous, it resolves against one sentence:

> **Cinema in the atmosphere, engineering in the details.**

And one test: *would this feel at home in both a film title sequence and a well-built design system?* If only one — cut or refine.

A note on how to read this bible: everything here is a **rule with a reason**. Rules without reasons calcify into style; reasons let future decisions extend the system instead of breaking it.

---

## 1. Brand Personality

### How it should feel

Like being received by someone senior. The site never performs eagerness. It is dark, unhurried, exact, and warm precisely once per scene — the warmth landing harder because of the surrounding restraint. The dominant sensations, in order: **stillness, depth, precision, warmth.**

### The five personality words

**Composed. Precise. Cinematic. Attentive. Understated.**

Every element must be defensible against all five. A component can be precise and cinematic but fail *understated* — it fails. These five words are the design review checklist before anything ships to the canon.

### The shadow list — what this brand is never

Never *busy, playful-cute, loud, corporate, trendy.* The shadow list matters as much as the personality list; most premium brands die by addition, not subtraction.

### How visitors should describe it afterwards

The target sentence from a hiring manager: *"It felt like a film, but everything was exactly where it should be."*
From a peer engineer: *"Annoyingly well-made. There's one moment in the middle — you'll know it."*
From a client: *"I want my product to feel like that."*

If user testing ever returns the words "cool animations," the system has failed — spectacle got remembered instead of the person. The desired memory is always **a composed man in the dark, and a world that answered to him.**

---

## 2. Visual Identity

### Color philosophy

This is a **one-light-source brand**. Color does not decorate; it describes *where light is and what temperature it is.* The palette is therefore tiny and tonal: a stage of blacks, an ink of warm off-whites, and a single accent that behaves as the site's filament — the color of the light itself. Everything else is a dimmed or warmed state of these.

Two temperatures carry all emotional meaning: **warm = human** (presence, voice, invitation) and **cool = engineered** (data, precision, instrumentation). The whole film's emotional score is played on this two-key instrument.

### Primary palette — The Stage

- **Stage Black `#0A0A0C`** — the base of the world. Never pure `#000000`, which reads as absence; Stage Black reads as *velvet* — a lit theater with the lights down.
- **Depth Black `#050506`** — reserved for the deepest layer only (behind the portrait, the loader, scene gaps). The one place near-absolute darkness is allowed, so depth remains legible.
- **Ivory `#F2EFE9`** — the primary ink. A warm off-white; paper by lamplight, never clinical white. All principal text is Ivory or a dimmed state of it.

### Secondary palette — The States of Ivory

Text and elements never use gray hues; they use *dimmed Ivory*, keeping every neutral on the same warm axis:

- **Ivory 100** `#F2EFE9` — active voice, headlines, the line currently being read
- **Ivory 60** ~`#9C9994` — supporting text, passed lines, secondary information
- **Ivory 30** ~`#55534F` — whispers: metadata, footer, the technical margin notes
- **Ivory 12** ~`#26252375` — hairlines and borders (see Border treatments)

### Accent — The Filament

- **Filament `#E8A855`** — the single accent: warm tungsten amber, the color of the key light made visible. It is *light, not paint*: Filament may only appear where the fiction says light is — glows, the active CTA, the timeline's "now," the attendant's pulse, a hovered threshold. It never fills large surfaces, never colors body text, never appears twice in one viewport at full intensity.
- **Filament Bloom `#FFC98B` at low opacity** — the halo state of Filament; only ever as glow, never as a solid.

### The Cool Counterweight

- **Instrument Blue `#8FA3B8`** (used sparingly, always dimmed) — the temperature of the technical voice: timeline years, stack labels, the attendant's speech, tabular data. Cool must always be quieter than warm — Instrument Blue is capped at 60% of the perceptual brightness Filament is allowed. The human voice outshines the machine voice, always.

No other hues exist. No success-green, no gradient-purple, no link-blue. Semantic states are carried by light (brightness, glow) rather than by adding colors.

### Surface colors & glass materials

Surfaces are *panes of the world*, not cards on a page. Three materials only:

- **Smoke Glass** — Stage Black at ~65% opacity with heavy background blur and a 1px Ivory-12 top edge catching light. The default panel: project detail panes, the attendant, navigation when present. It must always reveal that the world continues behind it.
- **Obsidian** — fully opaque `#101013`, used only when content must be maximally legible (long reading, form-like moments). Matte, no blur, no shine.
- **Filament Glass** — Smoke Glass with a 4–6% Filament tint and a faint inner bloom. Reserved exclusively for *invitational* surfaces: the CTA's field, the three project doorways. If it isn't asking the visitor to step somewhere, it doesn't get Filament Glass.

Rule of materials: **maximum two materials per viewport.** Three reads as a UI kit.

### Border treatments

Borders are *light catching an edge*, never drawn outlines. The canonical border: 1px at Ivory-12, brightening toward the top edge (top edge up to Ivory-30) — the physics of overhead light on glass. Corners: a single radius family — 2px for technical elements (instrument-like), 12px for panes (glass-like). Nothing fully round except the attendant's presence. No border ever uses Filament at rest; a Filament edge is an *event* (hover, focus, invitation).

### Glow colors

Glow is the brand's signature graphic device and is strictly budgeted:

- Filament Bloom for human/invitational glow
- Ivory at 8% for neutral "attention lift"
- Instrument Blue at 6% for the technical pulse (the attendant, the AI skill group)

**Glow budget: one strong glow per viewport.** A second element wanting glow must wait for the first to yield. Glows are large and soft (blur radius ≥ 3× the element) — filament halos, never neon edges.

### Noise & grain

A single fine film grain across the entire experience at 2–3% opacity, slightly stronger (4%) in the darkest scenes where banding would otherwise appear. The grain is *stock*, not effect: it must never animate visibly, never vary per section, and never be perceivable as texture — only as the reason the darkness feels like film instead of a screen. One grain, everywhere, forever.

### Background treatments

Backgrounds are lighting states, not images. The permitted repertoire, in ascending order of activity:

1. Flat Depth Black (loader, coda)
2. A single soft radial gradient — the key light's falloff on the stage (hero, contact)
3. Two-layer depth parallax in near-black values (career road, world exteriors)
4. The assembled world (Scene 6 and the project interiors only)

Never: pattern fills, mesh gradients, animated gradient washes, decorative geometry. If a background is noticeable while reading, it is wrong.

### Lighting philosophy (as identity)

One key light exists in this universe, and the entire visual identity is its consequence: Ivory is what it illuminates, Filament is its color made visible, Smoke Glass is what it passes through, borders are where it catches, glow is where it blooms, and black is where it hasn't reached *yet*. Every new visual element must answer: **what is the light doing to you?** An element with no answer doesn't belong in this world. (The full lighting system is Section 7.)

---

## 3. Typography

### The three voices

Typography is the film's dialogue system. Three registers, strictly cast — established in the storyboard, codified here:

**The Monumental voice** (display) — speaks perhaps five times in the whole film: the name, the three project titles, "Let's Connect." A modern grotesk with real presence and slightly tightened, confident forms — the register of a film title. Character requirements: high contrast of scale rather than stroke; excellent at 8rem and above; distinctive enough to be recognized in a screenshot, restrained enough to disappear into authority. (Candidates in the spirit required: a Söhne/Neue Haas–class grotesk with personality in the tight weights.)

**The Editorial voice** (narrative) — the site's spoken lines: the monologue, story beats, offerings, the final invitation. The same family as Monumental where possible (one family, two behaviors) at text-optical sizes and calmer tracking — or a closely matched humanist companion if the display family fails below 24px. Warm, readable, unhurried.

**The Technical voice** (instrumentation) — years, stacks, metadata, the attendant, the footer. A refined monospaced or near-mono face with tabular figures and quiet character (JetBrains Mono / Söhne Mono class). This voice is the Vercel/Linear inheritance and must always look *machined*: exact, small, cool.

### Font pairing rule

Maximum two families across the entire product: the grotesk (carrying Monumental + Editorial as one family at two optical behaviors) and the mono. A third family is prohibited without amending this bible. Pairing tension is the brand in miniature: **the grotesk is cinema, the mono is engineering.**

### Scale

A deliberate two-part scale — cinematic at the top, systematic below:

- **Monumental:** fluid, viewport-relative — the name at roughly 12–14% of viewport width, project titles at roughly 8%, "Let's Connect" at roughly 6%. Display type is composed *to the frame*, like a title card, not to a token scale.
- **Editorial & Technical:** a fixed modular scale, ratio 1.25 from a 17px base → 17 / 21 / 27 / 34 / 42. Editorial narrative sits at 27–34. Technical voice sits at 13–15, *below* base — deliberately small; instrumentation is read up close.

Nothing may be sized between the top of the modular scale (42) and the bottom of Monumental territory. That gap **is** the hierarchy: a size is either dialogue or a title, never an ambiguous in-between.

### Letter spacing

- Monumental: slightly negative (−1.5% to −2.5%) — mass and confidence.
- Editorial: neutral (0 to −0.5%).
- Technical: positive (+4% to +8%), always; wide-tracked small caps or uppercase — the sound of a machine labeling things.
- The loader's name: the one expressive exception — tracking animates wide (+20%) as the "inhale."

### Line height

Monumental 0.95–1.0 (titles are objects, not paragraphs). Editorial 1.5–1.6 (the reading voice breathes). Technical 1.4, and exactly 1.0 within tabular/data settings.

### Capitalization rules

- Monumental: uppercase for the name and project titles only.
- Editorial: sentence case, always — the human voice never shouts. Headlines in Editorial register are sentences, with periods when they are statements.
- Technical: uppercase with wide tracking for labels; lowercase mono for values. (`ROLE` in caps; `frontend engineer` in lowercase mono beside it.)
- Never title case anywhere. Title Case Is How Templates Speak.

### Maximum line lengths

Editorial narrative: 52–64 characters. Technical annotations: 40. Monumental: composed to the frame, but never wrapping to more than two lines — a title that needs three lines needs fewer words. Any text overflowing these measures is a copy problem, not a layout problem; the words get cut, the measure doesn't stretch.

---

## 4. Layout System

### Grid

A **12-column grid with a cinematic center bias.** Columns exist for alignment discipline, but composition follows film framing: the principal subject occupies the center or a rule-of-thirds position; supporting matter aligns to columns 2–11, never touching 1 and 12 (the frame's "safe area," always empty — the letterbox of the experience). Text blocks snap to the grid; light, portrait, and atmosphere are framed, not gridded. The grid is the crew; the frame is the shot.

### Spacing system

A single spatial scale, base 8: **8 / 16 / 24 / 40 / 64 / 104 / 168** (Fibonacci-flavored above 24, so large gaps grow the way cinematic pacing does — unevenly, with intention). Two laws:

1. Within a component: 8–24 only.
2. Between thoughts: 64 minimum. Between scenes: 168+ of true darkness — the black between film frames. Scene gaps are content, not absence; they are timed rests and may never be compressed to fit more in.

### Container widths

- Narrative measure (Editorial text): max 680px.
- Instrument panels (Technical content, panes): max 920px.
- Scenes (imagery, worlds, titles): full-bleed to the frame, respecting only the safe-area columns.
Three containers, no exceptions. A fourth width is a design review, not a tweak.

### Margins

Horizontal safe-area margins: 5% of viewport width, minimum 24px, maximum 96px. Symmetric always — the frame never lists to one side even when composition does. Vertical margins obey section rhythm below.

### Section rhythm

The film alternates **held frames** (hero, invitation — tall, centered, still) with **traveling passages** (road, worlds — long, directional). Rhythm rule: no two consecutive scenes share the same rhythm type; stillness and travel must alternate the way the storyboard prescribes. Each scene's vertical size is set by its storyboard "maximum duration," translated spatially: a scene may never occupy more scroll distance than its content earns.

### White space philosophy

On this site the correct term is **dark space**, and it is the most expensive material in the system. Dark space is where the film breathes, where light gets its meaning, and where the visitor's eye rests between thoughts. The governing ratio: in any average viewport, **at least 60% of the frame is stage** (dark, contentless, or pure atmosphere). If a layout drops below that, content is removed — never compressed. Emptiness here is not minimalism as style; it is *timing* — the silence that makes the next line audible.

---

## 5. Components

Components in this system are **props in the film** — every one must look manufactured by the same fictional workshop: lit from above, edged in caught light, matte or glass, warm when human, cool when instrumental. The unifying checklist for any component: same light (top-edge catch), same materials (Section 2), same radii (2 or 12), same voices (Section 3), same motion (Section 6). Pass all five or it doesn't ship.

**Cards** — The word "card" is banned in reviews; the component is a **pane**: Smoke Glass, 12px radius, top-edge light, content set in Editorial + Technical voices. Panes never sit in equal grids of three with icon-title-text — that is the template silhouette this brand exists to avoid. Panes appear one at a time in the light, or as an intentional asymmetric composition.

**Buttons** — Two only. **The Invitation** (primary): a Filament Glass field with Ivory text, soft bloom at rest amplifying on attention; there is only ever one Invitation visible per viewport. **The Quiet Action** (secondary): Ivory-60 text with a 1px underline of light that brightens on attention; no container at all. There is no third button. Destructive, disabled, ghost, outline variants do not exist in this product's vocabulary.

**Inputs** — As rare as the storyboard demands (the attendant's ask field, at most). An input is a **lit line**: no box — a baseline of Ivory-12 that warms to Filament while the visitor writes, caret in Filament, entered text in Editorial voice (the guest gets the better font). Labels above in Technical voice, uppercase, tracked.

**Navigation** — Nearly invisible by design: a whisper in the top safe area — the name (small, Technical voice) and a single menu affordance. Invoked, navigation is a full **Smoke Glass overlay** listing the scenes as chapters — Roman-numeraled in Technical voice, titled in Editorial — with the current chapter carrying the light. Persistent chrome is capped at 5% of the frame; the film is never behind furniture.

**Glass panels** — See materials (Section 2): Smoke, Obsidian, Filament Glass, used per their casting rules. Panels always enter as *panes catching light* (fade + 8px settle), never sliding in from screen edges like drawers.

**Project cards → Doorways** — Projects are never cards. In overview (end of Scene 6, the triptych recall), each project is a **doorway**: a tall Filament Glass threshold carrying the Monumental title and one Editorial line, glowing faintly, brightening as approached. Inside worlds, project imagery is presented as **exhibits**: full-bleed or large-pane, never thumbnailed, never framed in browser-chrome mockups unless the chrome itself is the story.

**Skill elements** — Never badges, pills, or logo clouds. Each skill is a **specimen label**: the name in Technical voice, evenly sized (equality of type = fluency claim), grouped by proximity and shared pool of light. The AI group carries the slow Instrument-Blue pulse. On attention, a skill lifts one step in brightness — nothing more. Skills are read, not played with.

**Timeline** — The **road**: a 1px line of light, waypoints as small pooled glows, year in Technical voice above the line, meaning in one Editorial line below it. Past waypoints cool and dim; the present waypoint alone carries Filament. The road never becomes a zigzag, snake, or metro map — one line, one direction, like time.

**Icons** — Almost none. This brand speaks in type and light; icons appear only where language genuinely fails (an arrow of travel, an external-link mark, a close). Style: 1.25px stroke, geometric, drawn from the same grid as the mono font, Ivory-60, never filled, never Filament. An icon with a text label next to it is redundant — keep the words.

**Badges** — Do not exist. Anything a badge would say ("NEW", "FEATURED") is either true enough to be said in a sentence by the Editorial voice, or not worth saying.

**Tags** — Exist only as **specimen labels** in Technical voice (comma-separated inline, or a quiet tracked row) — never as bordered chips. `REACT · TYPESCRIPT · SUPABASE` in Ivory-30, one line, done.

---

## 6. Motion Language

### The prime law

**All motion is either camera or light. Nothing moves as "UI."** Before approving any animation, it must be describable in one of two sentences: *"the camera does X"* or *"the light does Y."* If the honest description is "the element does Z" — bounces, pops, wiggles, flips — it is outside the language and cut.

### How things move

Elements do not fly in from off-screen; they are **found by light** (fade from darkness, with a settle of at most 8–12px of travel) or **revealed by camera** (the frame's movement bringing them into view). Distances are small; opacity and light do the emotional work that lesser systems ask distance to do.

### Acceleration and stopping

Everything in this world has **mass**. Movement begins with gentle inertia (never instant full speed) and ends with a long, asymptotic settle — the deceleration of a dolly with a good grip, or of type "settling under its own gravity." Nothing stops abruptly; nothing overshoots and springs back. The canonical curve family: strong ease-out with a soft ease-in head — approximately the feel of `cubic-bezier(0.22, 1, 0.36, 1)` — described here as **"the glide."** Springs, bounces, and elastic curves are prohibited; they belong to toys, and nothing in this film is a toy.

### Motion timing

Four durations, cast like the type registers:

- **Instant — 120ms:** state acknowledgments (a light noticing attention).
- **Gesture — 240ms:** most element transitions (a pane settling, a line illuminating).
- **Passage — 480ms:** compositional changes (a scene reframing, navigation opening).
- **Cinematic — 900ms+:** reserved for camera moves and Scene 6. Never for components.

No in-between values. If 240 feels too quick, the answer is 480, not 320 — a limited tempo palette is what makes the whole film feel conducted rather than assembled.

### Animation hierarchy

At any moment, motion attention is budgeted strictly: **one primary motion** (the thing the scene is doing), **at most two secondary glows/breaths** at sub-perceptual intensity, and *nothing else*. When a primary motion begins, ambient behaviors quietly still themselves. The film has one conductor; sections don't solo over each other.

### Camera movement rules

The camera may: push in, pull back, track laterally, drift degrees of orbit, and rack focus. The camera may not: shake, whip, zoom-bounce, or move without narrative motive. Total orbit is rationed across the film exactly as the storyboard scripts it — hints early, the full quarter-turn spent in Scene 6, residual momentum through the worlds, level tripod stillness in Act III. Camera moves belong to *scenes*, never to hovers.

### Scroll philosophy

The scroll wheel is the dolly grip's hand. Scroll must always feel: **weighted** (smoothed, with the mass law applied), **honest** (content advances proportionally to input; no hijacked distances where one tick teleports a chapter), and **reversible** (every scroll-driven sequence, including Scene 6, plays backward with equal grace). Scroll-driven storytelling is permitted; scroll *capture* — taking control away from the hand — is not. The one axis change (the career road) announces itself within half a second of travel.

### Hover philosophy

Hover is **attention, and the world's response is light** — never geometry. The permitted response set: brightness lift (one step), bloom growth, a border warming, focus sharpening. The prohibited set: scaling, lifting shadows, tilting, translating, revealing hidden content that reflows the page. Hover-in responds at Instant (120ms); hover-out relaxes at Gesture (240ms) — the world notices you quickly and lets go of you slowly. That asymmetry, everywhere, is half of what "attentive" feels like.

### Micro interactions

Every interactive element has exactly three light-states — rest, noticed (hover/focus), engaged (press: a brief dimming, like a held breath, then release) — and no others. Micro-delight is rationed to the places the storyboard plants it (the idle breath, the attendant's pulse, the scroll hint's single slow draw). A micro-interaction that a visitor would *show someone* is already too loud.

### When NOT to animate

- Never during reading: once Editorial text is at full light, everything within the measure is still.
- Never on load of Act III scenes: composure means arriving settled.
- Never two narrative animations simultaneously.
- Never on data/Technical voice content: instrumentation snaps (Instant), it doesn't perform.
- Never repeat an entrance for content re-entering view: elements are found by light once; on return they are simply *there*. The film doesn't rewind its reveals.
- And the governing clause: when in doubt, don't. Stillness is this brand's default state, and every animation is a withdrawal from a finite account that Scene 6 has already mostly spent.

---

## 7. Lighting Language

The complete physics of the one-light world. Every rule in Sections 2–6 is downstream of this one.

**Key light** — Singular, high, slightly camera-left (mirroring the portrait's actual lighting; see Section 8), warm-neutral at rest (~4300K equivalent), warming through the film to ~3600K at the invitation. The key light defines every scene's focal point: *whatever the key light holds is what the scene is about.* Two key-lit subjects in one frame is a scene with two subjects — re-block it.

**Rim light** — A cool, thin separation light (Instrument Blue at whisper intensity) used only to part the portrait and principal panes from Depth Black. Rim is structural, never decorative: if an element reads clearly without it, it doesn't get it.

**Accent light** — Filament, exclusively — the small warm sources within scenes: waypoint pools, the doorways' glow, the invitation's field, the attendant's lantern. Accent lights are *practical lights* in film terms: they exist inside the world and therefore must have a location, a falloff, and a reason.

**Ambient light** — The near-invisible fill that keeps pure black from swallowing form: 2–4% Ivory lift with soft vertical falloff. Ambient never rises to make things "easier to see"; legibility problems are solved by the key light or by removing content into another frame.

**Glow** — Bloom is the visible breath of a light source, governed by the one-strong-glow-per-viewport budget (Section 2). Glow always has a *source element*; free-floating glow (a gradient pretending to be light) is counterfeit and prohibited.

**Reflections** — Restricted to glass materials: the 1px top-edge catch, and — in Filament Glass only — a faint, slow sheen that shifts a few degrees with attention or tilt, as if the pane sat under the real key light. No mirror-floor reflections, no wet-look, no chrome.

**Shadows** — This world has depth of darkness rather than cast shadows: elements do not drop shadows onto each other (there is rarely a surface to receive one). Depth is expressed by *layers of black* — each layer back is one step toward Depth Black and one step softer in focus. The single exception: text protection, where a scene's imagery would fight the Ivory — solved by a local deepening of darkness (a gradient of stage, in-fiction), never a boxed scrim.

**Depth** — Three planes maximum in any frame: subject (full light, full focus), context (dimmed, slightly soft), depth (near-black, softest). The visitor should always be able to name the plane every element lives on. A fourth plane means the frame is overloaded.

**Fog** — Volumetric softness around light sources at the very edge of perception (the "quiet room with one lamp"), permitted in held frames only — never in traveling passages, where it would smear motion. Fog may never be visible as an *effect*; it is only permitted as the reason light has body.

**Particles** — One rule: **no particles.** No floating dust, no starfields, no orbs. The single sanctioned exception is Scene 6, where the converging skill-lights behave as brief, purposeful points during assembly — and even there they are *the skills traveling*, with origin and destination, not ambient sparkle. The moment a point of light has no narrative identity, it is deleted.

---

## 8. Photography Rules

The portrait is the film's lead actor and is directed, not placed.

**Treatment** — One master portrait: the transparent PNG, color-graded into the world — blacks lifted to Stage Black (never crushed below the site's own floor), skin warmed toward the key light's temperature, edges dissolved into darkness with a soft gradient mask so the figure *inhabits* the dark. The cutout must never read as a sticker: no hard alpha edges, no drop shadow, no outline glow. If the source lighting fights the site's key-light direction, the portrait is re-shot or re-graded; the world does not bend its light to a photo.

**Lighting direction** — The portrait's real-world key must match the site's fictional key: high, slightly camera-left, Rembrandt-adjacent, with a subtle cool rim on the opposite shoulder. This is the most important photographic rule in the document — it is what fuses the person and the world into one continuous fiction.

**When it appears** — Exactly as the storyboard casts it: loader-adjacent birth (Scene 2), intimate reframing (3), distant figure on the road (4), implied at the bench (5), the still center of the spectacle (6), returned at frame's edge (10), and centered again for the invitation (12). Seven appearances, one master image, varied only by scale, position, and grade.

**When it disappears** — The three worlds (Scenes 7–9), absolutely. The builder's absence during the work is a design rule with the force of law: shipped work stands alone. The portrait also never appears in navigation, the attendant, or the footer — the person is a presence, not a logo.

**Scale** — Three sanctioned scales: **Monumental** (hero and invitation — the figure at 60–75% of frame height), **Conversational** (About — closer crop, roughly chest-up, one-third position), **Distant** (the road — under 15% of frame height, a figure at the end of the path). No intermediate scales; like the type system, the gap *is* the meaning.

**Depth** — The portrait always occupies the subject plane: full focus, full light. It is the only element in the system guaranteed that plane in every scene it enters. When the world assembles around him in Scene 6, the world may pass through context and depth planes; he never leaves the subject plane. Constancy of focus is the visual spelling of "the still point."

**Cropping** — Crops are cinematic framings only: full figure, cowboy (mid-thigh up), chest-up, and — once, at the invitation, if the grade sustains it — a nearer head-and-shoulders. Never crop at joints, never crop the eyes, never mirror the image (the key light direction would lie). The gaze: toward camera in Scenes 2 and 12 (meeting and asking are eye-contact moments); permitted slightly off-axis elsewhere (a person at work).

---

## 9. Copywriting Tone

The words are the voiceover of the film and obey casting as strict as the type that carries them.

**Headline style (Editorial register)** — Short declarative sentences with periods. A headline states; it doesn't tease, pun, or exclaim. Rhythm target: 4–9 words. *"Five years of building. Here's the road."* Headlines may use the first person freely — this is one person speaking, and the site never hides it behind brand-speak.

**Subheadline style** — One sentence of context beneath the statement, slightly longer (10–16 words), always earning its place by adding a fact or a stake — never restating the headline in softer words. If a subheadline can be deleted without loss, it already has been.

**CTA style** — Invitations, not commands, and never more than three words: *Let's Connect. Enter SalHub. Ask me anything.* Banned CTA verbs: *Submit, Learn More, Click Here, Get Started, Explore* — the verbs of everywhere. Each CTA is written for its moment; no CTA text appears twice in the film.

**Technical language** — Precise and unexplained. The Technical voice states stacks, dates, and outcomes without apology or gloss (`REACT · TYPESCRIPT · SUPABASE`, `2019 — PRESENT`, `SHIPPED 03.2024`). Numbers are exact, not rounded for marketing. The confidence of the technical voice is that it never sells — it *records*.

**Human language** — First person, present tense, concrete nouns, short sentences with occasional dry warmth. The voice of someone senior enough to be plain. It says *"I build interfaces that feel inevitable"* and never *"I'm passionate about crafting delightful digital experiences."*

**Confidence level** — High, expressed through economy rather than adjectives. The rule of self-description: **one claim per scene, proven within that scene.** Superlatives about oneself are prohibited; the site's superlatives are all spent on the work's outcomes, stated as facts.

**The cliché blacklist** — Never: *passionate, pixel-perfect, cutting-edge, seamless, delightful, journey* (as marketing noun), *solutions, leverage, empower, crafting, wizard/ninja/guru, "turning coffee into code."* When a sentence reaches for the blacklist, the sentence is rewritten from the fact underneath it. Facts don't need clichés; only vagueness does.

---

## 10. Premium Details

The layer juries, peers, and the subconscious actually judge. Individually invisible; collectively the difference.

**Subtle delays** — The system's signature timing asymmetry, applied everywhere: the world responds to the visitor at Instant (120ms) and releases them at Gesture (240ms) — noticed quickly, let go slowly. Sequential reveals stagger at 60–90ms — the interval of one intentional glance, never the machine-gun 20ms of animation libraries left on defaults.

**Noise** — The one film grain (Section 2), plus its premium corollary: *no other texture exists.* No noise-on-hover, no dithered gradients, no textured glass. One grain is film; two is a filter pack.

**Cursor behavior** — The system cursor, unmodified. No custom dots, no trailing circles, no magnetic pull — the current signature of every derivative award site. The premium move is abstention. The world responds to the cursor's *attention* (light), never decorates the cursor itself. On touch devices, the same attention-language maps to press states with no loss of meaning — a test the design must pass: *nothing essential lives in hover.*

**Hover timing** — Codified above; the detail worth its own line: hovers never animate properties that reflow neighbors. The world reacts to attention without rearranging itself — composure under observation.

**Page transitions** — Within the film, transitions are the storyboard's own light-and-camera joins. To external destinations (the deep case studies, mail): a brief dim-to-Depth-Black (Gesture speed), like a respectful cut — never an iris, wipe, or spinner. Returning visitors re-enter through a 400ms version of the loader's breath — the theater acknowledging you've stepped back in, without replaying the overture.

**Focus states** — Keyboard focus is lit with the same dignity as hover — a Filament underline or edge, *plus* a 1px Ivory ring for unambiguous visibility — never the browser default, and never suppressed. A keyboard-only visitor must be able to watch the entire film and reach "Let's Connect" with the light always showing them where they stand. Focus order follows narrative order, always.

**Loading philosophy** — One overture (the loader), once per true visit. Everything after is either present or arrives found-by-light; the film never shows skeleton screens, spinners, or progress bars — waiting states are staged as *darkness not yet lit*, indistinguishable from intentional composition. If something cannot load fast enough to hide inside the grammar, it is redesigned until it can.

**The 404** — Titled "**Deleted Scene.**" Depth Black, the film grain, one Editorial line — *"This scene didn't make the final cut."* — and one Quiet Action returning to the film's beginning. Same care, same voices, same light. Sixty seconds of design that signals a thousand hours of standards.

**Reduced motion philosophy** — Not a stripped fallback: an **alternate cut**. When a visitor prefers reduced motion, the film becomes a sequence of held frames — every scene's composed final state, joined by simple dissolves at Gesture speed, all parallax and camera travel removed, all light-states retained (glow, brightness, focus carry the meaning motion carried). The alternate cut is designed, reviewed, and screenshot-tested with the same rigor as the primary — it is the same film, edited for stillness, and a visitor who only ever sees it should still describe the site with the five personality words.

**Sound philosophy** — Off by default, offered once, quietly (a small Technical-voice toggle in the safe area, never a modal). If accepted: a single ambient bed — low, warm, filmic, one palette for the whole experience — with at most two diegetic events (the Scene 6 assembly swell, the invitation's soft resolve). No hover blips, no click sounds, no per-section themes. Declining or ignoring sound must cost the visitor nothing; the film is composed to be complete in silence — sound is the director's commentary, not the film.

---

## Governance

This bible outranks preference. Additions require a reason written in the language of this document (light, camera, voice, material); anything that cannot be described in those terms does not belong to this world. When two rules conflict, the older law wins: **cinema in the atmosphere, engineering in the details** — and when even that is ambiguous, choose the quieter option. This brand is never harmed by restraint.
