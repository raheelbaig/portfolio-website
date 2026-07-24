/**
 * NOCTURNE — design tokens. The single source of truth for every visual value.
 *
 * This module is the *only* place a NOCTURNE value is written. `styles/tokens.css`
 * is generated from it (`npm run tokens`); the Crew imports it directly for
 * animation values. A value that lives in two places is a bug.
 *
 * Section references point at `docs/v2/`:
 *   01 — brand system (colour, type, spacing, radius, glass, light, motion law)
 *   10 — motion language (easing, durations, scrubs, distances) — numeric authority
 *   11 — responsive system (tiers, breakpoints, per-tier spacing & type)
 *
 * ── Composition tiers (11 §2.2) ────────────────────────────────────────────
 *   REEL     < 768px   phones            (base — this system is mobile-first)
 *   COLUMN   ≥ 768px   tablet portrait
 *   COMPACT  ≥ 1024px  laptop / tablet landscape
 *   STAGE    ≥ 1440px  large laptop / desktop
 *
 * Tokens marked "per tier" resolve responsively in the generated CSS; their TS
 * shape is `Record<Tier, …>` so the Crew can reason about them too.
 */

/** The four composition tiers, smallest first (11 §2.2). */
export const tiers = ["reel", "column", "compact", "stage"] as const;
export type Tier = (typeof tiers)[number];

/* ══════════════════════════════════════════════════════════════════════════
   COLOUR (01 §4) — cool room, warm light. The palette is closed.
   ══════════════════════════════════════════════════════════════════════════ */

/** The Dark — surfaces. Never pure #000: black reads as absence, night reads as a room. */
export const night = {
  /** Deepest recess: behind glass, the void behind the portrait, under-scroll. */
  900: "#080A0D",
  /** **Base.** The room itself; the default page field. */
  800: "#0B0E12",
  /** Elevated surface: panels at rest, the sidebar rail. */
  700: "#12161C",
  /** Higher surface: hovered panels, active rows. */
  600: "#1A1F27",
  /** Hairlines, dividers, glass edges at rest. */
  500: "#252B35",
} as const;

/** Ink — warm neutrals on one lighting axis. Never grey (01 §4.3). */
export const bone = {
  /** Primary ink: headlines, the line being read. ~17:1 on night-800. */
  100: "#F4F1EA",
  /** Secondary: supporting copy, passed lines. ~9:1. */
  70: "#BDBBB4",
  /** Tertiary: metadata, captions, technical margin notes. ~4.8:1 (AA). */
  45: "#87857F",
  /** Faint: disabled, decorative rules. **Fails AA — never essential text.** */
  25: "#4C4B47",
} as const;

/** Sol — the one warm accent. Light, never paint; never a large flat fill. */
export const sol = {
  /** Primary accent: the single lit action, focus, the one thing to look at. */
  400: "#F2B45C",
  /** Bloom / halo only. Never a solid. */
  300: "#F8CD8A",
  /** Pressed / underlines / hairline accents where a solid is unavoidable. */
  600: "#C98F3E",
} as const;

/** Ion — the machine voice. Always cooler and quieter than Sol. */
export const ion = {
  /** Technical labels, code, the AI/instrument register. */
  400: "#84A7B8",
  /** Structural cool lines / Ion at rest. */
  600: "#4A5E68",
} as const;

/**
 * The only red in the system (01 §4.5) — genuine data-loss or failure states
 * exclusively. Never decoration, never emphasis.
 */
export const emberDanger = "#C46A5A";

