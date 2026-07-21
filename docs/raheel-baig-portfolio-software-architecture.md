# Software Architecture — "The Still Point"

**Internal engineering architecture document. Guides all development until superseded.**

Upstream sources of truth: Product Vision, Cinematic Storyboard, Design Language Bible. This document translates the film into a buildable system without betraying either discipline. The architectural north star mirrors the design one:

> **Cinema in the atmosphere, engineering in the details** — which, translated into architecture, means: *the experience layer may be ambitious; the engineering underneath it must be boring, predictable, and correct.*

Every ambitious visual decision upstream is paid for here with a conservative technical one. That trade is the whole strategy.

---

# 1. Overall Technical Architecture

## High-level architecture

The system is three strictly separated layers — deliberately named after the film crew they serve:

1. **The Script (Content layer)** — All words, projects, experience, skills, services, and configuration live as typed, versioned content modules. No copy is ever hardcoded in a component. The site's story can be re-edited without touching a single component file.
2. **The Set (Presentation layer)** — React components: semantic, accessible, server-renderable HTML/CSS implementing the Design Bible's materials, voices, and layout system. The Set must be complete and legible *with zero JavaScript animation running* — this is the architectural foundation of SEO, accessibility, and the reduced-motion alternate cut.
3. **The Crew (Experience layer)** — Camera, lighting, motion, and 3D: the GSAP conductor, the R3F canvas, scroll orchestration, and the living-portrait behaviors. The Crew *observes and enhances* the Set; it never owns content, layout, or document structure.

The dependency rule is one-directional and absolute: **Crew → Set → Script.** The Script knows nothing of React. The Set knows nothing of GSAP or Three.js. The Crew may read both but render neither. Any import that violates this direction fails code review by definition.

One serverless capability sits beside the static site: the **AI Attendant endpoint** (Section 11) — the only runtime backend surface in v1.

## Rendering strategy

**Static-first, always.** The portfolio is a fixed narrative with content that changes on the order of weeks — the correct rendering model is full static generation at build time, served from a CDN edge. Every scene's HTML exists at build. Concretely:

- All pages statically generated; content changes are deployments, not runtime fetches.
- The App Router's server components render the entire Set; client components are leaf-level "hydration islands" only where interactivity or the Crew requires a handle (the canvas mount, the attendant, the navigation overlay, scroll orchestration mounts).
- The AI Attendant is the sole dynamic route — an edge function proxying the model, never touching page rendering.
- No client-side data fetching for content, ever. If a component wants to fetch the Script at runtime, the architecture has been misunderstood.

