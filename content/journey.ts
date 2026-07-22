/**
 * Scene 4 — "The Long Road" (Career Journey). The Script's waypoints.
 *
 * Storyboard law: each waypoint is a year, a role, and ONE sentence of what
 * changed. Dates behave like instrumentation; meaning behaves like dialogue.
 * The final waypoint is *now*. The shape must read as steady growth even to
 * a visitor who reads none of them.
 *
 * The schema is the narrative grammar (Architecture §6): a waypoint missing
 * its sentence of change fails the build.
 *
 * TODO(raheel): replace the drafted waypoints with your real years and roles.
 */
import { z } from "zod";

const waypointSchema = z.object({
  /** Four digits, or a span like "2024 —" for the present. */
  year: z.string().min(4).max(7),
  role: z.string().min(2).max(48),
  /** One sentence. If it needs two, it isn't a waypoint. */
  change: z.string().min(8).max(120),
});

const journeySchema = z.array(waypointSchema).min(3).max(6);

export type Waypoint = z.infer<typeof waypointSchema>;

export const journeyHeading = "Career journey";

export const journey: ReadonlyArray<Waypoint> = journeySchema.parse([
  {
    year: "2021",
    role: "Freelance web developer",
    change: "First client work shipped — the craft became a job.",
  },
  {
    year: "2022",
    role: "Frontend developer",
    change: "Joined product work; React and TypeScript became home.",
  },
  {
    year: "2023",
    role: "Frontend engineer",
    change: "Owned features end to end — performance became a habit.",
  },
  {
    year: "2024",
    role: "Frontend engineer",
    change: "Shipped for real clients across three products.",
  },
  {
    year: "2025 —",
    role: "Frontend engineer · AI",
    change: "Building modern web experiences powered by AI.",
  },
]);
