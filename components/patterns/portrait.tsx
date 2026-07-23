import Image from "next/image";
import { hero } from "@/content/copy/hero";
import { heroPortraitSrc } from "@/lib/assets";

/**
 * The Portrait — the film's lead actor, cast once, directed everywhere
 * (Bible §8: one master image, varied only by scale, position, and grade).
 *
 * WHY: the protagonist appears at exactly three sanctioned scales; every
 * appearance shares the same edge-dissolve and key/rim grade so the figure
 * is always the same person under the same light. Scenes own position and
 * blocking; this pattern owns the figure itself.
 *
 * Accessibility: the hero appearance carries the full description
 * (described); every later appearance is the same, already-described person
 * — decorative repetition, hidden from AT (alt="" + aria-hidden).
 *
 * Designed absence (Law 12): without the asset, the body of faint light
 * stands in — same box, same tokens, zero layout difference.
 */
type PortraitScale = "monumental" | "conversational" | "distant";

const widthClass: Record<PortraitScale, string> = {
  monumental: "w-(--portrait-monumental-width)",
  conversational: "w-(--portrait-conversational-width)",
  distant: "w-(--portrait-distant-width)",
};

const sizesAttr: Record<PortraitScale, string> = {
  monumental: "(min-width: 768px) 700px, 85vw",
  conversational: "500px",
  distant: "160px",
};

export function Portrait({
  scale,
  described = false,
  priority = false,
  crewRole,
}: {
  scale: PortraitScale;
  /** True only where the figure is introduced (the hero). */
  described?: boolean;
  /** True only for the LCP appearance (the hero). */
  priority?: boolean;
  /** Registration target for the Crew. */
  crewRole?: string;
}) {
  const src = heroPortraitSrc();
  const box = `pointer-events-none relative aspect-(--portrait-aspect) ${widthClass[scale]} max-w-full`;
  if (src === null) {
    return (
      <div
        aria-hidden="true"
        data-crew={crewRole}
        className={`portrait-void ${box}`}
      />
    );
  }
  return (
    <figure
      data-crew={crewRole}
      aria-hidden={described ? undefined : true}
      className={`portrait-frame ${box}`}
    >
      <Image
        src={src}
        alt={described ? hero.portraitAlt : ""}
        fill
        priority={priority}
        sizes={sizesAttr[scale]}
        className="portrait-grade object-contain object-bottom"
      />
    </figure>
  );
}
