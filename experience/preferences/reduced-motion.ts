/**
 * Motion preference resolution (Architecture: experience/preferences).
 *
 * Reduced motion is not a stripped fallback — it selects the alternate cut:
 * the complete static Set, which the film treats as a designed edit
 * (Bible: "the alternate cut"). When it's on, the Crew simply never mounts.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
