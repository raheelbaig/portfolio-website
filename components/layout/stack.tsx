import { cva, type VariantProps } from "class-variance-authority";

/**
 * The Stack — vertical rhythm from the lawful spacing scale (Bible §4).
 *
 * WHY: within a component, 8–24px only; between thoughts, 64px minimum.
 * The Stack's closed gap union makes an unlawful interval unrepresentable.
 *
 * WHEN: any vertical flow — a pane's contents, a scene's beats, a list.
 * WHEN NOT: two-dimensional composition (Grid); scene-to-scene separation
 * (SceneGap — scene gaps are content, not layout convenience).
 */

const stack = cva("flex flex-col", {
  variants: {
    gap: {
      "within-1": "gap-within-1",
      "within-2": "gap-within-2",
      "within-3": "gap-within-3",
      block: "gap-block",
      thought: "gap-thought",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
  },
  defaultVariants: { gap: "within-2", align: "start" },
});

export function Stack({
  gap,
  align,
  as: Tag = "div",
  "aria-label": ariaLabel,
  children,
}: VariantProps<typeof stack> & {
  as?: "div" | "ul" | "ol";
  "aria-label"?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag aria-label={ariaLabel} className={stack({ gap, align })}>
      {children}
    </Tag>
  );
}
