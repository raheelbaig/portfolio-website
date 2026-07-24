/**
 * Generates `styles/tokens.css` from `styles/tokens.ts`.
 *
 * The TypeScript module is the single source of truth (importable by the Crew);
 * the CSS is a build artifact. Run: `npm run tokens` (wired into predev/prebuild).
 *
 * What this emits, in order:
 *   1. `@theme`        — Tailwind's static vocabulary. Opens by CLEARING the
 *                        framework defaults so unlawful utilities cannot exist:
 *                        the NOCTURNE palette is closed (01 §4), there are no
 *                        cast shadows (01 §12), no springs or bounces (01 §13),
 *                        and the spacing/type scales are fixed (01 §7, §5.2).
 *   2. `@theme inline` — utilities that must resolve *responsively*. Their values
 *                        are inlined into the utility, so they read a runtime
 *                        custom property that each tier re-declares.
 *   3. `:root` + tier media queries — the runtime layer. Mobile-first: the base
 *                        block is REEL, and each query steps up a tier (11 §2.2).
 *   4. The V1 legacy layer, fenced — see the note at the foot of `tokens.ts`.
 *
 * Two rules keep this file honest:
 *
 *   • A name is declared once. `declare()` refuses a duplicate, and V2 is always
 *     offered a name before the legacy layer, so V2 wins every collision. This
 *     is what lets the two systems share one stylesheet safely.
 *   • Anything a *static* value dereferences must itself be static. `@theme
 *     inline` variables are never emitted to `:root`, so `--container-read`
 *     (which reads `--spacing-frame`) would break if the frame margin were
 *     inline. The margin is constant across tiers, so it is static.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  breakpoint,
  color,
  container,
  duration,
  easing,
  font,
  frame,
  glass,
  glow,
  grain,
  icon,
  leading,
  legacyBreakpoint,
  legacyColor,
  legacyContainer,
  legacyFont,
  legacyGlass,
  legacyLeading,
  legacyRadius,
  legacySpace,
  legacyText,
  legacyTracking,
  light,
  measureCh,
  motion,
  portrait,
  radius,
  rest,
  space,
  stagger,
  tiers,
  tracking,
  type as typeScale,
  z,
  type Tier,
} from "../styles/tokens.ts";

/* ── emission helpers ────────────────────────────────────────────────────── */

const staticTheme: string[] = [];
const inlineTheme: string[] = [];
const runtime: string[] = [];

/** Every custom property emitted anywhere, so a name can never be declared twice. */
const declared = new Set<string>();

/** Declares `name` in `bucket`. Silently skips if the name is already taken. */
function declare(bucket: string[], name: string, value: string | number): void {
  if (declared.has(name)) return;
  declared.add(name);
  bucket.push(`  ${name}: ${value};`);
}

const note = (bucket: string[], text = "") =>
  bucket.push(text ? `  /* ${text} */` : "");

/** Which voice's leading and tracking a type size inherits. */
const voiceOf = (token: string): "marquee" | "plate" | "console" =>
  token.startsWith("marquee")
    ? "marquee"
    : token.startsWith("plate")
      ? "plate"
      : "console";

/** The two largest Plate sizes act as headings, so they take the tight leading. */
const leadingFor = (token: string): string =>
  token === "plate-line-lg" || token === "plate-line-xl"
    ? leading["plate-tight"]
    : leading[voiceOf(token)];

/** Where each tier begins. REEL is the base block and has no query. */
const tierStart: Record<
  Exclude<Tier, "reel">,
  (typeof breakpoint)[keyof typeof breakpoint]
> = {
  column: breakpoint.column,
  compact: breakpoint.compact,
  stage: breakpoint.stage,
};

/* ── 1. Static theme ─────────────────────────────────────────────────────── */

note(
  staticTheme,
  "Closed vocabularies: the framework defaults are removed, so an",
);
note(
  staticTheme,
  "unlawful utility does not merely go unused — it does not exist.",
);
for (const namespace of [
  "--color-*",
  "--text-*",
  "--font-*",
  "--leading-*",
  "--tracking-*",
  "--radius-*",
  "--shadow-*",
  "--inset-shadow-*",
  "--drop-shadow-*",
  "--blur-*",
  "--ease-*",
  "--animate-*",
  "--spacing-*",
  "--container-*",
  "--breakpoint-*",
]) {
  declare(staticTheme, namespace, "initial");
}

note(staticTheme);
note(
  staticTheme,
  "Colour (01 §4) — cool room, warm light. The palette is closed.",
);
for (const [name, value] of Object.entries(color))
  declare(staticTheme, `--color-${name}`, value);

note(staticTheme);
note(staticTheme, "Within-component spacing (01 §7). Constant across tiers.");
for (const [name, value] of Object.entries(space))
  declare(staticTheme, `--spacing-${name}`, value);

