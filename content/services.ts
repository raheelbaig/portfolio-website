/**
 * Section 05 — "What We Could Build" (Services). `docs/v2/07-services.md`.
 *
 * Three **curated, evidenced capabilities — stated, never sold** (§4). Not a
 * service menu, not a pricing page: three *kinds of thing he can build*, each
 * already proven by the work the visitor just saw.
 *
 * ── The two-tuple is load-bearing (§16) ────────────────────────────────────
 * Each offering is exactly one Plate line plus a **two-tuple** of Console
 * specifics — one naming *what kind of product*, one naming *the instruments*.
 * The schema makes a third bullet structurally impossible, which is how §4's
 * "no feature lists" rule survives contact with future edits. Do not relax it.
 *
 * ── Grounding (§1.3) ───────────────────────────────────────────────────────
 * Every capability must map to at least one shipped project (or this
 * portfolio). A capability with no evidence is not curated — it is invented,
 * and is forbidden:
 *
 *   01 → SalHub (4-role marketplace, RLS bookings), StrangerUs (establishment
 *        console), NZH (multi-tenant dashboards)
 *   02 → this portfolio's AI attendant — a working, in-world assistant
 *   03 → real bilingual delivery: SalHub EN/DE, NZH EN/中文; this portfolio's
 *        performance budget and designed accessibility
 *
 * ── ⚠ Ship gate (§1.2, §18) — requires Raheel's confirmation ──────────────
 * TODO(raheel): confirm (a) these three are what you want to be hired for,
 * (b) the wording in your voice, (c) each stack line names only technologies
 * you want to claim, and (d) offering 02's AI depth — if client AI work
 * exists beyond this portfolio, cite it; otherwise it stays honestly framed
 * as "demonstrated here". A fourth offering may be added only if it is both
 * wanted and grounded in shipped work; otherwise three stands. Do not pad.
 *
 * The section states **no prices, tiers, packages, or availability** by
 * design (§4.5) — the ask belongs to Contact.
 */
import { z } from "zod";

const offeringSchema = z.object({
  /** One editorial line: a statement with a period, 4–9 words (Bible §9). */
  line: z.string().min(8).max(64),
  /** Exactly two lines of technical-voice specifics. */
  specifics: z.tuple([z.string().min(4).max(72), z.string().min(4).max(72)]),
});

const servicesSchema = z.array(offeringSchema).min(3).max(4);

export type Offering = z.infer<typeof offeringSchema>;

/** Names the section in the document outline (§14). */
export const servicesHeading = "Services";

/**
 * The Console eyebrow the frame actually shows (§7, §9). `02` names this
 * section "What We Could Build"; §9 marks the exact wording copy-pending.
 */
export const servicesEyebrow = "What we could build";

export const offerings: ReadonlyArray<Offering> = servicesSchema.parse([
  {
    line: "Product frontends that ship.",
    specifics: [
      "Multi-role dashboards, marketplaces, booking consoles",
      "Next.js · React · TypeScript · Supabase · PostgreSQL",
    ],
  },
  {
    line: "Interfaces with intelligence built in.",
    specifics: [
      "Assistants, LLM features, AI-assisted workflows",
      "Claude API · streaming · prompt design",
    ],
  },
  {
    line: "Sites with engineering behind the surface.",
    specifics: [
      "Bilingual, fast, accessible by default",
      /* §6 mandates internationalization be shown as the real pairs shipped —
         EN·DE (SalHub) and EN·中文 (NZH) — rendered as instrumentation. */
      "next-intl (EN·DE · EN·中文) · Core Web Vitals · semantic SEO",
    ],
  },
]);
