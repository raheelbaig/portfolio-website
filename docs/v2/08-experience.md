# V2 — Experience Specification

> **Status:** Complete — the canonical specification for the Experience section (homepage Section 03, "Approach & Instruments" in `02`).
> **Codename:** NOCTURNE. **Sources of truth:** `01-brand-system.md`, `02-homepage-architecture.md`, `05-about.md`, `06-project-showcase.md`, `10-motion-language.md`, `11-responsive-system.md`.
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This section communicates **professional growth through a few carefully selected milestones and the tools that made them** — a cinematic progression, **not a résumé timeline, LinkedIn profile, or CV dump.** Detailed enough to implement without visual or interaction decisions.
>
> **Naming:** `02` calls this section "Approach & Instruments." This document treats **Experience** as that section's canonical spec, folding a short approach lead + the milestone path + the instrument constellation into one continuous scene. It occupies the homepage slot between About and the Showcase Threshold.

---

## 0. Conventions & relationship

- Units, motion categories/tokens, tiers: per `10`, `11`.
- This is a **reading/atmosphere scene** (like About): CSS lighting, no canvas; the one spectacle is the *next* section (the Threshold), not this one.
- The projects are referenced here as **waypoints of a trajectory**, *not* re-shown as exhibits — the exhibits are the Showcase's job (`06`). Experience answers *"how did he get here and what can he do"*; the Showcase answers *"look at the work."*

---

## 1. Grounding & Data Provenance (read first)

Per the standing rule (`01 §16`) and this task's explicit instruction, **nothing here is invented.** Every milestone and instrument traces to real repository data. This table is the contract; anything marked ⚠ must be **confirmed by Raheel before ship.**

### 1.1 Confirmed (from the project briefs & git)

| Fact | Source |
| --- | --- |
| **SalHub** — multi-role event marketplace (EN/DE); 4 role dashboards, RLS-backed bookings, request workspaces, partner affiliates, admin moderation, anti-spam. Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Turnstile · Framer Motion. Role: part of the engineering team. | `content/projects/SALHUB.md` |
| **StrangerUs** — establishment web portal for a location-based social platform; auth/OTP, multi-step onboarding, analytics dashboard, QR check-ins, events & jobs, reviews, discovery scheduling. Next.js 15 · React 19 · TS · Tailwind · Redux · Google Maps · Recharts · Turnstile · Cloudinary. Org: GoodToGo (`gtg-pro`). | `content/projects/STRANGERUS.md` |
| **NZH (New ZhengHe)** — bilingual (EN/ZH) cross-border employment platform; **built the Institution Dashboard end-to-end**, job-seeker onboarding/profile, cross-dashboard delete-account, chat UI, the Phoenix Law page. Next.js 16 · React 19 · TS · next-intl · Socket.IO · Google Maps · Chart.js · Cloudinary · PM2. | `content/projects/NZH.md` |
| **NZH period (git):** **May 2026 – June 2026** on `raheel-branch`; **~108 commits, ~36 PRs merged, ~10,600 lines** (git authors `raheelbaig`, `Raheel-afk`). *The only firmly dated milestone.* | `content/projects/NZH.md §6B` |
| **This portfolio** — a cinematic, performance-budgeted site with an AI attendant; built with Next.js, React, TypeScript, Tailwind, GSAP, Three.js, and a Claude-powered assistant. Self-evident (the visitor is inside it). | this repo |
| Role self-description: **"Frontend Engineer"**; email `baig8911@gmail.com`; tagline "Building modern web experiences powered by AI." | `content/site.ts` |

### 1.2 Draft / UNCONFIRMED — do **not** present as fact (⚠ confirm)

