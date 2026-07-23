/**
 * The narrative grammar of a world (Architecture §6; Storyboard Scenes 7–9).
 *
 * The schema IS the story law: a project without its three beats — tension,
 * decision, resolution — cannot exist at build time. Each beat is ONE
 * spoken sentence ("each world speaks exactly three sentences aloud");
 * facts are Technical-voice data; exhibits are real screenshots with real
 * dimensions (layout reserves exact space — CLS ≈ 0 is law).
 *
 * No field exists for metrics that weren't measured, badges, or ratings.
 */
import { z } from "zod";

const sentence = z.string().min(12).max(180);

const exhibitSchema = z.object({
  /** Real screenshot under public/worlds/<id>/ — never a mockup. */
  src: z.string().startsWith("/worlds/"),
  alt: z.string().min(12),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const projectSchema = z.object({
  id: z.enum(["salhub", "strangerus", "nzh"]),
  title: z.string().min(2).max(24),
  /** One line of positioning: what it is, for whom — no adjectives for their own sake. */
  positioning: sentence,
  /** The three beats. One sentence each, never stacked in one viewport. */
  story: z.object({
    tension: sentence,
    decision: sentence,
    resolution: sentence,
  }),
  /** What Raheel actually did — nouns of ownership, not buzzwords. */
  responsibilities: z.array(z.string().min(3).max(64)).min(2).max(6),
  /** The instruments used — rendered as specimen labels, never logos. */
  stack: z.array(z.string().min(1).max(24)).min(3).max(10),
  /** The interesting engineering choices — each one stated plainly. */
  decisions: z.array(sentence).min(1).max(4),
  /** Live product / repository — real destinations only. */
  links: z
    .array(
      z.object({ label: z.string().min(2).max(24), href: z.string().url() }),
    )
    .max(3),
  exhibits: z.object({
    /** The establishing shot: the interface large and alive. */
    establishing: exhibitSchema,
    /** Two or three composed close-ups — macro shots of the movement. */
    details: z.array(exhibitSchema).min(1).max(3),
  }),
});

export type Project = z.infer<typeof projectSchema>;
