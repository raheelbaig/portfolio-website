/**
 * Scene 10 — "What We Could Build" (Services). The Script's offerings.
 *
 * Storyboard law: three to four offerings — the shape of engagements, not a
 * menu of tasks — each ONE editorial line with TWO lines of technical-voice
 * specifics. Countable on one hand, readable in one breath each. The schema
 * enforces the shape.
 *
 * Each offering is grounded in work the film has already shown (the three
 * worlds and the AI identity) — nothing offered that wasn't demonstrated.
 *
 * TODO(raheel): confirm these three engagements describe what you actually
 * want to be hired for; adjust wording, add a fourth only if it earns it.
 */
import { z } from "zod";

const offeringSchema = z.object({
  /** One editorial line: a statement with a period, 4–9 words (Bible §9). */
  line: z.string().min(8).max(64),
  /** Exactly two lines of technical-voice specifics. */
  specifics: z.tuple([z.string().min(4).max(72), z.string().min(4).max(72)]),
});

const servicesSchema = z.array(offeringSchema).min(3).max(4);

export type Offering = z.infer<typeof offeringSchema>;

export const servicesHeading = "Services";

export const offerings: ReadonlyArray<Offering> = servicesSchema.parse([
  {
    line: "Product frontends that ship.",
    specifics: [
      "Multi-role dashboards, marketplaces, booking consoles",
      "Next.js · React · TypeScript · Supabase",
    ],
  },
  {
    line: "Interfaces with intelligence built in.",
    specifics: [
      "Assistants, LLM features, AI-assisted workflows",
      "Claude API · streaming · prompt design",
    ],
  },
  {
    line: "Sites with engineering behind the surface.",
    specifics: [
      "Bilingual, fast, accessible by default",
      "i18n · Core Web Vitals · semantic SEO",
    ],
  },
]);
