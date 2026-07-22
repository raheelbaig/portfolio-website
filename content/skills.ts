/**
 * Scene 5 — "The Instruments" (Skills). The Script's instrument groups.
 *
 * Storyboard law: grouped by nature — interface, state and data, foundation,
 * intelligence — with groupings implied by proximity and light, never boxes
 * or labels. Identical type size for every instrument: equality of type is
 * the fluency claim. The data model cannot express a proficiency level —
 * skill bars are impossible here, not just discouraged (Bible §5).
 *
 * The intelligence group is the machine voice (Instrument Blue) — the quiet
 * foreshadow of Scene 11's attendant.
 *
 * TODO(raheel): confirm the instrument list matches your real stack.
 */
import { z } from "zod";

const groupIds = [
  "interface",
  "state-data",
  "foundation",
  "intelligence",
] as const;

const groupSchema = z.object({
  id: z.enum(groupIds),
  /** For assistive tech only — never rendered visibly (proximity implies grouping). */
  name: z.string().min(2),
  instruments: z.array(z.string().min(1).max(24)).min(3).max(8),
});

const skillsSchema = z
  .array(groupSchema)
  .length(groupIds.length)
  .refine(
    (groups) => new Set(groups.map((g) => g.id)).size === groupIds.length,
    {
      message: "Each instrument group must appear exactly once.",
    },
  );

export type InstrumentGroup = z.infer<typeof groupSchema>;

export const instrumentsHeading = "Skills";

/** The one editorial contrast in the scene (Storyboard Scene 5, canonical). */
export const instrumentsLine = "The instruments. The work is what they made.";

export const instrumentGroups: ReadonlyArray<InstrumentGroup> =
  skillsSchema.parse([
    {
      id: "interface",
      name: "Interface",
      instruments: ["React", "Next.js", "Tailwind CSS", "GSAP", "Three.js"],
    },
    {
      id: "state-data",
      name: "State and data",
      instruments: [
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "Supabase",
        "PostgreSQL",
      ],
    },
    {
      id: "foundation",
      name: "Foundation",
      instruments: [
        "Node.js",
        "Git & CI",
        "Vercel",
        "Web performance",
        "Accessibility",
      ],
    },
    {
      id: "intelligence",
      name: "Intelligence",
      instruments: [
        "Claude API",
        "LLM integration",
        "Prompt design",
        "AI-assisted workflows",
      ],
    },
  ]);