note(staticTheme);
note(
  staticTheme,
  "The frame (01 §6). Constant, so it is static — the measures read it.",
);
declare(staticTheme, "--spacing-frame", frame.margin);
for (const [name, value] of Object.entries(container)) {
  declare(staticTheme, `--container-${name}`, value);
}

note(staticTheme);
note(staticTheme, "Radius (01 §9) — machined, not soft.");
for (const [name, value] of Object.entries(radius))
  declare(staticTheme, `--radius-${name}`, value);

note(staticTheme);
note(
  staticTheme,
  "No shadow scale: depth is layers of dark and steps of light (01 §12).",
);
note(staticTheme, "One blur, for the one glass material (01 §10).");
declare(staticTheme, "--blur-smoke", glass.smoke.blur);

note(staticTheme);
note(staticTheme, "Motion (10 §2) — the glide is the only timed easing.");
declare(staticTheme, "--ease-glide", easing.glide);

note(staticTheme);
note(
  staticTheme,
  "Voices (01 §5.1). --font-src-* is injected by next/font in the layout.",
);
for (const [name, value] of Object.entries(font))
  declare(staticTheme, `--font-${name}`, value);

note(staticTheme);
note(
  staticTheme,
  "Leading and tracking by voice (01 §5.3). Constant across tiers.",
);
for (const [name, value] of Object.entries(leading)) {
  declare(staticTheme, `--leading-${name}`, value);
}
for (const [name, value] of Object.entries(tracking)) {
  declare(staticTheme, `--tracking-${name}`, value);
}

note(staticTheme);
note(
  staticTheme,
  "Tier boundaries (11 §2), in rem so they respect the user's font size.",
);
for (const [name, bp] of Object.entries(breakpoint)) {
  declare(staticTheme, `--breakpoint-${name}`, `${bp.em}rem`);
}

/* ── 2. Responsive theme ─────────────────────────────────────────────────── */

note(
  inlineTheme,
  "Inlined, so each utility reads a runtime var the tiers re-declare.",
);
note(inlineTheme);
note(inlineTheme, "The grid gutter (11 §3.1).");
declare(inlineTheme, "--spacing-gutter", "var(--frame-gutter)");

note(inlineTheme);
note(
  inlineTheme,
  "The rests — content, not slack. They re-block per tier (11 §3.2).",
);
for (const name of Object.keys(rest))
  declare(inlineTheme, `--spacing-${name}`, `var(--rest-${name})`);

note(inlineTheme);
note(
  inlineTheme,
  "Type scale — Marquee is fluid, Plate and Console step (11 §3.3).",
);
for (const name of Object.keys(typeScale)) {
  declare(inlineTheme, `--text-${name}`, `var(--step-${name})`);
  declare(inlineTheme, `--text-${name}--line-height`, leadingFor(name));
  declare(
    inlineTheme,
    `--text-${name}--letter-spacing`,
    tracking[voiceOf(name)],
  );
}

/* ── 3. Legacy static theme (offered names last, so V2 always wins) ──────── */

note(staticTheme);
note(
  staticTheme,
  "── V1 legacy. Retire with the V1 sections; nothing new may consume it.",
);
note(
  staticTheme,
  "Names V2 already claimed are not re-declared here: the V1 utilities",
);
note(staticTheme, "inherit the NOCTURNE values under the same variable names.");
for (const [name, value] of Object.entries(legacyColor)) {
  declare(staticTheme, `--color-${name}`, value);
}
for (const [name, value] of Object.entries(legacySpace)) {
  declare(staticTheme, `--spacing-${name}`, value);
}
for (const [name, value] of Object.entries(legacyContainer)) {
  declare(staticTheme, `--container-${name}`, value);
}
for (const [name, value] of Object.entries(legacyRadius)) {
  declare(staticTheme, `--radius-${name}`, value);
}
for (const [name, entry] of Object.entries(legacyText)) {
  declare(staticTheme, `--text-${name}`, entry.size);
  declare(staticTheme, `--text-${name}--line-height`, entry.leading);
  declare(staticTheme, `--text-${name}--letter-spacing`, entry.tracking);
}
for (const [name, value] of Object.entries(legacyLeading)) {
  declare(staticTheme, `--leading-${name}`, value);
}
for (const [name, value] of Object.entries(legacyTracking)) {
  declare(staticTheme, `--tracking-${name}`, value);
}
for (const [name, value] of Object.entries(legacyFont)) {
  declare(staticTheme, `--font-${name}`, value);
}
for (const [name, value] of Object.entries(legacyBreakpoint)) {
  declare(staticTheme, `--breakpoint-${name}`, `${value}px`);
}

/* ── 4. Runtime layer ────────────────────────────────────────────────────── */

note(runtime, "Layer stack, back to front (01 §14).");
for (const [name, value] of Object.entries(z))
  declare(runtime, `--z-${name}`, value);

