import { cva, type VariantProps } from "class-variance-authority";

/**
 * The Grid — the 12-column crew behind the shot (Bible §4).
 *
 * WHY: columns exist for alignment discipline; composition follows film
 * framing. Text blocks snap to the grid; light and atmosphere are framed,
 * not gridded. Children place themselves with col-span and col-start classes.
 *
 * WHEN: multi-column composition inside a Frame — asymmetric layouts,
 * text-beside-subject blocking.
 * WHEN NOT: equal thirds of identical panes (the banned template
 * silhouette); simple vertical flows (Stack).
 */

const grid = cva("grid grid-cols-12", {
  variants: {
    gapX: {
      "within-2": "gap-x-within-2",
      "within-3": "gap-x-within-3",
      block: "gap-x-block",
    },
    gapY: {
      "within-3": "gap-y-within-3",
      block: "gap-y-block",
      thought: "gap-y-thought",
    },
  },
  defaultVariants: { gapX: "within-3", gapY: "block" },
});

export function Grid({
  gapX,
  gapY,
  children,
}: VariantProps<typeof grid> & {
  children: React.ReactNode;
}) {
  return <div className={grid({ gapX, gapY })}>{children}</div>;
}
