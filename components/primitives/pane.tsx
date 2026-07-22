import { cva, type VariantProps } from "class-variance-authority";

/**
 * The Pane — this product's only "card", and the entire glass panel system
 * (Bible §2 materials, §5 components).
 *
 * WHY: the word "card" is banned in reviews. Surfaces here are panes of the
 * world — glass or matte, lit from above, edged in caught light. All three
 * lawful materials are variants of this one component, so a fourth material
 * cannot exist.
 *
 * WHEN: any contained surface — project detail panes, the attendant's shell,
 * reading panels, invitational thresholds (material="filament").
 * WHEN NOT: never in equal grids of three with icon-title-text (the template
 * silhouette this brand exists to avoid); never as decoration around content
 * that reads fine on the stage. Filament Glass only for surfaces that invite
 * the visitor to step somewhere.
 *
 * Maximum two materials per viewport (Bible §2) — a review rule.
 */

const pane = cva("edge-light rounded-pane", {
  variants: {
    material: {
      /** Default panel: the world must remain visible behind it. */
      smoke: "material-smoke",
      /** Fully opaque — only when content must be maximally legible. */
      obsidian: "material-obsidian",
      /** Invitational surfaces exclusively: doorways, the CTA field. */
      filament: "material-filament",
    },
    padding: {
      none: "",
      within: "p-within-3",
      block: "p-block",
    },
    /**
     * One strong glow per viewport (Bible §2). Off by default; a pattern
     * that turns this on owns the viewport's glow budget.
     */
    glow: {
      none: "",
      bloom: "bloom",
    },
  },
  defaultVariants: { material: "smoke", padding: "within", glow: "none" },
});

type PaneTag = "div" | "article" | "aside" | "section" | "figure";

export function Pane({
  material,
  padding,
  glow,
  as: Tag = "div",
  id,
  "aria-labelledby": ariaLabelledby,
  children,
}: VariantProps<typeof pane> & {
  as?: PaneTag;
  id?: string;
  "aria-labelledby"?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={pane({ material, padding, glow })}
    >
      {children}
    </Tag>
  );
}
