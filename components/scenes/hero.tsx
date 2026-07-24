import Image from "next/image";
import { Invitation, QuietAction } from "@/components/primitives/actions";
import { hero } from "@/content/copy/hero";
import { heroPortraitSrc } from "@/lib/assets";

/**
 * Section 01 — "The Still Point" (Hero). `docs/v2/03-hero.md`.
 *
 * The opening shot: a real person found by one warm key light in a cool dark
 * room, named in monumental serif, centred and symmetric. Its one job is
 * **arrest in three seconds** while answering *who / what / how it will feel*
 * in a single composed frame (03 §1).
 *
 * ── Composition (03 §2) ────────────────────────────────────────────────────
 * The frame is `100svh`. The portrait is an absolutely-positioned layer whose
 * top edge sits at `8svh`; the dialogue column is bottom-anchored beneath it,
 * so the name crosses the chest and the head reads above the name's cap
 * height. Man and name occupy one space — the brand thesis rendered literally.
 *
 * Vertical position is produced by the **spacing tokens between the beats**
 * (03 §2.4), not by hard-coded `svh` offsets per element: the identity cluster
 * is tight (`space-4`, `space-3`), then a thought-gap before the ask
 * (`space-5`), then the control strip. This lands the anchors 03 §2.2 draws
 * while surviving two-line names and wrapped taglines, which fixed offsets
 * would not.
 *
 * ── What this file is not ──────────────────────────────────────────────────
 * Static. The entrance ("found by light"), the idle (push-in, light breath,
 * pointer-lean) and the scrubbed dock to the sidebar are **Crew** work
 * (03 §5, §8) and appear nowhere here. This DOM is the reduced-motion cut and
 * the no-JS cut simultaneously — a composed held frame, never a broken one
 * (03 §10.4). The Crew enhances exactly this DOM and never restructures it;
 * its registration targets are the `#hero-*` ids and `data-crew` attributes.
 *
 * Server Component. Zero client JavaScript.
 */
export function HeroScene() {
  return (
    <section id="hero" aria-labelledby="hero-name" className="hero">
      {/*
       * The rig (03 §6). One key light, upper-left, warm — the one strong glow
       * of the viewport. Beneath it the ambient lift keeps the dark from
       * swallowing the figure's edges, and the vignette closes the corners one
       * step toward night-900. Depth is these layers, never a cast shadow.
       *
       * The CSS light is floor (2) of 03 §11.4 — it is what renders when the
       * canvas shader is absent, and it must be a designed state on its own.
       */}
      <div aria-hidden="true" className="hero-rig">
        <div className="hero-keylight" />
        <div className="field-ambient inset-0 absolute" />
        <div className="field-vignette inset-0 absolute" />
      </div>

      {/*
       * The lead actor (03 §3). The LCP element on every tier: `priority`
       * emits the preload link, and the aspect box is reserved by the layer
       * itself so the aperture never gates the paint and CLS stays ~0.
       */}
      <div className="hero-figure-layer">
        <div aria-hidden="true" className="hero-void" />
        <HeroPortrait />
      </div>

      {/* The dialogue. `hero-stage` lifts this plane in front of the figure. */}
      <div className="hero-stage">
        <div className="hero-dialogue">
          {/*
           * The identity cluster: name and role are one object, so the gap
           * between them is tight (03 §2.4).
           */}
          <div className="flex flex-col items-center gap-4">
            {/*
             * Both words are visible (03 §4.1) — "Baig" is one step down the
             * Marquee scale, never hidden behind sr-only.
             *
             * Inline layout, not flex, and the space between the words is a
             * real text node: the accessible name must read "Raheel Baig".
             * Adjacent flex items would concatenate to "RaheelBaig" for any AT
             * that does not insert a separator. Inline also gives true baseline
             * alignment across the two sizes for free, and wraps to two lines
             * on narrow frames exactly as §4.1 allows.
             */}
            <h1
              id="hero-name"
              className="hero-name font-marquee text-marquee text-balance text-bone-100"
            >
              <span className="text-marquee-xl">{hero.name.given}</span>{" "}
              {hero.name.family}
            </h1>

            <p
              id="hero-role"
              className="font-console text-console text-bone-45 uppercase"
            >
              {hero.role}
            </p>
          </div>

          {/*
           * Capped by the character measure, not `--container-read`: the read
           * container subtracts the safe margin itself, and `.hero-stage` has
           * already applied it — using it here would subtract twice and
           * over-wrap the line on phones. `--measure-ch` is the same rule
           * expressed intrinsically (11 §3.3: never exceed ~70ch), and it
           * relaxes to the full frame width on REEL, which is what that tier
           * wants anyway.
           */}
          <p
            id="hero-tagline"
            className="mt-3 max-w-(--measure-ch) font-plate text-plate-lead text-balance text-bone-70"
          >
            {hero.tagline}
          </p>

          {/*
           * The ask (03 §7.3). A thought-gap separates it from the tagline —
           * the ask is a new idea. Exactly one lit action; the secondary is a
           * quiet alternative. On REEL the pair stacks to comfortable width
           * (11 §5.1), primary above secondary.
           */}
          <div data-crew="hero-actions" className="hero-actions mt-thought">
            <Invitation href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Invitation>
            <QuietAction href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </QuietAction>
          </div>
        </div>

        {/*
         * The control strip (03 §2.3, §4.4) — a cockpit line at the frame's
         * base: exact facts left, the way onward right. The hairline is light
         * catching an edge, so it is lit at the top like every other edge.
         */}
        <div className="hero-strip">
          {hero.meta.length > 0 && (
            <dl data-crew="hero-meta" className="hero-meta">
              {hero.meta.map((entry) => (
                <div key={entry.label} className="flex flex-col gap-1">
                  <dt className="font-console text-console-sm text-bone-25 uppercase">
                    {entry.label}
                  </dt>
                  <dd className="font-console text-console-sm text-bone-45">
                    {entry.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div data-crew="hero-hint" className="hero-cue">
            <div aria-hidden="true" className="hero-cue-line" />
            <p className="font-console text-console-sm text-bone-45 uppercase">
              {hero.scrollCue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The portrait itself (03 §3.1, 12 §5.1).
 *
 * The grade is baked into the master asset — blacks lifted to `night`, skin
 * warmed toward the key, edges feathered. The only runtime treatment is the
 * two light filters (a warm key from the upper left, a thin cool Ion rim on
 * the far shoulder) and the edge-feather mask, which stands in until the
 * asset ships with its feather baked.
 *
 * Designed absence: with no asset the void renders alone — the same reserved
 * box, a body of faint light, zero layout difference.
 */
function HeroPortrait() {
  const src = heroPortraitSrc();

  if (src === null) {
    return (
      <div
        aria-hidden="true"
        data-crew="hero-portrait"
        className="hero-figure hero-figure-absent"
      />
    );
  }

  return (
    <figure data-crew="hero-portrait" className="hero-figure hero-figure-mask">
      <Image
        src={src}
        alt={hero.portraitAlt}
        fill
        priority
        sizes="(min-width: 48rem) 700px, 92vw"
        className="hero-figure-grade object-contain object-bottom"
      />
    </figure>
  );
}
