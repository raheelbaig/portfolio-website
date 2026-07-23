import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Portrait } from "@/components/patterns/portrait";
import {
  Editorial,
  Technical,
  TechnicalLabel,
} from "@/components/primitives/voices";
import { about } from "@/content/copy/about";

/**
 * Scene 3 — "Closer" (About). The held frame of the reframing shot.
 *
 * Storyboard: the portrait moves off-center to the one-third position at
 * Conversational scale; the freed two-thirds fills with a short first-person
 * monologue — voiceover cadence, three or four sentences — with one quiet
 * line of fact beneath. "In this scene, type does not travel, it only
 * illuminates": statically, every line stands in full light, which is
 * exactly the reduced-motion cut.
 *
 * The Crew will later: track the camera laterally (re-blocking is already
 * the DOM order), warm the key ~200K, and drive the line-by-line
 * illumination by dimming *passed* lines — never by hiding unread ones.
 *
 * Server Component. Zero client JavaScript.
 */
export function AboutScene() {
  return (
    <Section id="about" srHeading={about.srHeading}>
      <Frame>
        <div className="md:grid md:grid-cols-12 md:items-center md:gap-x-within-3">
          {/*
           * The figure at one-third: Conversational scale, left of the
           * frame, the monologue speaking from the freed space. On mobile
           * the shot re-blocks vertically (Architecture §14): figure above,
           * voice below — same order a camera would find them.
           */}
          {/*
           * The editorial spread: the figure and his record on the left page,
           * the voice on the right. The fact sits beneath the portrait like a
           * museum label — the eye lands on the face, drops to the record,
           * then crosses to the monologue and reads down.
           */}
          <div
            data-crew="about-portrait"
            className="flex flex-col items-center gap-within-2 md:col-span-4"
          >
            <Portrait scale="conversational" />
            <dl
              data-crew="about-fact"
              className="flex flex-col items-center gap-within-1"
            >
              <dt className="sr-only">
                <TechnicalLabel>{about.fact.label}</TechnicalLabel>
              </dt>
              <Technical variant="value" tone="whisper" as="dd">
                {about.fact.value}
              </Technical>
            </dl>
          </div>

          <div className="md:mt-0 mt-thought md:col-span-7 md:col-start-6">
            <div
              data-crew="about-monologue"
              className="flex flex-col gap-within-3"
            >
              {about.monologue.map((line) => (
                <Editorial key={line} size="line" tone="full">
                  {line}
                </Editorial>
              ))}
            </div>
          </div>
        </div>
      </Frame>
    </Section>
  );
}
