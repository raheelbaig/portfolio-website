# V2 — Contact Specification

> **Status:** Complete — the canonical specification for the Contact section (homepage Section 07, "The Invitation" in `02`).
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `03-hero.md`, `06-project-showcase.md`, `07-services.md`, `10-motion-language.md`, `11-responsive-system.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> **The Contact section is not a form.** It is the **emotional resolution of the entire film** — the room from the beginning, warmer, where the visitor already knows the person and only needs an invitation to begin. Starting a conversation must feel natural, calm, and inevitable — never promotional. Detailed enough to implement without visual or interaction decisions.
>
> **Naming:** `02` calls this section "The Invitation (Contact)." This document is its canonical spec. It occupies the homepage slot between the Attendant and the Coda.

---

## 0. Conventions & relationship

- Units, motion categories/tokens, tiers: per `10`, `11`.
- Contact is the **mirror of the Hero** (`03`): the same room, the same centred figure, a degree closer and a degree warmer. It reuses the Hero's composition grammar deliberately.
- It flows into the **Coda / footer** (homepage §08, owned by `02 §08` / `11 §5.8`); this document ends at the ask and hands off (§18).

---

## 1. Grounding & Data Provenance (read first)

Per `01 §16` and this task's instruction, **no availability, social platform, location, or promise is invented.** ⚠ marks items requiring Raheel's confirmation before ship.

### 1.1 Confirmed contact data

| Fact | Source |
| --- | --- |
| **Name:** Raheel Baig | `content/site.ts` |
| **Role:** Frontend Engineer | `content/site.ts` |
| **Email:** `baig8911@gmail.com` | `content/site.ts` / repo |
| **Canonical copy (storyboard):** line *"Let's build something worth the light."*; action *"Let's Connect."* | Storyboard Scene 12 |

### 1.2 UNCONFIRMED — do **not** invent (⚠ confirm)

| Item | Status |
| --- | --- |
| ⚠ **Social platforms & handles** | `content/site.ts` `socials: []` is **empty**. **No socials are shown until real handles are provided.** Do not invent GitHub/LinkedIn/X/etc. |
| ⚠ **Location / base** | Unknown (About draft said "based in …", TODO). **No location line ships** until confirmed. |
| ⚠ **Availability / engagement status** | Unknown. **No "available for work / accepting projects / responds in 24h" line ever** — both unconfirmed *and* forbidden by the no-promo rule (§4). |
| ⚠ **Final wording** of the line and action | Storyboard copy is canonical *default*; confirm Raheel wants it. |
| ⚠ **A second contact channel** (phone, form endpoint, scheduling link) | None in repo. **None is added** — the ask is email; a form is explicitly out of scope (§4). |

### 1.3 The rule

The section ships with **exactly what is confirmed: a line, an action (mailto), and the email written out.** Socials, location, and availability appear **only when real** — each slot is reserved and renders nothing until confirmed. A promise that cannot be traced to Raheel's word is forbidden.

**Reasoning.** Contact is the one place a portfolio is most tempted to invent trust signals ("available now!", "based in X", a row of social icons). Grounding it to name + role + email, and reserving everything else behind confirmation, keeps the film's honesty intact to the final frame — and an empty `socials: []` becomes a designed absence, not a broken row of dead icons.

---

## 2. Purpose

### 2.1 Why the section exists

Conviction and imagination dissipate without direction. Contact converts everything the visitor has felt — the philosophy (About), the proof (Showcase), the trajectory (Experience), the possibility (Services) — into **one calm, inevitable ask.** It is the reason to reach out, offered once, warmly, with total composure.

### 2.2 The emotion

**Ease.** The decision to reach out should feel like *agreeing with a sentence the visitor was already finishing.* Not a conversion; a natural last line. If the visitor feels *pressure*, the section has failed; if they feel *"of course — I'll just write to him,"* it has worked.

**Reasoning.** By this point the visitor has spent ~90 seconds meeting a person; the ask must feel like the end of a conversation, not the start of a funnel. Naming *ease* (not "conversion") as the target keeps every decision aimed at calm inevitability rather than persuasion.

---

## 3. Narrative Role

Contact is the **final quiet scene** — the film returning home. The darkness that opened the site now feels familiar rather than mysterious; the figure that arrested the visitor in the first frame is here again, known. It mirrors the opening so the ask carries the weight of a **completed arc**: the film opened on *who he is* and closes on *what you and he might do.*

- **Preceded by** the Attendant's studio light dimming to the opening register, its lantern following to the frame's edge (`02 §06`).
- **Followed by** a gentle settle into the Coda — the credits after the final frame (§18).

**Reasoning.** Mirroring the opening gives the ask the emotional weight of a finished story — the visitor isn't submitting a form at the bottom of a page, they're answering a person they've just spent the whole film meeting. That structural rhyme is the single most important decision in the section.

---

## 4. Contact Philosophy (the core decision)

**Decision: one warm ask, no form, mirroring the opening. Email is the mechanism; everything else is subordinate or absent.**

The rules:

1. **Not a form.** No fields, no name/email/message inputs, no "send." The ask is a **`mailto:` action** and the email written out plainly. A form would turn a conversation into a transaction.
2. **One ask.** A single Sol-lit action (`01 §15` — one primary per view). Its scarcity is its weight.
3. **Mirror, don't restate.** The composition *is* the Hero's, warmed and closer — the arc completed visually, not explained.
4. **Inevitable, not promotional.** No urgency, no marketing copy, no testimonials, no pricing, no sales language, no availability promise, no "let's work together!" exclamation. State, don't sell (`01 §24.4`).
5. **Subordinate the rest.** Email (plain), and socials *when real*, sit small in the Console voice — present, never competing with the ask.
6. **The room is warm.** Scene 2's key light, warmed by everything between — the visual proof the visitor and the site have history now.

**Banned outright (per the brief and `01 §23`):** contact forms, marketing/sales copy, urgency ("limited slots", "book now"), testimonials, pricing/rate language, availability promises, response-time claims, social-proof counters, a wall of social icons.

**Reasoning.** Each rule defends against the section becoming a lead-capture block — the exact opposite of the composed ending the film earns. A `mailto` ask (not a form) is the honest, frictionless mechanism: it opens the visitor's own voice, in their own client, to say whatever they want — which is what "begin a conversation" actually means.

---

## 5. Composition

The Hero's frame, mirrored — warmer, a degree closer.

```
 rail │                     content field
