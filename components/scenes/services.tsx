import Image from "next/image";
import {
  offerings,
  servicesEyebrow,
  servicesHeading,
} from "@/content/services";
import { heroPortraitSrc } from "@/lib/assets";

/**
 * Section 05 — "What We Could Build" (Services). `docs/v2/07-services.md`.
 *
 * **The exhale** (§3). After the spectacle and the three worlds, the film
 * settles into an even, comfortable light — the performance is over; this is
 * conversation. It turns the pronoun outward for the first time, but only
 * *after* the work, so every capability lands as evidenced rather than
 * aspirational (§2.2).
 *
 * ── What this section refuses to be (§4) ──────────────────────────────────
 * Not a service menu, not a pricing page, not an agency block. Three curated
 * capabilities, **stated, never sold**: no prices, no tiers, no packages, no
 * availability, and — deliberately — **no primary action at all** (§8, §12).
 * The ask belongs to Contact; a "hire me" button here would shatter the
 * exhale. The plainness *is* the credibility.
 *
 * ── What this file is not ─────────────────────────────────────────────────
 * Static. The offering surfacing, the attention lift, the portrait's fade and
 * the detaching light's drift toward the visitor are **Crew** (§11) and appear
 * nowhere here. Per §14's readability floor, every offering ships at full
 * contrast — dimming is a Crew enhancement over already-readable text, never
 * the source of truth.
 *
 * Server Component. Zero client JavaScript — §12 specifies no interactive
 * targets by default, so there is nothing to hydrate.
 */
export function ServicesScene() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="services"
    >
      {/*
       * The bare warm room (§7, §10): balanced and warm-neutral, the most
       * evenly comfortable light in the film — a studio during a good meeting.
       * No dramatic key, no deep vignette, no background device, no glass.
       * After four sections of dramatic lighting, evening it out *is* the
       * lighting expression of "the performance is over."
       */}
      <div aria-hidden="true" className="services-rig">
        <div className="services-ambient" />
      </div>

      <div className="services-frame">
        <div className="services-column">
          {/*
           * The Console eyebrow names the section and carries the document
           * outline, so nothing is duplicated as a second hidden heading.
           */}
          <h2 id="services-title" className="services-eyebrow">
            <span className="sr-only">{servicesHeading}: </span>
            {servicesEyebrow}
          </h2>

          {/*
           * An ordered list of capabilities (§14) — a screen reader hears
           * exactly what a sighted visitor reads. A reel, not a card grid.
           */}
          <ol className="services-reel">
            {offerings.map((offering, index) => (
              <li
                key={offering.line}
                data-crew="services-offering"
                className="service light-response"
              >
                {/*
                 * Reel numbering — rhythm, not ranking (§5.1) — and
                 * presentational, so it is kept out of the accessibility tree
                 * (§14, §16). Rendered as real text rather than a CSS counter
                 * because generated content is announced by some screen
                 * readers, whereas `aria-hidden` here is unambiguous.
                 */}
                <span aria-hidden="true" className="service-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-body">
                  <h3 className="service-line">{offering.line}</h3>
                  {/* Exactly two specifics: what kind of product, then the
                      instruments. The schema forbids a third (§5.1, §16). */}
                  <p className="service-what">{offering.specifics[0]}</p>
                  <p className="service-with">{offering.specifics[1]}</p>
                </div>
              </li>
            ))}
          </ol>

          {/*
           * The detaching point of light (§7, §10, §11): the section's single
           * warm accent, and the first element in the entire film that will
           * move *toward* the visitor. At rest it simply sits beneath the last
           * offering; the drift into the Attendant is Crew.
           */}
          <div
            aria-hidden="true"
            data-crew="services-drift"
            className="services-drift"
          />
        </div>

        {/*
         * The builder back in the room, now that the work has spoken (§7):
         * Distant scale, at the frame's edge, small and quiet. Omitted below
         * COMPACT per §13 and 11 §3.4 — the person is implied by composition
         * rather than shrunk to an illegible speck.
         */}
        <ServicesFigure />
      </div>
    </section>
  );
}

/**
 * The Distant portrait (§7, §15). Lazy and small; `alt=""` because the figure
 * was described once in the Hero and every later appearance is decorative
 * repetition (§14, 01 §21).
 *
 * Hidden by CSS rather than conditionally rendered, so the Crew has identical
 * DOM on every tier. A lazy image inside a `display: none` subtree never
 * enters the viewport, so phones pay nothing to download it.
 */
function ServicesFigure() {
  const src = heroPortraitSrc();

  return (
    <div
      data-crew="services-portrait"
      className="services-figure"
      aria-hidden="true"
    >
      {src === null ? (
        <div className="services-figure-absent" />
      ) : (
        <Image
          src={src}
          alt=""
          width={160}
          height={160}
          loading="lazy"
          sizes="12svh"
          className="services-figure-image"
        />
      )}
    </div>
  );
}
