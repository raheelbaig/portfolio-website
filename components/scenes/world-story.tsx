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
 * The deep cut — a world's full case study (Architecture §3: /work/[slug],
 * "director's cuts"). The complete three-beat story, the composed
 * close-ups, and the quiet facts, sharing the world's temperature grade.
 * Reached through each showcase's threshold; the film route stays a film.
 */
export function WorldStory({ project }: { project: Project }) {
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

      {/* 1 — The establishing shot: full-frame immersion, the location.
           The Crew performs the slow establishing push across it. */}
      <Exhibit
        asset={project.exhibits.establishing}
        framing="bleed"
        crewRole="world-establishing"
      />

      <Frame>
        <div className="flex flex-col gap-passage py-passage">
          {/* 2 — The world's name and what it is. */}
          <div data-crew="world-title" className="flex flex-col gap-within-3">
            <Monumental variant="title" id={`${project.id}-title`}>
              {project.title}
            </Monumental>
            <Editorial size="lead" tone="support">
              {project.positioning}
            </Editorial>
          </div>

          {/* 3 — The story, three beats, one sentence aloud per beat. The
               close-ups alternate sides of the frame — composed macro shots,
               not a stacked feed; the eye travels through the world. */}
          {beats.map((beat, index) => (
            <div
              key={beat.label}
              data-crew="world-beat"
              className="flex flex-col gap-thought"
            >
              <Stack gap="within-2">
                <TechnicalLabel as="p">{beat.label}</TechnicalLabel>
                <Editorial size="line" tone="full">
                  {beat.line}
                </Editorial>
              </Stack>
              {beat.exhibit !== undefined && (
                <div
                  className={
                    index % 2 === 1 ? "md:w-3/4 md:self-end" : "md:w-3/4"
                  }
                >
                  <Exhibit
                    asset={beat.exhibit}
                    framing="pane"
                    crewRole="world-detail"
                  />
                </div>
              )}
            </div>
          ))}

          <SceneGap size="thought" />

          {/* 4 — The quiet facts: instrumentation after the story. */}
          <div
            data-crew="world-facts"
            className="flex flex-col gap-thought md:grid md:grid-cols-12 md:gap-x-within-3"
          >
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
