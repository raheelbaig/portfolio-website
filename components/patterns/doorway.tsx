import Link from "next/link";
import type { Route } from "next";
import { Monumental, Technical } from "@/components/primitives/voices";

/**
 * The Doorway — how a project exists in overview (Bible §5: "Projects are
 * never cards").
 *
 * WHY: a tall Filament Glass threshold carrying the world's name in the
 * monumental register (small at this distance) — an invitational surface,
 * one of only two things in the film allowed Filament Glass. Its height is
 * built from spacing law, not a magic number: a full `scene` rest of
 * darkness stands above the name, so the door is mostly threshold —
 * somewhere to step, not something to read.
 *
 * Now that the worlds exist, a doorway is an anchor into its world; the
 * accessible name is the Bible's canonical CTA form ("Enter SalHub").
 * The approach light (brightening on nearness) is Crew work, not CSS hover.
 *
 * WHEN: Scene 6's resolved gateways and the post-trilogy triptych recall.
 * WHEN NOT: anywhere content is presented — inside worlds, projects appear
 * as exhibits, never doors.
 */
export function Doorway({
  number,
  name,
  href,
  actionLabel,
}: {
  number: string;
  name: string;
  /** Anchor of the world this door opens into (e.g. "#salhub"). */
  href: string;
  /** The Bible's CTA verb for thresholds ("Enter"), from the Script. */
  actionLabel: string;
}) {
  return (
    <Link
      href={href as Route}
      aria-label={`${actionLabel} ${name}`}
      className="material-filament edge-light light-transition flex h-full flex-col justify-end gap-within-2 rounded-pane p-within-3 pt-scene"
    >
      <Technical variant="value" tone="whisper" as="p">
        {number}
      </Technical>
      <Monumental variant="distant" as="h3">
        {name}
      </Monumental>
    </Link>
  );
}
