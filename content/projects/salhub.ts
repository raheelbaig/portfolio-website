/**
 * World One — SalHub (Storyboard Scene 7).
 * Source of truth: content/projects/SALHUB.md. No invented facts.
 *
 * TODO(raheel): add the live URL (and public repo link, if any) to `links`
 * — the brief lists only the private org repo, so links ship empty.
 */
import { projectSchema, type Project } from "@/content/projects/schema";

export const salhub: Project = projectSchema.parse({
  id: "salhub",
  title: "SalHub",
  positioning:
    "A bilingual EN/DE marketplace where companies discover verified event providers, send requests, and coordinate the whole event in one shared workspace.",
  story: {
    tension:
      "Planning a business event meant messages, spreadsheets, emails, and calls — provider discovery and project coordination lived in different tools.",
    decision:
      "One app behaving like four products — marketplace, provider console, organizer ops, affiliate admin — sealed by row-level security and RPC-driven request state.",
    resolution:
      "Shipped for the German and Portuguese markets: RLS-backed booking workspaces, admin moderation, partner referrals, and category-based commission pricing.",
  },
  responsibilities: [
    "Multi-role marketplace with protected dashboards",
    "Organizer–provider workspaces: chat, tasks, files",
    "Category-driven service schemas with admin review",
    "Partner affiliate system with digital agreements",
    "Anti-spam signup: Turnstile, honeypot, rate limits",
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Supabase",
    "PostgreSQL RLS",
    "Resend",
    "Turnstile",
  ],
  decisions: [
    "Row-level security with membership helpers keeps public listings open while workspaces stay private — four roles, one database, no leaks.",
    "Postgres RPCs own the request lifecycle, so booking state changes stay atomic and the UI stays status-driven.",
    "Unread badges poll every 15 seconds with focus refetch — near-realtime collaboration without Realtime-channel complexity.",
    "Typed category schemas flow into jsonb details, so providers publish structured offerings behind an admin review gate.",
  ],
  links: [],
  exhibits: {
    establishing: {
      src: "/worlds/salhub/home-hero.png",
      alt: "SalHub home — 'Plan smarter. Host better events.' over a business-event scene, with provider search and package browsing as the two entry paths",
      width: 2535,
      height: 1190,
    },
    details: [
      {
        src: "/worlds/salhub/find-providers.png",
        alt: "SalHub provider discovery — a filterable directory of verified event providers with categories, cities, and starting prices",
        width: 2532,
        height: 1225,
      },
      {
        src: "/worlds/salhub/event-workspace.png",
        alt: "SalHub event console — an organizer's event overview with go-live checklist, provider requests, and shared workspace entry points",
        width: 2535,
        height: 1225,
      },
      {
        src: "/worlds/salhub/pricing-catalog.png",
        alt: "SalHub provider pricing catalog — commission rates by category, switchable between the German and Portuguese markets",
        width: 2532,
        height: 1227,
      },
    ],
  },
});
