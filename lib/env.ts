/**
 * Environment validation — parsed once at module load; a malformed
 * environment fails loudly at build/boot, never silently at runtime.
 *
 * All attendant variables are optional until Milestone "The Attendant":
 * their absence is the feature's designed off state (Amendment 4 — the
 * kill switch collapses the attendant to its graceful absence).
 */
import { z } from "zod";

const serverSchema = z.object({
  /** Model provider key for the attendant endpoint. Absent = attendant off. */
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  /** Hard daily spend ceiling (USD). Crossing it flips the attendant off automatically. */
  ATTENDANT_DAILY_BUDGET_USD: z.coerce.number().positive().optional(),
});

const clientSchema = z.object({
  /** Canonical origin for metadata; falls back to localhost in development. */
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
});

export const serverEnv = serverSchema.parse({
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  ATTENDANT_DAILY_BUDGET_USD: process.env.ATTENDANT_DAILY_BUDGET_USD,
});

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

export const siteUrl =
  clientEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
