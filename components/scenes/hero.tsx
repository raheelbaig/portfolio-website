import { Frame } from "@/components/layout/frame";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { StageBackground } from "@/components/layout/stage-background";
import { Portrait } from "@/components/patterns/portrait";
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
 * This held frame is also the reduced-motion final state — the Crew (loader
 * sync, push-in, parallax, living light) enhances exactly this DOM and
 * never restructures it.
 *
 * Server Component. Zero client JavaScript.
 */
export function HeroScene() {
  return (
    <Section id="hero" labelledBy="hero-name">
      <StageBackground state="keylight" />

      {/*
       * The portrait at Monumental scale: anchored one `passage` below the
       * frame's top, centered, sized by the sanctioned scale tokens. The
       * dialogue column below overlaps its lower third — man and name occupy
       * the same physical space. The LCP element (Amendment 1): priority
       * fetch, never lazy, painted immediately.
       *
       * Designed absence (Law 12): until public/portrait/hero.{avif,webp,png}
       * exists, the stand renders as a body of faint light.
       * data-crew: registration target — the Crew observes, never restructures.
       */}
      <div className="inset-x-0 pointer-events-none absolute top-passage flex justify-center">
        <Portrait
          scale="monumental"
          described
          priority
          crewRole="hero-portrait"
        />
      </div>

      <Frame>
        <div className="flex min-h-svh flex-col items-center justify-end pt-passage pb-block text-center">
          <Stack gap="thought" align="center">
            <Stack gap="within-3" align="center">
              <Stack gap="within-2" align="center">
                <Monumental variant="name" id="hero-name">
                  {hero.name.display}
                  <span className="sr-only"> {hero.name.srSuffix}</span>
                </Monumental>
                <Technical
                  variant="label"
                  size="base"
                  tone="support"
                  as="p"
                  id="hero-role"
                >
                  {hero.role}
                </Technical>
              </Stack>
              <Editorial size="lead" tone="support" id="hero-philosophy">
                {hero.philosophy}
              </Editorial>
            </Stack>

            <div
              data-crew="hero-actions"
              className="flex flex-wrap items-center justify-center gap-within-3"
            >
              <Invitation href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Invitation>
              <QuietAction href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </QuietAction>
            </div>

            {/* The frame's bottom edge: exact facts left, the way onward right. */}
            <div className="flex w-full flex-wrap items-end justify-between gap-within-3 text-left">
              <dl data-crew="hero-meta" className="flex flex-wrap gap-block">
                {hero.meta.map((entry) => (
                  <div key={entry.label} className="flex flex-col gap-within-1">
                    <TechnicalLabel as="dt">{entry.label}</TechnicalLabel>
                    <Technical variant="value" tone="whisper" as="dd">
                      {entry.value}
                    </Technical>
                  </div>
                ))}
              </dl>
              <div
                data-crew="hero-hint"
                className="flex flex-col items-center gap-within-1"
              >
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
