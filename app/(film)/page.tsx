import { SceneGap } from "@/components/layout/scene-gap";
import { AboutScene } from "@/components/scenes/about";
import { CareerScene } from "@/components/scenes/career";
import { HeroScene } from "@/components/scenes/hero";
import { InstrumentsScene } from "@/components/scenes/instruments";
import { TurnScene } from "@/components/scenes/turn";

/**
 * The film — one route, twelve scenes and a coda (Architecture §3).
 * Scenes mount here in storyboard order, milestone by milestone. The
 * SceneGaps between them are content: timed rests of true darkness
 * (Bible §4), never compressed.
 */
export default function FilmPage() {
  return (
    <>
      <HeroScene />
      <SceneGap size="scene" />
      <AboutScene />
      <SceneGap size="scene" />
      <CareerScene />
      <SceneGap size="scene" />
      <InstrumentsScene />
      <SceneGap size="scene" />
      <TurnScene />
      <SceneGap size="scene" />
      {/* Scenes 7–9 (the three worlds) mount here once the real project
          briefs and screenshots land in content/projects/ and
          public/worlds/ — see components/scenes/world.tsx. */}
    </>
  );
}
