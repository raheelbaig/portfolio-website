# Components — the Set

Everything in this tree is part of the **Set** (Architecture §1): semantic,
accessible, server-renderable, complete with zero JavaScript animation. The
Set never imports GSAP, three.js, Framer Motion, Lenis, or `@/experience` —
ESLint enforces this. Every visual value comes from `styles/tokens.ts` via
the generated Tailwind theme; there are no raw colors, sizes, or durations
here, and the unlawful utility classes (default palette, shadows, bounces)
do not exist at all.

Primitives accept **no `className` prop** (Law 14). Variants are closed
unions; a new variant is an amendment to the primitive, in review, once.
Each component's JSDoc explains why it exists, when to use it, and when not.

## Vocabulary map

Conventional name → this product's primitive:

| Generic          | Here                                         |
| ---------------- | -------------------------------------------- |
| Display          | `Monumental` (`name` / `title` / `close`)    |
| Heading / Title  | `Editorial size="line-xl"` / `"line-lg"`     |
| Subtitle         | `Editorial size="lead"`                      |
| Body             | `Editorial size="body"`                      |
| Caption          | `Technical size="sm" tone="whisper"`         |
| Technical label  | `TechnicalLabel`                             |
| Gradient text    | Does not exist — light is never paint (§2)   |
| Card / Glass     | `Pane` (`smoke` / `obsidian` / `filament`)   |
| Primary button   | `Invitation` (one per viewport, ever)        |
| Secondary button | `QuietAction`                                |
| Tag / Chip       | `SpecimenLabel` / `SpecimenRow`              |
| PageContainer    | `Frame` (safe area + three lawful widths)    |
| Spacer           | `SceneGap` (`thought` / `passage` / `scene`) |
| Divider          | `Divider` (a hairline of caught light)       |

## Structure

- `primitives/` — the smallest lawful units; each implements one Bible rule
  completely (voices, buttons, pane, specimen, divider, icons).
- `layout/` — the frame and rhythm: `Frame`, `Section`/`SectionHeader`,
  `Stack`, `Grid`, `SceneGap`, `StageBackground` (the four background states
  as an enum).
- `patterns/` — compositions with narrative meaning (`NavigationShell`,
  `FooterShell`; later: Doorway, Waypoint, Exhibit, ChapterNav).
- `scenes/` — one component per storyboard scene (later milestones). Scenes
  compose patterns + primitives with content from `@/content`, render their
  complete reduced-motion "held frame", and expose ref-registration targets
  for the Crew. They never animate themselves.

## How scenes will consume this system

```tsx
<Section labelledBy="work-title">
  <StageBackground state="keylight" />
  <Frame width="narrative">
    <SectionHeader headingId="work-title" eyebrow="SELECTED WORK"
      title="Three worlds, built and shipped." />
    <Stack gap="thought">
      <Editorial size="line">…</Editorial>
      <SpecimenRow items={["REACT", "TYPESCRIPT", "SUPABASE"]} />
      <QuietAction href="/work/salhub">View the case study</QuietAction>
    </Stack>
  </Frame>
</Section>
<SceneGap size="scene" />
```

Interaction states are light, not geometry: interactive primitives carry
`.light-transition` (noticed at 120ms, released at 240ms — the attention
asymmetry) and respond with brightness/decoration shifts only. Focus is
globally lit (Filament + Ivory ring) and never suppressed.
