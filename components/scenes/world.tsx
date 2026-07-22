import { Frame } from "@/components/layout/frame";
import { SceneGap } from "@/components/layout/scene-gap";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Exhibit } from "@/components/patterns/exhibit";
import { QuietAction } from "@/components/primitives/buttons";
import { SpecimenRow } from "@/components/primitives/specimen";
import {
  Editorial,
  Monumental,
  Technical,
  TechnicalLabel,
} from "@/components/primitives/voices";
import { worldCopy } from "@/content/copy/worlds";
import type { Project } from "@/content/projects/schema";

/**
 * Scenes 7–9 — "Three Worlds", the shared scene grammar (Storyboard: "the
 * three projects share one scene grammar so the trilogy reads as range
 * within mastery, not repetition").
 *
 * One template, three atmospheres: the world's temperature grade
 * (.stage-world-*) is the only visual differentiator — range proven
 * through light before a word is read. The portrait never appears here:
 * shipped work stands alone.
 *
 * Held-frame structure (the static cut of the establishing push + beats):
 *   1. Establishing shot — the interface large and alive, full-bleed.
 *   2. Title in the monumental register + one line of positioning.
 *   3. Three beats — tension, decision, resolution — one editorial
 *      sentence per beat, each paired with a composed close-up, visual
 *      rest between beats (never stacked).
 *   4. The quiet facts — role, stack, engineering decisions — Technical
 *      voice, after the story, never interrupting it.
 *   5. The threshold onward — real links only.
 *
 * NOT MOUNTED until the real briefs and screenshots exist in
 * content/projects/ and public/worlds/ — this film does not screen
 * fiction. The schema (content/projects/schema.ts) is the contract.
 *
 * Server Component. Zero client JavaScript.
 */
export function WorldScene({ project }: { project: Project }) {
  const beats = [
    {
      label: worldCopy.beats.tension,
      line: project.story.tension,
      exhibit: project.exhibits.details[0],
    },
    {
      label: worldCopy.beats.decision,
      line: project.story.decision,
      exhibit: project.exhibits.details[1],
    },
    {
      label: worldCopy.beats.resolution,
      line: project.story.resolution,
      exhibit: project.exhibits.details[2],
    },
  ];
  return (
    <Section id={project.id} labelledBy={`${project.id}-title`}>
      {/* The world's weather: its temperature grade, at ambient intensity. */}
      <div
        aria-hidden="true"
        className={`stage-world-${project.id} inset-0 absolute -z-10`}
      />

      {/* 1 — The establishing shot: full-frame immersion, the location. */}
      <Exhibit asset={project.exhibits.establishing} framing="bleed" />

      <Frame>
        <div className="flex flex-col gap-passage py-passage">
          {/* 2 — The world's name and what it is. */}
          <Stack gap="within-3">
            <Monumental variant="title" id={`${project.id}-title`}>
              {project.title}
            </Monumental>
            <Editorial size="lead" tone="support">
              {project.positioning}
            </Editorial>
          </Stack>

          {/* 3 — The story, three beats, one sentence aloud per beat. */}
          {beats.map((beat) => (
            <Stack key={beat.label} gap="thought">
              <Stack gap="within-2">
                <TechnicalLabel as="p">{beat.label}</TechnicalLabel>
                <Editorial size="line" tone="full">
                  {beat.line}
                </Editorial>
              </Stack>
              {beat.exhibit !== undefined && (
                <Exhibit asset={beat.exhibit} framing="pane" />
              )}
            </Stack>
          ))}

          <SceneGap size="thought" />

          {/* 4 — The quiet facts: instrumentation after the story. */}
          <div className="flex flex-col gap-thought md:grid md:grid-cols-12 md:gap-x-within-3">
            <div className="md:col-span-4">
              <Stack gap="within-2">
                <TechnicalLabel as="p">{worldCopy.facts.role}</TechnicalLabel>
                <Stack gap="within-1" as="ul">
                  {project.responsibilities.map((item) => (
                    <Technical
                      key={item}
                      variant="plain"
                      tone="support"
                      as="li"
                    >
                      {item}
                    </Technical>
                  ))}
                </Stack>
              </Stack>
            </div>
            <div className="md:col-span-4 md:col-start-6">
              <Stack gap="within-2">
                <TechnicalLabel as="p">{worldCopy.facts.stack}</TechnicalLabel>
                <SpecimenRow
                  items={project.stack}
                  aria-label={`${project.title} stack`}
                />
              </Stack>
            </div>
            <div className="md:col-span-3 md:col-start-10">
              <Stack gap="within-2">
                <TechnicalLabel as="p">
                  {worldCopy.facts.decisions}
                </TechnicalLabel>
                <Stack gap="within-2" as="ul">
                  {project.decisions.map((decision) => (
                    <Editorial
                      key={decision}
                      size="body"
                      tone="support"
                      as="li"
                    >
                      {decision}
                    </Editorial>
                  ))}
                </Stack>
              </Stack>
            </div>
          </div>

          {/* 5 — The threshold onward: real destinations only. */}
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-within-3">
              {project.links.map((link) => (
                <QuietAction key={link.href} href={link.href}>
                  {link.label}
                </QuietAction>
              ))}
            </div>
          )}
        </div>
      </Frame>
    </Section>
  );
}
