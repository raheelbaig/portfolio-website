import Link from "next/link";
import { Technical } from "@/components/primitives/voices";
import { shell } from "@/content/copy/shell";
import { site } from "@/content/site";

/**
 * The NavigationShell — nearly invisible by design (Bible §5).
 *
 * WHY: navigation is a whisper in the top safe area — the name in the small
 * Technical voice and a single menu affordance. Persistent chrome is capped
 * at 5% of the frame; the film is never behind furniture.
 *
 * WHEN: mounted once, by the root layout. Nowhere else.
 * WHEN NOT: this is not the chapter overlay — that Smoke Glass dialog
 * arrives with its own milestone and will wire into the affordance here.
 * Until then the affordance is present but inert (disabled, announced as
 * unavailable), so the document's shape is final even though the feature
 * is not.
 *
 * No animations, no scroll tracking — the Crew observes and enhances later.
 */
export function NavigationShell() {
  return (
    <header className="inset-x-0 top-0 fixed z-(--z-nav)">
      <nav
        aria-label={shell.navLabel}
        className="flex min-h-hit items-center justify-between px-safe py-within-2"
      >
        <Link
          href="/"
          className="light-transition rounded-technical hover:brightness-125"
        >
          <Technical variant="label" tone="support">
            {site.name}
          </Technical>
        </Link>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="min-h-hit cursor-default rounded-technical"
        >
          <Technical variant="label" tone="whisper">
            {shell.menuLabel}
          </Technical>
        </button>
      </nav>
    </header>
  );
}
