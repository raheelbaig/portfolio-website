import { SceneGap } from "@/components/layout/scene-gap";
import { AboutScene } from "@/components/scenes/about";
import { AttendantScene } from "@/components/scenes/attendant";
import { InvitationScene } from "@/components/scenes/invitation";
import { ServicesScene } from "@/components/scenes/services";
import { CareerScene } from "@/components/scenes/career";
import { HeroScene } from "@/components/scenes/hero";
import { InstrumentsScene } from "@/components/scenes/instruments";
import { LoaderScene } from "@/components/scenes/loader";
import { ShowcaseScene } from "@/components/scenes/showcase";
import { CrewMount } from "@/experience/mount";

/**
 * The film — one route, twelve scenes and a coda (Architecture §3).
 * Scenes mount here in storyboard order, milestone by milestone. The
 * SceneGaps between them are content: timed rests of true darkness
 * (Bible §4), never compressed.
 */
export default function FilmPage() {
  return (
    <>
      <LoaderScene />
      <CrewMount />
      <HeroScene />
      <SceneGap size="scene" />
      <AboutScene />
      <SceneGap size="scene" />
      <CareerScene />
      <SceneGap size="scene" />
      <InstrumentsScene />
      <SceneGap size="scene" />
      {/*
       * Section 04 — Selected Work (06). One section now owns the Threshold
       * and all three worlds, because the Crew pins them as a single stage
       * (06 §2.1); V1's separate Turn + three World scenes are retired.
       */}
      <ShowcaseScene />
      <SceneGap size="scene" />
      <ServicesScene />
      <SceneGap size="scene" />
      <AttendantScene />
      <SceneGap size="scene" />
      <InvitationScene />
    </>
  );
}
