/**
 * The conductor (Architecture §7): the single owner of animation truth.
 * One GSAP context; one ScrollTrigger per scene; scene scripts register
 * against the Set's DOM and are reverted as one.
 *
 * Amendment 3 is structural here: ScrollTrigger reads NATIVE document
 * scroll — no hijacking, no Lenis. The cinematic weight comes from
 * `scrub: 1` lerping the visuals toward the true scroll position.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGlide } from "@/experience/motion/glide";
import { buildActOne } from "@/experience/conductor/act1";
import { buildHero } from "@/experience/conductor/hero";
import { buildWorlds } from "@/experience/conductor/worlds";

export function runConductor(): () => void {
  gsap.registerPlugin(ScrollTrigger);
  registerGlide();

  const disposers: Array<() => void> = [];
  const ctx = gsap.context(() => {
    const heroDispose = buildHero();
    if (heroDispose) disposers.push(heroDispose);
    buildActOne();
    buildWorlds();
    /* Scene scripts for 10–12 join here with their milestone. */
  });

  return () => {
    disposers.forEach((dispose) => dispose());
    ctx.revert();
  };
}
