import { ArrowDown, ArrowUpRight, X, type LucideIcon } from "lucide-react";
import { icon } from "@/styles/tokens";

/**
 * The icon set — centralized, near-empty, and closed (Bible §5).
 *
 * WHY: this brand speaks in type and light; icons appear only where language
 * genuinely fails. The entire lawful set lives in this file — ESLint blocks
 * `lucide-react` imports everywhere else — so adding an icon is an amendment
 * here, in review, once. Style is fixed: 1.25px stroke, geometric, Ivory-60,
 * never filled, never Filament.
 *
 * WHEN: an arrow of travel, an external-link mark, a close affordance.
 * WHEN NOT: beside a text label that already says the same thing ("an icon
 * with a text label next to it is redundant — keep the words"); as bullet
 * decoration; as skill/logo imagery.
 */

type IconProps = {
  size?: keyof typeof sizes;
  /** Accessible name. Omit when purely decorative (default: hidden from AT). */
  label?: string;
};

const sizes = {
  inline: icon.sizeInline,
  action: icon.sizeAction,
} as const;

function makeIcon(Glyph: LucideIcon, displayName: string) {
  function Icon({ size = "inline", label }: IconProps) {
    return (
      <Glyph
        size={sizes[size]}
        strokeWidth={icon.stroke}
        absoluteStrokeWidth
        className="shrink-0 text-ivory-60"
        aria-hidden={label === undefined}
        aria-label={label}
        role={label === undefined ? undefined : "img"}
      />
    );
  }
  Icon.displayName = displayName;
  return Icon;
}

/** The arrow of travel — the scroll hint, a direction of movement. */
export const IconTravel = makeIcon(ArrowDown, "IconTravel");

/** The external-link mark — a departure from the film. */
export const IconExternal = makeIcon(ArrowUpRight, "IconExternal");

/** The close affordance — dialogs and overlays only. */
export const IconClose = makeIcon(X, "IconClose");
