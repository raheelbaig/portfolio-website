import { Technical } from "@/components/primitives/voices";
import { site } from "@/content/site";

/**
 * Scene 1 — "A Breath in the Dark" (The Loader).
 *
 * The theater going dark before the projector starts: near-total darkness,
 * a single thin line of light that breathes once, the name whispered in the
 * technical voice with letter-spacing widening like an inhale. Then the
 * line widens vertically — an aperture opening — and the darkness resolves
 * into the hero already in progress. There is no cut; the loader BECOMES
 * the film.
 *
 * Implementation is pure CSS animation (globals.css), which satisfies every
 * law at once:
 *  - Amendment 1: the hero is painted UNDERNEATH from the first frame (LCP
 *    fires on the portrait paint, never gated by this overlay), and the
 *    breath is a fixed ≤1.9s — under the storyboard's 2s hard cap.
 *  - The Set stands alone: CSS runs without JavaScript, so no-JS visitors
 *    get the same overture, not a stuck curtain.
 *  - Reduced motion: the overlay simply never exists (media query).
 *
 * aria-hidden + pointer-events:none — a purely visual veil; AT and
 * keyboard users are never behind it.
 */
export function LoaderScene() {
  return (
    <div aria-hidden="true" className="loader">
      <div className="loader-panel loader-panel-top" />
      <div className="loader-panel loader-panel-bottom" />
      <div className="loader-center">
        <span className="loader-line" />
        <span className="loader-name">
          <Technical variant="label" tone="support">
            {site.name}
          </Technical>
        </span>
      </div>
    </div>
  );
}
