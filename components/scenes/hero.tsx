import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { StageBackground } from "@/components/layout/stage-background";
import { Invitation, QuietAction } from "@/components/primitives/buttons";
import {
  Editorial,
  Monumental,
  Technical,
  TechnicalLabel,
} from "@/components/primitives/voices";
import { hero } from "@/content/copy/hero";

/**
 * Scene 2 — "The Still Point" (Hero). The film's opening frame, held.
 *
 * This is the storyboard's Scene 2 rendered as a still: one key light on the
 * stage, the figure's reserved space at Monumental scale (Bible §8: 60–75%
 * of frame height, no intermediate scales), the name as the largest type in
 * the film, the role quieter beneath, the philosophy a beat later, one warm
 * ask, and the technical whispers at the bottom edge of the frame.
 *
 * Deliberately absent (later milestones): the loader's aperture reveal, the
 * push-in camera, name/portrait parallax, the living-portrait light response,
 * and the real graded cutout. This held frame is also the reduced-motion
 * final state — the Crew will enhance exactly this DOM, never restructure it.
 *
 * Server Component. Zero client JavaScript.
 */
export function HeroScene() {
  return (
    <Section id="hero" labelledBy="hero-name">
      <StageBackground state="keylight" />

      {/*
       * The reserved stand for the portrait: anchored one `passage` below the
       * frame's top, centered, sized by the sanctioned Monumental-scale
       * tokens. The dialogue column below overlaps its lower third — man and
       * name will occupy the same physical space when the cutout arrives.
       * aria-hidden: there is no figure yet to describe (alt text is already
       * cast in the Script as hero.portraitAlt).
       */}
      <div
        aria-hidden="true"
        className="portrait-void inset-x-0 pointer-events-none absolute top-passage mx-auto aspect-(--portrait-aspect) w-(--portrait-monumental-width)"
      />

      <Frame>
        <div className="flex min-h-svh flex-col items-center justify-end pt-passage pb-block text-center">
          <Stack gap="thought" align="center">
            <Stack gap="within-3" align="center">
              <Stack gap="within-2" align="center">
                <Monumental variant="name" id="hero-name">
                  {hero.name.display}
                  <span className="sr-only"> {hero.name.srSuffix}</span>
                </Monumental>
                <Technical variant="label" size="base" tone="support" as="p">
                  {hero.role}
                </Technical>
              </Stack>
              <Editorial size="lead" tone="support">
                {hero.philosophy}
              </Editorial>
            </Stack>

            <div className="flex flex-wrap items-center justify-center gap-within-3">
              <Invitation href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Invitation>
              <QuietAction href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </QuietAction>
            </div>

            {/* The frame's bottom edge: exact facts left, the way onward right. */}
            <div className="flex w-full flex-wrap items-end justify-between gap-within-3 text-left">
              <dl className="flex flex-wrap gap-block">
                {hero.meta.map((entry) => (
                  <div key={entry.label} className="flex flex-col gap-within-1">
                    <TechnicalLabel as="dt">{entry.label}</TechnicalLabel>
                    <Technical variant="value" tone="whisper" as="dd">
                      {entry.value}
                    </Technical>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col items-center gap-within-1">
                <div
                  aria-hidden="true"
                  className="h-thought w-px bg-ivory-30"
                />
                <Technical variant="label" tone="whisper" as="p">
                  {hero.scrollHint}
                </Technical>
              </div>
            </div>
          </Stack>
        </div>
      </Frame>
    </Section>
  );
}
