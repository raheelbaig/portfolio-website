import Image from "next/image";
import { Invitation } from "@/components/primitives/actions";
import { showcase } from "@/content/copy/worlds";
import { nzh } from "@/content/projects/nzh";
import { salhub } from "@/content/projects/salhub";
import { strangerus } from "@/content/projects/strangerus";
import { worlds } from "@/content/projects";
import type { Project } from "@/content/projects/schema";

/**
 * Section 04 — "Selected Work". `docs/v2/06-project-showcase.md`.
 *
 * The emotional climax: three worlds you walk through, not a grid of cards.
 * Conviction, compounding — *he can build → build differently → build for
 * anyone* (§1.2). The section teases; `/work/[slug]` documents (§0).
 *
 * ── Why this ships as a stacked exhibition, not a pinned one ───────────────
 * §2.1 pins the stage; §9.1 is equally explicit that the pin is "a Crew
 * visual layer over already-complete, already-navigable content", and that
 * no-JS and reduced-motion get "a plain vertical stack of three complete
 * exhibits". Those only reconcile one way: **the Set is the stacked cut.**
 *
 * CSS `position: sticky` needs no JavaScript, so pinning here would leave a
 * scriptless visitor with three worlds piled in one frame and no scrub to
 * separate them — the section would be broken precisely where §9 promises it
 * is strongest. So the stage and track wrappers exist with their hooks, the
 * Crew converts them to a pinned procession, and the vertical exhibition
 * below is both the phone composition (§8, 11 §6) and the accessible cut.
 *
 * ── What is deliberately absent ───────────────────────────────────────────
 * The Threshold spectacle, the enter-from-right, the establishing push, the
 * cross-dissolve seam, the lighting shifts and any video choreography are
 * **Crew** (§4, §10) and appear nowhere here.
 *
 * Server Component. Zero client JavaScript.
 */

const projects: Record<string, Project> = { salhub, strangerus, nzh };

