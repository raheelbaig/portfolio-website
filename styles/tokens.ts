/**
 * Design tokens — the single source of truth for every visual value.
 *
 * "Tokens are the only bridge between the Bible and code" (Architecture §1).
 * The Set consumes these through styles/tokens.css (generated — run
 * `npm run tokens`); the Crew imports them directly for animation values.
 * No raw color, duration, easing, spacing, or size literal may appear in a
 * component (Law 9). If a value isn't here, the Bible conversation comes
 * first — do not add literals downstream.
 *
 * Section references point at docs/raheel-baig-portfolio-design-language-bible.md.
 */

/** §2 — The one-light-source palette. No other hues exist. */
export const color = {
  /** The base of the world. Never pure #000 — velvet, not absence. */
  "stage-black": "#0A0A0C",
  /** Deepest layer only: behind the portrait, the loader, scene gaps. */
  "depth-black": "#050506",
  /** Fully opaque surface for maximally legible content. */
  obsidian: "#101013",
  /** The primary ink: paper by lamplight. */
  "ivory-100": "#F2EFE9",
  /** Supporting text, passed lines. */
  "ivory-60": "#9C9994",
  /** Whispers: metadata, footer, margin notes. */
  "ivory-30": "#55534F",
  /** Hairlines and borders — dimmed Ivory, same warm axis (alpha form so
   * edges composite correctly over any stage depth). */
  "ivory-12": "rgb(242 239 233 / 0.12)",
  /** The single accent: the key light's color made visible. Light, not paint. */
  filament: "#E8A855",
  /** Halo state of Filament — only ever as glow, never a solid. */
  "filament-bloom": "#FFC98B",
  /** The cool counterweight: the machine voice. Always dimmed, always quieter than Filament. */
  "instrument-blue": "#8FA3B8",
} as const;

/** §4 — The seven lawful spacing values. Within a component: within-*.
 * Between thoughts: thought (64) minimum. Between scenes: scene (168+). */
export const space = {
  "within-1": "8px",
  "within-2": "16px",
  "within-3": "24px",
  block: "40px",
  thought: "64px",
  passage: "104px",
  scene: "168px",
  /** §4 — Horizontal safe-area margins: 5vw, min 24px, max 96px, symmetric always. */
  safe: "clamp(24px, 5vw, 96px)",
  /** §14 (Architecture) — minimum interactive hit area, padded not sized. */
  hit: "44px",
} as const;

/** §4 — Three containers, no exceptions. (The third, full-bleed, needs no token.) */
export const container = {
  /** Editorial narrative measure. */
  narrative: "680px",
  /** Instrument panels: Technical content, panes. */
  instrument: "920px",
} as const;

/**
 * §3 — The type scale. Modular (1.25 from a 17px base) for Editorial and
 * Technical; fluid, frame-composed for Monumental. The gap between 42px and
 * Monumental territory IS the hierarchy — nothing may be sized between.
 * Each entry: size / line-height / letter-spacing.
 */
export const text = {
  "technical-sm": { size: "0.8125rem", leading: "1.4", tracking: "0.06em" },
  technical: { size: "0.9375rem", leading: "1.4", tracking: "0.06em" },
  base: { size: "1.0625rem", leading: "1.55", tracking: "0em" },
  lead: { size: "1.3125rem", leading: "1.55", tracking: "0em" },
  editorial: { size: "1.6875rem", leading: "1.55", tracking: "0em" },
  "editorial-lg": { size: "2.125rem", leading: "1.5", tracking: "0em" },
  "editorial-xl": { size: "2.625rem", leading: "1.5", tracking: "0em" },
  /** "Let's Connect" — ~6vw, composed to the frame. */
  "monumental-close": {
    size: "clamp(2.25rem, 6vw, 8rem)",
    leading: "1",
    tracking: "-0.02em",
  },
  /** Project titles — ~8vw. */
  "monumental-title": {
    size: "clamp(3rem, 8vw, 10.5rem)",
    leading: "0.975",
    tracking: "-0.02em",
  },
  /** The name — ~13vw, the largest type in the film. */
  "monumental-name": {
    size: "clamp(4rem, 13vw, 17rem)",
    leading: "0.95",
    tracking: "-0.02em",
  },
} as const;

/** §3 — Standalone leading tokens for prose set outside the text-* utilities. */
export const leading = {
  monumental: "0.975",
  editorial: "1.55",
  technical: "1.4",
  /** Tabular/data settings: exactly 1.0. */
  data: "1",
} as const;

