import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { StageBackground } from "@/components/layout/stage-background";
import { Doorway } from "@/components/patterns/doorway";
import { Portrait } from "@/components/patterns/portrait";
import { Editorial } from "@/components/primitives/voices";
import { turn } from "@/content/copy/turn";
import { worlds } from "@/content/projects";

/**
 * Scene 6 — "The Turn". The held frame is the PEAK OF ASSEMBLY: the one
 * moment the whole storyboard exists to earn, frozen at its height.
 *
 * Static reading of the transformation (top to bottom, one composition):
 *   1. Convergence — the last skill-lights descending toward a point, the
 *      residue of Scene 5's bench (three falling hairlines, unequal).
 *   2. The still point — the portrait centered on the stage's key light,
 *      glass fragments and threads of light caught mid-assembly around him.
 *      He is level; the world around him is tilted, partial, becoming.
 *   3. The thesis, spoken at last — the scene's visible heading.
 *   4. The three doorways, resolved out of the structure — the assembly's
 *      destination and Act II's gateway (the hero's "See the work" lands
 *      here: id="work").
 *
 * The Crew will perform steps 1→4 as one scrubbed, reversible movement (the
 * film's only orbit; its full dynamic range spent once). This DOM is the
 * final frame of that movement — reduced-motion visitors simply arrive at
 * the destination without the journey, losing spectacle, never meaning.
 *
 * Depth is layers, not shadows (Bible §7): fragments sit on the context
 * plane via opacity steps; the portrait alone holds the subject plane.
 *
 * Server Component. Zero client JavaScript. No hover states yet.
 */
export function TurnScene() {
  return (
    <Section id="work" labelledBy="turn-thesis">
      <StageBackground state="keylight" />
      <Frame>
        <div className="flex flex-col items-center gap-passage py-passage">
          {/* 1 — Convergence: the bench's lights, falling toward the point below. */}
          <div
            aria-hidden="true"
            data-crew="turn-convergence"
            className="flex items-start justify-center gap-block"
          >
            <div className="h-within-3 w-px bg-ivory-30 opacity-60" />
            <div className="h-thought w-px bg-ivory-30" />
            <div className="h-block w-px bg-instrument-blue opacity-60" />
          </div>

          {/* 2 — The still point, mid-assembly. Fragments flank on the context
               plane (wide frames only); threads of light connect the structure. */}
          <div className="relative w-full md:grid md:grid-cols-12 md:items-center md:gap-x-within-3">
            <div
              aria-hidden="true"
              className="inset-x-0 absolute top-1/3 hidden md:block"
            >
              <div
                data-crew="turn-thread"
                className="h-px w-full bg-ivory-12"
              />
            </div>
            <div
              aria-hidden="true"
              className="inset-x-0 absolute top-2/3 hidden md:block"
            >
              <div
                data-crew="turn-thread"
                className="mx-auto h-px w-2/3 bg-ivory-12"
              />
            </div>

            <div
              aria-hidden="true"
              className="hidden md:col-span-2 md:col-start-1 md:block"
            >
              <div
                data-crew="turn-fragment"
                className="material-smoke edge-light h-passage rounded-pane opacity-60"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden self-end md:col-span-2 md:col-start-3 md:block"
            >
              <div
                data-crew="turn-fragment"
                className="material-smoke edge-light h-thought rounded-pane opacity-30"
              />
            </div>

            <div
              data-crew="turn-portrait"
              className="relative flex justify-center md:col-span-4 md:col-start-5"
            >
              <Portrait scale="conversational" />
            </div>

            <div
              aria-hidden="true"
              className="hidden self-start md:col-span-2 md:col-start-10 md:block"
            >
              <div
                data-crew="turn-fragment"
                className="material-smoke edge-light h-passage rounded-pane opacity-60"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden self-end md:col-span-2 md:col-start-11 md:block"
            >
              <div
                data-crew="turn-fragment"
                className="material-smoke edge-light h-block rounded-pane opacity-30"
              />
            </div>
          </div>

          {/* 3 — The thesis, spoken aloud at last. */}
          <Editorial as="h2" size="line-lg" tone="full" id="turn-thesis">
            {turn.thesis}
          </Editorial>

          {/* 4 — The doorways, resolved out of the structure. */}
          <ul
            data-crew="turn-doorways"
            aria-label={turn.doorwaysLabel}
            className="grid w-full gap-within-3 md:grid-cols-3"
          >
            {worlds.map((world) => (
              <li key={world.id}>
                <Doorway
                  number={world.number}
                  name={world.name}
                  href={`#${world.id}`}
                  actionLabel={turn.doorwayAction}
                />
              </li>
            ))}
          </ul>
        </div>
      </Frame>
    </Section>
  );
}
