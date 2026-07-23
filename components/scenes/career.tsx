import { Divider } from "@/components/primitives/divider";
import { Portrait } from "@/components/patterns/portrait";
import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Editorial, Technical } from "@/components/primitives/voices";
import { journey, journeyHeading } from "@/content/journey";

/**
 * Scene 4 — "The Still Point"'s road (Career Journey), held.
 *
 * Storyboard: a single line of light running through the dark — a road at
 * night — waypoints as small pools of light, the portrait small and distant
 * at the far end looking back. Past cooler and dimmer, the present warm:
 * the timeline performs a slow sunrise. Technical voice leads (years and
 * roles as instrumentation); each waypoint speaks one editorial sentence.
 *
 * Static blocking: on wide frames the road runs horizontally with all five
 * waypoints in one glance (the scene must communicate "steady growth" even
 * to a visitor who reads nothing). On narrow frames the road re-blocks
 * vertically — a hairline down the left margin (Architecture §14). The
 * Crew will later pin the scene and convert vertical scroll into lateral
 * travel; this DOM (one ordered list) is already the vehicle.
 *
 * The sunrise is data-light, not decoration: tone steps with position, and
 * only the present waypoint carries Filament — the viewport's one warm
 * accent (Bible §2 budget).
 *
 * Server Component. Zero client JavaScript.
 */

/** The slow sunrise: whisper → support toward the present. */
function waypointTone(
  index: number,
  count: number,
): "whisper" | "support" | "full" {
  if (index === count - 1) return "full";
  return index < count / 2 ? "whisper" : "support";
}

export function CareerScene() {
  const count = journey.length;
  return (
    <Section id="journey" srHeading={journeyHeading}>
      <Frame>
        <div className="md:grid md:grid-cols-12 md:items-end md:gap-x-within-3">
          <div className="md:col-span-10">
            {/* The road: drawn once, horizontal, only where the frame is wide. */}
            <div
              aria-hidden="true"
              data-crew="career-road"
              className="hidden md:block"
            >
              <Divider />
            </div>

            <ol
              data-crew="career-waypoints"
              className="md:pl-0 flex flex-col gap-thought border-l border-ivory-12 pl-within-3 md:grid md:grid-cols-5 md:gap-x-within-3 md:border-l-0"
            >
              {journey.map((waypoint, index) => {
                const tone = waypointTone(index, count);
                const isNow = index === count - 1;
                return (
                  <li
                    key={waypoint.year}
                    className="flex flex-col gap-within-2"
                  >
                    {/* The waypoint's pool of light: a tick rising from the road. */}
                    <div
                      aria-hidden="true"
                      className={
                        isNow
                          ? "hidden h-within-3 w-px bg-filament md:block"
                          : "hidden h-within-3 w-px bg-ivory-30 md:block"
                      }
                    />
                    <div className="flex flex-col gap-within-1">
                      <Technical
                        variant="value"
                        size="base"
                        tone={tone}
                        as="time"
                        dateTime={waypoint.year.slice(0, 4)}
                      >
                        {waypoint.year}
                      </Technical>
                      <Technical variant="label" tone={tone} as="p">
                        {waypoint.role}
                      </Technical>
                    </div>
                    <Editorial size="body" tone={isNow ? "full" : "support"}>
                      {waypoint.change}
                    </Editorial>
                  </li>
                );
              })}
            </ol>
          </div>

          {/*
           * The figure at the end of the road, looking back — Distant scale
           * (<15% of frame height). The journey literally leads to him.
           * Wide frames only; the vertical re-block ends on the present
           * waypoint instead.
           */}
          <div
            data-crew="career-portrait"
            className="hidden md:col-span-2 md:block md:justify-self-end"
          >
            <Portrait scale="distant" />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
