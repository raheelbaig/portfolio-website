/**
 * Copy for the app shell (skip link, navigation, the Coda's credits).
 * The credit line is canonical (Storyboard Coda: "the wink is the point").
 */
import { site } from "@/content/site";

export const shell = {
  skipToFilm: "Skip to the film",
  navLabel: "Chapters",
  menuLabel: "Menu",
  credits: `Designed and built by ${site.name}. Obviously.`,
} as const;
