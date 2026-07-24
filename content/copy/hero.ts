/**
 * Section 01 — "The Still Point" (Hero). The Script for the film's opening
 * frame (`docs/v2/03-hero.md`).
 *
 * Every word the Hero speaks lives here; the Set may not hardcode copy.
 */
import { site } from "@/content/site";

export const hero = {
  /**
   * The `<h1>` reads "Raheel Baig" in full (03 §4.1) — for SEO and screen
   * readers alike. Both words are **visible**: `given` is the dominant word,
   * `family` one step smaller on the same line. V1 hid "Baig" behind
   * `sr-only`; 03 §4.1 bans that hack explicitly.
   */
  name: {
    given: "Raheel",
    family: "Baig",
  },
  /** A recorded fact in the machine voice, not a headline (03 §4.2). */
  role: site.role,
  /** The second line of dialogue: one sentence of intent, ≤9 words (03 §4.3). */
  tagline: `${site.tagline}.`,
  /** The one warm ask. Exactly one primary action per view (03 §7.1). */
  primaryCta: {
    label: "Let's talk",
    href: `mailto:${site.email}`,
  },
  /** The quiet alternative — onward into the work (03 §7.2). */
  secondaryCta: {
    label: "See the work",
    href: "#work",
  },
  /**
   * The control strip's metadata (03 §4.4).
   *
   * **Deliberately empty — the slot is reserved, not filled.** 03 §4.4 and
   * §13 both require a copy pass to settle these fields (availability / base
   * / since) and forbid inventing them. V1 shipped `Experience: 5+ years`,
   * which was never a confirmed fact — it is removed rather than carried
   * forward. The strip renders its hairline and scroll cue regardless; add
   * entries here and the metadata appears with no component change.
   *
   * TODO(raheel): supply the confirmed fields before launch.
   */
  meta: [] as ReadonlyArray<{ label: string; value: string }>,
  /** The invitation to move, at the frame's lower edge (03 §4.4). */
  scrollCue: "Scroll",
  /**
   * The portrait's one description — this is the figure's introduction, so it
   * carries a real alt; every later appearance is decorative (03 §10.1).
   */
  portraitAlt:
    "Raheel Baig, lit by a single warm key light against darkness, looking toward the camera",
} as const;
