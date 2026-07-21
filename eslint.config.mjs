import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

/**
 * Layer-boundary enforcement (Software Architecture §1, Laws 2 & 11):
 * the dependency arrow is Crew → Set → Script, one-directional, absolute.
 * An import against the arrow is an architecture bug — so it is a lint error.
 */
const animationLibraries = [
  "gsap",
  "gsap/*",
  "three",
  "three/*",
  "@react-three/fiber",
  "@react-three/drei",
  "@react-three/*",
  "framer-motion",
  "motion",
  "motion/*",
  "lenis",
  "lenis/*",
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    // The Set renders; it does not animate. Components never import the Crew
    // or any animation/3D library — they expose registration targets instead.
    files: ["components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: animationLibraries,
              message:
                "Animation and 3D libraries belong to the Crew (experience/). The Set renders; it does not animate (Laws 2, 11).",
            },
            {
              group: ["@/experience/*", "@/experience"],
              message:
                "The Set must not import the Crew (dependency arrow: Crew → Set → Script). Subscribe through hooks/ instead.",
            },
          ],
        },
      ],
    },
  },
  {
    // app/ is the composition root: it may mount the Crew (dynamic import),
    // but never uses animation libraries directly.
    files: ["app/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: animationLibraries,
              message:
                "Animation and 3D libraries belong to the Crew (experience/). Routes compose; they do not animate (Laws 2, 11).",
            },
          ],
        },
      ],
    },
  },
  {
    // The Script knows nothing of React or the Set (Architecture §1).
    files: ["content/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "react",
                "react-dom",
                "next",
                "next/*",
                "@/components/*",
                "@/experience/*",
                "@/hooks/*",
                "@/app/*",
              ],
              message:
                "The Script knows nothing of React or the Set (Architecture §1). Content is pure, typed data.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Generated from styles/tokens.ts — not hand-edited:
    "styles/tokens.css",
  ]),
]);

export default eslintConfig;
