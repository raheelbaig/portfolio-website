/**
 * Scene 2 — "The Still Point" (Hero). The Script for the film's opening
 * frame (Storyboard Scene 2; Bible §9 copy law: headlines are declarative
 * sentences, 4–9 words, first person welcome, periods earned).
 */
import { site } from "@/content/site";

export const hero = {
  name: {
    /** The monumental display word — the largest type in the film. */
    display: "Raheel",
    /** Completes the accessible name without widening the title card. */
    srSuffix: "Baig",
  },
  role: site.role,
  /** The second line of dialogue, one beat after the name. */
  philosophy: `${site.tagline}.`,
  /** The scene's one warm ask (one Invitation per viewport, ever). */
  primaryCta: {
    label: "Let's talk",
    href: `mailto:${site.email}`,
  },
  /** The quiet alternative: onward into the film. `#work` is the projects
   * gateway anchor — wired when Act II's scenes mount. */
  secondaryCta: {
    label: "See the work",
    href: "#work",
  },
  /** The technical margin notes: two exact facts, no selling (Bible §9).
   * TODO(raheel): confirm both values before launch. */
  meta: [
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "react · next.js · ai" },
  ],
  scrollHint: "Scroll",
  /** For the real asset milestone; the placeholder is aria-hidden. */
  portraitAlt:
    "Raheel Baig, lit by a single key light against darkness, looking toward the camera",
} as const;
