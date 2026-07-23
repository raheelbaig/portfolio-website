import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Editorial, Technical } from "@/components/primitives/voices";
import { attendantScene } from "@/content/copy/attendant";

/**
 * Scene 11 — "The Attendant", static presence only.
 *
 * Storyboard: not a chat window slammed over the film — a made-of-this-world
 * object: a small glowing form in the site's own light-language, one
 * editorial line beside it, two or three suggested questions in the
 * technical voice beneath. It waits. It does not bounce, badge, or beg.
 *
 * The lantern carries the warm-cool pulse promised on Scene 5's
 * intelligence group (statically: its glow; the breathing is Crew work).
 * The ask field, streaming endpoint, and follow-at-frame's-edge behavior
 * arrive with the Attendant feature milestone (Architecture §11, Amendment
 * 4) — a working input is a feature, and a non-working one would be a lie,
 * so neither appears here. The suggested questions are real copy the
 * feature will honor.
 *
 * Server Component. Zero client JavaScript.
 */
export function AttendantScene() {
  return (
    <Section id="attendant" labelledBy="attendant-line">
      <Frame width="narrative">
        <Stack gap="thought" align="center">
          <div
            aria-hidden="true"
            className="attendant-lantern h-block w-block rounded-attendant"
          />
          <Editorial as="h2" size="line" tone="full" id="attendant-line">
            {attendantScene.line}
          </Editorial>
          <Stack
            gap="within-2"
            align="center"
            as="ul"
            aria-label={attendantScene.suggestedLabel}
          >
            {attendantScene.suggested.map((question) => (
              <Technical
                key={question}
                variant="plain"
                size="base"
                tone="instrument"
                as="li"
              >
                {question}
              </Technical>
            ))}
          </Stack>
        </Stack>
      </Frame>
    </Section>
  );
}
