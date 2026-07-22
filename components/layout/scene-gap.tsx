import { cva, type VariantProps } from "class-variance-authority";

/**
 * The SceneGap — the darkness between thoughts (Bible §4). This is the Spacer.
 *
 * WHY: "scene gaps are content, not absence; they are timed rests and may
 * never be compressed to fit more in." Making the rest a real component
 * means rhythm is enforced, not remembered.
 *
 * WHEN: between thoughts (thought, 64px), between passages (104px), between
 * scenes (scene, 168px — the black between film frames).
 * WHEN NOT: inside components — that's Stack territory (8–24px). If you
 * reach for a SceneGap smaller than `thought`, the layout wants a Stack.
 */

const gap = cva("w-full", {
  variants: {
    size: {
      thought: "h-thought",
      passage: "h-passage",
      scene: "h-scene",
    },
  },
  defaultVariants: { size: "scene" },
});

export function SceneGap({ size }: VariantProps<typeof gap>) {
  return <div aria-hidden="true" className={gap({ size })} />;
}