This buys: instant first paint for the loader-to-hero sequence (the storyboard's 1.5–2s hard limit), perfect crawlability, and a site that works — fully — before a single byte of animation code arrives.

## Separation of concerns

Beyond the three layers, four cross-cutting boundaries:

- **Design tokens are the only bridge between the Bible and code.** Colors, spacing, type scale, durations, easings exist once, as tokens, consumed by both Set (styles) and Crew (animation values). The Bible's rules become enforceable because they are importable.
- **Motion preference is a system-level input,** resolved once at the top (user OS setting + explicit site toggle), streamed to every consumer. No component asks the browser directly; everyone asks the system.
- **Scroll is a single owned service.** One module owns the smoothed scroll position and publishes progress; nothing else attaches its own scroll listeners. (Rationale in Sections 5 and 9.)
- **The canvas and the DOM are peers, not parents.** 3D never renders content; DOM never fakes 3D. Each does what it is best at, synchronized through the conductor.

---

# 2. Folder Structure

```
/                         — repository root
├── app/                  — routes, layouts, metadata (the Set's entry points)
│   ├── (film)/           — route group for the single-page film
│   ├── work/[slug]/      — deep case-study routes (the "director's cut" pages)
│   ├── api/attendant/    — the AI endpoint (edge)
│   └── not-found/        — the "Deleted Scene"
├── components/
│   ├── primitives/       — the Bible's atoms: Pane, Invitation, QuietAction,
│   │                       LitInput, SpecimenLabel, voices (Monumental/Editorial/Technical)
│   ├── patterns/         — molecules: Doorway, Waypoint, Exhibit, ChapterNav, AttendantShell
│   ├── scenes/           — one folder per storyboard scene (01-loader … 12-invitation, coda)
│   └── layout/           — Frame (safe area), SceneGap, StageBackground
├── experience/           — the Crew (no JSX-rendered content in here)
│   ├── conductor/        — master GSAP timeline, scene registration, scroll binding
│   ├── camera/           — camera rig definitions and per-scene camera scripts
│   ├── lighting/         — key/rim/accent light state machine (DOM + 3D consumers)
│   ├── canvas/           — R3F root, scene-6 world, portrait stage, quality manager
│   ├── motion/           — tokenized tweens: foundByLight, settle, bloom, breathe
│   └── preferences/      — motion/sound/quality resolution
├── content/              — the Script
│   ├── projects/         — one module per world (salhub.ts, strangerus.ts, zh.ts)
│   ├── journey.ts        — career waypoints
│   ├── skills.ts         — instrument groups
│   ├── services.ts       — offerings
│   ├── copy/             — every spoken line, keyed by scene
│   ├── attendant/        — the knowledge source (see §11)
│   └── site.ts           — identity, socials, metadata defaults
├── lib/                  — pure utilities: schema validation, formatting, analytics facade
├── hooks/                — React-side subscriptions to experience services
├── styles/               — tokens (source of truth), global styles, grain, fonts
├── public/               — static assets per §10 (portrait/, worlds/, models/, og/)
└── docs/                 — the three upstream documents + this one, versioned with the code
```

**Why each exists, in one line each:** `app` holds only routing/metadata glue so pages stay thin; `primitives` make the Bible's component law importable and unduplicable; `patterns` prevent scenes from re-inventing shared props; `scenes` map 1:1 to the storyboard so the film's structure *is* the code's structure (any storyboard revision has an obvious home); `layout` owns the frame so no scene can violate safe areas; `experience` isolates everything that could be deleted while leaving a perfect static site — that deletability is the layer's definition of done; `content` makes the Script editable by a non-engineer (or future CMS) without fear; `docs` lives in the repo because a source of truth that can drift from the code isn't one.

---

# 3. Routing Strategy

**Page structure.** The film is one route: `/`. This is a narrative decision enforced architecturally — the storyboard is a continuous experience, so it is a single document, not a tab bar of pages. Everything else is supporting material:

- `/` — the film (all twelve scenes + coda)
- `/work/[slug]` — deep case studies ("director's cuts") for salhub, strangerus, zh — statically generated from `content/projects`, one page per world, sharing the world's lighting temperature from the Bible
- `/api/attendant` — the sole dynamic endpoint

**Dynamic routes.** Only `work/[slug]`, generated from the Script at build. Adding a fourth project is: add one content module, redeploy. The route learns about it automatically; no component changes.

**Future expansion.** Reserved namespaces, deliberately unbuilt: `/writing` (blog), `/writing/[slug]`, and a versioned `/api` surface. Reserving them now means future sections join as siblings without restructuring — the film stays the front door; everything else is the archive behind it.

**404.** The `not-found` route renders the "Deleted Scene" exactly per the Bible: same tokens, same grain, same voices — implemented as a real static page (it must be the fastest, most reliable page on the site; a 404 that errors is a double failure). All unknown paths, including retired slugs, resolve here; retired-but-linked content gets explicit redirects instead.

**Metadata strategy.** Metadata is content: every route's title, description, and social imagery derive from the Script (`content/site.ts` + per-project modules), assembled in one metadata utility so tone stays on-voice everywhere (Technical-voice titles: `RAHEEL BAIG — FRONTEND ENGINEER`). Case-study pages generate their own metadata from their world's copy. No page defines ad-hoc metadata inline. (Full SEO treatment: §15.)

---

# 4. Component Architecture

**Philosophy: atomic design, recast in the Bible's vocabulary.** The atomic hierarchy is used, but named honestly for this product — because "atoms/molecules/organisms" drift toward generic UI kits, and this product's Bible explicitly forbids that silhouette:

- **Primitives (atoms)** — the smallest lawful units, each implementing one Bible rule completely: the three type voices, `Pane` (the three materials as variants), `Invitation` and `QuietAction` (the only two buttons — enforced by there being only two button components in the entire codebase), `LitInput`, `SpecimenLabel`, `GlowSource`. A primitive is where a Bible rule becomes physically impossible to violate: e.g., `Invitation` accepts no size or color props — there is one Invitation, as legislated.
- **Patterns (molecules)** — compositions with narrative meaning: `Doorway` (Filament Glass threshold + Monumental title + Editorial line), `Waypoint`, `Exhibit`, `ChapterNav`, `AttendantShell`. Patterns own structure and semantics, never animation.
- **Scenes (organisms/templates)** — one component per storyboard scene, composing patterns with the Script's content for that scene. A scene component's contract: render the complete, static, accessible "held frame" of the scene (its reduced-motion final state), and expose named animation targets for the Crew via a stable ref-registration API. Scenes are the unit of independent maintainability — Rule 4 in §18.
- **Layout components** — `Frame` (safe-area columns, the letterbox), `SceneGap` (the 168px+ darkness between thoughts, as a real component so rhythm is enforced, not remembered), `StageBackground` (the four permitted background states as an enum, making the fifth impossible).
- **Animation components** — there are none, and this is a rule: animation is not a component concern. There is no `<FadeIn>`, no `<Parallax>` wrapper polluting the Set's tree. Instead, scenes register targets; the Crew animates them. This keeps the DOM tree identical with animation on or off — which is what makes the alternate cut, SSR, and accessibility tractable.

**Reusable patterns (conventions all components follow):** every component takes content via typed props sourced from the Script (never imports content directly — testability and future CMS); every component renders meaningfully with JS disabled; variant behavior is expressed as a closed union of Bible-lawful states, never open-ended style props (`className` escape hatches are banned on primitives); and any component needing scroll, lighting, or motion state subscribes through `hooks/`, never to raw browser events.

---

# 5. State Management

The governing principle: **this site has very little state, and the architecture's job is to keep it that way.** A portfolio with a state-management problem is over-engineered by definition. State is sorted into five buckets with different owners:

**Global state (one small store).** A single lightweight store (Zustand-class: subscribable outside React, no provider ceremony — chosen because the Crew, which lives outside the React tree, must read it) holding only what is genuinely global: resolved motion preference, sound preference, quality tier (§8), current scene index, and navigation-overlay open/closed. Target size: under ten fields, forever. Every proposed addition must answer "which two unrelated layers need this?" — one consumer means it isn't global.

**Local state.** The default. The attendant input's draft text, a pane's expanded beat, the sound toggle's confirmation — component-local, always. Anything expressible as local state must be.

**Animation state lives in the animation system, not React.** Tween progress, timeline positions, stagger indices — none of this ever enters React state; putting per-frame values through the React render cycle is the canonical way to lose 60fps. The Crew owns its own clock; React is notified only of *discrete* transitions it must respond to (scene changed, spectacle completed), throttled to meaningful moments.

**Scroll state.** One service in `experience/conductor` owns the smoothed scroll position and derived per-scene progress (0–1). It publishes via subscription for the Crew (per-frame, outside React) and via a coarse hook for the Set (scene index and quantized progress only). No other scroll listeners exist in the codebase — a rule that single-handedly prevents the most common class of scroll-jank bugs.

**AI attendant state.** Its own isolated store (conversation transcript, request status, suggested-question pool), colocated with the attendant feature. It is feature-state, not app-state: the rest of the site must not know the attendant exists. This isolation is also the fallback strategy — if the attendant fails, its store fails alone (§16).

**When NOT to use global state — the checklist:** derived from scroll (subscribe to the service); needed by one component (local); per-frame (Crew's clock); server-derivable content (it's the Script, not state); form drafts (local); "might need it globally later" (later is when it moves). The store is reviewed at every milestone and anything with one consumer is demoted.

---

# 6. Data Architecture

All content is **schema-validated, typed modules** in `content/`. Validation runs at build time — a Script error breaks the build loudly rather than shipping a broken scene silently. Models, with their essential fields:

**Project model** (one module per world — the richest model in the system): slug, title, one-line tension; the three storyboard beats (`tension`, `decision`, `resolution`, each: one Editorial line + optional supporting Technical facts); lighting temperature (the Bible's per-world grade, as a token reference — content declares *which* light, never raw color); stack (specimen labels); role; shipped date; outcomes (exact numbers per the copy tone rules); exhibit assets (references into §10's manifest with mandatory alt text); deep-cut flag and case-study body for `/work/[slug]`; external URL. The model encodes the narrative grammar: a project without three beats fails validation — the storyboard is enforced by the type system.

**Experience model** (`journey.ts`): ordered waypoints — year span, role, organization, one Editorial line of what changed, and an `isPresent` flag (exactly one must be true; validation enforces it — the road's Filament "now" is data-driven).

**Skills model** (`skills.ts`): groups (interface / state & data / foundation / intelligence) each holding specimen names, with the intelligence group carrying a `pulse: true` flag consumed by the Crew. No proficiency percentages exist in the model — the Bible bans skill bars, so the data refuses to store what the design refuses to show.

**Services model** (`services.ts`): three to four offerings — Editorial headline, two Technical-voice specifics, engagement shape. Validation caps the count at four (the Bible: countable on one hand).

**Social links** (`site.ts`): platform, handle, URL, and display order — plus the plain-text email (rendered, per the Bible, written out).

**Testimonials** — modeled now (`quote`, `attributed name/role`, `project slug`), rendered nowhere in v1. The storyboard has no testimonial scene; the model exists so a future scene or case-study sidebar is a content change, not a schema migration. (Testimonials, if ever shown, appear inside the worlds they belong to — never as a carousel scene; noted here so the future doesn't relitigate it.)

**Configuration** (`site.ts` + `content/attendant/config`): identity strings, metadata defaults, feature flags (sound offered? attendant enabled?), and the attendant's guardrails. Flags make features removable by content edit — the correct failure posture for a personal site's experimental features.

**Static content strategy:** everything above compiles into the static build; the Script's directory *is* the CMS for v1, edited in the repo with the same review rigor as code, and shaped deliberately so a headless CMS (§17) can later map onto the existing schemas one-to-one.

---

# 7. Animation Architecture

**The founding separation:** animation is a system, not a sprinkle. All motion lives in `experience/`, is expressed in the Bible's tokens (four durations, the glide easing, the light-verbs), and reaches the DOM only through registered targets. The Set never imports an animation library. Consequences: motion can be globally disabled (alternate cut) by not mounting the Crew; motion can be globally *retuned* by editing tokens; and no component can invent an off-Bible animation, because the vocabulary physically lives elsewhere.

The motion vocabulary is a small library of named, tokenized behaviors — `foundByLight` (fade + ≤12px settle), `settle`, `bloomGrow`, `brightnessLift`, `breathe`, `illuminateLines` (the reading reveal) — and scenes request behaviors by name. If a scene needs a motion that has no name, that is a design conversation (amend the Bible), not a new tween in a component.

- **Scroll animations:** all scroll-driven motion binds to the conductor's per-scene progress (never raw scroll position), keeping every scene's animation defined in its own 0–1 space — scenes can be reordered or resized without retiming.
- **Camera timeline:** the camera is one continuous script across the whole film (the push-ins, the lateral road, the rationed orbit) owned by `experience/camera` — one module knows the camera's whole journey, so the storyboard's "promise made in Scene 2, kept in Scene 6" is a single readable file, not an emergent accident of twelve scenes.
- **Transitions (scene joins):** each storyboard transition is a first-class named object owning the handoff (e.g., `monologueLightBecomesRoad`), so joins are designed once and owned clearly rather than split ambiguously between two scenes.
- **Hover animations:** implemented as light-state changes at the primitive level (rest/noticed/engaged, 120ms in / 240ms out) in CSS driven by tokens — deliberately *not* GSAP: hover must work identically with the Crew absent, and compositor-driven light states are cheaper than JS ticks.
- **Text animations:** only the lawful two — `illuminateLines` for Editorial reveals and the loader's single tracking inhale. No per-character splitting anywhere else; the Bible's "type does not travel, it only illuminates" becomes an architectural absence of a splitting utility.
- **Page transitions:** the dim-to-Depth-Black cut for external departures and the 400ms re-entry breath, owned by a single transition controller at the app shell — never per-page.

---

# 8. Three.js / React Three Fiber Architecture

**Scope discipline first:** 3D exists for exactly what the storyboard requires — the depth of the stage, the Scene 6 assembly, the doorways' dimensionality, and the living-portrait light response. Everything expressible in DOM+CSS at equal fidelity stays DOM. The canvas earns its cost; it does not become the default medium.

**Canvas structure.** One persistent canvas, mounted once at the app shell, fixed behind the DOM (the DOM composites over it — text remains real, selectable, crawlable text; the Bible's typography never enters WebGL). One canvas, not per-scene canvases: context creation is expensive, and a single canvas lets the camera be genuinely continuous across the film.

**Scene organization.** The 3D world is organized as *stages* mirroring the storyboard: `PortraitStage` (the lit figure's environment), `RoadStage`, `AssemblyStage` (Scene 6's world and its resolved gallery), each a self-contained group with its own lights and assets, activated/deactivated by the conductor's scene index. Inactive stages are fully unmounted from the render graph, not just hidden — the film only ever pays for the scene it is in, plus preloading of the next (§10).

**Lighting strategy.** The Bible's one-light world, literally: a single key light rig whose temperature and position are driven by the lighting state machine in `experience/lighting` — the same state machine that drives DOM glow tokens, so canvas light and CSS light can never drift apart. Rim and accent lights are children of stages, budgeted per the Bible. No dynamic shadows in v1 (the Bible's depth-of-darkness model doesn't need them, and they are the single most expensive line item they'd replace); depth is layers, fog is a cheap depth cue, exactly as designed.

**Asset loading.** All models and textures preload through a single loader keyed to the conductor: the loader scene's 1.5–2s breath covers the critical path (portrait stage), and each stage's assets stream in one scene ahead of need. Formats and budgets in §10.

**Camera management.** One camera, owned by `experience/camera`, animated exclusively by the conductor's timeline — R3F components never touch the camera. The rationed orbit is enforced here structurally: orbital motion is a capability only the Scene 6 camera script imports.

**Performance considerations.** A `QualityManager` resolves a device tier at startup (GPU heuristics + screen + reduced-data signals) into the global store: it caps device-pixel-ratio (1.5 on mid-tier, 1 on low), scales the assembly's fragment counts, disables fog/volumetrics on low tier, and can demote the canvas entirely. Frame budget discipline: the Crew targets ≤8ms of its 16ms frame (§12), measured continuously in development.

**Fallback strategy — three graceful floors:** (1) low tier: canvas stays, spectacle simplifies — fewer fragments, no volumetrics, same choreography; (2) no WebGL / canvas failure: the site runs the **alternate cut's visual grammar with motion** — DOM scenes, pre-rendered stills of the assembly as the Scene 6 sequence, all narrative intact; (3) no JS at all: the pure Set — a complete, composed, readable film of held frames. Every floor is a designed state, screenshot-tested, per the Bible's alternate-cut law. The architecture's proudest property should be that floor 3 is genuinely good.

---

# 9. GSAP Architecture

**Why GSAP owns time:** one animation system owns the clock; everything else synchronizes to it. GSAP's timeline is that clock — the conductor.

**Timeline organization.** One **master timeline** (the film) composed of one **scene timeline** per storyboard scene, registered in order by the scenes' ref-registration API. Scene timelines are authored in local 0–1 progress, ignorant of absolute scroll — the master maps them onto the scroll track. Named labels mark every storyboard beat (`hero.nameSettled`, `turn.doorwaysResolved`), making the storyboard's language addressable in code and in debugging.

**ScrollTrigger organization.** Exactly one ScrollTrigger per scene plus one for the master — created centrally in the conductor, never inside components. Triggers bind scene timelines to their scroll ranges with the smoothed scroll service as the single source of position. The Bible's scroll honesty is enforced here: proportional scrub everywhere, no pinned hijack distances beyond what Scene 6's storyboard allots, and full reversibility guaranteed by scrubbed (never fire-and-forget) narrative animation.

**Animation ownership — the three-tier law:** the **conductor** owns anything scroll-bound or cross-scene (all narrative motion, camera, transitions); **primitives** own their three light-states (CSS, per §7); the **attendant and overlays** own their small self-contained enter/exit timelines (created and destroyed with the feature, registered with the conductor only to respect the one-primary-motion budget). Nothing else may create a timeline. Ownership ambiguity defaults upward to the conductor.

**Synchronization strategy.** The conductor drives both DOM tweens and the R3F world from the same timelines — 3D stage properties (camera position, light temperature, assembly progress) are tweened values read by the render loop each frame. One clock, two mediums, zero drift: the Scene 3 monologue light and the canvas key light warm on the same tween. React is synchronized *coarsely*: the conductor emits discrete scene-index and beat events to the store; React never subscribes to per-frame values. The frame loop's priority order is fixed: input → conductor tick → 3D render → (nothing else) — anything wanting per-frame work must live inside that ordered loop or not run per-frame at all.

---

# 10. Asset Strategy

All assets flow through a **build-time manifest** (`content` references assets by key, never by path) enforcing per-asset metadata: dimensions, alt text (mandatory — builds fail without it), format variants, and preload priority.

- **Images:** AVIF with WebP fallback, responsive size sets generated at build; exhibits full-bleed per the Bible, served at layout-true sizes. Total image weight budget for the film route: ≤1.2MB above-the-fold-critical, ≤4MB full journey.
- **Portrait:** the crown asset — one master transparent source, pre-graded per the Bible (Stage-Black-lifted blacks, key-left warmth) at build into the three sanctioned scales, each with the soft edge-dissolve baked in (never runtime-filtered). Served as lossless-alpha AVIF/WebP. The hero portrait is the LCP element: highest preload priority, loaded during the loader's breath, never lazy.
- **Icons:** the Bible's near-empty icon set ships as a single inlined sprite — no icon font, no per-icon requests.
- **Videos:** none in v1. Project motion is real (the worlds animate their actual UI as exhibits) or absent. If ever needed: muted, short-loop AV1/H.265, poster-first, in-viewport only — but the position of this document is that video in a film about craft usually signals the craft couldn't be rebuilt.
- **Models:** the Scene 6 world's geometry as Draco-compressed glTF, textures in KTX2/basis; hard budget 1.5MB total for all 3D assets. The assembly's fragments are instanced primitives wherever possible — the world is made of light and glass, which are cheap; the budget exists to keep it so.
- **Compression:** everything above plus Brotli at the edge for text assets; fonts subsetted to used glyphs, self-hosted, preloaded, with metric-compatible fallbacks so the Monumental name never layout-shifts.
- **Lazy loading:** scene-based, not viewport-based — the conductor preloads scene N+1's assets as scene N begins, so nothing loads *during* an animation and nothing visible ever pops in late. Below-the-fold exhibits and the case-study routes load on approach/intent.
- **Caching:** immutable content-hashed filenames, far-future cache headers, CDN edge for everything static; the attendant endpoint is the only uncached path. Repeat visits should be effectively instant — the 400ms re-entry breath covers any revalidation.

---

# 11. AI Portfolio Assistant Architecture

**Knowledge source.** The attendant knows exactly what the Script knows: its knowledge base is generated at build from `content/` — projects, journey, skills, services, plus a curated `content/attendant/` folder of extended Q&A material (working style, availability, process) written in the site's voice. One pipeline, one truth: when a project ships, the attendant learns it in the same deployment the site does. The attendant is explicitly scoped to Raheel's work; its system instructions (versioned in `content/attendant/config`) define persona (the Technical voice: precise, brief, a little dry), scope, refusal style for off-topic asks, and the hard rule that it never invents facts absent from the knowledge base.

**Conversation flow.** Client → `/api/attendant` (edge function) → model, with the knowledge base injected server-side. The endpoint is stateless; the transcript lives in the attendant's client store and is resent per turn (a portfolio conversation is short; statelessness buys operational simplicity and privacy — nothing is stored server-side). Responses stream token-by-token into the shell so the attendant feels alive within its 120ms-noticed grammar. Rate limiting at the edge per client; a turn cap per conversation keeps cost bounded and conversations appropriately brief.

**Suggested questions.** Authored in the Script per audience (`For hiring: "What did he build at ZH?"`), three surfaced at rest, refreshed contextually after each answer from the authored pool — suggested, never auto-fired. Suggestions are the attendant's real UX: most visitors will tap, not type.

**Future RAG compatibility.** V1 ships the full knowledge base in-context (it is small; retrieval would be ceremony). But the build pipeline already structures knowledge as chunked, front-mattered documents keyed by topic — so when content outgrows a context window (blog, many case studies), adding an embedding index and retrieval step changes the endpoint's internals only. The chunk format is the contract; nothing client-side ever changes.

**Backend readiness.** The endpoint is the site's one backend seam, deliberately shaped for growth: versioned request/response schema, provider-agnostic model adapter (swap models by config), structured logging of anonymized usage (questions asked are product research), and feature-flagged off-switch that collapses the attendant to its graceful absence (§16). No database in v1; the seam is where one would attach.

---

# 12. Performance Strategy

Performance is a design property here — the Bible calls it "part of the aesthetic" — so it is budgeted like one. **Hard budgets, enforced in CI:** LCP (hero portrait) ≤1.8s on mid-tier mobile; INP ≤200ms; CLS ≈0 (the film may never shift — everything settles by design, not by reflow); initial JS for the film route ≤180KB compressed *before* the experience layer; experience layer (GSAP+R3F+world) ≤250KB compressed, loaded after first paint; steady-state 60fps with the Crew consuming ≤8ms/frame.

- **Code splitting & dynamic imports:** the split boundary *is* the architecture's layer boundary — the Set ships first and paints the film; the Crew is one dynamically imported bundle that mounts during/after the loader's breath and enhances in place. The attendant, navigation overlay, and case-study routes are their own lazy chunks. The film never waits for its own crew.
- **Lazy loading:** per §10 — scene-ahead preloading as policy, so laziness is invisible.
- **Bundle optimization:** GSAP imported per-plugin; three.js tree-shaken to used modules; no utility mega-deps (no lodash-class imports for one function); dependency additions require a size note in the PR. Bundle analysis runs in CI with the budgets as failing thresholds, not dashboards.
- **GPU optimization:** DOM animation restricted to compositor properties (transform, opacity, filter used sparingly) — the light-state system is built on opacity/brightness for exactly this reason; canvas per §8 (DPR caps, instancing, no shadows, tiered fragments); blur (Smoke Glass) budgeted per the Bible's two-materials-per-viewport law, which is also, not coincidentally, the GPU's law.
- **Image optimization:** per §10; plus the LCP rule — the hero portrait preloads with highest priority and is the only preloaded image.
- **Animation optimization:** scrubbed timelines cost nothing when idle; inactive stages unmount; ambient behaviors (breathe, pulse) pause when off-screen and under the one-primary-motion budget; per-frame React is banned (§5); the frame loop is single and ordered (§9).
- **60fps target, operationalized:** development builds render a frame-budget meter; CI runs scripted scroll-throughs on throttled hardware profiles and fails on sustained frame drops through Scene 6 — the spectacle is the budget's stress test, and it ships only at 60.

---

# 13. Accessibility Strategy

The architecture's founding claim — the Set is complete without the Crew — is the accessibility strategy; everything else is diligence on top of it.

- **Keyboard navigation:** full film traversal by keyboard, in narrative order (the Bible: focus order follows the story). Scene landmarks are skip-navigable; the navigation overlay is a proper dialog with focus trap and restore; Scene 6 is scrubbed by scroll, so keyboard users advance it with standard scrolling keys — no custom key handling required to see the spectacle. Nothing essential lives in hover (the Bible's own law, verified in review).
- **Reduced motion:** the alternate cut, structurally guaranteed — motion preference resolves before the Crew mounts; when reduced, the Crew simply doesn't (held frames + Gesture-speed dissolves via CSS). Because the cut is "Crew absent," it can never rot behind the primary experience: it is the primary markup. The explicit site toggle overrides OS in both directions and persists.
- **ARIA:** semantic HTML first — scenes are `section`s with headings in a correct outline (visually Monumental, structurally h1–h2), the film is one `main`, the road is a list, the attendant is a labeled log with polite live-region streaming. ARIA is added where semantics run out (the attendant's status, the nav dialog), never as decoration on divs that should have been elements.
- **Screen readers:** the film linearizes into a coherent read — this is tested as a first-class rendition: the loader is presentationally hidden (no one narrates a breath), decorative canvas content is `aria-hidden` with the DOM carrying all meaning, exhibits carry the manifest's mandatory alt text, and the three-beat project grammar reads as the story it is.
- **Contrast:** the Bible's Ivory states are contrast-verified against their permitted surfaces in the token system itself — Ivory-100 on Stage Black clears AAA; Ivory-60's usage is constrained to non-essential text at sizes that clear AA; the token docs record the ratios so "dim" can never quietly mean "illegible." Filament on black is reserved for large text and non-text light, per its measured ratio.
- **Focus management:** per the Bible — Filament + Ivory ring, never suppressed, tokens shared with hover so the two attention systems can't diverge. Programmatic focus moves only on explicit navigation (overlay open/close, skip links, arriving at `/work/[slug]`), never stolen by animation.

---

# 14. Responsive Strategy

**Desktop-first philosophy, honestly held.** The film is composed for the wide frame — that is where juries, hiring managers at work, and the storyboard's camera live — so desktop is the design master. But desktop-first never means mobile-degraded: mobile is a **re-blocked shoot of the same film**, not a squeezed one. Each scene defines its mobile blocking explicitly (portrait scales, type recomposition to the narrow frame, the road's travel, the doorways' stacking) in the scene's own module — a scene without mobile blocking is unfinished, not "responsive by default."

- **Tablet:** treated as small-desktop in landscape (full film, quality tier permitting) and as large-mobile in portrait — breakpoints follow the *frame's shape* (aspect + width), not device marketing names.
- **Mobile:** full narrative, every scene, no content removed — the film's story is not a desktop privilege. Concessions are experiential, tier-driven (§8): simplified assembly fragments, no volumetrics, DPR 1–1.5, and the living portrait's response driven by device tilt where motion sensors are permitted, scroll-position otherwise.
- **Touch interactions:** the Bible's attention grammar maps completely — noticed becomes press-in, engaged becomes release; the 120/240 asymmetry survives as press/release timing. No touch-only gestures are invented (no swipe navigation between worlds — scroll is the one input, everywhere), and all targets meet 44px minimums inside the Technical voice's small type via padded hit areas.
- **Performance differences:** mobile is where the budgets in §12 actually bind — the throttled CI profiles are mobile profiles; the quality tier defaults conservative on mobile and upgrades on evidence, never the reverse. The strategic posture: a mid-tier phone gets a smaller spectacle at a locked 60 rather than the full spectacle at 40 — composure is frame-rate, on every device.

---

# 15. SEO Strategy

A single-page cinematic site is SEO-hostile by default; this architecture neutralizes that with structure rather than tricks — everything crawlable is real, static HTML (§1), which is 90% of the strategy.

- **Metadata:** per §3 — Script-derived, one utility, per-route specificity; title/description written in the site's voice but for the searcher's intent (`Raheel Baig — Frontend Engineer. React, Next.js, TypeScript.` — the Technical voice happens to be excellent SEO).
- **Structured data:** JSON-LD from the Script — `Person` (name, title, skills, sameAs socials) on the film; `CreativeWork`/`WebSite` as appropriate; each case study as `CreativeWork` with author linkage. Generated from the same content modules as the visible page, so structured data can never contradict the site.
- **Open Graph & Twitter cards:** per-route OG images, designed (not screenshotted) in the Bible's language — Stage Black, Monumental name, Filament accent — generated at build for the film and each world; summary-large card format. The link preview is the film's poster and is treated with poster-level care (the Vision's "after" touchpoint).
- **Sitemap & robots:** build-generated sitemap of film + case studies (+ future writing); robots allows all public routes, disallows `/api`; both derive from the route manifest so they can't drift.
- **Canonical URLs:** self-canonical everywhere; the film's scene anchors (`/#work`) canonicalize to `/`; www/apex and trailing-slash normalized by redirect at the edge so exactly one URL per document exists.
- The quiet advantage: case-study pages give the crawler (and sharers) conventional, deep, text-rich pages — the film wins the humans, `/work/*` wins the index, and both are generated from one Script.

---

# 16. Error Handling Strategy

The error philosophy inherits the Bible's grammar: **failures resolve into darkness and stillness, never into broken motion or alien UI.** A visitor should be unable to distinguish "gracefully degraded" from "designed this way" — because by policy, it is.

- **Asset failures:** the manifest gives every asset a designed absence — exhibits fall back to their dominant-tone pane with the Editorial line carrying the beat; a portrait failure (the one unacceptable loss) is defended in depth: preload, retry, then a designed silhouette-in-light state so Scene 2 remains composed even in disaster. No broken-image glyphs can reach the stage.
- **Animation failures:** the Crew mounts inside an isolation boundary — any runtime failure in conductor, canvas, or camera tears down the Crew *whole* and leaves the Set standing in alternate-cut mode, mid-visit, without reload (§8's floors, applied at runtime, not just startup). Crew errors are reported to monitoring but never surface to the visitor; a film does not apologize on screen.
- **AI attendant fallback:** three layers — transient failure: the attendant answers in-voice that it's momentarily unavailable and surfaces the email (the Quiet Action it was always standing beside); endpoint down or flagged off: the attendant simply doesn't appear, and Scene 11's frame carries its designed attendant-less state (authored in the storyboard's grammar — the scene works without it); malformed/off-scope model output: the configured refusal voice, never raw provider errors. The attendant can only ever fail *politely and alone* (§5's isolation).
- **404:** the Deleted Scene per §3 — static, dependency-free, the most reliable page in the product. Application-level rendering errors resolve to a matching static "Missing Reel" page in the same grammar: one line, one Quiet Action, total composure.
- **Offline considerations:** no offline app pretensions — but the film route's shell and critical assets are cache-first after first visit, so a flaky connection mid-scroll doesn't stall scenes already granted; a true offline navigation gets a designed one-line dark frame, on-voice. Repeat-visit resilience, not offline capability, is the honest scope.

---

# 17. Future Scalability

The test for every future feature: it joins the archive behind the film without renovating the film. The seams are already cut:

- **Blog / writing:** the reserved `/writing` namespace + a `writing` content collection reusing the Script's validation pipeline and the case studies' page grammar (Obsidian reading surfaces, Editorial voice, held-frame headers). The film gains at most one quiet line; the attendant's knowledge base ingests posts automatically through the existing build pipeline.
- **Case studies:** already live as the architecture's second route family; deepening them (galleries, metrics, testimonials-in-world) is content-schema evolution, not structural work.
- **CMS:** the Script's schemas are the contract — a headless CMS maps collections onto the existing models, the build pulls at deploy, and components never learn the difference. The repo remains the fallback source; the CMS is an editor convenience, never a runtime dependency (static-first survives).
- **Dark/light themes:** deliberately **out of scope forever for the film** — the one-light dark world *is* the brand, and a light theme is a different film. The token architecture could express one (that's what tokens are), and future conventional surfaces (writing) may exploit that; documenting the refusal here prevents the request from resurfacing as a weekend regret.
- **Localization:** the Script's copy modules are keyed by scene and string — the shape i18n needs. If ever pursued: locale-suffixed content modules, static generation per locale, and a serious pass on Monumental type (the name and titles are composed to the frame per-language). Architecture-ready, product-skeptical: a personal voice translates poorly, and the decision should be made on demand evidence.
- **Analytics:** a thin first-party facade (`lib/analytics`) from day one — page views, scene-reach depth, spectacle completion, attendant questions, invitation clicks — so instrumentation calls exist at the narrative moments that matter, with the provider swappable behind the facade and consent honored by configuration. The film's funnel (reach Scene 6 → enter a world → touch the invitation) is the product metric.
- **Admin dashboard:** not built until the CMS exists; when it does, the dashboard is the CMS's own UI plus a small read-only surface over the analytics facade and attendant logs, deployed as a separate app on the API seam — the portfolio never hosts an admin bundle inside itself.

---

# 18. Engineering Principles

The twenty laws. Every PR is reviewable against these; every future component must satisfy all that apply.

1. **The Set stands alone.** Every scene must be complete, legible, and composed with the entire experience layer deleted. This is the definition of done.
2. **Dependency flows one way: Crew → Set → Script.** An import against the arrow is an architecture bug, whatever else it achieves.
3. **Never animate without narrative purpose.** Every motion must be describable as camera or light and traceable to a storyboard beat or Bible rule.
4. **Every scene is independently maintainable.** One scene's revision may not require understanding another scene's internals; shared behavior lives in the conductor or primitives, never copied sideways.
5. **Every animation degrades gracefully — to a designed state.** Reduced motion, low tier, no WebGL, and runtime failure each land on an authored frame, never an accidental one.
6. **Performance is a feature with numbers.** Budgets live in CI; a regression is a failing build, not a follow-up ticket.
7. **Accessibility is never optional and never retrofitted.** Semantic structure, keyboard paths, and reader coherence ship in the same PR as the feature.
8. **Content is data; copy is never hardcoded.** If a word appears in a component file, it belongs in the Script.
9. **Tokens are law.** No raw color, duration, easing, spacing, or size literals in components — if the Bible doesn't have a token for it, the Bible conversation comes first.
10. **One clock.** All time-based behavior synchronizes to the conductor; no component owns a competing timer, ticker, or scroll listener.
11. **React renders; it does not animate.** Per-frame values never pass through React state.
12. **Global state must prove two unrelated consumers.** Otherwise it is local, derived, or content.
13. **Prefer absence.** The first candidate implementation for any element is not building it — badges, particles, custom cursors, and third fonts stay deleted; restraint is enforced by nonexistence.
14. **Closed variants, no escape hatches.** Primitives expose Bible-lawful unions, not open style props; a needed new variant amends the primitive, in review, once.
15. **Every asset has alt text, dimensions, and a designed absence — at build time.** The manifest fails builds otherwise.
16. **Nothing loads during a moment.** Preload a scene ahead; visible pop-in is a bug with the same severity as a crash.
17. **Failures resolve into stillness.** Errors reach the visitor as composed darkness and one quiet line, or not at all — never as motion breaking, spinners, or foreign UI.
18. **Mobile is a re-block, not a squeeze.** A scene without explicit narrow-frame blocking is incomplete.
19. **Measure the story, not just the vitals.** Scene-reach, spectacle completion, and invitation clicks are first-class metrics beside LCP and INP.
20. **When two solutions tie, choose the boring one.** Ambition is spent upstream in the film; the code's virtue is predictability. The quieter option wins here, as everywhere in this product.

---

*This document changes by amendment, in the repo, with the same review as code. The film is the product; this architecture exists so the film can be re-shot, extended, and maintained for years without losing a frame of composure.*
