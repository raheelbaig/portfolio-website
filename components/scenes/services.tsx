import { Frame } from "@/components/layout/frame";
import { Portrait } from "@/components/patterns/portrait";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Editorial, Technical } from "@/components/primitives/voices";
import { offerings, servicesHeading } from "@/content/services";

/**
 * Scene 10 — "What We Could Build" (Services). The film turns outward.
 *
 * Storyboard: a quiet, spacious scene — three offerings, the shape of
 * engagements, each one editorial line with two technical-voice specifics.
 * A settled, level medium shot: tripod steadiness after the handheld heart
 * of the film. The most evenly comfortable light so far — no StageBackground
 * state, just the bare stage: the performance is over; this is conversation.
 *
 * The portrait returns at the frame's edge, small (Distant scale) — the
 * builder stepping back into the room now that the work has spoken.
 *
 * The Crew will later surface offerings into light one at a time (the About
 * monologue's grammar, deliberately recalled) and send the point of light
 * drifting down toward Scene 11. Statically, all offerings stand lit.
 *
 * Server Component. Zero client JavaScript.
 */
export function ServicesScene() {
  return (
    <Section id="services" srHeading={servicesHeading}>
      <Frame>
        <div className="md:grid md:grid-cols-12 md:items-end md:gap-x-within-3">
          <div className="md:col-span-8 md:col-start-2">
            {/* Each engagement is indexed like a reel: the number hangs in
                the margin, the offering reads as one lit statement. */}
            <Stack gap="thought" as="ol">
              {offerings.map((offering, index) => (
                <li key={offering.line} className="flex gap-within-3">
                  <Technical variant="value" tone="whisper" as="span">
                    {String(index + 1).padStart(2, "0")}
                  </Technical>
                  <div className="flex flex-col gap-within-2">
                    <Editorial size="line" tone="full">
                      {offering.line}
                    </Editorial>
                    <div className="flex flex-col gap-within-1">
                      <Technical variant="plain" tone="support" as="p">
                        {offering.specifics[0]}
                      </Technical>
                      <Technical variant="plain" tone="whisper" as="p">
                        {offering.specifics[1]}
                      </Technical>
                    </div>
                  </div>
                </li>
              ))}
            </Stack>
          </div>

          {/* The builder, back in the room — small, at the frame's edge. */}
          <div className="hidden md:col-span-2 md:col-start-11 md:block md:justify-self-end">
            <Portrait scale="distant" />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
