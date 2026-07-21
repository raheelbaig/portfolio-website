/**
 * Generates styles/tokens.css from styles/tokens.ts — the single source of
 * truth stays TypeScript (importable by the Crew); CSS is a build artifact.
 *
 * Run: `npm run tokens` (wired into predev/prebuild).
 *
 * The generated @theme block also CLEARS Tailwind's default vocabularies
 * (colors, text sizes, radii, shadows, blurs, eases, animations, spacing,
 * containers). The Bible's palette is closed — "No other hues exist" (§2),
 * no cast shadows (§7), no springs or bounces (§6), seven spacing values
 * (§4), three containers (§4). Clearing the defaults makes the unlawful
 * classes not merely discouraged but nonexistent.
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
  glass,
  glow,
  grain,
  leading,
  radius,
  space,
  stagger,
  text,
  tracking,
  z,
} from "../styles/tokens.ts";

const lines: string[] = [];
const push = (s: string) => lines.push(s);

push("/*");
push(" * GENERATED FILE — do not edit by hand.");
push(" * Source of truth: styles/tokens.ts. Regenerate with `npm run tokens`.");
push(" */");
push("");
push("@theme {");

push("  /* Closed vocabularies: the Bible's palette is the whole palette. */");
for (const ns of [
  "--color-*",
  "--text-*",
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
]) {
  push(`  ${ns}: initial;`);
}
push("");

push("  /* Colors (Bible §2) */");
for (const [name, value] of Object.entries(color)) {
  push(`  --color-${name}: ${value};`);
}
push("");

push("  /* Spacing (Bible §4 — the seven lawful values) */");
for (const [name, value] of Object.entries(space)) {
  push(`  --spacing-${name}: ${value};`);
}
push("");

push(
  "  /* Containers (Bible §4 — three containers; full-bleed needs no token) */",
);
for (const [name, value] of Object.entries(container)) {
  push(`  --container-${name}: ${value};`);
}
push("");

push("  /* Type scale (Bible §3) */");
for (const [name, t] of Object.entries(text)) {
  push(`  --text-${name}: ${t.size};`);
  push(`  --text-${name}--line-height: ${t.leading};`);
  push(`  --text-${name}--letter-spacing: ${t.tracking};`);
}
push("");

push("  /* Leading & tracking (Bible §3) */");
for (const [name, value] of Object.entries(leading)) {
  push(`  --leading-${name}: ${value};`);
}
for (const [name, value] of Object.entries(tracking)) {
  push(`  --tracking-${name}: ${value};`);
}
push("");

push("  /* Radii (Bible §2 — one radius family) */");
for (const [name, value] of Object.entries(radius)) {
  push(`  --radius-${name}: ${value};`);
}
push("");

push("  /* Shadows: none. Depth is layers of black (Bible §7). */");
push("");

push(
  "  /* Glass blur (Bible §2 — Smoke Glass is the only blur in the world) */",
);
push(`  --blur-smoke: ${glass.smoke.blur};`);
push("");

push("  /* Motion (Bible §6 — the glide; springs and bounces do not exist) */");
push(`  --ease-glide: ${easing.glide};`);
push("");

push("  /* Breakpoints (Architecture §14) */");
push(`  --breakpoint-cinema: ${breakpoint.cinema}px;`);
push("  --breakpoint-sm: 40rem;");
push("  --breakpoint-md: 48rem;");
push("  --breakpoint-lg: 64rem;");
push("  --breakpoint-xl: 80rem;");
push("  --breakpoint-2xl: 96rem;");
push("}");
push("");

push("/* Non-utility tokens: consumed as CSS variables by the Set,");
push("   mirrored in TS for the Crew. */");
push(":root {");
push("  /* Durations (Bible §6) */");
for (const [name, value] of Object.entries(duration)) {
  push(`  --duration-${name}: ${value}ms;`);
}
push(`  --stagger-glance: ${stagger.glance}ms;`);
push("");
push("  /* Z stack (Architecture §8) */");
for (const [name, value] of Object.entries(z)) {
  push(`  --z-${name}: ${value};`);
}
push("");
push("  /* Glass materials (Bible §2) */");
push(`  --glass-smoke-surface: ${glass.smoke.surface};`);
push(`  --glass-obsidian-surface: ${glass.obsidian.surface};`);
push(`  --glass-filament-tint: ${glass.filament.tint};`);
push(`  --glass-edge-rest: ${glass.edge.rest};`);
push(`  --glass-edge-lit: ${glass.edge.lit};`);
push("");
push("  /* Glow (Bible §2 — one strong glow per viewport) */");
for (const [name, value] of Object.entries(glow)) {
  push(`  --glow-${name}: ${value};`);
}
push("");
push("  /* Film grain (Bible §2 — one grain, everywhere, forever) */");
for (const [name, value] of Object.entries(grain)) {
  push(`  --grain-${name}: ${value};`);
}
push("}");
push("");

const outPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "styles",
  "tokens.css",
);
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath}`);
