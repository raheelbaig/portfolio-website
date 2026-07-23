"use client";
/**
 * The stage (Architecture §8): one persistent canvas, fixed behind the DOM.
 * The DOM composites over it — type never enters WebGL.
 *
 * Scope discipline: for the Hero, the canvas renders exactly one thing —
 * the key light as a physical presence: a single full-viewport shader plane
 * (one draw call) carrying the Bible's light physics:
 *   - Gaussian key-light falloff, high and slightly camera-left
 *   - warm Filament temperature (§7: warm-neutral at rest)
 *   - 2% vertical ambient lift (§7 ambient law)
 *   - a slow idle breath ("a film still that hasn't quite frozen")
 *   - the light leaning a few degrees toward the visitor's attention
 *   - dither to keep the darkness velvet (no banding)
 *
 * As the first scroll proceeds, intensity follows (1 - heroProgress): the
 * light is released and "the darkness beyond his shoulder becomes the next
 * scene's canvas" — at which point the frame equals Stage Black and the
 * loop freezes (frameloop "never").
 */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { lighting } from "@/experience/lighting/store";

/** Base key position in shader space: high, slightly camera-left (Bible §7). */
const KEY_X = -0.08;
const KEY_Y = 0.16;
/** "A few degrees": maximum lean of the light toward attention. */
const ATTENTION_X = 0.05;
const ATTENTION_Y = 0.04;
/** The idle breath: ±3.5% intensity, ~14s period — at the edge of perception. */
const BREATH_DEPTH = 0.035;
const BREATH_RATE = 0.45;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec2 uCenter;
  uniform float uIntensity;
  uniform float uAspect;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec3 stage = vec3(0.0392, 0.0392, 0.0471);  /* Stage Black #0A0A0C */
    vec3 warm  = vec3(0.9098, 0.6588, 0.3333);  /* Filament    #E8A855 */

    vec2 p = vUv - 0.5;
    p.x *= uAspect;

    /* The key as a BEAM, not a bulb: falloff space leans ~12deg from the
       high-left, elongated vertically — light with a direction (Bible S7). */
    vec2 q = p - uCenter;
    float ca = 0.9781;  /* cos(-12deg) */
    float sa = -0.2079; /* sin(-12deg) */
    q = vec2(q.x * ca - q.y * sa, q.x * sa + q.y * ca);
    q.y *= 0.78;

    float d2 = dot(q, q);
    float core = exp(-d2 * 7.5);   /* the key's focused pool  */
    float halo = exp(-d2 * 2.1);   /* the light having body   */

    float ambient = vUv.y * 0.02;  /* 2% vertical lift (S7 ambient law) */

    /* Depth of darkness: corners sit one layer deeper (S7 shadows-as-layers). */
    float vign = smoothstep(0.92, 0.30, length(p));

    vec3 col = stage
      + warm * (core * 0.062 + halo * 0.020) * uIntensity
      + vec3(ambient * uIntensity);
    col *= mix(0.84, 1.0, vign);

    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;  /* velvet, not banding */

    gl_FragColor = vec4(col, 1.0);
  }
`;

function makeUniforms() {
  return {
    uCenter: { value: new THREE.Vector2(KEY_X, KEY_Y) },
    uIntensity: { value: 1 },
    uAspect: { value: 1 },
  };
}

function KeyLight() {
  const { viewport } = useThree();
  const material = useRef<THREE.ShaderMaterial>(null);
  const time = useRef(0);
  const initialUniforms = useMemo(() => makeUniforms(), []);

  /* All per-frame mutation goes through the material ref — per-frame values
     never touch React state (Law 5), and render-scope objects stay frozen. */
  useFrame((state, delta) => {
    const mat = material.current;
    if (mat === null) return;
    const u = mat.uniforms as ReturnType<typeof makeUniforms>;
    const s = lighting.get();
    time.current += delta;

    /* Attention lean + the exit arc: as the first scroll proceeds the key
       sweeps gently sideways — the promised hint of orbit, kept small. */
    const targetX = KEY_X + s.pointerX * ATTENTION_X + s.heroProgress * 0.12;
    const targetY = KEY_Y - s.pointerY * ATTENTION_Y;
    const c = u.uCenter.value;
    const ease = Math.min(1, delta * 2.5);
    c.x += (targetX - c.x) * ease;
    c.y += (targetY - c.y) * ease;

    /* The light swells in over ~2s as the aperture opens (ease-out cubic),
       breathes at the edge of perception, and is released by the scroll. */
    const t = Math.min(1, time.current / 2);
    const swell = 1 - (1 - t) * (1 - t) * (1 - t);
    const breath = 1 + Math.sin(time.current * BREATH_RATE) * BREATH_DEPTH;
    u.uIntensity.value = swell * breath * Math.max(0, 1 - s.heroProgress);
    u.uAspect.value = state.size.width / state.size.height;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <shaderMaterial
        ref={material}
        uniforms={initialUniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function Stage() {
  const [active, setActive] = useState(true);
  useEffect(
    () =>
      lighting.subscribe(() => {
        const s = lighting.get();
        setActive((prev) => (prev === s.heroInView ? prev : s.heroInView));
      }),
    [],
  );

  return (
    <div aria-hidden="true" className="stage-canvas">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "never"}
        gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 1] }}
      >
        <KeyLight />
      </Canvas>
    </div>
  );
}
