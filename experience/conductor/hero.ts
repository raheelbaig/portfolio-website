/**
 * Scene 2's crew script (Storyboard Scene 2; Architecture §7: one
 * ScrollTrigger per scene, timelines authored in local progress).
 *
 * Three movements, all enhancing the Set's existing DOM (registration
 * targets: #hero ids + data-crew attributes — the Crew never restructures):
 *
 * 1. ENTRANCE (once, fresh loads only): the portrait is found by light;
 *    the name settles under its own gravity (no bounce); the role, the
 *    philosophy, the ask, and the instruments follow at the interval of a
 *    glance. Then the imperceptible 2% push-in — the opening dolly of a
 *    character study. Skipped when the Crew arrives late (never yank
 *    content a visitor is already reading).
 *
 * 2. THE FIRST SCROLL (scrubbed, lerped — Amendment 3: native scroll is
 *    truth; smoothing touches only the visuals): the name exits upward
 *    faster than the world, the portrait holds its ground longer — the
 *    parallax that proves the space is three-dimensional. He is the still
 *    point; the first scroll demonstrates it. The same progress drives the
 *    canvas key light's release into darkness.
 *
 * 3. ATTENTION: the pointer feeds the lighting store; the canvas leans the
 *    key light a few degrees toward the visitor — "as if their attention
 *    were itself a light source."
 */
import gsap from "gsap";
import { lighting } from "@/experience/lighting/store";
import { duration, stagger } from "@/styles/tokens";

const sec = (ms: number) => ms / 1000;

export function buildHero(): (() => void) | undefined {
  const scene = document.querySelector<HTMLElement>("#hero");
  if (!scene) return undefined;

  const q = (sel: string) => scene.querySelector<HTMLElement>(sel);
  const portrait = q('[data-crew="hero-portrait"]');
  const name = q("#hero-name");
  const role = q("#hero-role");
  const philosophy = q("#hero-philosophy");
  const actions = q('[data-crew="hero-actions"]');
  const meta = q('[data-crew="hero-meta"]');
  const hint = q('[data-crew="hero-hint"]');

  /* 1 — Entrance, synchronized with the loader's aperture (Scene 1's
     panels part at ~1.0s; the film is discovered mid-breath, never after a
     visible pop). Skipped entirely when the Crew arrives late — content a
     visitor is already reading is never yanked back into darkness. */
  const elapsed = performance.now() / 1000;
  const fresh = elapsed < 2.8;
  if (fresh) {
    const enter = gsap.timeline({
      delay: Math.max(0, 1.05 - elapsed),
      defaults: { ease: "glide" },
    });
    if (portrait) {
      /* The figure, found by the swelling key light. */
      enter.from(
        portrait,
        {
          autoAlpha: 0,
          scale: 0.985,
          y: 10,
          duration: sec(duration.cinematic) * 1.7,
        },
        0,
      );
    }
    if (name) {
      /* The name settles under its own gravity — no bounce, no theatrics. */
      enter.from(
        name,
        { y: 16, autoAlpha: 0, duration: sec(duration.cinematic) },
        0.35,
      );
    }
    const dialogue = [role, philosophy, actions].filter((el) => el !== null);
    if (dialogue.length > 0) {
      /* The second lines of dialogue, one glance apart. */
      enter.from(
        dialogue,
        {
          autoAlpha: 0,
          y: 8,
          duration: sec(duration.passage),
          stagger: sec(stagger.glance) * 3,
        },
        0.9,
      );
    }
    const margins = [meta, hint].filter((el) => el !== null);
    if (margins.length > 0) {
      /* The technical margins whisper in last. */
      enter.from(
        margins,
        {
          autoAlpha: 0,
          duration: sec(duration.gesture),
          stagger: sec(stagger.glance),
        },
        1.35,
      );
    }
    /* "A single downward line, slowly drawn" — the scroll hint's hairline. */
    const hintLine = hint?.querySelector<HTMLElement>("div");
    if (hintLine) {
      enter.from(
        hintLine,
        {
          scaleY: 0,
          transformOrigin: "top center",
          duration: sec(duration.cinematic),
        },
        1.45,
      );
    }
    /* The opening dolly: ~2% over ten seconds — never noticed, only felt. */
    if (portrait) {
      gsap.to(portrait, {
        scale: 1.02,
        duration: 10,
        ease: "none",
        delay: 2.2,
      });
    }
  }

  /* 2 — The first scroll: the handshake. The name exits ahead of the world,
     the portrait holds its ground and then DISSOLVES into the darkness that
     becomes Scene 3's canvas — no element simply vanishes at a border. */
  const scrub = gsap.timeline({
    scrollTrigger: {
      trigger: scene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => lighting.set({ heroProgress: self.progress }),
      onToggle: (self) => lighting.set({ heroInView: self.isActive }),
    },
  });
  if (name) scrub.to(name, { yPercent: -45, ease: "none", duration: 1 }, 0);
  if (portrait) {
    scrub.to(portrait, { yPercent: 14, ease: "none", duration: 1 }, 0);
    scrub.to(portrait, { autoAlpha: 0, ease: "none", duration: 0.35 }, 0.62);
  }
  const passing = [philosophy, actions, meta].filter((el) => el !== null);
  if (passing.length > 0) {
    /* Passed lines dim politely as the visitor moves on. */
    scrub.to(passing, { autoAlpha: 0.25, ease: "none", duration: 0.5 }, 0.2);
  }
  if (hint) scrub.to(hint, { autoAlpha: 0, ease: "none", duration: 0.18 }, 0);

  /* 3 — Attention as a light source. */
  const onPointer = (event: PointerEvent) => {
    lighting.set({
      pointerX: (event.clientX / window.innerWidth) * 2 - 1,
      pointerY: (event.clientY / window.innerHeight) * 2 - 1,
    });
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  return () => window.removeEventListener("pointermove", onPointer);
}
