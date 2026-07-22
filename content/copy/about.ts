/**
 * Scene 3 — "Closer" (About). The first spoken lines of the character.
 *
 * Storyboard law: not a biography — three or four sentences with the cadence
 * of voiceover (who he is, what he believes, why he builds), closing on
 * intent. The final line is canonical: it hands the visitor to the road.
 *
 * Bible §9: first person, short declarative sentences, no exclamation marks,
 * confidence through precision.
 *
 * TODO(raheel): these lines are drafted in your voice from the docs — make
 * them yours before launch. The closing line should stay.
 */

export const about = {
  /** Visually hidden; keeps the outline correct while the frame stays wordless. */
  srHeading: "About",
  monologue: [
    "I'm a frontend engineer who builds interfaces the way films are made — restraint, rhythm, one idea per frame.",
    "I believe the web is the most expressive medium we have, and that craft is what makes people trust it.",
    "The engineering should disappear; what a visitor feels is the care.",
    "Five years of building. Here's the road.",
  ],
  fact: {
    label: "The record",
    /** TODO(raheel): add your city when confirmed, e.g. "5+ years · based in …". */
    value: "5+ years of building for the web",
  },
} as const;
