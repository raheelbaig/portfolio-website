/**
 * Section 02 — "Closer" (About). `docs/v2/05-about.md`.
 *
 * **Not a biography — a point of view** (§1). Four spoken lines in the cadence
 * of voiceover, each a self-contained sentence, ending on intent.
 *
 * ── The four beats (§3.1), in order ────────────────────────────────────────
 *   seeing     how he sees the work — a way of seeing
 *   believing  what he believes — a value about the web, craft, or trust
 *   deciding   **how he decides** — the engineering-philosophy beat. §3.4's
 *              reasoning calls this "the load-bearing one": it reveals judgment
 *              without a single credential. It must be a *decision principle*,
 *              not another belief. (V1's third line was a belief, so it did not
 *              satisfy this beat and is not carried forward.)
 *   intent     the turn forward, handing the visitor to the work
 *
 * ── Copy status: PENDING (§3.4, §11) ──────────────────────────────────────
 * The lines below are the specification's own illustrative drafts. §3.4 and §11
 * are explicit that they demonstrate *structure and cadence only* and that the
 * real copy — in Raheel's voice — is owned by a copy pass. They are wired here
 * so the section is complete and reviewable; `draft: true` marks them as not
 * yet approved, and nothing renders differently because of it.
 *
 * TODO(raheel): replace all four lines with your own words, keeping one beat
 * per line, then set `draft: false`. The beats are fixed by §3.1 and must not
 * be reordered; §11 makes the closing line dependent on the Approach section's
 * final identity, so it is the most likely to change.
 *
 * §4.2 bans every self-adjective — *passionate, detail-oriented, hardworking,
 * problem-solver, pixel-perfect, ninja, rockstar*. Craft is demonstrated by
 * these being four exact sentences; it is never claimed.
 */

export type AboutBeat = "seeing" | "believing" | "deciding" | "intent";

export const about = {
  /** Visually hidden; keeps the outline correct while the frame stays wordless (§8.1). */
  srHeading: "About",

  /** True until the copy pass lands. See the note above. */
  draft: true,

  monologue: [
    {
      beat: "seeing",
      line: "I build interfaces the way films are cut — restraint, rhythm, one idea per frame.",
    },
    {
      beat: "believing",
      line: "The web is the most expressive medium we have; craft is what makes people trust it.",
    },
    {
      beat: "deciding",
      line: "When two good solutions tie, I ship the one the next engineer will thank me for.",
    },
    {
      beat: "intent",
      line: "The rest of this page is how — and what I've built.",
    },
  ] as ReadonlyArray<{ beat: AboutBeat; line: string }>,

  /**
   * The Console fact beneath the portrait (§3.4, §4.5) — the "instrument
   * reading": dry, exact, numbers not adjectives.
   *
   * **Deliberately null — the slot is reserved, not filled.** §3.4 marks it
   * copy-pending and §11 lists its fields (years / base / availability) as an
   * open question. V1 shipped "5+ years of building for the web", which was
   * never a confirmed fact — the same unverified claim already removed from the
   * Hero's control strip. It is not carried forward.
   *
   * While it is empty the engineering register is carried by the measure mark
   * (§4.5's sanctioned optional device) — instrumentation rather than a claim.
   *
   * TODO(raheel): supply the confirmed fact, e.g. years and/or base.
   */
  fact: null as { label: string; value: string } | null,
} as const;
