import { cva, type VariantProps } from "class-variance-authority";

/**
 * The StageBackground — the four permitted background states as an enum,
 * making a fifth impossible (Architecture §4; Bible §2 background repertoire).
 *
 * WHY: backgrounds are lighting states, not images. The whole repertoire:
 *   1. depth     — flat Depth Black (loader, coda)
 *   2. keylight  — the key light's falloff on the stage (hero, contact)
 *   3. layers    — two-layer near-black depth (career road, world exteriors);
 *                  static here, drift belongs to the Crew
 *   4. world     — the assembled world (Scene 6 / project interiors); this
 *                  component reserves the plane, the canvas fills it later
 *
 * WHEN: as the first child of a Section that needs a lighting state other
 * than the bare stage.
 * WHEN NOT: never for pattern fills, mesh gradients, or decorative geometry —
 * those states don't exist. If a background is noticeable while reading,
 * it is wrong.
 */

const stage = cva("pointer-events-none absolute inset-0 -z-10", {
  variants: {
    state: {
      depth: "bg-depth-black",
      keylight: "stage-keylight",
      layers: "bg-stage-black",
      world: "bg-stage-black",
    },
  },
});

export function StageBackground({
  state,
  children,
}: VariantProps<typeof stage> & {
  /** Only meaningful for state="world": the canvas region mounts here. */
  children?: React.ReactNode;
}) {
  return (
    <div aria-hidden="true" className={stage({ state })}>
      {state === "layers" && (
        <>
          <div className="stage-depth-far inset-0 absolute" />
          <div className="stage-depth-near inset-0 absolute" />
        </>
      )}
      {state === "world" ? children : null}
    </div>
  );
}
