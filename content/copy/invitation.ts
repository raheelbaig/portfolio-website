/**
 * Scene 12 — "The Invitation" (Contact). The film's one ask.
 *
 * Both lines are canonical (Storyboard Scene 12): the final spoken dialogue,
 * and the action treated with the same typographic dignity as the name.
 * No form. No fields. One ask.
 */
import { site } from "@/content/site";

export const invitation = {
  /** The last spoken line of the film. */
  line: "Let's build something worth the light.",
  /** The single luminous action — monumental register, mailto. */
  action: "Let's Connect",
  href: `mailto:${site.email}`,
  /** The quiet essentials beside the ask, technical voice. */
  emailLabel: "Email",
  email: site.email,
  /** TODO(raheel): socials render here once filled in content/site.ts. */
} as const;