──────┼──────────────────────────────────────────────────────────
      │                                                    (lantern
      │                    ( head )                          rests ◦
      │                 ╭───────────╮                        at edge)
      │                 │           │
      │                 │  PORTRAIT │   Monumental, centred, warmer,
      │                 │  (chest)  │   a degree closer than the Hero
      │                 ╰───────────╯
      │          Let's build something worth the light.   (Plate line-lg)
      │
      │                 ✦  Let's Connect  ✦     (Marquee, Sol — brightest)
      │
      │          baig8911@gmail.com            (Console, plain, mailto)
      │          [ socials — only when real ]  (Console, quiet, ⚠ hidden if empty)
```

- **Portrait:** Monumental scale, centred, exactly as the Hero — but the key light is **warmer** and the framing settles **slightly closer than the Hero ever came** (`03 §2` mirrored). Same edge-dissolve, same grade, warmed.
- **The line:** one Plate line beneath — the last spoken dialogue of the film.
- **The action:** *"Let's Connect"* in the **Marquee register** (the farewell, sentence case), **Sol-lit — the brightest object in the frame.** For the first and only time, the light's focal point is an *action*.
- **The email:** written out plainly in Console beneath, a `mailto:` link.
- **Socials:** a quiet Console row **only when real handles exist** (⚠ hidden entirely while `socials: []`).
- **The lantern:** the Attendant's small glow rests at the frame's edge, in case a final question stands between the visitor and hello.
- **Negative space:** 60%+ dark; the composure of the opening returns; **no form, no fields, no panels** anywhere.

**Reasoning.** Reusing the Hero's exact blocking is the mechanism of the "completed arc" feeling — the visitor recognizes the room. Making the *action* the brightest object (over even the Monumental portrait) is the one intentional inversion: light directs the eye, and here, for the only time, it directs it to a thing to *do*.

---

## 6. Visual Hierarchy

1. **The action ("Let's Connect", Sol)** — the brightest object; light wins attention even over the larger portrait. *The eye is led to the one thing to do.*
2. **The line (Plate)** — the last spoken dialogue; read second.
3. **The portrait (Monumental)** — dominant by *size*, calm by *light*; the familiar presence.
4. **Email, then socials (Console, `bone-45`)** — the quiet mechanism and subordinate channels.

Size-dominance (portrait) and light-dominance (action) are deliberately split: the portrait anchors the frame; the action commands attention. Because the brand's thesis is *light directs the eye* (`01 §2.1`), the lit action wins.

**Reasoning.** Splitting size from light lets the portrait stay the emotional anchor (the person) while the action stays the destination (the ask) — the visitor feels the person and knows exactly what to do, without the two competing.

---

## 7. Primary Call-to-Action

- **Label:** *"Let's Connect"* (canonical; ⚠ confirm final wording).
- **Action:** `mailto:baig8911@gmail.com` — opens the visitor's mail client with a fresh message. Optionally a `subject` prefilled quietly (e.g. a neutral greeting) — ⚠ confirm; default is no prefill.
- **Register:** **Marquee** (the monumental voice returns for the farewell, sentence case — the human voice never shouts), treated with the typographic dignity the *name* had in the Hero. This is the film's terminal symmetry: it opened on the name, it closes on the ask, both monumental.
- **Material/light:** Sol-lit — a Signal-Glass field or a lit Marquee word (implementation choice per §16), carrying the viewport's one strong glow. It is the brightest object in the frame.
- **The one and only primary** in the section (and the film's terminal action).

**Reasoning.** Elevating the ask to the Marquee register — the same weight as the name — is what makes the ending rhyme with the opening and gives the ask gravity a small button never could. A `mailto` (not a form submit) keeps it a conversation opener, not a transaction.

---

## 8. Secondary Contact Methods

- **Email, written out:** `baig8911@gmail.com` in Console beneath the action — a `mailto:` link *and* plainly legible (some visitors copy it, some click it). Optional **copy-to-clipboard** on click/tap with a brief Console confirmation flash (no motion, `dur.gesture`) — a quiet courtesy.
- **Socials:** a quiet Console row (platform names as links, not icons — `01 §8`) **rendered only when `site.socials` is non-empty.** ⚠ Currently empty → **nothing renders.** When provided, they sit subordinate to the action, `bone-45`, opening in a new tab (`rel="noopener"`).
- **The Attendant:** its lantern remains at the frame's edge — a visitor with a final question can ask it rather than write. Not a "contact method" per se, but the last quiet alternative before hello.
- **No other channels:** no phone, no form endpoint, no scheduling link, unless Raheel confirms one (⚠, §1.2).

**Reasoning.** Writing the email out (not hiding it behind only a button) respects the visitor who wants to copy it into their own workflow; keeping socials as text names and *conditional on real data* honours both the brand's no-logos rule and the honesty rule — an empty socials array yields a clean absence, never a row of broken links.

---

## 9. Typography

- **Line:** Plate `line-lg` (34→22 per tier, `11 §3.3`), `bone-100`, sentence case, a period — the last spoken dialogue, at generous scale.
- **Action:** **Marquee** (`marquee-sm`/close band, `clamp(40px,6vw,96px)`), Sol-lit, sentence case (the farewell never shouts).
- **Email / socials:** Console (email `bone-70`, socials `bone-45`).
- **No Console eyebrow needed** (the section is the resolution; a label would break the intimacy) — a visually-hidden `<h2>` "Contact" carries the outline (§14).

**Reasoning.** The Marquee action + Plate line pairing mirrors the Hero's Marquee name + Plate tagline — the same two voices that opened the film close it, which is the typographic form of the completed arc.

---

## 10. Lighting

- **Scene 2's key light, warmed** by everything between (~toward candlelight) — the visual proof of shared history. Centred on the figure, as in the Hero.
- **The action is the brightest object:** a Sol practical light on/around "Let's Connect" — the first and only time the key's focal point is an action (`01 §11`).
- **The idle breath returns, slower** than the Hero's — the room at rest at the end of the film.
- **The lantern** glows quietly at the edge (Ion-warm, small).
- No cast shadows; grain over all; layered dark for depth (`01 §12`).

**Reasoning.** Warming the Hero's exact key light is the lighting statement of "you know this room now"; letting the *action* hold the strongest light is the lighting statement of "and here is the one thing to do." Slowing the idle breath signals the film settling to rest.

---

## 11. Motion

Authority `10`. Contact mirrors the Hero's motion, softened.

| Beat | Motion | Cat | Purpose |
| --- | --- | --- | --- |
| **Enter (push-in mirror)** | a slow push-in on the portrait mirroring the opening dolly, settling **slightly closer than the Hero ever came** | 1/3 | the whole journey, measured as one increment of intimacy |
| **Line resolves** | the Plate line lights/settles as the section arrives | 1 | the last dialogue spoken |
| **Action resolves** | "Let's Connect" lights last, its Sol bloom coming up | 1 | the brightest object, arriving as the destination |
| **Idle** | the light breath returns, slower than the Hero's (`ease.idle`) | 3 | the room at rest |
| **Action bloom** | on hover/focus, the Sol bloom lifts (120/240) | 4 | attention answered |
| **No exit** | the scene has no clock; it settles into the Coda when the visitor scrolls the last inch | 5 | the film content to hold here |

**Reasoning.** Settling *closer than the Hero ever came* is the single most poetic motion decision in the film — the entire journey rendered as one small increment of intimacy. Giving Contact "no exit motion" (it simply rests) is what makes it feel like the place the film is content to end.

---

## 12. Interaction

Quiet, singular.

| Input | Behaviour |
| --- | --- |
| **Hover** (action) | Sol bloom lifts + brightens, in ~120ms / out ~240ms; no scale, no motion. |
| **Focus** | same as hover + a lit focus ring; the action is the primary focus target of the section; never suppressed. |
| **Click / activate — action** | opens `mailto:` (fresh message). |
| **Click / tap — email** | `mailto:` **and/or** copy-to-clipboard with a brief Console confirmation (⚠ choose one default; recommend: click = mailto, a small "copy" affordance = clipboard). |
| **Socials** (when real) | open in a new tab (`rel="noopener"`); quiet hover brighten. |
| **Touch** | action and email ≥44px targets; action is comfortably full-width on REEL (§13). |
| **Keyboard** | action → email → socials in DOM order; visible lit focus; no traps. |
| **Reduced motion** | static; no push-in, no breath; the action present and lit. |

**Reasoning.** One clear primary target (the action), with the email as a secondary reachable link, keeps interaction as calm as the composition — there is exactly one thing to do and one thing to copy, and nothing funnels or pressures.

---

## 13. Responsive Behavior

Per `11 §5.7`. **One ask on every tier; no form ever.**

| Tier | Composition |
| --- | --- |
| **STAGE / COMPACT** | Hero-mirror: Monumental portrait centred (warmer, closer), line beneath, Marquee Sol action, email/socials Console beneath; lantern at edge. |
| **COLUMN (tablet portrait)** | Portrait fills width (top), line beneath, **action full-comfortable-width**, email/socials stacked Console. |
| **REEL (phone)** | Portrait fill-width, line, **action full-width tappable** (Marquee scaled per `11 §3.3`), email a tappable Console link, socials a quiet row (only when real). Generous bottom safe-area before the Coda. |

- Reading order (all): line → action → email → socials.
- The Marquee action scales fluidly but never below its tap-legible minimum; the ask remains the brightest object at every size.

**Reasoning.** Making the action full-width and tappable on phones (not a small centred button) is the re-block that keeps the ask the unmistakable destination on touch — the same "one bright thing to do," blocked for the frame.

---

## 14. Accessibility

- **Semantics:** `<section aria-labelledby>` → a **visually-hidden `<h2>` "Contact"** (the frame shows no visible label). The action and email are real `<a href="mailto:…">`; socials real `<a>` (when present). The portrait is `aria-hidden`/`alt=""` (described once in the Hero — `01 §21`); the lantern and light are decorative (`aria-hidden`).
- **No form = no form a11y burden:** there are no inputs, labels, validation, or error states to manage — a deliberate simplification.
- **Screen readers:** hear the line, then a clearly-named action ("Let's Connect — email Raheel"), then the email, then socials. Meaningful with all motion/light removed.
- **Keyboard:** action is a prominent, reachable link with visible lit focus; email/socials reachable in order; no traps.
- **Reduced motion:** static, full-contrast; the action present and lit (`10 §15`).
- **Copy-to-clipboard** (if used) announces success via an `aria-live="polite"` confirmation, not only a visual flash.
- **SEO:** real name, role, and email text; `mailto:` link; no text baked into images; no fake social/testimonial markup.

**Reasoning.** Choosing a `mailto` ask over a form isn't only an aesthetic call — it removes an entire category of accessibility risk (input labelling, validation, error handling) and leaves a section that is trivially operable by keyboard and screen reader. The `aria-live` on copy is the one detail that keeps the courtesy inclusive.

---

## 15. Performance

- **Rendering:** the Contact key light **may reuse the persistent canvas** (mirroring the Hero — one shader quad, re-activated on Contact in-view) **or** a CSS radial key light. Default: **CSS** (the spectacle budget is spent; a resting ending needs no 3D); canvas reuse is an optional enhancement for exact Hero parity. Either is cheap.
- **Animation budget:** push-in + line/action reveals + slow breath — transform/opacity, trivially within ≤8ms (`10 §17`).
- **Images:** the Monumental portrait (graded AVIF/WebP) is **not** the LCP (the Hero's is) — loaded on approach, exact aspect box reserved (CLS ≈ 0). Reuses the same master flagged for ≥1400² re-export (`12`).
- **Idle:** one slow breath, paused off-screen, off on reduced motion.
- **No video, no heavy media, no form scripts.**

**Reasoning.** Defaulting to CSS lighting (canvas optional) keeps the ending light and fast; there is no reason to re-spin the GPU for a resting scene, and the Monumental portrait loading on approach (not as LCP) keeps the page's critical path owned by the Hero.

---

## 16. Engineering Implementation Notes

- **Data source:** the invitation copy (`content/copy/invitation.ts`-class) + `site.email` and `site.socials` from the Script. **Socials render conditionally** on `site.socials.length > 0` — the empty array yields no markup (the designed absence, §1.3).
- **⚠ Ship gate:** confirm the line and action wording, and provide real socials/location/availability *only if wanted* — the section ships honestly with line + action + email alone (§1).
- **The action:** a single `<a href="mailto:…">` styled in the Marquee register with a Sol light (Signal-Glass field **or** a lit Marquee word — pick one; recommend a lit Marquee word inside a subtle Signal-Glass pad for tap-area + dignity). No `<form>`, no `<button type=submit>`, no input elements.
- **Copy-to-clipboard (optional):** `navigator.clipboard.writeText(email)` on a small affordance, with an `aria-live` confirmation; graceful no-op if unsupported (the `mailto` still works).
- **Registration:** `data-crew` targets — `contact-portrait`, `contact-line`, `contact-action` — consistent with the conductor.
- **Motion:** push-in + reveals via transform/opacity; one `gsap.matchMedia` block (tiers + reduced motion); the idle breath gated off-screen.
- **Lighting:** CSS radial key by default (canvas reuse optional); warm-shifted vs the Hero; the action's Sol bloom via `box-shadow`.
- **No form, no validation, no endpoint** — there is nothing server-side here; the `mailto` is the entire mechanism.

**Reasoning.** Making socials structurally conditional (`length > 0`) encodes the honesty rule — the section cannot render an invented handle. Choosing `mailto` over a form means zero backend, zero validation, zero spam surface — the simplest possible mechanism, which is also the most honest and the most on-brand.

---

## 17. Testing Checklist

- [ ] **No form**: no inputs, labels, submit, or validation anywhere in the section.
- [ ] **One ask**: a single Sol-lit Marquee action → `mailto:baig8911@gmail.com`; it is the brightest object in the frame.
- [ ] Email written out and a working `mailto:`; optional copy-to-clipboard announces via `aria-live`.
- [ ] **Socials render only when real** (`site.socials` non-empty); empty array → **no markup**, no dead icons.
- [ ] **No invented data**: no location, no availability/response-time claim, no promo/urgency/testimonial/pricing/sales language.
- [ ] Composition mirrors the Hero: Monumental portrait centred, warmer, a degree closer; 60%+ dark.
- [ ] Line = Plate `line-lg`; action = Marquee, Sol; email/socials = Console; hidden `<h2>` "Contact".
- [ ] Motion: push-in settles **closer than the Hero**; slow breath; action bloom on attention; **no exit motion** (rests into the Coda).
- [ ] Interaction: action is the primary focus target; visible lit focus; ≥44px; keyboard order line→action→email→socials; no traps.
- [ ] Responsive: action full-width tappable on REEL; portrait fills width; one ask every tier.
- [ ] Accessibility: real `mailto` links; portrait `aria-hidden`; reduced-motion static; ⚠ data never voiced as fact.
- [ ] Performance: CSS lighting default; portrait not LCP; ≤8ms; CLS ≈ 0; no video/form scripts.
- [ ] The Attendant lantern rests at the edge; the scene settles into the Coda on the last scroll.

**Reasoning.** The checklist's spine — *no form, one mailto ask, socials only when real, no invented promises* — is a direct pass/fail translation of the contact philosophy (§4), so a reviewer can verify the ending stayed a quiet invitation and never became a lead-capture block.

---

## 18. Handoff to the Coda & Decision Log

**Handoff:** Contact has no exit animation; on the final inch of scroll it settles into the **Coda** (homepage §08 — the slim credit band, owned by `02 §08` and `11 §5.8`). The projector cools; films end. The sidebar anchor persists to the last pixel (`04`).

**Resolved (2026-07-24):**
- **Not a form** — a single `mailto:` ask + the email written out; **no inputs, no endpoint.** *(§4, §7)*
- **Mirror of the Hero**, warmer and closer; the **action is the brightest object** (light over size). *(§5, §6)*
- The action is **Marquee-register, Sol-lit** — the farewell with the name's dignity; the film's terminal symmetry. *(§7, §9)*
- **Socials conditional on real data** (empty → nothing); **no location/availability/promo** ever. *(§1.3, §4, §8)*
- Push-in settles **closer than the Hero**; **no exit motion**; the lantern rests at the edge. *(§11)*
- **CSS lighting default** (canvas optional); portrait not LCP. *(§15)*

**Open — ⚠ requires Raheel's confirmation before ship:**
- **Real social platforms & handles** (none shown until provided). *(§1.2)*
- Whether a **location** line is ever wanted (default: none). *(§1.2)*
- Final **wording** of the line and action (storyboard copy is the default). *(§1.2)*
- Optional `mailto` **subject** prefill (default: none). *(§7)*
- Whether **copy-to-clipboard** ships on the email, and its exact affordance. *(§8, §16)*

**Amendment protocol:** the not-a-form / one-mailto-ask decision (§4, §7), the mirror-the-Hero composition (§5), and the conditional-socials / no-invented-promise rule (§1.3, §8) are section-defining — changes are proposed here, dated; the Hero-mirror must stay co-consistent with `03`, and the Coda handoff with `02 §08`.

---

*North star for this file: the final quiet scene. The room from the beginning, warmer; the person the visitor now knows, a degree closer; one line, and one lit action carrying the dignity the name had — no form, no pitch, no promise unkept. Reaching out should feel like agreeing with a sentence they were already finishing.*
