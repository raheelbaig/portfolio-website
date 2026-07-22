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
 * WHEN: Scene 6's resolved gateways and the post-trilogy triptych recall.
 * WHEN NOT: anywhere content is presented — inside worlds, projects appear
 * as exhibits, never doors.
 *
 * Static milestone: not yet a link — the worlds don't exist to enter, and a
 * door that goes nowhere must not pretend otherwise. The worlds milestone
 * turns it into an anchor and gives it the approach light ("Enter SalHub").
 */
export function Doorway({ number, name }: { number: string; name: string }) {
  return (
    <article className="material-filament edge-light flex flex-col justify-end gap-within-2 rounded-pane p-within-3 pt-scene">
      <Technical variant="value" tone="whisper" as="p">
        {number}
      </Technical>
      <Monumental variant="distant" as="h3">
        {name}
      </Monumental>
    </article>
  );
}