/** Flat colour map, as emitted to CSS (`--color-*`). */
export const color = {
  "night-900": night[900],
  "night-800": night[800],
  "night-700": night[700],
  "night-600": night[600],
  "night-500": night[500],
  "bone-100": bone[100],
  "bone-70": bone[70],
  "bone-45": bone[45],
  "bone-25": bone[25],
  "sol-400": sol[400],
  "sol-300": sol[300],
  "sol-600": sol[600],
  "ion-400": ion[400],
  "ion-600": ion[600],
  "ember-danger": emberDanger,
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   BREAKPOINTS (11 §2) — tier boundaries, expressed in em so they respect
   the user's font size (WCAG reflow).
   ══════════════════════════════════════════════════════════════════════════ */

export const breakpoint = {
  /** COLUMN begins. **The phone↔tablet boundary, everywhere.** */
  column: { px: 768, em: 48 },
  /** COMPACT begins. */
  compact: { px: 1024, em: 64 },
  /** Laptop sub-step inside COMPACT (rail width, crop density). */
  laptop: { px: 1280, em: 80 },
  /** STAGE begins. New in V2 (V1 used 1536 for `2xl`) — see 11 §2 token note. */
  stage: { px: 1440, em: 90 },
  /** Desktop sub-step inside STAGE (cinema margins, max type). */
  cinema: { px: 1680, em: 105 },
} as const;

/**
 * 640px is **not** a tier boundary — it is a within-phone type-scaling step
 * only (small vs large phone). Kept for reference; never gate layout on it.
 */
export const phoneStep = { px: 640, em: 40 } as const;

/* ══════════════════════════════════════════════════════════════════════════
   SPACING (01 §7, 11 §3.2) — base 4px.
   Within a component the scale is constant; the *rests between thoughts and
   scenes* re-block per tier (a rest is content, never slack).
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * Within-component spacing. Constant across tiers.
 *
 * `hit` is not part of the 4px rhythm — it is the **minimum touch target**
 * (11 §9.3: ≥24px required, ≥44px preferred on touch tiers). It lives here
 * because it is a spacing value the Set applies with `min-h-hit`, and because
 * a magic `44px` in a component is exactly what this file exists to prevent.
 */
export const space = {
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "40px",
  hit: "44px",
} as const;

/** The rests. Per tier; never below these floors (11 §3.2). */
export const rest = {
  /** Between thoughts. */
  thought: { reel: "48px", column: "56px", compact: "64px", stage: "64px" },
  /** Between passages. */
  passage: { reel: "64px", column: "80px", compact: "96px", stage: "104px" },
  /** Between scenes — the dark between frames. */
  scene: { reel: "96px", column: "112px", compact: "136px", stage: "160px" },
  /** Act breaks. */
  act: { reel: "120px", column: "160px", compact: "200px", stage: "240px" },
} as const satisfies Record<string, Record<Tier, string>>;

/* ══════════════════════════════════════════════════════════════════════════
   FRAME & GRID (01 §6, 11 §3.1)
   ══════════════════════════════════════════════════════════════════════════ */

export const frame = {
  /**
   * The safe margin — symmetric always; the letterbox on wide frames.
   * Per 01 §6.1. (11 §3.1 states a 20px floor; see the migration note in the
   * foundation report — 01 is treated as the grid authority.)
   */
  margin: "clamp(24px, 5vw, 112px)",
  /** Column count per tier. */
  columns: { reel: 4, column: 8, compact: 12, stage: 12 },
  /** Gutter per tier. */
  gutter: { reel: "16px", column: "16px", compact: "20px", stage: "24px" },
} as const;

/** The two measures. A third width is a design review, not a prop (01 §6.2). */
export const container = {
  /** Editorial reading measure. */
  read: "min(680px, 100% - 2 * var(--spacing-frame))",
  /** Instrument panels / mockups. */
  panel: "min(960px, 100% - 2 * var(--spacing-frame))",
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   TYPOGRAPHY (01 §5, 11 §3.3) — three voices.
   Marquee is fluid (frame-composed); Plate and Console step per tier.
   The gap between `plate-line-xl` and `marquee-sm` is load-bearing: nothing
   may be sized inside it (01 §5.2).
   ══════════════════════════════════════════════════════════════════════════ */

/** Font stacks. The `--font-src-*` vars are injected by next/font in the root layout. */
export const font = {
  /** Display — contrast serif. The name, project titles, the closing action. */
  marquee: "var(--font-src-marquee), Georgia, 'Times New Roman', serif",
  /** Text/UI — neo-grotesk. Reading copy, spoken lines, most UI. */
  plate: "var(--font-src-plate), ui-sans-serif, system-ui, sans-serif",
  /** Technical — mono. Metadata, code, the machine voice. */
  console: "var(--font-src-console), ui-monospace, SFMono-Regular, monospace",
} as const;

/** Type sizes, per tier (11 §3.3). Marquee values are complete `clamp()` expressions. */
export const type = {
  "console-sm": {
    reel: "12px",
    column: "13px",
    compact: "13px",
    stage: "13px",
  },
  console: { reel: "13px", column: "14px", compact: "15px", stage: "15px" },
  "plate-body": {
    reel: "16px",
    column: "16px",
    compact: "17px",
    stage: "17px",
  },
  "plate-lead": {
    reel: "18px",
    column: "19px",
    compact: "20px",
    stage: "21px",
  },
  "plate-line": {
    reel: "20px",
    column: "22px",
    compact: "25px",
    stage: "27px",
  },
  "plate-line-lg": {
    reel: "26px",
    column: "28px",
    compact: "31px",
    stage: "34px",
  },
  "plate-line-xl": {
    reel: "30px",
    column: "34px",
    compact: "38px",
    stage: "42px",
  },
  "marquee-sm": {
    reel: "clamp(34px, 5vw, 48px)",
    column: "clamp(44px, 6vw, 64px)",
    compact: "clamp(48px, 6vw, 96px)",
    stage: "clamp(48px, 6vw, 96px)",
  },
  marquee: {
    reel: "clamp(36px, 9vw, 72px)",
    column: "clamp(44px, 8vw, 96px)",
    compact: "clamp(64px, 8vw, 168px)",
    stage: "clamp(64px, 8vw, 168px)",
  },
  "marquee-xl": {
    reel: "clamp(44px, 13vw, 80px)",
    column: "clamp(56px, 12vw, 120px)",
    compact: "clamp(72px, 13vw, 220px)",
    stage: "clamp(72px, 13vw, 220px)",
  },
} as const satisfies Record<string, Record<Tier, string>>;

/** Line heights, by voice (01 §5.3). Constant across tiers. */
export const leading = {
  marquee: "1.02",
  plate: "1.5",
  "plate-tight": "1.35",
  console: "1.4",
  /** Tabular/data settings: exactly 1. */
  data: "1",
} as const;

/** Tracking, by voice. Marquee tightens; Console opens when uppercase. */
export const tracking = {
  marquee: "-0.015em",
  plate: "0em",
  console: "0.06em",
  /** Console at rest (lowercase values, code). */
  "console-value": "0em",
} as const;

/** Maximum line length for prose, in characters (01 §6.2). */
export const measureCh = 70;

/* ══════════════════════════════════════════════════════════════════════════
   RADIUS (01 §9) — machined, not soft.
   ══════════════════════════════════════════════════════════════════════════ */

export const radius = {
  /** Default: panels, inputs, mockup frames, buttons — everything structural. */
  precise: "3px",
  /** Large glass surfaces where a precise corner would feel brittle. */
  glass: "14px",
  /** **Reserved** for exactly one element: the AI attendant's presence (13). */
  round: "9999px",
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   GLASS, LIGHT & DEPTH (01 §10–§12)
   Three materials, max two per viewport. **No cast shadows — ever.**
   ══════════════════════════════════════════════════════════════════════════ */

export const glass = {
  /** Smoke — the room stays visible behind it. */
  smoke: { surface: "rgb(11 14 18 / 0.65)", blur: "22px" },
  /** Slate — opaque; when content must be maximally legible. */
  slate: { surface: night[700] },
  /** Signal Glass — *invitational surfaces only* (CTA fields, doorways). */
  signal: { tint: "rgb(242 180 92 / 0.05)" },
  /** Borders are light catching an edge: 1px, top edge lit one step. */
  edge: { rest: night[500], lit: "rgb(189 187 180 / 0.28)" },
} as const;

export const glow = {
  /** Warm halo — the key light's visible breath. */
  bloom: "rgb(248 205 138 / 0.22)",
  /** Neutral attention lift. */
  lift: "rgb(244 241 234 / 0.07)",
  /** The machine pulse — attendant, intelligence group. */
  pulse: "rgb(132 167 184 / 0.10)",
  /** Canonical halo radius: glows are large and soft. */
  radius: "48px",
} as const;

/** Ambient fill — 2–4% ink lift so pure dark never swallows form (01 §11). */
export const light = {
  ambient: "0.03",
  /** Corner vignette depth — one step toward night-900. */
  vignette: "0.16",
} as const;

/** One film grain, everywhere, forever. Never animated (01 §16). */
export const grain = {
  opacity: "0.025",
  "opacity-deep": "0.04",
  tile: "160px",
} as const;

/** Icons: near-empty set, 1.25px stroke, Ion-toned, never filled (01 §8). */
export const icon = {
  stroke: 1.25,
  sizeInline: 16,
  sizeAction: 20,
} as const;

/**
 * The layer stack, back to front. The DOM composites over the canvas; the
 * grain overlays everything including the loader.
 */
export const z = {
  canvas: 0,
  film: 10,
  nav: 20,
  attendant: 30,
  overlay: 40,
  loader: 50,
  grain: 60,
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   MOTION (10) — the numeric authority.
   Three curves + one sanctioned exception. Four duration rungs. Nothing
   between rungs may be invented.
   ══════════════════════════════════════════════════════════════════════════ */

export const easing = {
  /** The glide — all *timed* motion. Settles like gravity; never overshoots. */
  glide: "cubic-bezier(0.22, 1, 0.36, 1)",
  /** Same curve as control points, for GSAP CustomEase. */
  glidePoints: [0.22, 1, 0.36, 1],
  /** All *scroll-driven* motion. The feel comes from the scrub lerp, not a curve. */
  scrub: "none",
  /** Idle/ambient only — breathing is the one organic motion. */
  idle: "sine.inOut",
  /** The single sanctioned exception: the Hero key-light swell (10 §2). */
  swell: "power2.out",
} as const;

/** Duration rungs, in ms. A motion picks a rung. */
export const duration = {
  /** A light noticing you — hover/focus in, active. */
  instant: 120,
  /** An element settling — hover out, small reveals, furniture fades. */
  gesture: 240,
  /** A scene reframing — line/beat reveals, nav reveal, page transition. */
  passage: 480,
  /** A camera move — name settle, title reveal, spine draw. */
  cinematic: 900,
  /** The figure found by light (cinematic × 1.7). */
  portrait: 1530,
  /** A lamp coming up — the Hero key-light swell. */
  swell: 2000,
} as const;

export const stagger = {
  /** The interval of one intentional glance. */
  glance: 75,
  /** Deliberate one-after-another (furniture cluster, CTA group). */
  beat: 195,
} as const;

/** Scroll-driven catch-up, in seconds of lerp (ScrollTrigger `scrub`). */
export const scrub = {
  /** Reading illumination — tracks attention closely. */
  tight: 0.6,
  /** Dock, procession, parallax — the "heavy curtain on rails" weight. */
  medium: 1.0,
  /** Large-range establishing parallax — the biggest moves get the most glide. */
  loose: 1.2,
} as const;

/**
 * Distance & delta scale (10 §3.4). Cinematic motion is *small* motion —
 * these caps are what stop an implementer from "making it more visible".
 */
export const motion = {
  offset: { rise: "8px", settle: "16px", release: "-20px" },
  delta: {
    /** Entrance scale. */
    enter: 0.985,
    /** Idle push-in / establishing settle. */
    push: 1.02,
    /** Showcase establishing push (from → to). */
    establishingFrom: 1.08,
    establishingTo: 1.03,
  },
  /** Directional entrance offsets, in percent. */
  enterX: { world: 7, about: -9 },
  parallax: { sm: "3%", md: "5%", lg: "7%" },
  breath: { scale: 0.008, light: 0.04 },
  /** Pointer-lean smoothing factor (per-frame lerp). */
  lerpPointer: 0.06,
  /** State transitions: fast in, slow out — the "alive" signature. */
  hover: { in: duration.instant, out: duration.gesture },
} as const;

export const tokens = {
  color,
  night,
  bone,
  sol,
  ion,
  breakpoint,
  space,
  rest,
  frame,
  container,
  font,
  type,
  leading,
  tracking,
  radius,
  glass,
  glow,
  light,
  grain,
  icon,
  z,
  easing,
  duration,
  stagger,
  scrub,
  motion,
} as const;

export type Tokens = typeof tokens;

/* ══════════════════════════════════════════════════════════════════════════
   ── V1 LEGACY ──────────────────────────────────────────────────────────────
   Retained **only** because the existing V1 sections still consume these CSS
   variables, and this task's scope forbids modifying those components. They
   do not collide with any V2 token (different names throughout).

   Retire this whole block when the V1 sections are replaced by V2 sections;
   nothing new may consume it.
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * The V1 colour *names*, **re-pointed at V2 values**. These are aliases now,
 * not a second palette.
 *
 * Reasoning: V1's blacks (`#0A0A0C`) and V2's (`#0B0E12`) are different enough
 * to show a seam wherever a V1 section meets the V2 page field, and a portfolio
 * about craft cannot ship a visible seam. Because the two systems agree on
 * *roles* — a base field, a deeper recess, an elevated surface, a four-step ink
 * ladder, one warm accent, one cool accent — every V1 name has an exact V2
 * counterpart. Aliasing them means the whole site renders under one lighting
 * model immediately, and the V1 markup can be retired file by file instead of
 * in one risky sweep.
 *
 * `ivory-30` → `bone-45` is a deliberate upgrade: the V1 value failed AA for
 * the metadata it was carrying.
 */
export const legacyColor = {
  "stage-black": night[800],
  "depth-black": night[900],
  obsidian: night[700],
  "ivory-100": bone[100],
  "ivory-60": bone[70],
  "ivory-30": bone[45],
  "ivory-12": night[500],
  filament: sol[400],
  "filament-bloom": sol[300],
  "instrument-blue": ion[400],
} as const;

/**
 * `thought`, `passage` and `scene` are **deliberately absent**: V2 owns those
 * names as per-tier rests (see `rest`). The V1 sections keep using
 * `--spacing-thought` and friends and simply inherit the responsive values,
 * which are the same measures re-blocked per tier.
 */
export const legacySpace = {
  "within-1": "8px",
  "within-2": "16px",
  "within-3": "24px",
  block: "40px",
  safe: "clamp(24px, 5vw, 96px)",
} as const;

export const legacyContainer = {
  narrative: "680px",
  instrument: "920px",
} as const;

export const legacyText = {
  "technical-sm": { size: "0.8125rem", leading: "1.4", tracking: "0.06em" },
  technical: { size: "0.9375rem", leading: "1.4", tracking: "0.06em" },
  base: { size: "1.0625rem", leading: "1.55", tracking: "0em" },
  lead: { size: "1.3125rem", leading: "1.55", tracking: "0em" },
  editorial: { size: "1.6875rem", leading: "1.55", tracking: "0em" },
  "editorial-lg": { size: "2.125rem", leading: "1.5", tracking: "0em" },
  "editorial-xl": { size: "2.625rem", leading: "1.5", tracking: "0em" },
  "monumental-close": {
    size: "clamp(2.25rem, 6vw, 8rem)",
    leading: "1",
    tracking: "-0.02em",
  },
  "monumental-title": {
    size: "clamp(3rem, 8vw, 10.5rem)",
    leading: "0.975",
    tracking: "-0.02em",
  },
  "monumental-name": {
    size: "clamp(4rem, 13vw, 17rem)",
    leading: "0.95",
    tracking: "-0.02em",
  },
  "monumental-distant": {
    size: "2.625rem",
    leading: "1.1",
    tracking: "-0.01em",
  },
} as const;

export const legacyLeading = {
  monumental: "0.975",
  editorial: "1.55",
  technical: "1.4",
  data: "1",
} as const;

export const legacyTracking = {
  monumental: "-0.02em",
  editorial: "0em",
  technical: "0.06em",
  inhale: "0.2em",
} as const;

export const legacyRadius = {
  technical: "2px",
  pane: "12px",
  attendant: "9999px",
} as const;

/**
 * Only the two materials V2 has no equivalent for. Smoke, the lit edge, the
 * whole glow set and the grain set were dropped: V2 defines those under the
 * *same* variable names, so the V1 utilities in `globals.css` inherit the
 * NOCTURNE values. Same roles, one lighting model — which is the point.
 */
export const legacyGlass = {
  obsidian: { surface: night[700] },
  filament: { tint: glass.signal.tint },
} as const;

/**
 * The V1 font *names*, re-pointed at the V2 voices. V1 had two families;
 * `grotesk` was carrying both display and reading duty, which is precisely what
 * V2 splits into Marquee and Plate — so the V1 name maps to Plate (the reading
 * voice), and V1 sections simply lose the display serif they never had.
 */
export const legacyFont = {
  grotesk: font.plate,
  technical: font.console,
} as const;

/**
 * Kept whole, because these are the variant names the V1 markup is written in
 * (`md:`, `lg:`, `xl:`) — dropping them would delete the variants, not just the
 * tokens. `md`/`lg`/`xl` duplicate the *values* of V2's `column`/`compact`/
 * `laptop` under V1 names; only `cinema` collides by name (identical width), so
 * V2's declaration wins it.
 *
 * Neither `sm` (640) nor `2xl` (1536) is a V2 tier boundary: 640 is a
 * within-phone type step only, and `2xl` is superseded by `stage` at 1440
 * (11 §2 token note). Nothing new may use either.
 */
export const legacyBreakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  cinema: 1680,
} as const;

/**
 * Portrait scales. Unchanged from V1 — the existing values already match the
 * V2 STAGE column of 11 §3.4, so there is nothing to migrate here. Per-tier
 * portrait re-blocking is section work, not foundation work.
 */
export const portrait = {
  aspect: "1 / 1",
  "monumental-width": "min(62svh, calc(100vw - (2 * var(--spacing-safe))))",
  "conversational-width": "46svh",
  "distant-width": "12svh",
} as const;
