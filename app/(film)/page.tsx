import { SceneGap } from "@/components/layout/scene-gap";
import { AboutScene } from "@/components/scenes/about";
import { AttendantScene } from "@/components/scenes/attendant";
import { InvitationScene } from "@/components/scenes/invitation";
import { ServicesScene } from "@/components/scenes/services";
import { CareerScene } from "@/components/scenes/career";
import { HeroScene } from "@/components/scenes/hero";
import { InstrumentsScene } from "@/components/scenes/instruments";
import { LoaderScene } from "@/components/scenes/loader";
import { TurnScene } from "@/components/scenes/turn";
import { WorldScene } from "@/components/scenes/world";
import { CrewMount } from "@/experience/mount";
import { nzh } from "@/content/projects/nzh";
import { salhub } from "@/content/projects/salhub";
import { strangerus } from "@/content/projects/strangerus";

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
      <TurnScene />
      <SceneGap size="scene" />
      <WorldScene project={salhub} />
      <SceneGap size="scene" />
      <WorldScene project={strangerus} />
      <SceneGap size="scene" />
      <WorldScene project={nzh} />
      <SceneGap size="scene" />
      <ServicesScene />
      <SceneGap size="scene" />
      <AttendantScene />
      <SceneGap size="scene" />
      <InvitationScene />
    </>
  );
}