| Item | Status |
| --- | --- |
| ⚠ **"5+ years" experience claim** (in Hero/site drafts) | Unconfirmed. **Experience does not assert it.** Confirm start year. |
| ⚠ **2021–2025 year-by-year roles** (`content/journey.ts`) | These were **AI-drafted placeholders**, flagged TODO. **Not used here.** Provide real history or leave the scope-based arrangement. |
| ⚠ **Dates/sequence of SalHub and StrangerUs** | Unknown (no git dates supplied). Shown as "period to confirm." |
| ⚠ **Employment nature** (employee / contract / freelance) and company relationships | Unknown. The section references *projects and contributions*, never asserts an employer. Confirm. |
| ⚠ **Per-tool depth of personal ownership** in the instruments | The stacks are real (shipped work); exact individual depth per tool should be confirmed. |
| ⚠ **Exact role title per engagement** (brief says "engineering team" / "Frontend Developer") | Uses "Frontend Engineer" from `site.ts`; confirm per-project. |

### 1.3 The consequence for design

Because **only NZH is dated** and the drafted timeline is unconfirmed, **a dated résumé timeline is impossible to build honestly.** This constraint *shapes the section's entire philosophy* (§4): milestones are arranged by **scope and trajectory-to-present**, not fabricated dates. This is both the honest choice and the more cinematic one.

**Reasoning.** Leading with provenance makes the honesty auditable and turns a limitation (missing dates) into the section's defining idea. An implementer knows exactly which strings are real and which await confirmation before launch.

---

## 2. Purpose

### 2.1 Why the section exists

After About establishes *how Raheel thinks*, Experience establishes *what that thinking has produced and the range it spans* — the evidence that the taste is backed by shipped, substantial work, and the tools behind it. It is the receipt for the craft the visitor has been feeling, laid out just before the work itself is shown.

### 2.2 The emotion

**Confidence in the craftsman** — the quiet respect of seeing a well-kept workbench and a real trajectory. Not "impressive résumé," but "this person has actually built serious things, and knows exactly what they used."

**Reasoning.** Positioning the milestones as *evidence of range* (not a job history) matches the honest data and produces respect rather than the skim-fatigue of a CV. It also sets up the Showcase: by the time the projects appear as worlds, the visitor already knows they are real, shipped systems.

---

## 3. Narrative Role

Experience is the **ascent to the present.** It is the bridge from the personal (About) to the proof (Showcase): a luminous path of a few real milestones leading toward *now*, with the instruments arrayed as the tools carried along it. Its final light gathers into the Threshold — the path *becomes* the doorway into the work.

- **Preceded by** About's closing line, whose light bleeds forward to draw the path (`05 §5.5`).
- **Followed by** the Threshold; Experience's instruments are the exact lights that converge into the spectacle (`06 §2.2`).

**Reasoning.** Making Experience literally lead into the Showcase (its lights become the assembly) is what stops it from feeling like a detour — the trajectory doesn't just precede the work, it *delivers* the visitor to it.

---

## 4. Timeline Philosophy (the core decision)

**Decision: a curated ascent of scope and capability, culminating in the present — not a dated résumé timeline.**

- Milestones are arranged as a **path leading to *now***. The only firm temporal anchors shown are **NZH (May–June 2026)** and **NOW (2026)** — the present, the site the visitor is inside.
- The other milestones are placed by **scope/capability** (focused surface → complete portal → multi-role platform), **explicitly a curatorial arrangement, not a chronology.** Undated periods render as *"period to confirm"* (⚠), never as invented dates.
- Growth is communicated by **range + recency + the culmination in AI-integrated cinematic craft**, not by counting years.

### Why this, and not a timeline

1. **Honesty (§1.3):** only one milestone is dated; a year-by-year timeline would require fabrication, which is forbidden.
2. **It's more cinematic:** a *path of capability leading to the present* is a film; a dated job list is a CV — and the brief explicitly demands the former.
3. **It ages well:** a scope-based arrangement doesn't rot as years pass, and new work slots in by scope, not by re-dating.

**If Raheel later supplies a confirmed history,** the path can adopt real dates as Console anchors without changing the composition — the milestone slots are date-agnostic by design (§5.1).

**Reasoning.** The timeline philosophy is where this section lives or dies. Grounding it in the real data constraint (one date) and turning that into a deliberate, defensible aesthetic (a capability ascent to *now*) is the whole design — and it keeps the door open for real dates without a redesign.

