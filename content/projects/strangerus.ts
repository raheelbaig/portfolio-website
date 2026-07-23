/**
 * World Two — StrangerUs (Storyboard Scene 8).
 * Source of truth: content/projects/STRANGERUS.md. No invented facts.
 *
 * TODO(raheel): add the live URL to `links` when confirmed — the brief
 * leaves it blank, so links ship empty.
 */
import { projectSchema, type Project } from "@/content/projects/schema";

export const strangerus: Project = projectSchema.parse({
  id: "strangerus",
  title: "StrangerUs",
  positioning:
    "A location-based social platform that connects nearby strangers at real venues — and gives those venues a console to turn presence into foot traffic.",
  story: {
    tension:
      "Crowded cities still feel lonely: social apps optimize profiles and swipes while the venues where people could actually meet stay quiet.",
    decision:
      "Build the venue side as its own Next.js portal — marketing through daily operations — speaking to the same REST backend as the consumer app.",
    resolution:
      "Establishments verify, onboard, and run their day in one console: QR check-ins, events and jobs, reviews, traffic analytics, and scheduled discovery control.",
  },
  responsibilities: [
    "Establishment portal: marketing site + venue console",
    "Email and OTP auth with cookie-gated routes",
    "Multi-step onboarding: Maps, uploads, subscriptions",
    "Dashboard KPIs and visitor traffic charts",
    "QR check-in generation for venues and events",
    "Discovery hide/show with scheduled windows",
  ],
  stack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Redux Toolkit",
    "Google Maps",
    "Recharts",
    "Turnstile",
    "Cloudinary",
  ],
  decisions: [
    "Sessions live in three layers — cookies for middleware, localStorage and Redux for API calls — cleared together on logout so no layer drifts.",
    "Verification status drives routing: an authenticated but incomplete venue is redirected into onboarding, never into a half-broken dashboard.",
    "Discovery scheduling evaluates hide windows on the client and blocks conflicting manual toggles while a window is active.",
  ],
  links: [],
  exhibits: {
    establishing: {
      src: "/worlds/strangerus/home-map.png",
      alt: "StrangerUs home — a live map of Singapore's Orchard area showing venues with real-time counts of people checked in and open to meeting",
      width: 2555,
      height: 1225,
    },
    details: [
      {
        src: "/worlds/strangerus/our-story.png",
        alt: "StrangerUs origin story — 'we pass many yet feel alone' — with the step-by-step walkthrough from account to real-world connection",
        width: 2555,
        height: 1225,
      },
      {
        src: "/worlds/strangerus/host-signup.png",
        alt: "StrangerUs host sign-up — email verification with Cloudflare Turnstile passed, alongside Google, Facebook, and Apple sign-in",
        width: 2315,
        height: 1225,
      },
      {
        src: "/worlds/strangerus/featured-hosts.png",
        alt: "StrangerUs featured hosts — venues with check-in counts and ratings, driving foot traffic by becoming discovery destinations",
        width: 2552,
        height: 1225,
      },
    ],
  },
});
