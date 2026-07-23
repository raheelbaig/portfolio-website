/**
 * Build-time asset resolution — every asset has a designed absence
 * (Architecture Law 12). Server-only: the checks run during static
 * generation, so the shipped HTML is already the correct state.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * The crown asset (Architecture §10): the master transparent portrait.
 * Preferred formats first. Returns null when absent — the Set renders the
 * portrait-void (its designed absence) and nothing breaks.
 *
 * To integrate the real portrait, drop one file at:
 *   public/portrait/hero.avif | hero.webp | hero.png
 * (transparent cutout, portrait orientation ~3:4, ≥1400px wide, graded
 * per Bible §8 — blacks lifted to Stage Black, key light high-left).
 */
export function heroPortraitSrc(): string | null {
  for (const rel of [
    "portrait/hero.avif",
    "portrait/hero.webp",
    "portrait/hero.png",
  ]) {
    if (existsSync(join(process.cwd(), "public", rel))) return `/${rel}`;
  }
  return null;
}