---

## 5. Milestone Presentation

### 5.1 Anatomy of one milestone (date-agnostic slot)

Each milestone is a **pool of light on the path**, containing, top to bottom:

| Part | Voice | Content | Notes |
| --- | --- | --- | --- |
| **Anchor** | Console-sm | the confirmed date **or** `PERIOD TO CONFIRM` (⚠) | never a fabricated date |
| **Capability** | Plate line | what the work demonstrates (the milestone's title) | a capability, not a job title |
| **Evidence** | Plate body | one sentence, grounded in the real project | states the real scope, no adjectives |
| **Instruments** | Console | the real stack of that work (subset) | specimen text, never logos |
| **Reference** | Console link (quiet) | the project name → optional `/work/[slug]` | quiet; the Showcase owns "Enter" |

The slot is **date-agnostic**: if a real date arrives it fills the Anchor; if not, the Anchor reads `PERIOD TO CONFIRM`. No layout change either way.

### 5.2 The grounded milestone set (4 milestones)

> Ordered as an ascent of scope toward the present. Order is **curatorial, not chronological** (§4). Content is drawn strictly from §1.1; ⚠ marks confirmation-pending anchors.

**M1 — Engineering a multi-role platform** · Anchor: ⚠ *period to confirm*
Evidence: *"Built for SalHub, a marketplace that behaves like four products at once — provider, organizer, partner, and admin — with role-based access, booking workspaces, and moderation, in English and German."* Instruments: `Next.js · Supabase · RLS · Resend · Turnstile`. Reference: SalHub → `/work/salhub`.

**M2 — Delivering a complete operations portal** · Anchor: ⚠ *period to confirm* · Org: GoodToGo
Evidence: *"Built the establishment portal for StrangerUs end to end — auth and onboarding, an analytics dashboard, QR check-ins, events, jobs, reviews, and scheduled discovery."* Instruments: `Next.js · Redux · Google Maps · Recharts · Cloudinary`. Reference: StrangerUs → `/work/strangerus`.

**M3 — Owning a surface in a large bilingual codebase** · Anchor: **May – June 2026** *(git-confirmed)*
Evidence: *"On New ZhengHe, a bilingual (EN/中文) employment platform, I owned the Institution dashboard end to end, shipped cross-dashboard account flows and the real-time chat UI, and built the standalone Phoenix Law page — ~36 pull requests into a large multi-tenant app."* Instruments: `Next.js · next-intl · Socket.IO · Chart.js`. Reference: NZH → `/work/nzh`.

**M4 — Cinematic, AI-integrated craft** · Anchor: **2026 — now**
Evidence: *"This site: a film that happens to be a portfolio — engineered to a performance budget, driven by GSAP and Three.js, with an AI attendant native to the world. The portfolio held to the standard of the work."* Instruments: `GSAP · Three.js · Claude API`. Reference: — (you are here).

> **Copy status:** the evidence sentences are grounded in the briefs but are **draft phrasings — final wording is copy-pending** and must be confirmed in Raheel's voice (`01 §16`). The *facts* are real; the *sentences* need his sign-off.

### 5.3 The instrument constellation (after the path)

At the path's end (the present), the tools he carries — the real stacks, grouped by nature, in pooled light, **never boxes, bars, or logos** (`01 §8`). Grounded in §1.1:

| Group | Instruments (grounded) | Source |
| --- | --- | --- |
| **Interface** | React · Next.js · TypeScript · Tailwind CSS · GSAP · Three.js | all projects; GSAP/Three.js = this portfolio |
| **State & data** | Redux · Supabase · PostgreSQL (RLS) | StrangerUs / SalHub |
| **Integration & real-time** | Socket.IO · Google Maps · Cloudinary · Turnstile · Resend | NZH / StrangerUs / SalHub |
| **Internationalization** | next-intl · EN·DE · EN·中文 | NZH / SalHub — a real differentiator |
| **Intelligence** | Claude API · AI integration · prompt design | this portfolio's attendant |

Equal type size for every instrument (fluency claim); the **Intelligence group carries the slow Ion pulse** foreshadowing the Attendant (`06`/`10`). ⚠ Per-tool ownership depth to confirm (§1.2).

**Reasoning.** Four milestones is "carefully selected," not a dump — each demonstrates a distinct capability (platform breadth / portal completeness / individual ownership / craft+AI), and the set is genuinely grounded. The date-agnostic slot is the mechanism that keeps the section honest today and upgradeable the day real dates arrive.

---

## 6. Composition

```
 rail │                     content field
──────┼──────────────────────────────────────────────────────────
      │  ◦ SELECTED EXPERIENCE            (approach lead, 1 line)
      │  I build the environments the work lives in.
      │
      │  ●────────●────────────●───────────────●·······› ( ◦ figure )
      │  M1        M2           M3 (May–Jun'26)  M4 (now)   Distant
      │  multi-    complete     owned a          cinematic  at path's
      │  role      portal       surface, EN/中文  + AI       end
      │
      │           the instruments carried:
      │   React · Next.js · TypeScript · Tailwind · GSAP · Three.js
      │   Redux · Supabase · PostgreSQL      (pooled light, grouped)
      │   Socket.IO · Maps · Cloudinary · Turnstile · Resend
      │   next-intl · EN·DE · EN·中文
      │   Claude API · AI integration   ∿ (slow Ion pulse)
```

- **Approach lead:** one Plate line naming how he works (the thesis of the trajectory), Console eyebrow above. Short — the section's spoken opening.
- **The path:** a single horizontal line of light (STAGE/COMPACT) running toward the present, with 4 milestone pools; the Distant portrait at the path's end (the figure the journey leads to). Cooler/dimmer toward the start, **warm at the present** (M4) — a light gradient of *scope*, not a claim of dated sunrise.
- **The constellation:** below the path, the instruments in grouped pools of light, the Intelligence group last and pulsing.
- **Negative space:** generous dark around the path and between pools; 60%+ dark holds. The path is a thin thread in a large dark room.

**Reasoning.** One continuous scene (lead → path → constellation) reads as a single movement — the ascent and its tools — rather than two stitched sections. The Distant figure at the path's end is the literal statement that the journey leads to *him*, the constant.

---

## 7. Visual Hierarchy

1. **The path + the present milestone (M4, warmest, at the end)** — the eye is drawn along the light to *now*.
2. **The milestone capability lines** (Plate) — what each waypoint proves.
3. **The instrument constellation** — the tools, read after the trajectory.
4. **Anchors, references, metadata** (Console, `bone-45`) — the quiet record, read only if wanted.

**Reasoning.** Leading the eye to the present (the warmest point) encodes the section's thesis — *this all leads to now* — before any label is read. Instruments rank below the milestones because tools serve the work, not the reverse.

---

## 8. Typography

- **Approach lead:** Plate line (27→20 per tier); Console eyebrow above (`SELECTED EXPERIENCE` or similar — copy-pending).
- **Milestone capability:** Plate line, `bone-100` when lit / `bone-45` when passed.
- **Milestone evidence:** Plate body, `bone-70`.
- **Anchors, instruments, references, metadata:** Console (dates as `<time>` where real; `PERIOD TO CONFIRM` in `bone-45`).
- **Instruments:** Console, identical size for all (fluency), interpunct-separated within a group; Intelligence group in `ion` tone.

No Marquee here — the monumental register is reserved for names/titles/the closing (`01 §5`); Experience speaks in Plate and records in Console. The forbidden size-gap is preserved.

**Reasoning.** Withholding Marquee keeps Experience in a *spoken/recorded* register, subordinate to the Hero's name and the Showcase's project titles — the section is evidence, not a headline moment.

---

## 9. Lighting

- **The path:** a thin cool thread (Ion/`bone`-toned) that **warms toward the present** — the destination (M4/now) is the warmest, lit point; the earlier milestones cooler. This is a *scope* gradient, not a dated sunrise claim (§4).
- **Milestone pools:** each waypoint a small pool of light (`01 §11` practical lights) that brightens as attention passes.
- **One strong glow:** the present milestone / the path's warm end holds the viewport's one strong glow.
- **Intelligence pulse:** the AI instrument group carries the slow Ion pulse (the promise to the Attendant).
- No cast shadows; depth by layered dark; grain over all.

**Reasoning.** Warming toward the present makes "the trajectory leads *here*" a lighting fact, not a copy claim — and keeps it honest (it reads as scope/culmination, not a fabricated timeline of dawns).

---

## 10. Motion

Authority `10`; all scrubbed-to-scroll and reversible unless noted.

| Beat | Motion | Cat | Purpose |
| --- | --- | --- | --- |
| **Path draws in** | the light line draws (`scaleX 0→1`, origin start), scrubbed | 2 | About's last light becomes the path |
| **Approach lead reveals** | fade + settle on section enter | 1 | the spoken opening |
| **Milestones illuminate** | each pool brightens as it passes reading-centre (`0.3→1`), dims to `bone-45` once passed | 2 | the walk of light along the trajectory (`scrub.tight`) |
| **Present milestone warms** | M4 holds warm as reached | 2 | the destination |
| **Constellation reveals** | instrument groups fade in, pools brighten on pass | 1/2 | the tools laid out |
| **Intelligence pulse** | slow Ion glow, in-view only | 3 (idle) | foreshadow the Attendant |
| **Exit → Threshold** | the instrument lights **drift and gather** toward a point below | 5 | the tools converge into the spectacle |

**Illuminate-not-travel** governs the milestone lines (like About): they brighten in place, never slide (`05 §5.2`). Distances tiny; glide for timed, none for scrubbed, sine for the pulse.

**Reasoning.** Reusing About's illuminate-not-travel grammar keeps the reading register consistent, and having the instruments *gather into the Threshold* on exit is the mechanical handoff that makes Experience deliver the visitor to the work rather than merely precede it.

---

## 11. Interaction

Primarily a reading scene; interaction is quiet.

| Input | Behaviour |
| --- | --- |
| **Hover** (milestone / instrument) | lifts one step in light (120ms in / 240ms out); no motion. Instruments follow the bench-lift rule. |
| **Focus** | same as hover + lit ring; never suppressed. |
| **Click** (milestone reference) | quiet Console link → `/work/[slug]` (optional). **Not a Sol primary** — the Showcase owns "Enter"; these are secondary references so Experience keeps zero primary actions (one-primary law holds). |
| **Touch** | reference links ≥44px; hover-lift has a press equivalent. |
| **Keyboard** | references tabbable in DOM order; visible focus. |

**Reasoning.** Keeping the milestone references *quiet* (not Sol) preserves the one-primary-per-viewport law and avoids competing with the Showcase's "Enter" — Experience points toward the work without stealing its call to action.

---

## 12. Responsive Behavior

Per `11`; this section resolves `11 §12`'s open question: **Approach + Instruments are ONE continuous scene on every tier.**

| Tier | Composition |
| --- | --- |
| **STAGE / COMPACT** | Horizontal path with 4 pools + Distant figure at the end; constellation below in grouped pools. |
| **COLUMN (tablet portrait)** | Path rotates **vertical** (a light thread down the left margin), milestones stack as descending pools; constellation reflows to **2 columns**; figure inline-small or omitted. |
| **REEL (phone)** | **Vertical trajectory:** a thread down the left, each milestone holds ~a screen and lights as it passes; constellation single column, groups stacked with the Intelligence pulse kept; Distant figure **omitted** (person implied). Approach lead at top. |

- Type/portrait/spacing per `11 §3`. Reading order (all tiers): approach lead → M1 → M2 → M3 → M4 → instruments (Interface → State/data → Integration → i18n → Intelligence).
- Milestones remain skimmable — the *shape* (an ascent to now) reads even to a visitor who reads none of the evidence sentences.

**Reasoning.** Rotating the path to vertical on tall frames (rather than shrinking a horizontal line to an illegible thread) is the re-block that keeps the trajectory legible on a phone — the same walk of light, blocked for the frame.

---

## 13. Accessibility

- **Semantics:** the milestones are an ordered list `<ol>`; each milestone an `<li>` with a heading (capability) and the evidence as text; dates as `<time>` **only where real** — `PERIOD TO CONFIRM` is plain text, never a fake `datetime`. Instruments are grouped `<ul>`s with `aria-label` per group (names hidden visually, exposed to AT). The path and pools are decorative (`aria-hidden`).
- **Screen readers:** read as a coherent list of capabilities with evidence and tools; the trajectory is meaningful without the light. ⚠ items are never voiced as fact.
- **Reduced motion:** path drawn (static full), milestones present at full contrast, pulse off (`10 §15`).
- **Readability floor:** passed-milestone dim floor is `bone-45` (AA); the **static Set renders all milestones at full contrast** — dimming is a Crew enhancement over readable content (`05 §8.4`).
- **Keyboard:** reference links reachable in order; visible focus; no traps.
- **SEO:** real, server-rendered milestone text + instrument names are strong content and internally link to `/work/[slug]`, passing authority to the case studies. No text baked into images.

**Reasoning.** Treating the milestones as a semantic ordered list (not decorative light) is what makes the trajectory real to a screen reader and a crawler — and refusing to fake `datetime` on unconfirmed anchors keeps the honesty machine-readable.

---

## 14. Performance

- **Rendering:** CSS lighting only (radial pools, gradient path) — **no canvas** in Experience; the canvas/3D is reserved for the Threshold that follows (`06 §10`, `05 §9`).
- **Animation budget:** path draw + pool opacity/brightness scrubs + one idle pulse — trivially within ≤8ms (`10 §17.5`).
- **Idle:** the Intelligence pulse is the only loop; paused off-screen; off on reduced-motion/low-tier.
- **Images:** one Distant portrait (small, lazy, graded) on STAGE/COMPACT; omitted on REEL. No project imagery here (the Showcase owns it) — Experience references projects by name/text, so it loads no heavy media.
- **CLS:** reserve the path/pool boxes; text-driven layout is stable.

**Reasoning.** Experience is deliberately media-light — it references the projects in text and defers all heavy imagery to the Showcase — which keeps the pre-climax section cheap and fast, banking the performance headroom for the Threshold's one spectacle.

---

## 15. Engineering Implementation Notes

- **Data source:** a typed, schema-validated content module (a `milestones` array + the existing `skills`/instruments), in the Script layer (`content/`). **The milestone slot is date-agnostic:** `{ anchor: {kind:'date'|'pending', value?} , capability, evidence, instruments[], projectSlug? }`. Schema **must reject** a fabricated date and require `pending` where unconfirmed — encode the honesty (`01`-style build-time validation).
- **⚠ Ship gate:** the section must not launch with `PERIOD TO CONFIRM` anchors *presented as final*; either confirm dates or ship the scope-based arrangement deliberately. Copy sentences require Raheel's sign-off (§5.2).
- **Registration:** `data-crew` targets for the path (`experience-path`), each milestone (`experience-milestone`), the constellation groups (`experience-cluster` + `data-group`), and the intelligence pulse — consistent with the existing conductor pattern.
- **Path drawing:** a hairline via `transform: scaleX/scaleY` (never width/height); pools via CSS radial-gradient; all animation transform/opacity (`10 §17.2`).
- **Motion tiering:** one `gsap.matchMedia` block for STAGE/COMPACT (horizontal) vs COLUMN/REEL (vertical) path, reduced-motion, and the pin-free reading behaviour; `ScrollTrigger.refresh()` on breakpoint/font changes.
- **Handoff coupling:** the exit "instruments gather" must align with the Threshold's convergence start (`06 §2.2`) — co-owned with `10`; the instrument nodes are the same lights the spectacle lifts.
- **No canvas** mounted for this section; the persistent canvas stays frozen until the Threshold enters view.

**Reasoning.** Encoding the date-agnostic slot and a schema that *rejects fabricated dates* moves the honesty rule from a comment into the build — the section literally cannot ship an invented date, which is the strongest possible guarantee of the §1 contract.

---

## 16. Testing Checklist

- [ ] **No fabricated dates**: only NZH (May–Jun 2026) and "now" render real; all others read `PERIOD TO CONFIRM`; no fake `datetime` in the DOM.
- [ ] Milestone facts match §1.1 exactly; no company/employment claim asserted.
- [ ] Four milestones, arranged by scope to the present; the "ascent" shape reads even without reading evidence sentences.
- [ ] Instruments match §5.3; equal type size; Intelligence group in Ion with pulse (in-view only).
- [ ] Illuminate-not-travel: milestone lines brighten in place, never slide; passed floor = `bone-45` (AA); static Set fully readable.
- [ ] Path draws from About's handoff; instruments gather into the Threshold on exit.
- [ ] References are quiet Console links → `/work/[slug]`; **no Sol primary** in the section.
- [ ] Responsive: horizontal path (STAGE/COMPACT) → vertical path (COLUMN/REEL); one continuous scene; figure omitted on REEL.
- [ ] Semantics: `<ol>` of milestones, grouped `<ul>` instruments, `<time>` only where real; SR reads a coherent capability list; ⚠ never voiced as fact.
- [ ] Reduced motion: static, readable, pulse off. Reduced data: unaffected (no heavy media here).
- [ ] Performance: CSS-only lighting, no canvas mounted; ≤8ms; CLS ≈ 0.
- [ ] Internal links to case studies present (SEO).

**Reasoning.** The first checklist item — *no fabricated dates* — is the section's defining acceptance test; making it a hard gate operationalises the whole provenance contract.

---

## 17. Open Questions & Decisions Log

**Resolved (2026-07-24):**
- Experience = **a curated ascent of scope to the present**, not a dated résumé timeline — forced by, and made a virtue of, the one-date data reality. *(§4)*
- **Four grounded milestones** (SalHub platform / StrangerUs portal / NZH owned-surface / this portfolio) via **date-agnostic slots**; only NZH & "now" dated. *(§5)*
- Instruments grounded in the real project + portfolio stacks; Intelligence group pulses. *(§5.3)*
- One continuous scene (approach + milestones + instruments), horizontal path → vertical on narrow; resolves `11 §12` open question. *(§12)*
- References are **quiet, not Sol** (one-primary law); Experience's exit **gathers into the Threshold.** *(§10, §11)*
- Schema **rejects fabricated dates**; `PERIOD TO CONFIRM` is the honest default. *(§15)*

**Open — ⚠ requires Raheel's confirmation before ship:**
- Real periods/sequence for **SalHub** and **StrangerUs** (or accept the scope arrangement). *(§1.2)*
- The **"5+ years"** claim and any real pre-2026 history (the drafted 2021–2025 roles are **not** used). *(§1.2)*
- **Employment nature** and per-engagement **role titles**. *(§1.2)*
- **Per-tool ownership depth** in the instrument list. *(§1.2)*
- Final **copy** for the approach lead, milestone evidence sentences, and Console eyebrow (facts real, wording pending). *(§5.2)*

**Amendment protocol:** the timeline philosophy (§4), the milestone set (§5), and the date-agnostic-slot / no-fabricated-date rule (§15) are section-defining — changes are proposed here, dated; the exit handoff is co-owned with `06`/`10`, and any new milestone must trace to real repository/confirmed data per §1.

---

*North star for this file: not a CV, but an ascent of light — a few real, well-chosen milestones leading to the present, cool at the start and warm at *now*, with the instruments arrayed as the tools carried and then gathered into the doorway of the work. Every fact is real or flagged; the section literally cannot ship an invented date; growth is shown as range and trajectory, never counted in years.*