note(runtime);
note(runtime, "Glass (01 §10). Three materials, at most two per viewport.");
declare(runtime, "--glass-smoke-surface", glass.smoke.surface);
declare(runtime, "--glass-slate-surface", glass.slate.surface);
declare(runtime, "--glass-signal-tint", glass.signal.tint);
declare(runtime, "--glass-edge-rest", glass.edge.rest);
declare(runtime, "--glass-edge-lit", glass.edge.lit);

note(runtime);
note(runtime, "Light (01 §11) — glow, ambient fill, vignette.");
for (const [name, value] of Object.entries(glow))
  declare(runtime, `--glow-${name}`, value);
for (const [name, value] of Object.entries(light))
  declare(runtime, `--light-${name}`, value);

note(runtime);
note(runtime, "One film grain, everywhere, forever. Never animated (01 §16).");
for (const [name, value] of Object.entries(grain))
  declare(runtime, `--grain-${name}`, value);

note(runtime);
note(runtime, "Icons (01 §8) — 1.25px stroke, never filled.");
declare(runtime, "--icon-stroke", icon.stroke);
declare(runtime, "--icon-inline", `${icon.sizeInline}px`);
declare(runtime, "--icon-action", `${icon.sizeAction}px`);

note(runtime);
note(
  runtime,
  "Motion (10 §3). A motion picks a rung; nothing between rungs exists.",
);
for (const [name, value] of Object.entries(duration)) {
  declare(runtime, `--duration-${name}`, `${value}ms`);
}
for (const [name, value] of Object.entries(stagger)) {
  declare(runtime, `--stagger-${name}`, `${value}ms`);
}
note(runtime, "State transitions: fast in, slow out — the 'alive' signature.");
declare(runtime, "--hover-in", `${motion.hover.in}ms`);
declare(runtime, "--hover-out", `${motion.hover.out}ms`);
note(runtime, "Distance caps (10 §3.4). Cinematic motion is small motion.");
for (const [name, value] of Object.entries(motion.offset)) {
  declare(runtime, `--offset-${name}`, value);
}
for (const [name, value] of Object.entries(motion.parallax)) {
  declare(runtime, `--parallax-${name}`, value);
}

note(runtime);
note(runtime, "Prose measure (01 §6.2).");
declare(runtime, "--measure-ch", `${measureCh}ch`);

note(runtime);
note(runtime, `── Tier: REEL — the base block. Mobile-first (11 §2.2).`);
declare(runtime, "--tier", "reel");
declare(runtime, "--frame-columns", frame.columns.reel);
declare(runtime, "--frame-gutter", frame.gutter.reel);
for (const [name, byTier] of Object.entries(rest))
  declare(runtime, `--rest-${name}`, byTier.reel);
for (const [name, byTier] of Object.entries(typeScale)) {
  declare(runtime, `--step-${name}`, byTier.reel);
}

/* ── Assemble ────────────────────────────────────────────────────────────── */

const out: string[] = [
  "/*",
  " * GENERATED FILE — do not edit by hand.",
  " * Source of truth: styles/tokens.ts. Regenerate with `npm run tokens`.",
  " */",
  "",
  "@theme {",
  ...staticTheme,
  "}",
  "",
  "@theme inline {",
  ...inlineTheme,
  "}",
  "",
  "/* Non-utility tokens: read as CSS variables by the Set, mirrored in TS for the Crew. */",
  ":root {",
  ...runtime,
  "}",
  "",
];

for (const tier of tiers) {
  if (tier === "reel") continue;
  const bp = tierStart[tier];
  out.push(
    `/* ── Tier: ${tier.toUpperCase()} — ≥ ${bp.px}px ── */`,
    `@media (min-width: ${bp.em}rem) {`,
    "  :root {",
    `    --tier: ${tier};`,
    `    --frame-columns: ${frame.columns[tier]};`,
    `    --frame-gutter: ${frame.gutter[tier]};`,
    ...Object.entries(rest).map(
      ([name, byTier]) => `    --rest-${name}: ${byTier[tier]};`,
    ),
    ...Object.entries(typeScale).map(
      ([name, byTier]) => `    --step-${name}: ${byTier[tier]};`,
    ),
    "  }",
    "}",
    "",
  );
}

out.push(
  "/* ── V1 legacy runtime vars. Retire with the V1 sections. ── */",
  ":root {",
  `  --glass-obsidian-surface: ${legacyGlass.obsidian.surface};`,
  `  --glass-filament-tint: ${legacyGlass.filament.tint};`,
  ...Object.entries(portrait).map(
    ([name, value]) => `  --portrait-${name}: ${value};`,
  ),
  "}",
  "",
);

const outPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "styles",
  "tokens.css",
);
writeFileSync(outPath, out.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${declared.size} tokens)`);