/** §3 — Tracking tokens. The loader's inhale (+20%) is the one expressive exception. */
export const tracking = {
  monumental: "-0.02em",
  editorial: "0em",
  technical: "0.06em",
  inhale: "0.2em",
} as const;

/** §2 — One radius family: 2px instrument-like, 12px glass-like.
 * Nothing fully round except the attendant's presence. */
export const radius = {
  technical: "2px",
  pane: "12px",
  attendant: "9999px",
} as const;

/**
 * §7 — This world has depth of darkness, not cast shadows. The group is
 * deliberately empty-but-present: the token system refuses to store what the
 * design refuses to show. Depth = layers of black; attention = glow.
 */
export const shadow = {} as const;

/** §2 — Glow colors, strictly budgeted: one strong glow per viewport. */
export const glow = {
  /** Human/invitational glow. */
  bloom: "rgb(255 201 139 / 0.25)",
  /** Neutral attention lift. */
  lift: "rgb(242 239 233 / 0.08)",
  /** The technical pulse: the attendant, the AI skill group. */
  pulse: "rgb(143 163 184 / 0.06)",
  /** Canonical halo radius — glows are large and soft (§2: blur ≥ 3× the element). */
  radius: "48px",
} as const;

/** §2 — The three materials. Maximum two per viewport. */
export const glass = {
  smoke: {
    surface: "rgb(10 10 12 / 0.65)",
    blur: "24px",
  },
  obsidian: {
    surface: "#101013",
  },
  filament: {
    /** 4–6% Filament tint — invitational surfaces only. */
    tint: "rgb(232 168 85 / 0.05)",
  },
  /** Borders are light catching an edge: 1px Ivory-12, top edge up to Ivory-30. */
  edge: {
    rest: "rgb(242 239 233 / 0.12)",
    lit: "rgb(242 239 233 / 0.30)",
  },
} as const;

/** §2 — One film grain, everywhere, forever. Slightly stronger in the darkest scenes. */
export const grain = {
  opacity: "0.025",
  "opacity-deep": "0.04",
  /** Tile size of the noise texture — small enough to read as film, not pattern. */
  tile: "160px",
} as const;

/** §6 — Four durations, cast like the type registers. No in-between values. */
export const duration = {
  /** State acknowledgments — a light noticing attention. */
  instant: 120,
  /** Most element transitions — a pane settling, a line illuminating. */
  gesture: 240,
  /** Compositional changes — a scene reframing, navigation opening. */
  passage: 480,
  /** Camera moves and Scene 6 only. Never for components. */
  cinematic: 900,
} as const;

/** §10 — Sequential reveals stagger at the interval of one intentional glance (60–90ms). */
export const stagger = {
  glance: 75,
} as const;

/** §6 — "The glide": strong ease-out with a soft ease-in head.
 * Springs, bounces, and elastic curves are prohibited. */
export const easing = {
  glide: "cubic-bezier(0.22, 1, 0.36, 1)",
  /** The same curve as control points, for the Crew's GSAP CustomEase. */
  glidePoints: [0.22, 1, 0.36, 1],
} as const;

/**
 * Z stack — the film's layers, back to front. The canvas sits behind the DOM
 * (Architecture §8: "the DOM composites over it"); the loader is above all.
 */
export const z = {
  canvas: 0,
  film: 10,
  nav: 20,
  attendant: 30,
  overlay: 40,
  loader: 50,
  /** The film grain overlays everything, including the loader (§2: one grain, everywhere). */
  grain: 60,
} as const;

/**
 * §14 — Breakpoints follow the frame's shape, not device marketing names.
 * Width tokens mirror Tailwind's defaults (kept for ecosystem compatibility)
 * plus `cinema` for the widest compositions; aspect-based variants are added
 * per-scene when scenes exist. The Crew's QualityManager reads these directly.
 */
export const breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  cinema: 1680,
} as const;

/**
 * §5 — Icons: almost none. 1.25px stroke, geometric, Ivory-60, never filled,
 * never Filament. Consumed by components/primitives/icons.tsx only (TS-side;
 * no CSS emission needed).
 */
export const icon = {
  stroke: 1.25,
  /** Inline with text (Technical voice sizes). */
  sizeInline: 16,
  /** Standalone affordances. */
  sizeAction: 20,
} as const;

export const tokens = {
  color,
  space,
  icon,
  container,
  text,
  leading,
  tracking,
  radius,
  shadow,
  glow,
  glass,
  grain,
  duration,
  stagger,
  easing,
  z,
  breakpoint,
} as const;

export type Tokens = typeof tokens;
