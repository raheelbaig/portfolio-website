import { cva, type VariantProps } from "class-variance-authority";

/**
 * The Frame — the shot's safe area (Bible §4). This is the PageContainer.
 *
 * WHY: the frame never lists to one side — horizontal safe-area margins are
 * 5vw (min 24px, max 96px), symmetric always. Columns 1 and 12 stay empty;
 * this component is why no scene can violate that.
 *
 * WHEN: wrapping any content that must respect the letterbox — which is all
 * content except deliberate full-bleed imagery (exhibits, worlds).
 * WHEN NOT: around full-bleed exhibits — those are framed by the shot, not
 * the grid, and bleed to the true edge by design.
 *
 * Widths are the three lawful containers (Bible §4): narrative (680px,
 * Editorial measure), instrument (920px, Technical panels), full (the frame
 * itself). A fourth width is a design review, not a prop.
 */

const inner = cva("w-full", {
  variants: {
    width: {
      full: "",
      narrative: "mx-auto max-w-narrative",
      instrument: "mx-auto max-w-instrument",
    },
  },
  defaultVariants: { width: "full" },
});

export function Frame({
  width,
  as: Tag = "div",
  children,
}: VariantProps<typeof inner> & {
  as?: "div" | "nav" | "header" | "footer";
  children: React.ReactNode;
}) {
  return (
    <Tag className="w-full px-safe">
      <div className={inner({ width })}>{children}</div>
    </Tag>
  );
}
