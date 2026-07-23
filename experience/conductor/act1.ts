/**
 * Act I's crew scripts — Scenes 3, 4, 5 and the approach into 6.
 *
 * The governing grammar (Bible §6): in these scenes, TYPE DOES NOT TRAVEL,
 * IT ONLY ILLUMINATES. Position never animates while a line might be read;
 * everything scroll-driven is light (opacity), scrubbed and therefore
 * reversible — scroll back and the film plays backward gracefully.
 *
 * The transitions are the storyboard's own light handoffs:
 *   Hero → About:   the hero portrait dissolves; the Conversational figure
 *                   arrives by a lateral camera step, driven by the scroll.
 *   About → Career: "the monologue's last light becomes the first light of
 *                   the road" — the road literally draws itself on entry.
 *   Career → 5:     the traveling pool of light that walked the road keeps
 *                   moving: clusters brighten as the overhead camera drifts.
 *   5 → The Turn:   the bench's lights fall (convergence lines draw down),
 *                   the frame nearly empties, the portrait returns, and the
 *                   fragments are caught assembling — all scrubbed.
 */
import gsap from "gsap";

const PASSED = 0.45; /* Ivory-60-equivalent: a line that has been read */
const UNLIT = 0.22; /* awaiting the light */

function qs(root: ParentNode, sel: string) {
  return root.querySelector<HTMLElement>(sel);
}
function qsa(root: ParentNode, sel: string) {
  return Array.from(root.querySelectorAll<HTMLElement>(sel));
}

/* Scene 3 — "Closer": the reframing shot, performed by the visitor. */
function buildAbout() {
  const scene = document.querySelector<HTMLElement>("#about");
  if (!scene) return;

  const portrait = qs(scene, '[data-crew="about-portrait"]');
  if (portrait) {
    /* The lateral camera step: the figure slides into the one-third mark
       as the visitor scrolls the scene in — the visitor reframes the shot. */
    gsap.fromTo(
      portrait,
      { autoAlpha: 0, xPercent: -9 },
      {
        autoAlpha: 1,
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      },
    );
  }

  /* The monologue, read at the pace of light: each line brightens into the
     reading zone and politely dims once passed. */
  for (const line of qsa(scene, '[data-crew="about-monologue"] > p')) {
    gsap.fromTo(
      line,
      { autoAlpha: UNLIT },
      {
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 82%",
          end: "top 58%",
          scrub: 0.6,
        },
      },
    );
    gsap.to(line, {
      autoAlpha: PASSED,
      ease: "none",
      scrollTrigger: {
        trigger: line,
        start: "top 30%",
        end: "top 12%",
        scrub: 0.6,
      },
    });
  }

  const fact = qs(scene, '[data-crew="about-fact"]');
  if (fact) {
    gsap.fromTo(
      fact,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: fact,
          start: "top 88%",
          end: "top 66%",
          scrub: 0.6,
        },
      },
    );
  }
}

/* Scene 4 — "The Long Road": the tracking shot, performed by light. */
function buildCareer() {
  const scene = document.querySelector<HTMLElement>("#journey");
  if (!scene) return;

  const road = qs(scene, '[data-crew="career-road"] hr');
  if (road) {
    /* The monologue's last light becomes the road: it draws itself. */
    gsap.fromTo(
      road,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top 85%",
          end: "top 35%",
          scrub: 1,
        },
      },
    );
  }

  /* The travel: a pool of light walks the waypoints left to right as the
     visitor moves through the scene — cool past toward warm present. */
  const waypoints = qsa(scene, '[data-crew="career-waypoints"] > li');
  if (waypoints.length > 0) {
    const walk = gsap.timeline({
      scrollTrigger: {
        trigger: scene,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1,
      },
    });
    waypoints.forEach((waypoint, index) => {
      walk.fromTo(
        waypoint,
        { autoAlpha: 0.3 },
        { autoAlpha: 1, duration: 0.6, ease: "none" },
        index * 0.45,
      );
    });
  }

  const portrait = qs(scene, '[data-crew="career-portrait"]');
  if (portrait) {
    /* The figure at the road's end, slowly growing: the journey leads to him. */
    gsap.fromTo(
      portrait,
      { autoAlpha: 0, scale: 0.94 },
      {
        autoAlpha: 1,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      },
    );
  }
}

/* Scene 5 — "The Instruments": the overhead drift across the bench. */
function buildInstruments() {
  const scene = document.querySelector<HTMLElement>("#instruments");
  if (!scene) return;

  /* Each cluster gets its moment of center frame — brightening softly as
     the camera passes, settling to worklight, never boxed or labeled. */
  for (const cluster of qsa(scene, '[data-crew="instruments-cluster"]')) {
    gsap.fromTo(
      cluster,
      { autoAlpha: 0.3 },
      {
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: cluster,
          start: "top 85%",
          end: "top 55%",
          scrub: 0.8,
        },
      },
    );
  }

  const line = qs(scene, '[data-crew="instruments-line"]');
  if (line) {
    gsap.fromTo(
      line,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          end: "top 60%",
          scrub: 0.8,
        },
      },
    );
  }

  /* The intelligence group's slow pulse — one glow every few seconds, the
     promise kept later by the attendant. Sine, because it is a breath. */
  const intel = qs(scene, '[data-group="intelligence"] ul');
  if (intel) {
    gsap.to(intel, {
      textShadow: "0 0 14px rgba(143, 163, 184, 0.35)",
      duration: 1.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2.8,
      scrollTrigger: {
        trigger: scene,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume pause",
      },
    });
  }
}

/* The approach into Scene 6: the bench's lights converge and the world is
   caught mid-assembly — one scrubbed movement, fully reversible. */
function buildTurnEntry() {
  const scene = document.querySelector<HTMLElement>("#work");
  if (!scene) return;

  const convergence = qsa(scene, '[data-crew="turn-convergence"] > div');
  const threads = qsa(scene, '[data-crew="turn-thread"]');
  const fragments = qsa(scene, '[data-crew="turn-fragment"]');
  const portrait = qs(scene, '[data-crew="turn-portrait"]');
  const thesis = qs(scene, "#turn-thesis");
  const doorways = qsa(scene, '[data-crew="turn-doorways"] > li');

  const assembly = gsap.timeline({
    scrollTrigger: {
      trigger: scene,
      start: "top 80%",
      end: "top 15%",
      scrub: 1,
    },
  });

  if (convergence.length > 0) {
    assembly.fromTo(
      convergence,
      { scaleY: 0, transformOrigin: "top center" },
      { scaleY: 1, duration: 0.18, stagger: 0.05, ease: "none" },
      0,
    );
  }
  /* The deliberate echo: for a beat, the frame is as empty as the loader. */
  if (portrait) {
    assembly.fromTo(
      portrait,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.3, ease: "none" },
      0.3,
    );
  }
  if (threads.length > 0) {
    assembly.fromTo(
      threads,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.3, stagger: 0.08, ease: "none" },
      0.42,
    );
  }
  if (fragments.length > 0) {
    assembly.from(
      fragments,
      { autoAlpha: 0, y: 26, duration: 0.3, stagger: 0.06, ease: "none" },
      0.48,
    );
  }
  if (thesis) {
    assembly.fromTo(
      thesis,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.25, ease: "none" },
      0.66,
    );
  }
  if (doorways.length > 0) {
    assembly.from(
      doorways,
      { autoAlpha: 0, y: 18, duration: 0.28, stagger: 0.07, ease: "none" },
      0.78,
    );
  }
}

export function buildActOne() {
  buildAbout();
  buildCareer();
  buildInstruments();
  buildTurnEntry();
}
