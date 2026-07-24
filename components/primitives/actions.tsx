import Link from "next/link";
import type { Route } from "next";

/**
 * The two NOCTURNE actions (01 §15, 03 §7) — one primary, one secondary.
 *
 * WHY: the brand legislates **exactly one primary action per view**, so the
 * enforcement is structural — there are two action components in the V2
 * vocabulary and neither takes a `size`, `tone`, `variant`, or `className`
 * prop. Ghost, outline, destructive and disabled buttons do not exist here.
 *
 * Interaction is a change in **light, not geometry** (01 §15): these brighten,
 * their edge catches more light, and the bloom lifts — they never scale, never
 * translate, and never cast a shadow. The 120ms-in / 240ms-out asymmetry is
 * the "alive" signature and comes from `.light-response`.
 *
 * Focus is lit with the same dignity as hover; the global `:focus-visible`
 * treatment in `globals.css` owns it and is never suppressed here.
 *
 * These supersede `components/primitives/buttons.tsx`, which is V1 and still
 * serves the not-yet-rebuilt V1 sections. Nothing new may use that file.
 */

type ActionProps = {
  /** Internal route ("/…"), anchor ("#…"), or external/`mailto:` URL. */
  href: string;
  id?: string;
  children: React.ReactNode;
};

function Anchor({
  href,
  id,
  className,
  children,
}: ActionProps & { className: string }) {
  /* next/link owns internal routes so they prefetch and stay client-side;
     anchors and mailto: are plain <a> — Link would only get in the way. */
  if (href.startsWith("/")) {
    return (
      <Link href={href as Route} id={id} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} id={id} className={className}>
      {children}
    </a>
  );
}

/**
 * The Invitation — the primary action (03 §7.1).
 *
 * Signal Glass (the material reserved for invitational surfaces), a machined
 * 3px corner, a Plate label in full-strength ink, and the small practical Sol
 * light that makes it the second-brightest object in the frame after the name.
 *
 * WHEN: the single ask of a view.
 * WHEN NOT: navigation, or anywhere a second one would be visible at the same
 * time — two glowing actions is a design defect, not a layout choice.
 */
export function Invitation({ href, id, children }: ActionProps) {
  return (
    <Anchor
      href={href}
      id={id}
      className="action-invitation glass-signal edge-lit light-response inline-flex min-h-hit items-center justify-center rounded-precise px-4 py-3 font-plate text-plate-body text-bone-100"
    >
      {children}
    </Anchor>
  );
}

/**
 * The Quiet Action — the secondary (03 §7.2).
 *
 * No container at all: a `bone-70` label over a 1px underline of light that
 * warms to Sol on attention. Its restraint is what keeps the Invitation
 * unambiguous.
 *
 * WHEN: the alternative route out of a view.
 * WHEN NOT: as a substitute for inline links inside reading copy.
 */
export function QuietAction({ href, id, children }: ActionProps) {
  return (
    <Anchor
      href={href}
      id={id}
      className="action-quiet light-response inline-flex min-h-hit items-center justify-center font-plate text-plate-body text-bone-70"
    >
      {children}
    </Anchor>
  );
}
