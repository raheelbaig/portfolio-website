import { cva, type VariantProps } from "class-variance-authority";

/**
 * The three type voices (Bible §3) — the entire typographic vocabulary.
 *
 * WHY: typography is the film's dialogue system; three registers, strictly
 * cast. These components make the casting law importable: there is no way to
 * set type outside a voice, and no size exists between the modular scale and
 * Monumental territory — that gap IS the hierarchy.
 *
 * Role mapping for conventional names:
 *   Display   → <Monumental>            Heading  → <Editorial size="line-xl">
 *   Title     → <Editorial size="line-lg">  Subtitle → <Editorial size="lead">
 *   Body      → <Editorial size="body">     Caption  → <Technical size="sm" tone="whisper">
 *   Technical Label → <TechnicalLabel>
 *   Gradient text — does not exist. Light is never paint (Bible §2).
 *
 * No className escape hatch: variants are closed unions (Law 14). A needed
 * new variant amends the primitive here, in review, once.
 */

/* ------------------------------------------------------------------ */
/* Monumental — speaks perhaps five times in the whole film            */
/* ------------------------------------------------------------------ */

const monumental = cva("font-grotesk font-semibold text-ivory-100", {
  variants: {
    variant: {
      /** The name — the largest type in the film. Uppercase by law. */
      name: "text-monumental-name uppercase",
      /** The three project titles. Uppercase by law. */
      title: "text-monumental-title uppercase",
      /** The monumental register at camera distance — doorway names only. */
      distant: "text-monumental-distant uppercase",
      /** "Let's Connect" — the farewell. Sentence case: the human voice never shouts. */
      close: "text-monumental-close",
    },
  },
});

type MonumentalTag = "h1" | "h2" | "h3" | "p" | "span";

const monumentalDefaultTag: Record<
  NonNullable<VariantProps<typeof monumental>["variant"]>,
  MonumentalTag
> = {
  name: "h1",
  title: "h2",
  distant: "h3",
  close: "h2",
};

/**
 * WHEN: the name, the three project titles, the farewell — nothing else.
 * WHEN NOT: anything that is dialogue rather than a title card. If a
 * Monumental line wraps past two lines, it needs fewer words, not less size.
 */
export function Monumental({
  variant,
  as,
  id,
  children,
}: {
  variant: NonNullable<VariantProps<typeof monumental>["variant"]>;
  as?: MonumentalTag;
  id?: string;
  children: React.ReactNode;
}) {
  const Tag = as ?? monumentalDefaultTag[variant];
  return (
    <Tag id={id} className={monumental({ variant })}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Editorial — the site's spoken lines                                 */
/* ------------------------------------------------------------------ */

const editorial = cva("font-grotesk", {
  variants: {
    size: {
      /** Reading text. */
      body: "text-base",
      /** Subheadlines: one sentence of context beneath a statement. */
      lead: "text-lead",
      /** A spoken line — story beats, offerings. */
      line: "text-editorial",
      /** Section-leading statements. */
      "line-lg": "text-editorial-lg",
      /** The monologue register — the largest dialogue in the film. */
      "line-xl": "text-editorial-xl",
    },
    tone: {
      /** The line currently being read. */
      full: "text-ivory-100",
      /** Passed lines, supporting information. */
      support: "text-ivory-60",
      /** Whispers. */
      whisper: "text-ivory-30",
    },
  },
  defaultVariants: { size: "body", tone: "full" },
});

type EditorialTag =
  "p" | "span" | "h2" | "h3" | "blockquote" | "li" | "figcaption";

/**
 * WHEN: every human sentence — monologue, story beats, headlines, captions
 * with warmth. Sentence case always; headlines are statements with periods.
 * WHEN NOT: titles (Monumental), instrumentation and data (Technical).
 */
export function Editorial({
  size,
  tone,
  as: Tag = "p",
  id,
  children,
}: VariantProps<typeof editorial> & {
  as?: EditorialTag;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag id={id} className={editorial({ size, tone })}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Technical — the instrumentation                                     */
/* ------------------------------------------------------------------ */

const technical = cva("font-technical tabular-nums", {
  variants: {
    variant: {
      /** Uppercase, wide-tracked — the machine labeling things. */
      label: "uppercase",
      /** Lowercase mono — the recorded value beside the label. */
      value: "lowercase",
      /** As-written text (emails, handles) where case is meaning. */
      plain: "",
    },
    size: {
      sm: "text-technical-sm",
      base: "text-technical",
    },
    tone: {
      full: "text-ivory-100",
      support: "text-ivory-60",
      whisper: "text-ivory-30",
      /** The machine voice's temperature — always quieter than warm. */
      instrument: "text-instrument-blue",
    },
  },
  defaultVariants: { variant: "label", size: "sm", tone: "support" },
});

type TechnicalTag = "span" | "p" | "dt" | "dd" | "time" | "li" | "cite";

/**
 * WHEN: years, stacks, metadata, roles, outcomes — anything that records
 * rather than speaks. It never sells; numbers are exact, not rounded.
 * WHEN NOT: anything with warmth or persuasion (Editorial), titles (Monumental).
 */
export function Technical({
  variant,
  size,
  tone,
  as: Tag = "span",
  id,
  dateTime,
  children,
}: VariantProps<typeof technical> & {
  as?: TechnicalTag;
  id?: string;
  /** Only meaningful with as="time". */
  dateTime?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={technical({ variant, size, tone })}
      dateTime={dateTime}
    >
      {children}
    </Tag>
  );
}

/**
 * Convenience alias: the canonical `ROLE` / `STACK` / `SHIPPED` label.
 * Equivalent to <Technical variant="label">.
 */
export function TechnicalLabel({
  as,
  id,
  children,
}: {
  as?: TechnicalTag;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <Technical variant="label" as={as} id={id}>
      {children}
    </Technical>
  );
}
