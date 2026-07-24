/**
 * The permanent identity anchor — the sidebar's Script (`docs/v2/04-sidebar.md`).
 *
 * It is not a navigation widget: it is the Hero, continued. Its copy is
 * therefore *identity* first and wayfinding second (04 §1.1).
 */
import { site } from "@/content/site";

export const anchor = {
  /** Landmark name for the rail region itself (04 §8.2). */
  regionLabel: "Identity",

  identity: {
    /** The Console wordmark on the expanded rail (04 §3.2). */
    wordmark: site.name,
    /**
     * The compact-state identity (04 §3.3): the mobile bar and the collapsed
     * tablet rail. Set as text in the Marquee voice — the "compact serif mark"
     * the spec asks for — because `brand/monogram.svg` does not exist yet
     * (12 §5.4, still pending). One mark, one job: identity where space is
     * scarce. It is never shown on the expanded rail, where it would duplicate
     * the chip + wordmark.
     */
    monogram: "RB",
    /** The chip + wordmark are one link back to the opening frame (04 §5). */
    toTop: `${site.name} — back to top`,
  },

  /**
   * The chapters (04 §4.2). Anchors are absolute (`/#id`) so the rail keeps
   * working from `/work/[slug]`, where the film's sections do not exist — the
   * anchor is permanent, so its links must be too.
   *
   * "Approach" targets `#journey`, the first section of the Approach &
   * Instruments block (02 §03). See the report: 04 §4.2 names the chapters but
   * never maps them to section ids, and the current DOM splits that block in
   * two (`#journey`, `#instruments`).
   */
  chaptersLabel: "Chapters",
  chapters: [
    { id: "about", label: "About" },
    { id: "journey", label: "Approach" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ],

  /**
   * Availability status (04 §3.2, §11).
   *
   * **Deliberately null — the slot is reserved, not filled.** 04 §3.2 marks
   * this "copy-pending, do not invent" and §11 lists it as an open question
   * (including whether it is live/dynamic). The dot and label render only once
   * a real value exists; nothing else in the rail shifts when it appears.
   *
   * TODO(raheel): supply the confirmed availability copy, and decide whether
   * it is static or driven.
   */
  status: null as { label: string; tone: "ion" | "sol" } | null,

  /**
   * The always-available ask (04 §3.4). A Console link with a lit underline —
   * *never* a Sol-glass primary, because each section already owns the one
   * Sol-lit action the brand permits per viewport (01 §15).
   */
  cta: {
    label: "Let's talk",
    href: `mailto:${site.email}`,
  },

  /** Reach (04 §3.2). Socials come from `site.socials`, still copy-pending. */
  links: {
    emailLabel: "Email",
    emailHref: `mailto:${site.email}`,
  },

  /** The mobile bar's menu affordance (04 §7). */
  menu: {
    open: "Menu",
    close: "Close",
    /** Names the summoned overlay for assistive technology (04 §8.2). */
    overlayLabel: "Chapters and contact",
  },
} as const;
