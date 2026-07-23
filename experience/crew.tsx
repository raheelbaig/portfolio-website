"use client";
/**
 * The Crew, assembled (loaded as one lazy bundle — Architecture §12: the
 * film never waits for it).
 *
 * Mounting flips `data-crew="on"` on the root element: the Set's CSS hands
 * the hero key light to the canvas. Unmounting reverts everything —
 * deleting the Crew must leave a perfect static site; this component is
 * that property at runtime.
 */
import { useEffect } from "react";
import { runConductor } from "@/experience/conductor";
import { Stage } from "@/experience/canvas/stage";

export default function Crew({ withCanvas }: { withCanvas: boolean }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-crew", "on");
    const dispose = runConductor();
    return () => {
      dispose();
      document.documentElement.removeAttribute("data-crew");
    };
  }, []);

  return withCanvas ? <Stage /> : null;
}
