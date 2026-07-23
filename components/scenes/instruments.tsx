import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Editorial, Technical } from "@/components/primitives/voices";
import {
  instrumentGroups,
  instrumentsHeading,
  instrumentsLine,
} from "@/content/skills";

/**
 * Scene 5 — "The Instruments" (Skills). The bench under worklight, held.
 *
 * Storyboard: a calm, exact constellation — skill names in the technical
 * voice, grouped by nature with groupings implied by PROXIMITY AND LIGHT,
 * never boxes or labels. Identical size for every instrument: equality of
 * type is the fluency claim. One editorial line off to one side is the only
 * contrast. Even, shadowless worklight — deliberately the least theatrical
 * scene in the film; the restraint is the statement.
 *
 * The constellation's considered geometry: four clusters staggered across
 * the 12-column grid, no two aligned, the intelligence group last and
 * spoken in the machine's temperature (Instrument Blue) — the static
 * foreshadow of Scene 11's attendant. Group names exist only for assistive
 * tech (aria-label); sighted grouping is proximity, exactly as scripted.
 *
 * The Crew will later: drift the overhead camera across the bench, lift
 * each cluster a breath as it passes center, and give intelligence its slow
 * pulse. Scene 6's convergence will lift these exact nodes off the bench.
 *
 * Server Component. Zero client JavaScript.
 */

/** The considered geometry: cluster placements, no two aligned (wide frames). */
const clusterPlacement = {
  interface: "md:col-span-4 md:col-start-1",
  "state-data": "md:col-span-4 md:col-start-7",
  foundation: "md:col-span-4 md:col-start-3",
  intelligence: "md:col-span-4 md:col-start-8",
} as const;

export function InstrumentsScene() {
  return (
    <Section id="instruments" srHeading={instrumentsHeading}>
      <Frame>
        <div className="flex flex-col gap-thought md:grid md:grid-cols-12 md:gap-x-within-3 md:gap-y-thought">
          {instrumentGroups.map((group) => (
            <div
              key={group.id}
              data-crew="instruments-cluster"
              data-group={group.id}
              className={clusterPlacement[group.id]}
            >
              <Stack gap="within-1" as="ul" aria-label={group.name}>
                {group.instruments.map((instrument) => (
                  <Technical
                    key={instrument}
                    variant="plain"
                    size="base"
                    tone={
                      group.id === "intelligence" ? "instrument" : "support"
                    }
                    as="li"
                  >
                    {instrument}
                  </Technical>
                ))}
              </Stack>
            </div>
          ))}

          {/* The one editorial contrast, off to one side — where the hands would be. */}
          <div
            data-crew="instruments-line"
            className="md:col-span-5 md:col-start-2"
          >
            <Editorial size="line" tone="full">
              {instrumentsLine}
            </Editorial>
          </div>
        </div>
      </Frame>
    </Section>
  );
}
