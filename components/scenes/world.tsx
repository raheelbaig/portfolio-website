import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Exhibit } from "@/components/patterns/exhibit";
import { QuietAction } from "@/components/primitives/buttons";
import { SpecimenRow } from "@/components/primitives/specimen";
import {
  Editorial,
  Monumental,
  Technical,
} from "@/components/primitives/voices";
import { turn } from "@/content/copy/turn";
import { worlds } from "@/content/projects";
import type { Project } from "@/content/projects/schema";

/**
 * Scenes 7–9 — the worlds as LAUNCH FRAMES (Storyboard: "each scene
 * communicates its essence in one viewport" for the skimmer; the diver
 * takes the threshold into the deep cut).
 *
 * One dominant composition per world: the product large and alive on the
 * right (the establishing shot as a lit pane), the world's name, one line
 * of positioning, the instruments, and the thresholds on the left — a
 * premium product reveal, not a dashboard of cards. The full three-beat
 * story lives at /work/[slug] (WorldStory), so the film keeps its momentum
 * and every world still speaks in one breath.
 *
 * The temperature grade remains the trilogy's only visual variation —
 * range proven through light before a word is read.
 *
 * Server Component. Zero client JavaScript.
 */
export function WorldScene({ project }: { project: Project }) {
  const number = worlds.find((world) => world.id === project.id)?.number ?? "";
  return (
    <Section id={project.id} labelledBy={`${project.id}-title`}>
      {/* The world's weather: its temperature grade, at ambient intensity. */}
      <div
        aria-hidden="true"
        className={`stage-world-${project.id} inset-0 absolute -z-10`}
      />

      <Frame>
        <div className="grid min-h-svh content-center gap-thought py-passage md:grid-cols-12 md:items-center md:gap-x-within-3">
          {/* The bill: name, position, instruments, thresholds. */}
          <div
            data-crew="world-copy"
            className="flex flex-col gap-within-3 md:col-span-4"
          >
            <Technical variant="value" tone="whisper" as="p">
              {number}
            </Technical>
            <Monumental variant="distant" id={`${project.id}-title`}>
              {project.title}
            </Monumental>
            <Editorial size="lead" tone="support">
              {project.positioning}
            </Editorial>
            <SpecimenRow
              items={project.stack}
              aria-label={`${project.title} stack`}
            />
            <div className="flex flex-wrap items-center gap-within-3">
              <QuietAction href={`/work/${project.id}`}>
                {`${turn.doorwayAction} ${project.title}`}
              </QuietAction>
              {project.links.map((link) => (
                <QuietAction key={link.href} href={link.href}>
                  {link.label}
                </QuietAction>
              ))}
            </div>
          </div>

          {/* The product, large and alive — the frame's dominant light. */}
          <div data-crew="world-visual" className="md:col-span-8">
            <div className="light-transition hover:brightness-110">
              <Exhibit
                asset={project.exhibits.establishing}
                framing="pane"
                crewRole="world-establishing"
              />
            </div>
          </div>
        </div>
      </Frame>
    </Section>
  );
}
