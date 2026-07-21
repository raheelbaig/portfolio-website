/**
 * Copy for the app shell (skip link, placeholders, footer whisper).
 * Placeholder lines are milestone scaffolding: they mark where scenes will
 * mount and are replaced scene-by-scene in later milestones.
 */

export const shell = {
  skipToFilm: "Skip to the film",
  navLabel: "Chapters",
  /** Placeholder until Scene 1–12 components exist. */
  filmPlaceholder: "The film begins here.",
  navPlaceholder: "Navigation arrives with the film.",
  footerPlaceholder: "Credits arrive with the film.",
} as const;