export function ShowcaseScene() {
  return (
    <section id="work" aria-label={showcase.regionLabel} className="showcase">
      {/*
       * The Threshold — the section's overture and the film's one spectacle
       * (§2.2, §2.3). It is owned by this section but is *entirely* motion:
       * the gather, the assembly, the single orbit. In the static cut it is
       * what §7 calls "a held half-beat, an echo of the loader's emptiness" —
       * so the Set reserves its stage and renders no invented visual.
       *
       * The converging instrument nodes are supplied by Experience (§2.3);
       * the canvas work is governed by the QualityManager (§10).
       */}
      <div
        aria-hidden="true"
        data-crew="threshold"
        className="showcase-threshold"
      />

      {/*
       * The stage the Crew pins, and the track the worlds pass through as `w`
       * advances (§2.1). In the Set they are plain wrappers: the track lays
       * the worlds out vertically with a scene rest between them.
       */}
      <div data-crew="showcase-stage" className="showcase-stage">
        <div data-crew="showcase-track" className="showcase-track">
          {worlds.map((entry, index) => (
            <World
              key={entry.id}
              project={projects[entry.id]!}
              index={entry.number}
              position={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One exhibit (§3). The three share this grammar — range within one language.
 *
 * DOM order is visual → name → sentence → stack → actions, which is both
 * §6's attention order (*see the product → learn its name → understand its
 * tension → choose to go deeper → check the specs*) and, on stacked tiers,
 * the visual top-to-bottom order that `11 §4.3` requires. On the wide frames
 * the copy is placed left by grid column, not by `order`, so logical and tab
 * order are never broken — the visual holds no focusable elements, so leading
 * with it costs the keyboard nothing.
 */
function World({
  project,
  index,
  position,
}: {
  project: Project;
  index: string;
  position: number;
}) {
  const titleId = `world-${project.id}-title`;
  /**
   * The live product (§3.2) — the ultimate proof, but secondary to entering
   * the story. `links` is empty across all three worlds pending real URLs
   * (§0, §12), so this resolves to nothing and the slot stays reserved.
   */
  const live = project.links[0];

  /**
   * Two crops at most: the depth planes behind the establishing shot (§3.2).
   * `11 §6` reduces them to one below STAGE, which CSS does — the second is
   * hidden rather than conditionally rendered so the Crew always has the same
   * DOM to animate on every tier.
   */
  const crops = project.exhibits.details.slice(0, 2);

  return (
    <article
      id={`world-${project.id}`}
      aria-labelledby={titleId}
      data-crew="world"
      data-world={project.id}
      data-position={position}
      className="world"
    >
      {/*
       * The one key pocket of light on the product, tuned to this world's
       * signature temperature (§3.4, §3.5) — range proven through light
       * before a word is read. Set per world by `data-world` in CSS.
       */}
      <div aria-hidden="true" data-crew="world-key" className="world-key" />

      <div className="world-frame">
        <div data-crew="world-visual" className="world-visual">
          {/*
           * The layered crops recede behind the establishing shot at their own
           * depth planes, graded darker and softly edged into the dark (§3.2).
           * Depth by layered dark, never a cast shadow (01 §12). Decorative:
           * the establishing shot already carries the meaningful alt (§9.2).
           */}
          {crops.map((crop, cropIndex) => (
            <div
              key={crop.src}
              aria-hidden="true"
              data-crew="world-crop"
              className="world-crop"
              data-depth={cropIndex + 1}
            >
              <Image
                src={crop.src}
                alt=""
                width={crop.width}
                height={crop.height}
                loading="lazy"
                sizes="(min-width: 64rem) 22vw, 40vw"
                className="world-shot"
              />
            </div>
          ))}

          {/*
           * The machined glass window (§3.2): `radius-glass`, Slate, a lit top
           * edge, silent chrome. No skeuomorphic device render — the interface
           * is the hero and the frame recedes.
           *
           * The optional video loop (§3.2, §10) would mount inside this same
           * window with the still as its poster. No asset exists yet, so the
           * graded still is the default and nothing empty is rendered.
           */}
          <figure data-crew="world-window" className="world-window">
            <Image
              src={project.exhibits.establishing.src}
              alt={project.exhibits.establishing.alt}
              width={project.exhibits.establishing.width}
              height={project.exhibits.establishing.height}
              loading="lazy"
              sizes="(min-width: 64rem) 52vw, 92vw"
              className="world-shot world-shot-primary"
            />
            {/* The grade that keeps a bright screenshot from blowing a hole
                in the dark (§3.2) — the single most important rule here. */}
            <span aria-hidden="true" className="world-grade" />
          </figure>
        </div>

        <div data-crew="world-copy" className="world-copy">
          {/*
           * The reel index. §3.1 also places the project's mark here; no
           * monochromed logo source exists yet (§12), so the slot is left to
           * the asset pass rather than filled with a bright colour chip, which
           * 01 §4.4 forbids outright.
           */}
          <p className="world-index">
            <span aria-hidden="true" className="world-tick" />
            {index}
          </p>

          {/* Marquee, small at this distance — the work outranks its name. */}
          <h2 id={titleId} className="world-title">
            {project.title}
          </h2>

          {/* One line: the tension the product answered. Never a paragraph. */}
          <p className="world-line">{project.positioning}</p>

          {/* Instruments as specimen text — never logos, never chips. */}
          <ul className="world-stack">
            {project.stack.map((instrument) => (
              <li key={instrument}>{instrument}</li>
            ))}
          </ul>

          <div data-crew="world-actions" className="world-actions">
            <Invitation href={`/work/${project.id}`}>
              {showcase.enter(project.title)}
              <span className="sr-only"> — {showcase.enterContext}</span>
            </Invitation>

            {live !== undefined && (
              <a
                href={live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="action-quiet light-response world-visit"
              >
                {showcase.visit}
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> — {showcase.visitContext}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
