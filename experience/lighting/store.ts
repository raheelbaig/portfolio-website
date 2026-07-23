/**
 * The lighting state (Architecture §8: one key light rig, one state
 * machine, shared by every consumer so canvas light and DOM light can
 * never drift apart).
 *
 * Per-frame values live here, outside React (Law: React renders, never
 * animates). The conductor writes; the canvas reads in its frame loop.
 * No external store library — a closed set of fields and two writers do
 * not justify a dependency (Law 20: the boring one wins).
 */

export type LightingState = {
  /** Attention as a light source: pointer, normalized to -1..1. */
  pointerX: number;
  pointerY: number;
  /** 0 = hero held frame, 1 = hero fully scrolled past (light released). */
  heroProgress: number;
  heroInView: boolean;
};

type Listener = () => void;

function createStore<T extends object>(initial: T) {
  let state = initial;
  const listeners = new Set<Listener>();
  return {
    get: () => state,
    set(patch: Partial<T>) {
      state = { ...state, ...patch };
      listeners.forEach((fn) => fn());
    },
    subscribe(fn: Listener) {
      listeners.add(fn);
      return () => {
        listeners.delete(fn);
      };
    },
  };
}

export const lighting = createStore<LightingState>({
  pointerX: 0,
  pointerY: 0,
  heroProgress: 0,
  heroInView: true,
});
