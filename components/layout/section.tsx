import { Editorial, TechnicalLabel } from "@/components/primitives/voices";

/**
 * Section & SectionHeader — the semantic shell of a scene.
 *
 * WHY: scenes are `<section>`s with headings in a correct outline
 * (Architecture §13) — visually cinematic, structurally h2. The film
 * linearizes into a coherent read because every scene passes through this
 * shell. `relative isolate` establishes the stacking context that
 * StageBackground layers behind.
 *
 * WHEN: every scene and every sub-scene surface that owns a heading.
 * WHEN NOT: purely presentational groupings inside a scene (use Stack/Grid);
 * the page's <main>, which the root layout owns.
 */

export function Section({
  id,
  labelledBy,
  srHeading,
  children,
}: {
  id?: string;
  /** id of the heading that names this section (usually the SectionHeader's). */
  labelledBy?: string;
  /**
   * For scenes whose storyboard frame shows no visible headline (the road,
   * the bench): a visually-hidden h2 keeps the document outline correct
   * (Architecture §13) without adding words to the shot. Requires `id`.
   * Mutually exclusive with labelledBy.
   */
  srHeading?: string;
  children: React.ReactNode;
}) {
  const srHeadingId =
    srHeading !== undefined && id !== undefined ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? srHeadingId}
      className="relative isolate"
    >
      {srHeading !== undefined && (
        <h2 id={srHeadingId} className="sr-only">
          {srHeading}
        </h2>
      )}
      {children}
    </section>
  );
}

/**
 * SectionHeader — eyebrow (Technical), statement (Editorial heading), and an
 * optional supporting line. Headlines state; they don't tease (Bible §9).
 */
export function SectionHeader({
  headingId,
  eyebrow,
  title,
  line,
  level = "h2",
}: {
  /** Give the Section's labelledBy this id. */
  headingId: string;
  /** Optional Technical-voice eyebrow, e.g. "SELECTED WORK". */
  eyebrow?: string;
  /** The Editorial statement. A sentence, with a period when it is one. */
  title: string;
  /** Optional subheadline: adds a fact or a stake, never restates (Bible §9). */
  line?: string;
  level?: "h2" | "h3";
}) {
  return (
    <header className="flex flex-col gap-within-2">
      {eyebrow !== undefined && (
        <TechnicalLabel as="p">{eyebrow}</TechnicalLabel>
      )}
      <Editorial as={level} size="line-lg" id={headingId}>
        {title}
      </Editorial>
      {line !== undefined && (
        <Editorial size="lead" tone="support">
          {line}
        </Editorial>
      )}
    </header>
  );
}
