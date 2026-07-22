import { Technical } from "@/components/primitives/voices";

/**
 * Specimen labels (Bible §5) — how skills, stacks, and tags exist here.
 *
 * WHY: never badges, pills, chips, or logo clouds. A skill is a specimen
 * label: Technical voice, evenly sized — equality of type is the fluency
 * claim. `REACT · TYPESCRIPT · SUPABASE` in one quiet line.
 *
 * WHEN: stack lists, tag rows, any enumeration of instruments.
 * WHEN NOT: never with proficiency indicators (banned by the data model
 * itself), never bordered, never colored per-item.
 */

/** A single specimen. Renders a Technical-voice label. */
export function SpecimenLabel({ children }: { children: React.ReactNode }) {
  return (
    <Technical variant="label" tone="whisper">
      {children}
    </Technical>
  );
}

/**
 * A quiet tracked row of specimens, interpunct-separated (CSS supplies the
 * "·" so screen readers hear a clean list).
 */
export function SpecimenRow({
  items,
  "aria-label": ariaLabel,
}: {
  items: ReadonlyArray<string>;
  "aria-label"?: string;
}) {
  return (
    <ul
      aria-label={ariaLabel}
      className="specimen-row flex flex-wrap items-baseline"
    >
      {items.map((item) => (
        <li key={item}>
          <SpecimenLabel>{item}</SpecimenLabel>
        </li>
      ))}
    </ul>
  );
}
