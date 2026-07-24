# V2 — Services Specification

> **Status:** Complete — the canonical specification for the Services section (homepage Section 05, "What We Could Build" in `02`).
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `06-project-showcase.md`, `08-experience.md`, `10-motion-language.md`, `11-responsive-system.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This section communicates **what Raheel can build today** through a few **curated capabilities**, each grounded in shipped work — **not a service menu, a pricing page, or an agency marketing site.** It shows capability through composition and engineering confidence, never feature lists. Detailed enough to implement without visual or interaction decisions.
>
> **Naming:** `02` calls this section "What We Could Build (Services)." This document is its canonical spec. It occupies the homepage slot between the Showcase and the Attendant.

---

## 0. Conventions & relationship

- Units, motion categories/tokens, tiers: per `10`, `11`.
- A **reading/atmosphere scene** like About and Experience: CSS lighting, no canvas; no spectacle.
- Services **turns the pronoun outward** — the first section about *you* — but does so *after* the work, so every capability is backed by proof the visitor just saw (`06`).

---

## 1. Grounding & Data Provenance (read first)

Per `01 §16` and this task's explicit instruction, **no expertise, technology, or offering is invented.** Every capability traces to shipped work in the repo. ⚠ marks items requiring Raheel's confirmation before ship.

### 1.1 What the capabilities are grounded in (confirmed)

| Evidence | Source |
| --- | --- |
| **Multi-role / marketplace / dashboard products** — SalHub (4-role marketplace, RLS-backed bookings, workspaces, admin), StrangerUs (establishment operations console), NZH (multi-tenant dashboards). | `content/projects/{SALHUB,STRANGERUS,NZH}.md` |
| **Real stacks** — Next.js · React · TypeScript · Tailwind · Supabase/PostgreSQL/RLS · Redux · Socket.IO · Google Maps · Cloudinary · Turnstile · Resend · next-intl · Recharts/Chart.js · Framer Motion. | project briefs |
| **Internationalization** — real bilingual delivery: **EN/DE** (SalHub), **EN/中文** (NZH). | briefs |
| **Real-time & data** — Socket.IO chat (NZH), analytics dashboards (Recharts/Chart.js), QR check-in flows (StrangerUs). | briefs |
| **Cinematic, performance-budgeted frontend + AI integration** — this portfolio: GSAP · Three.js · a Claude-powered attendant, built to a performance/accessibility budget. | this repo |
| Positioning: **"Building modern web experiences powered by AI"**; role "Frontend Engineer". | `content/site.ts` |

### 1.2 Draft / UNCONFIRMED — do **not** present as fact (⚠ confirm)

| Item | Status |
| --- | --- |
| ⚠ The **exact three offerings and their wording** (`content/services.ts` drafts) | AI-drafted, grounded but **copy-pending**. Confirm these are what Raheel wants to be hired for. |
| ⚠ **AI/LLM depth beyond this portfolio** (Offering B) | Evidenced by *this site's* attendant. If there is additional client AI work, cite it; otherwise frame honestly as "demonstrated here." |
| ⚠ **Engagement model** (availability, contract vs freelance vs full-time, rates) | Unknown. **The section states no prices, tiers, or availability** (by design, §4) — but any future "available for X" line needs confirmation. |
| ⚠ Any technology a capability names that Raheel does **not** want to claim | Confirm the stack shown per offering. |

### 1.3 The rule

**Every capability line must map to at least one shipped project (or this portfolio).** No offering is added that isn't backed by real work. A capability with no evidence is not curated — it's invented — and is forbidden.

**Reasoning.** Leading with provenance makes the "curated, not generic" promise auditable: an implementer (and a reviewer) can trace every word to a real project, and the one soft spot (AI depth) is flagged rather than inflated.

---

## 2. Purpose

### 2.1 Why the section exists

The Showcase produced *conviction* — "he ships serious work." Services converts that conviction into **possibility for the visitor**: it names, in the calmest voice in the film, the few things that work means he can build *for them*. It is the turn from *what he has built* to *what he could build with you*.

### 2.2 The emotion

**Imagination.** The visitor begins mentally casting their own project into what they've just seen. Not "should I hire this person?" pressure — a quiet, confident "I can picture my product in this."

**Reasoning.** Placing possibility immediately after proof means every capability lands as *evidenced*, not aspirational — the difference between "I can build X" (a claim) and "the thing you just saw *is* X" (a demonstration). Imagination, not persuasion, is the target because pressure would break the composure the whole film has earned.

---

## 3. Narrative Role

Services is **the exhale.** After the spectacle and the three worlds, the film settles into an even, comfortable light — the performance is over; this is conversation. It is the bridge from the work to the ask: it hands the visitor, gently, toward the Attendant and then the Invitation.

- **Preceded by** the Showcase's cool light evening into a warm studio light (`02 §05`).
- **Followed by** a single point of light detaching and drifting **toward the visitor** — the first element in the film to move *at* them — leading into the Attendant.

**Reasoning.** The exhale is structural: after the film's one loud moment, a calm section is what makes the ending feel like ease rather than a hard sell. The point-of-light handoff makes Services *deliver* the visitor onward rather than merely precede the ending.

---

## 4. Service Philosophy (the core decision)

**Decision: three curated, evidenced capabilities — stated, never sold. No menu, no features, no prices, no tiers, no availability, no CTAs shouting.**

The rules that keep this from becoming a freelance pricing page:

1. **Capabilities, not services.** Not "web design / SEO / maintenance." Three *kinds of thing he can build*, each proven by the work just shown.
2. **Countable on one hand.** Exactly **three** (a fourth only if it earns its place and is grounded, §5). Three is confidence; a long list is anxiety.
3. **Show, don't sell.** Each capability is **one line + two exact specifics** — a statement, not a pitch. No adjectives about himself, no "hire me," no urgency, no packages.
4. **No feature lists.** Capability is shown by *composition and restraint*, not bullet inventories. If it reads like a spec sheet, it's wrong.
5. **No prices, tiers, or availability.** This is not a rate card. The ask (and any engagement terms) belong to Contact, and even there it's one warm line, not a form.
6. **Restraint is the confidence.** Services rendered in the film's calmest voice read as *"of course I can build this"* — the plainness *is* the credibility (`01 §1.3`).

**Reasoning.** The single biggest risk here is the section collapsing into agency-marketing (icon + heading + three bullets + "Get a quote"). Every rule above is a specific defense against that collapse. Stating capability plainly, backed by proof, is how a senior engineer signals confidence — a salesperson lists features; a craftsman shows the work and names what it means.

---

## 5. Capability Presentation

### 5.1 Anatomy of one capability

Each capability is a **reel entry** — indexed, calm, exact:

| Part | Voice | Content | Notes |
| --- | --- | --- | --- |
| **Index** | Console | `01` / `02` / `03` (zero-padded) | reel numbering; rhythm, not ranking |
| **Capability line** | Plate line | the kind of thing he builds (a statement, period) | 4–9 words; no self-adjectives |
| **Specific — the *what*** | Console | the domains/deliverables it covers | grounded in shipped work |
| **Specific — the *with-what*** | Console | the real stack behind it | specimen text, never logos |

Two specifics, exactly — one names *what kind of product*, one names *the instruments*. No third bullet; no expanding feature list.

### 5.2 The grounded capability set (3)

> Grounded per §1.1; **wording is copy-pending** (⚠ confirm the curation and phrasing in Raheel's voice). Each maps to real evidence (the mapping is the proof of "curated, not generic").

**01 — Product frontends that ship.**
- *What:* multi-role dashboards, marketplaces, booking and operations consoles.
- *With:* `Next.js · React · TypeScript · Supabase · PostgreSQL`.
- *Evidence:* SalHub (multi-role marketplace, RLS bookings), StrangerUs (establishment console), NZH (multi-tenant dashboards).

**02 — Interfaces with intelligence built in.**
- *What:* in-product assistants, LLM features, AI-assisted flows.
- *With:* `Claude API · streaming · prompt design`.
- *Evidence:* this portfolio's AI attendant (a working, in-world assistant). ⚠ If additional AI client work exists, cite it; else this is honestly "demonstrated here."

**03 — Sites with engineering behind the surface.**
- *What:* bilingual, fast, accessible-by-default products.
- *With:* `next-intl (EN·DE · EN·中文) · Core Web Vitals · semantic SEO`.
- *Evidence:* real bilingual delivery (SalHub EN/DE, NZH EN/中文); this portfolio's performance budget and designed accessibility.

**A fourth capability** may be added only if (a) Raheel wants it and (b) it maps to shipped work; otherwise **three stands.** Do not pad to four.

**Reasoning.** Three capabilities that each trace to real projects is the literal definition of "curated capabilities rather than a generic list." The evidence mapping is what lets a reviewer verify nothing is invented — and it's why the section can be confident: every line has already been proven one section earlier.

---

## 6. Technology Representation

- Technology appears **only** as the *with-what* Console line — **specimen text, interpunct-separated, never logos, badges, chips, or a tech cloud** (`01 §8`, `§23.9`).
- The stack shown per capability is a **subset chosen for that capability**, grounded in §1.1 — not an exhaustive dump. (The full instrument constellation lives in Experience, `08 §5.3`; Services shows only the tools relevant to each offering.)
- Internationalization is shown as **`EN·DE · EN·中文`** — a real, differentiating capability rendered as instrumentation.
- No version numbers, no "expert/advanced" qualifiers, no proficiency indicators (impossible in the data model, `01 §23.9`).

**Reasoning.** Logos and badges are the visual language of agency sites; Console specimens are the language of an engineer's instrument panel. Showing a *relevant subset* per capability (not every tool) is what makes it read as considered rather than a keyword-stuffed skills wall.

---

## 7. Composition

```
 rail │                     content field
