import Image from "next/image";
import { about } from "@/content/copy/about";
import { heroPortraitSrc } from "@/lib/assets";

/**
 * Section 02 — "Closer" (About). `docs/v2/05-about.md`.
 *
 * The pivot from spectacle to person: the moment the visitor stops *looking
 * at* Raheel and starts *listening* to him (§1.2). Everything here serves one
 * emotional shift — admiration → trust.
 *
 * ── Composition (§2) ──────────────────────────────────────────────────────
 * A two-page editorial spread, deliberately **asymmetric** — the opposite of
 * the Hero's symmetry, because asymmetry is intimacy. The portrait returns at
 * Conversational scale on the left page, sticky and vertically centred, while
 * the monologue scrolls past on the right at the reading measure.
 *
 * ── What this file is not ─────────────────────────────────────────────────
 * Static. The lateral camera step (§5.1), the line-by-line illumination
 * (§5.2), the light handoff into Approach (§5.5) and the portrait's breath are
 * **Crew** work and appear nowhere here.
 *
 * The one law that shapes this DOM is §8.4: *"the static Set renders all lines
 * at a readable tone."* Opacity-dimming is a visual enhancement layered over
 * already-readable text, never the source of truth — so every line ships at
 * full contrast, and the no-JS, screen-reader and reduced-motion cuts are all
 * simply this composed spread.
 *
 * Server Component. Zero client JavaScript — §6 specifies a reading scene with
 * no interactive content at all, so there is nothing to hydrate.
 */
export function AboutScene() {
  return (
    <section id="about" aria-labelledby="about-title" className="about">
      <h2 id="about-title" className="sr-only">
        {about.srHeading}
      </h2>

      {/*
       * The rig (§2.6). The key warms ~200K toward candlelight versus the
       * Hero — not brighter, *warmer*: the difference between meeting someone
       * on stage and talking after the show. Around it the black goes soft and
       * volumetric, a quiet room with one lamp.
       *
       * A CSS gradient, never a canvas pass (§9): the persistent canvas is
       * reserved for the Hero and the one spectacle, so a reading scene spends
       * no GPU on 3D, and there is no backdrop blur anywhere in this section.
       */}
      <div aria-hidden="true" className="about-rig">
        <div data-crew="about-keylight" className="about-keylight" />
      </div>

      <div className="about-spread">
        {/*
         * The left page (§2.1, §2.2): the figure at Conversational scale, one
         * third across, sticky so it holds centred while the voice scrolls
         * past. The camera has stepped sideways and closer.
         */}
        <div className="about-figure-col">
          <div data-crew="about-portrait" className="about-figure">
            <AboutPortrait />

            {/*
             * §4.5's sanctioned optional device: a single faint measure mark,
             * read as instrumentation and never as decoration. It carries the
             * section's engineering register while the Console fact is
             * copy-pending — a structural tick claims nothing, which is
             * precisely what §4.2 demands.
             */}
            <div aria-hidden="true" className="about-measure" />

            {/*
             * The museum label, not a résumé (§2.1). Renders only when a
             * confirmed fact exists; the spread composes identically without
             * it, so nothing shifts when it arrives.
             */}
            {about.fact !== null && (
              <dl data-crew="about-fact" className="about-fact">
                <dt className="sr-only">{about.fact.label}</dt>
                <dd>{about.fact.value}</dd>
              </dl>
            )}
          </div>
        </div>

        {/*
         * The right page (§2.1, §3.3): there are no paragraphs here, only
         * lines — each a self-contained sentence, distributed vertically so
         * the visitor descends through them one at a time (§2.4).
         */}
        <div data-crew="about-monologue" className="about-voice">
          {about.monologue.map(({ beat, line }) => (
            <p
              key={beat}
              data-crew="about-line"
              data-beat={beat}
              className="about-line"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * The portrait returns (§0, §2.2) — a **separate instance** from the docked
 * sidebar chip, which the spec states outright: the chip stays in the rail;
 * the person reappears, closer.
 *
 * Same master, same grade, same edge-dissolve as every other appearance
 * (01 §19). `alt=""`: the figure was described once in the Hero, and every
 * later appearance is decorative repetition (§8.1).
 *
 * Not the LCP element — that is the Hero's portrait — so this one is lazy
 * (§9). Its box is reserved by the layer, holding CLS at ~0.
 */
function AboutPortrait() {
  const src = heroPortraitSrc();

  if (src === null) {
    return <div aria-hidden="true" className="about-figure-absent" />;
  }

  return (
    <figure className="about-figure-frame">
      <Image
        src={src}
        alt=""
        fill
        loading="lazy"
        sizes="(min-width: 64rem) 46svh, (min-width: 48rem) 42svh, 78vw"
        className="about-figure-grade object-cover object-top"
      />
    </figure>
  );
}
