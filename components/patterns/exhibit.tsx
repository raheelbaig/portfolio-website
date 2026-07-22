import Image from "next/image";
import { Editorial } from "@/components/primitives/voices";
import type { Project } from "@/content/projects/schema";

type ExhibitAsset = Project["exhibits"]["establishing"];

/**
 * The Exhibit — how product imagery exists inside a world (Bible §5).
 *
 * WHY: "full-bleed or large-pane, never thumbnailed, never framed in
 * browser-chrome mockups unless the chrome itself is the story." A real
 * screenshot, presented at layout-true size with its exact dimensions
 * reserved (CLS ≈ 0 is law), optimized by next/image (AVIF/WebP per
 * next.config).
 *
 * WHEN: establishing shots (framing="bleed") and composed close-ups
 * (framing="pane") inside Scenes 7–9 and the case-study routes.
 * WHEN NOT: anywhere outside a world — no thumbnails in doorways, ever.
 */
export function Exhibit({
  asset,
  framing,
  caption,
  priority = false,
}: {
  asset: ExhibitAsset;
  framing: "bleed" | "pane";
  caption?: string;
  priority?: boolean;
}) {
  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={framing === "bleed" ? "100vw" : "(min-width: 768px) 920px, 100vw"}
      className={
        framing === "bleed"
          ? "h-auto w-full"
          : "edge-light h-auto w-full rounded-pane"
      }
    />
  );
  if (caption === undefined) {
    return <figure>{image}</figure>;
  }
  return (
    <figure className="flex flex-col gap-within-2">
      {image}
      <Editorial as="figcaption" size="body" tone="whisper">
        {caption}
      </Editorial>
    </figure>
  );
}