──────┼──────────────────────────────────────────────────────────
      │  ◦ WHAT WE COULD BUILD            (Console eyebrow)
      │
      │  01   Product frontends that ship.            (Plate line)
      │       multi-role dashboards, marketplaces, consoles
      │       Next.js · React · TypeScript · Supabase   (Console)
      │
      │  02   Interfaces with intelligence built in.
      │       in-product assistants, LLM features, AI flows
      │       Claude API · streaming · prompt design
      │
      │  03   Sites with engineering behind the surface.
      │       bilingual, fast, accessible by default
      │       next-intl (EN·DE · EN·中文) · CWV · semantic SEO
      │                                                   ◦ figure
      │                            · (point of light detaches ↓)   Distant
```

- **Spacious, single calm column** (offerings in `container.read`/`container.panel`), left-anchored, generous vertical rhythm (`space.thought`+ between offerings).
- **Index in the margin**, capability line dominant, two Console specifics beneath — a reel, not a card grid.
- **Distant portrait at the frame's edge** (STAGE/COMPACT) — the builder back in the room now the work has spoken; small, quiet.
- **The bare warm room:** no `StageBackground` state — the most evenly comfortable light so far (a well-designed studio during a good meeting). No panels, no glass, no ornament.
- **Negative space:** 60%+ dark; the offerings float in a calm, lit column with wide dark around — the exhale rendered as space.
- **The detaching light:** beneath the final offering, a small point of light detaches and drifts down-frame toward the visitor (the Attendant handoff).

**Reasoning.** A single calm column with reel indexing is the anti-agency composition — no three-up card grid, no icon row. The bare warm room (no glass, no background device) is the visual form of the exhale: after the spectacle, the section that shows the *least* reads as the most confident.

---

## 8. Visual Hierarchy

1. **The capability lines (Plate)** — the offer; the first thing read.
2. **The index + the *what* specifics** — the shape and domain of each capability.
3. **The *with-what* (tools, Console `bone-45`)** — the instrumentation, read if wanted.
4. **The Distant portrait at the edge** — the builder, present but quiet.

**No Sol primary in this section** (§11) — the hierarchy terminates in reading and the drift onward, not a button. The single warm accent is the detaching point of light.

**Reasoning.** Leading with the capability *statements* (not the tools, not a CTA) keeps the section a calm conversation about possibility. Withholding a primary action is deliberate: the ask belongs to Contact, and a "hire me" button here would shatter the exhale.

---

## 9. Typography

- **Eyebrow:** Console (`WHAT WE COULD BUILD` or similar — copy-pending), `bone-45`.
- **Capability line:** Plate line (27→20 per tier, `11 §3.3`), `bone-100` when lit / `bone-45` when passed.
- **Index:** Console, `bone-45` (a quiet reel number, not a heading).
- **Specifics:** Console (`what` in `bone-70`, `with` in `bone-45`), interpunct-separated.
- **No Marquee** — Services speaks in Plate and records in Console; the monumental register is reserved for names/titles/the closing (`01 §5`).

**Reasoning.** Withholding Marquee keeps Services subordinate to the Hero and Contact in register — it's a calm middle voice, not a headline moment, which is exactly right for the exhale.

---

## 10. Lighting

- **Balanced, warm-neutral** — the most evenly comfortable light in the film; a studio during a good meeting. No dramatic key, no deep vignette; even and calm.
- **The offering under attention lifts a breath** in brightness as it's read (`01 §11` — the one ambient effect).
- **One warm accent:** the detaching point of light (the Attendant lantern being born) is the viewport's single warm glow.
- No cast shadows; grain over all; no background device (`01 §12`, §7 here).

**Reasoning.** Evening the light out — after four sections of dramatic key lighting — is the lighting expression of "the performance is over; this is conversation." Comfort *is* the design here; drama would undercut the confidence-through-calm.

---

## 11. Motion

Authority `10`; scrubbed and reversible unless noted.

| Beat | Motion | Cat | Purpose |
| --- | --- | --- | --- |
| **Offerings surface** | each offering fades + lights as it reaches the reading zone, one at a time (a callback to the About monologue) | 2 | the film speaking person-to-person again |
| **Attention lift** | the offering under attention lifts a breath in brightness | 4/2 | the one ambient effect |
| **Portrait returns** | Distant figure fades in at the edge | 1 | the builder back in the room |
| **The detaching light** | a point of light detaches beneath the last offering and **drifts toward the visitor** | 5 | the first element to move *at* you; Attendant handoff |

**Illuminate-not-travel** governs the offerings (like About/Experience): they brighten in place, never slide. Pace is unhurried — the exhale. `scrub.tight` for reading, glide for timed, none for scrubbed.

**Reasoning.** Reusing the About monologue's illuminate grammar is a deliberate callback — the last time the film spoke person-to-person — which is exactly the register Services wants. The point-of-light drifting *toward* the visitor is the single most important motion here: it's the film reaching out, the pivot from showing to asking.

---

## 12. Interaction

A reading scene; interaction is minimal and quiet.

| Input | Behaviour |
| --- | --- |
| **Hover** (offering) | the offering lifts one step in light (120ms in / 240ms out); no motion, no CTA reveal. |
| **Focus** | no focusable content by default (no links/CTAs); focus passes through to the Attendant/next section. |
| **Click** | nothing — Services has **no interactive targets** by design. (If a future quiet "start a conversation" link is added, it must not preempt Contact's one ask — decide in review.) |
| **Touch** | scroll drives the reveal; no tap targets. |
| **Reduced motion** | all offerings present at full contrast; no surfacing, no drift, no lift. |

**Reasoning.** The absence of interaction is the point — a section whose subject is *quiet confidence* should not fidget or funnel. Explicitly shipping *no* CTA here (the ask is Contact's) is what keeps Services from becoming a lead-gen block.

---

## 13. Responsive Behavior

Per `11 §5.5`.

| Tier | Composition |
| --- | --- |
| **STAGE / COMPACT** | Three offerings, indexed, calm column; Distant portrait at frame edge; bare warm room. |
| **COLUMN (tablet portrait)** | Offerings stack full-width, index in the left margin; **Distant portrait inline-small or omitted**. |
| **REEL (phone)** | Offerings stack, each with generous dark; **index above each capability line**; **portrait omitted** (person implied); the detaching light drifts down into the Attendant. |

- Type/spacing per `11 §3`. Reading order (all): eyebrow → 01 (line → what → with) → 02 → 03.
- The "countable on one hand" shape reads at every size; no offering is ever below `bone-45` (AA) when passed.

**Reasoning.** Moving the index above the line on REEL (rather than shrinking a margin number to illegibility) is the re-block that keeps the reel rhythm on a phone — same calm cadence, blocked for the tall frame.

---

## 14. Accessibility

- **Semantics:** the offerings are an ordered list `<ol>`; each `<li>` contains the capability as text (a heading or emphasized line) and the two specifics; the index is presentational (`aria-hidden` or via CSS counters, not read as content). The portrait is `aria-hidden`/`alt=""` (`01 §21`); the detaching light is decorative (`aria-hidden`).
- **Screen readers:** read a coherent, ordered list of three capabilities with their domains and tools — meaningful with all light/motion removed; ⚠ items never voiced as fact.
- **Reduced motion:** static, full-contrast; no surfacing/drift/lift (`10 §15`).
- **Readability floor:** passed-offering dim floor is `bone-45` (AA); the **static Set renders all offerings at full contrast** (`05 §8.4`).
- **Keyboard:** no interactive targets by default → nothing to trap; focus passes through.
- **SEO:** three real, server-rendered capability statements with grounded stack text are strong, honest content; no text baked into images; no keyword-stuffed skills wall.

**Reasoning.** An ordered list of plain capability statements is both the most accessible and the most honest representation — a screen reader hears exactly what a sighted visitor reads, and a crawler indexes real capability text rather than decorative badges.

---

## 15. Performance

- **Rendering:** CSS lighting only — **no canvas** in Services (the canvas stays frozen until the Threshold, which is already past; nothing 3D here) (`05 §9`, `06 §10`).
- **Animation budget:** offering-opacity surfacing + one attention lift + the detaching-light drift — all transform/opacity, trivially within ≤8ms (`10 §17`).
- **Idle:** none (the detaching light is a scrubbed handoff, not a loop).
- **Images:** one Distant portrait (small, lazy, graded) on STAGE/COMPACT; omitted on REEL. No project media (referenced by text). CLS ≈ 0 (text-driven, reserved boxes).

**Reasoning.** Services is deliberately the lightest section on the page — text and CSS light only — which is fitting for the exhale and keeps the run-up to the ending fast and smooth.

---

## 16. Engineering Implementation Notes

- **Data source:** the existing typed, schema-validated `content/services.ts` — a `services` array where each entry is `{ line: string, specifics: [what: string, with: string] }`, min 3 / max 4 (the Zod schema already enforces exactly one line + a **two-tuple** of specifics, so a feature list is structurally impossible). **The two-tuple is the anti-feature-list guarantee** — keep it.
- **⚠ Ship gate:** confirm the three offerings, their wording, and each stack line with Raheel before launch (§1.2). Do not add an offering not backed by shipped work (§1.3).
- **Registration:** `data-crew` targets — `services-offering` (per `<li>`), `services-portrait`, `services-drift` (the detaching light) — consistent with the conductor pattern.
- **Motion:** offering surfacing via opacity (`scrub.tight`); the detaching light via transform/opacity, its end position aligning with the Attendant's entry (`06`/`10` handoff); one `gsap.matchMedia` block for tiers + reduced-motion.
- **Lighting:** even warm-neutral via CSS (a soft, near-flat radial or a flat warm ambient) — **no `StageBackground` device**; the offering lift is a brightness/opacity transition.
- **No canvas** mounted for this section; no video; no heavy media.
- **Index:** render via CSS counters or static Console text; keep out of the accessibility tree if decorative.

**Reasoning.** The schema's fixed **two-tuple of specifics** is the engineering enforcement of §4's "no feature lists" — an implementer physically cannot add a third bullet, so the restraint survives contact with future edits. Encoding the rule in the type system (not a comment) is the strongest guarantee.

---

## 17. Testing Checklist

- [ ] **Exactly three** capabilities (or four only if grounded + confirmed); each is one Plate line + **two** Console specifics — no third bullet, no feature list.
- [ ] Every capability maps to shipped work (§5.2); **no invented offering or technology**; ⚠ AI-depth framed honestly.
- [ ] **No prices, tiers, packages, availability, or "hire me" CTA** anywhere in the section.
- [ ] Technology shown as Console specimens only — **no logos, badges, chips, or version numbers**.
- [ ] Composition: calm single column, reel index, Distant portrait at edge (STAGE/COMPACT), bare warm room; 60%+ dark.
- [ ] Illuminate-not-travel: offerings brighten in place; passed floor `bone-45` (AA); static Set fully readable.
- [ ] The detaching point of light drifts **toward the visitor** and hands off to the Attendant.
- [ ] **No Sol primary / no interactive targets** by default; focus passes through.
- [ ] Responsive: index-above-line on REEL; portrait omitted on REEL; reel cadence preserved.
- [ ] Semantics: `<ol>` of capabilities; index decorative; SR reads three grounded capabilities; ⚠ never voiced as fact.
- [ ] Reduced motion static; no canvas; ≤8ms; CLS ≈ 0.
- [ ] Real capability text present for SEO; internal-link authority not required here (references live in Experience/Showcase).

**Reasoning.** The checklist's spine — *three, two specifics each, no prices, no logos, no CTA, all grounded* — is a direct pass/fail translation of the service philosophy (§4), so a reviewer can verify the section didn't drift into an agency page.

---

## 18. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- **Three curated, evidenced capabilities — stated, never sold**; no menu, prices, tiers, availability, or CTA. *(§4)*
- Each capability = **one Plate line + two Console specifics**, mapped to shipped work; the **two-tuple schema makes a feature list impossible**. *(§5, §16)*
- Technology shown as **Console specimens, relevant subset per offering**, never logos. *(§6)*
- **Bare warm room, calm column, reel index, Distant portrait at edge**; no Sol primary; the exhale. *(§7, §8, §10)*
- **No interactive targets by default**; the ask belongs to Contact; the detaching light hands off to the Attendant. *(§11, §12)*

**Open — ⚠ requires Raheel's confirmation before ship:**
- The **three offerings, their wording, and each stack line** (grounded but copy-pending). *(§1.2, §5.2)*
- **AI/LLM depth beyond this portfolio** for Offering 02 (cite client work or frame as "demonstrated here"). *(§1.2)*
- Whether any **engagement/availability** line is ever wanted (default: none). *(§1.2)*
- Whether a **fourth** capability is warranted and grounded (default: three). *(§5.2)*

**Amendment protocol:** the service philosophy (§4), the three-capabilities / two-specifics shape (§5), the no-prices/no-CTA stance (§4, §11), and the grounding rule (§1.3) are section-defining — changes are proposed here, dated; any new capability must trace to real shipped work, and the exit handoff is co-owned with `06`/`10`.

---

*North star for this file: the exhale — three quiet, evidenced capabilities named in the calmest voice in the film, each one already proven by the work just shown, with no price, no pitch, and no button. Confidence rendered as restraint; a builder stating plainly what he can make, and a single point of light reaching toward the visitor to begin the conversation.*
