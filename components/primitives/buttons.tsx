import Link from "next/link";
import type { Route } from "next";
import { cva } from "class-variance-authority";

/**
 * The only two buttons in the product (Bible §5, Architecture §4).
 *
 * WHY: the Bible legislates exactly two actions — enforcement is structural:
 * there are two button components in the entire codebase, and neither accepts
 * size, color, or className props. Destructive, disabled, ghost, and outline
 * variants do not exist in this product's vocabulary.
 *
 * Both render an <a> (via next/link for internal routes) when `href` is
 * given, otherwise a <button>. Focus states are global (globals.css) and
 * never suppressed.
 */

const base =
  "light-transition inline-flex min-h-hit items-center justify-center gap-within-1";

const invitationStyle = cva([
  base,
  "material-filament edge-light bloom rounded-pane",
  "px-within-3 py-within-2 font-grotesk text-base text-ivory-100",
  "hover:brightness-110 focus-visible:brightness-110 active:brightness-90",
]);

const quietStyle = cva([
  base,
  "rounded-technical px-within-1 py-within-1",
  "font-grotesk text-base text-ivory-60 underline decoration-ivory-12 underline-offset-4",
  "hover:text-ivory-100 hover:decoration-filament",
  "focus-visible:text-ivory-100 focus-visible:decoration-filament",
  "active:brightness-90",
]);

type ActionProps = {
  /** Internal path ("/…"), anchor ("#…"), or external/mailto URL. Omit for a <button>. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  id?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

function Action({
  className,
  href,
  onClick,
  type = "button",
  id,
  "aria-label": ariaLabel,
  children,
}: ActionProps & { className: string }) {
  if (href !== undefined) {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href as Route}
          id={id}
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </Link>
      );
    }
    return (
      <a href={href} id={id} aria-label={ariaLabel} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

/**
 * The Invitation — the primary action. A Filament Glass field with Ivory
 * text and a soft bloom at rest.
 *
 * WHEN: the one warm ask of a viewport. There is only ever ONE Invitation
 * visible per viewport — a review rule with the force of law.
 * WHEN NOT: navigation, secondary links, anything that is not the scene's
 * single ask. Those are Quiet Actions.
 */
export function Invitation(props: ActionProps) {
  return <Action {...props} className={invitationStyle()} />;
}

/**
 * The Quiet Action — the secondary action. Ivory-60 text with a 1px
 * underline of light that brightens on attention. No container at all.
 *
 * WHEN: every actionable thing that is not the scene's primary ask —
 * "view the case study", "return to the beginning", the email link.
 * WHEN NOT: as a styled substitute for body-copy links in reading text;
 * and never beside a second Invitation.
 */
export function QuietAction(props: ActionProps) {
  return <Action {...props} className={quietStyle()} />;
}
