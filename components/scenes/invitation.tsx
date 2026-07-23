import { Frame } from "@/components/layout/frame";
import { Portrait } from "@/components/patterns/portrait";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { StageBackground } from "@/components/layout/stage-background";
import {
  Editorial,
  Monumental,
  Technical,
  TechnicalLabel,
} from "@/components/primitives/voices";
import { invitation } from "@/content/copy/invitation";
import { site } from "@/content/site";

/**
 * Scene 12 — "The Invitation" (Contact). The film returns home.
 *
 * Storyboard: the mirror of Scene 2 — darkness, the portrait centered at
 * Monumental scale under the key light, but the visitor knows this room
 * now. One editorial line (the last spoken dialogue), and beneath it the
 * single luminous action, set with the same typographic dignity as the
 * name: the film opened on who he is and closes on what you and he might
 * do. Beside it, small and technical: the email written out plainly.
 * No form. No fields. One ask.
 *
 * The action is the frame's brightest object — the first and only time the
 * light's focal point is an action (Filament Glass field + the viewport's
 * one strong glow). The closing push-in, the warmed grade, and the idle
 * breath are Crew work; this is the frame they settle into.
 *
 * Server Component. Zero client JavaScript.
 */
export function InvitationScene() {
  return (
    <Section id="contact" labelledBy="invitation-line">
      <StageBackground state="keylight" />

      {/* The portrait, home again — centered, Monumental, as in Scene 2. */}
      <div className="inset-x-0 pointer-events-none absolute top-passage flex justify-center">
        <Portrait scale="monumental" />
      </div>

      <Frame>
        <div className="flex min-h-svh flex-col items-center justify-end pt-passage pb-passage text-center">
          <Stack gap="thought" align="center">
            <Editorial as="h2" size="line-lg" tone="full" id="invitation-line">
              {invitation.line}
            </Editorial>

            <a
              href={invitation.href}
              className="material-filament edge-light bloom light-transition rounded-pane px-block py-within-3 hover:brightness-110 focus-visible:brightness-110 active:brightness-90"
            >
              <Monumental variant="close" as="span">
                {invitation.action}
              </Monumental>
            </a>

            {/* The quiet essentials, technical voice, subordinate to the ask.
                TODO(raheel): socials join here once filled in content/site.ts. */}
            <dl className="flex flex-wrap items-baseline justify-center gap-within-2">
              <TechnicalLabel as="dt">{invitation.emailLabel}</TechnicalLabel>
              <dd>
                <a
                  href={invitation.href}
                  className="light-transition rounded-technical hover:brightness-125"
                >
                  <Technical variant="plain" size="base" tone="support">
                    {invitation.email}
                  </Technical>
                </a>
              </dd>
            </dl>
            {site.socials.length > 0 && (
              <ul className="flex flex-wrap justify-center gap-within-3">
                {site.socials.map((social) => (
                  <li key={social.url}>
                    <a
                      href={social.url}
                      className="light-transition rounded-technical hover:brightness-125"
                    >
                      <Technical variant="plain" tone="whisper">
                        {social.platform}
                      </Technical>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Stack>
        </div>
      </Frame>
    </Section>
  );
}
