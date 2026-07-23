"use client";
/**
 * CrewMount — the composition root's one client boundary (Architecture
 * §12): the Crew is a single dynamically imported bundle that arrives
 * after the film is interactive, on idle, and never blocks a frame the
 * visitor is reading.
 *
 * The three floors (Architecture §8), resolved here:
 *   - reduced motion  → the Crew never mounts; the Set IS the cut
 *   - no WebGL        → DOM motion only (conductor without canvas)
 *   - all present     → canvas + conductor
 */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/experience/preferences/reduced-motion";

const Crew = dynamic(() => import("@/experience/crew"), { ssr: false });

function webglAvailable(): boolean {
  try {
    const probe = document.createElement("canvas");
    return Boolean(probe.getContext("webgl2") ?? probe.getContext("webgl"));
  } catch {
    return false;
  }
}

export function CrewMount() {
  const [crew, setCrew] = useState<{ withCanvas: boolean } | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const begin = () => setCrew({ withCanvas: webglAvailable() });
    const whenIdle = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(begin, { timeout: 1200 });
      } else {
        window.setTimeout(begin, 300);
      }
    };

    if (document.readyState === "complete") {
      whenIdle();
      return;
    }
    window.addEventListener("load", whenIdle, { once: true });
    return () => window.removeEventListener("load", whenIdle);
  }, []);

  return crew === null ? null : <Crew withCanvas={crew.withCanvas} />;
}
