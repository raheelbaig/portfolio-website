import { Frame } from "@/components/layout/frame";
import { Technical } from "@/components/primitives/voices";
import { shell } from "@/content/copy/shell";
import { invitation } from "@/content/copy/invitation";
import { site } from "@/content/site";

/**
 * The Coda — "After the Credits" (Storyboard). A slim, dark band in the
 * technical voice: name, year, the quiet essentials, and one final line of
 * dry, confident character. Credits, not clutter — set exactly, aligned
 * perfectly: the last thing juries and peers inspect.
 *
 * Static, minimal, evenly dim. Films end.
 *
 * TODO(raheel): socials join the essentials once filled in content/site.ts.
 */
export function FooterShell() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-(--z-film) border-t border-ivory-12">
      <Frame>
        <div className="flex min-h-hit flex-wrap items-center justify-between gap-x-thought gap-y-within-2 py-within-3">
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
          <a
            href={invitation.href}
            className="light-transition rounded-technical hover:brightness-125"
          >
            <Technical variant="plain" tone="whisper">
              {site.email}
            </Technical>
          </a>
          <Technical variant="plain" tone="whisper" as="p">
            {shell.credits}
          </Technical>
        </div>
      </Frame>
    </footer>
  );
}
