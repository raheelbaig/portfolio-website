import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Frame } from "@/components/layout/frame";
import { SceneGap } from "@/components/layout/scene-gap";
import { WorldStory } from "@/components/scenes/world-story";
import { QuietAction } from "@/components/primitives/buttons";
import { worldCopy } from "@/content/copy/worlds";
import { site } from "@/content/site";
import { nzh } from "@/content/projects/nzh";
import { salhub } from "@/content/projects/salhub";
import { strangerus } from "@/content/projects/strangerus";
import type { Project } from "@/content/projects/schema";

/**
 * /work/[slug] — the deep case studies, the "director's cuts"
 * (Architecture §3): statically generated, one per world, sharing the
 * world's temperature grade. The film route shows the launch; this route
 * documents the decisions, for those who want the commentary.
 */

const projects: Record<string, Project> = {
  salhub,
  strangerus,
  nzh,
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (project === undefined) return {};
  return {
    title: `${project.title} — ${site.name}`.toUpperCase(),
    description: project.positioning,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (project === undefined) notFound();
  return (
    <>
      <WorldStory project={project} />
      <Frame>
        <QuietAction href="/#work">{worldCopy.backToFilm}</QuietAction>
      </Frame>
      <SceneGap size="passage" />
    </>
  );
}
