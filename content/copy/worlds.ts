/**
 * Scenes 7–9 — the shared world grammar's labels (Storyboard: technical
 * voice for "the quiet facts"). One vocabulary for all three worlds so the
 * trilogy reads as one grammar.
 */

export const worldCopy = {
  beats: {
    tension: "The tension",
    decision: "The decision",
    resolution: "Shipped",
  },
  facts: {
    role: "Role",
    stack: "Stack",
    decisions: "Decisions",
  },
  /** The way home from a deep cut. */
  backToFilm: "Return to the film",
} as const;

/**
 * Section 04 — "Selected Work" (`docs/v2/06-project-showcase.md`).
 *
 * One vocabulary for the exhibition, so all three worlds read as one grammar
 * (§3). The section teases; it never documents — the full story lives at
 * `/work/[slug]` (§0).
 */
export const showcase = {
  /**
   * The section is labelled rather than headed: §9.2 puts the `<h2>` on each
   * project name, so the region carries its name in `aria-label`.
   */
  regionLabel: "Selected work",

  /**
   * The one primary per world (§3.2). "Enter", never "Read case study" —
   * the verb frames the route as *walking through the door*, which is the
   * whole world metaphor.
   */
  enter: (title: string) => `Enter ${title}`,
  /** Completes the link's accessible name for screen readers (§9.2). */
  enterContext: "case study",

  /**
   * The quiet secondary (§3.2). Rendered only where a real live URL exists —
   * **live URLs are pending across all three worlds** (§0, §12), so the slot
   * is reserved and nothing is invented.
   */
  visit: "Visit live",
  visitContext: "opens in a new tab",
} as const;
