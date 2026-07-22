import { Frame } from "@/components/layout/frame";
import { Technical } from "@/components/primitives/voices";
import { shell } from "@/content/copy/shell";
import { site } from "@/content/site";

/**
 * The FooterShell — the coda's slim, dark band (Storyboard: "credits, not
 * clutter").
 *
 * WHY: the last thing juries and peers inspect, kept flawless. Structure
 * ships now; the final line of dry character, email, and socials arrive
 * with the Coda milestone from the Script.
 *
 * WHEN: mounted once, by the root layout.
 * WHEN NOT: never grows link farms, sitemaps, or newsletter forms —
 * anything a footer needs longer than two seconds of glance belongs
 * in a scene.
 */
export function FooterShell() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ivory-12">
      <Frame>
        <div className="flex min-h-hit flex-wrap items-center justify-between gap-within-2 py-within-3">
          <p>
            <Technical variant="label" tone="whisper">
              {site.name}
            </Technical>{" "}
            <Technical
              variant="value"
              tone="whisper"
              as="time"
              dateTime={String(year)}
            >
              {year}
            </Technical>
          </p>
          <Technical variant="plain" tone="whisper" as="p">
            {shell.footerPlaceholder}
          </Technical>
        </div>
      </Frame>
    </footer>
  );
}
