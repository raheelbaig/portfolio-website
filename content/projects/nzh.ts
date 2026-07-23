/**
 * World Three — New ZhengHe / NZH (Storyboard Scene 9).
 * Source of truth: content/projects/NZH.md. No invented facts; the agency
 * fee/timing figures in the tension line are the platform's own stated
 * problem framing (brief §1/§6A).
 *
 * TODO(raheel): add the live URL to `links` when confirmed — the brief
 * leaves it blank, so links ship empty.
 */
import { projectSchema, type Project } from "@/content/projects/schema";

export const nzh: Project = projectSchema.parse({
  id: "nzh",
  title: "New ZhengHe",
  positioning:
    "A bilingual English–Chinese employment platform connecting Chinese talent directly with overseas employers, agencies, institutions, and partners.",
  story: {
    tension:
      "Overseas hiring ran through intermediaries — agency fees near RMB 40,000, months of waiting, and opaque steps between talent and employers.",
    decision:
      "Six user types in one locale-aware App Router: role-scoped service modules, a shared JWT client with role-aware 401 handling, Socket.IO messaging.",
    resolution:
      "I owned the Institution dashboard end to end, shipped delete-account across every dashboard, and built the Phoenix Law partner page — about 36 PRs in a month.",
  },
  responsibilities: [
    "Institution dashboard UI, end to end",
    "Cross-dashboard delete-account flows",
    "Job-seeker preference and profile improvements",
    "Real-time inbox UX polish (Socket.IO)",
    "Phoenix Law standalone partner page",
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "next-intl",
    "Socket.IO",
    "Chart.js",
    "Cloudinary",
  ],
  decisions: [
    "A centralized API client handles JWT expiry with role-aware 401 redirects — and suspends logout while an agency impersonates an employer.",
    "Face verification falls back to a QR handoff, so desktop users without a camera finish real-person certification on their phone.",
    "Eleven i18n namespaces per locale keep English and Chinese surfaces intact when string lengths diverge.",
  ],
  links: [],
  exhibits: {
    establishing: {
      src: "/worlds/nzh/home-mission.png",
      alt: "New ZhengHe home — the mission to connect Chinese talent directly with overseas employers, with Phase 1 markets and six persona entry cards",
      width: 2535,
      height: 1222,
    },
    details: [
      {
        src: "/worlds/nzh/jobs.png",
        alt: "New ZhengHe jobs — browse by industry with live Singapore listings, salaries, and role types in the English locale",
        width: 2535,
        height: 1222,
      },
      {
        src: "/worlds/nzh/services.png",
        alt: "New ZhengHe services — trusted study-abroad providers with migration-type filters, part of the supporting services marketplace",
        width: 2532,
        height: 1217,
      },
      {
        src: "/worlds/nzh/brand-footer.png",
        alt: "New ZhengHe blog and footer — the bilingual brand, app-store QR entry, and the platform's full services taxonomy",
        width: 2542,
        height: 1227,
      },
    ],
  },
});
