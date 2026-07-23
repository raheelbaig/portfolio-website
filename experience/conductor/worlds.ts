/**
 * Scenes 7–9 — the launch frames' camera work.
 *
 * One movement per world, scrubbed and reversible: the product slides in
 * from the right as the bill of copy rises on the left — the storyboard's
 * establishing reveal, compressed to a single premium beat. Inside its
 * pane, the establishing shot keeps a slow drift (the camera never quite
 * frozen), and that is ALL: the deep cut at /work/[slug] is a reading
 * document and gets no crew.
 */
import gsap from "gsap";
import { worlds } from "@/content/projects";

function buildWorld(id: string) {
  const scene = document.querySelector<HTMLElement>(`#${id}`);
  if (!scene) return;

  const visual = scene.querySelector<HTMLElement>('[data-crew="world-visual"]');
  const copyChildren = Array.from(
    scene.querySelectorAll<HTMLElement>('[data-crew="world-copy"] > *'),
  );

  const reveal = gsap.timeline({
    scrollTrigger: {
      trigger: scene,
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
  });
  if (visual) {
    /* The product arrives from the right — the launch reveal. */
    reveal.fromTo(
      visual,
      { xPercent: 7, autoAlpha: 0 },
      { xPercent: 0, autoAlpha: 1, duration: 0.7, ease: "none" },
      0,
    );
  }
  if (copyChildren.length > 0) {
    /* The bill rises to meet it, one glance apart. */
    reveal.fromTo(
      copyChildren,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "none" },
      0.15,
    );
  }

  /* Inside the pane: the establishing shot never quite freezes. */
  const establishing = scene.querySelector<HTMLElement>(
    '[data-crew="world-establishing"] img',
  );
  if (establishing) {
    gsap.fromTo(
      establishing,
      { scale: 1.08, yPercent: -3 },
      {
        scale: 1.03,
        yPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: establishing,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
  }
}

export function buildWorlds() {
  for (const world of worlds) buildWorld(world.id);
}
