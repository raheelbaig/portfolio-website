/**
 * The Divider — a hairline of caught light (Bible §2 border treatments).
 *
 * WHY: separation in this world is expressed as light on an edge, never a
 * drawn outline. One divider exists; variation would make it decoration.
 *
 * WHEN: separating thoughts inside a pane or between footer regions where
 * dark space alone cannot carry the break.
 * WHEN NOT: between scenes — scene separation is the SceneGap's 168px of
 * true darkness, not a line. Never stacked, never doubled.
 */
export function Divider() {
  return <hr className="h-px w-full border-0 bg-ivory-12" />;
}
