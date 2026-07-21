/**
 * Site identity and metadata defaults — part of the Script (Architecture §6).
 * All identity strings live here; no component may hardcode them (Law 8).
 */

export const site = {
  name: "Raheel Baig",
  role: "Frontend Engineer",
  tagline: "Building modern web experiences powered by AI",
  email: "baig8911@gmail.com",
  /** Display order matters (Bible §2 data model). TODO: fill before launch. */
  socials: [] as ReadonlyArray<{
    platform: string;
    handle: string;
    url: string;
  }>,
} as const;

/**
 * Technical-voice metadata title (Architecture §3):
 * "RAHEEL BAIG — FRONTEND ENGINEER".
 */
export const metadataTitle = `${site.name} — ${site.role}`.toUpperCase();
