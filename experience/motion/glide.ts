/**
 * The one easing curve (Bible §6): "the glide" — strong ease-out with a
 * soft ease-in head. Registered once as a GSAP CustomEase from the same
 * token the CSS consumes, so DOM transitions and Crew tweens can never
 * disagree about how motion feels.
 */
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { easing } from "@/styles/tokens";

let registered = false;

export function registerGlide(): void {
  if (registered) return;
  gsap.registerPlugin(CustomEase);
  const [x1, y1, x2, y2] = easing.glidePoints;
  CustomEase.create("glide", `M0,0 C${x1},${y1} ${x2},${y2} 1,1`);
  registered = true;
}
