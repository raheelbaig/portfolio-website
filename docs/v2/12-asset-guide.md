# V2 — Asset Production Guide

> **Status:** Complete — the canonical production specification for every visual/media asset NOCTURNE requires.
> **Codename:** NOCTURNE. **Sources of truth:** `01`–`11` (this guide serves them; it invents nothing they don't reference).
> **Owner:** Raheel Baig. **Last revised:** 2026-07-24.
>
> This is not a checklist bolted on at the end — it is the **production spec** a designer, photographer, and frontend engineer can each work from independently, without making further design decisions. Every required asset has: **purpose · dimensions · aspect · format · compression · quality · naming · folder · priority · owner · production notes.** The master checklist is §14.

---

## 0. How to read this guide

- **Priority:** **P0** = launch-blocking · **P1** = launch, may degrade gracefully · **P2** = post-launch / optional.
- **Owner:** *Photographer* · *Designer* · *Engineer* (frontend) · *Raheel* (content/decisions/consent).
- **Grounding rule:** every asset below is referenced by a design document (cited). Assets the design **does not** reference (résumé, PDF, email signature) are marked **OPTIONAL — not referenced by the current design** and would require a design amendment before they have a home (§12).
- **Current-state note** per family states what exists in the repo today vs. what must be produced.

---

## 1. Purpose

To define, once and exactly, every image, video, font, icon, and media file needed to build the design in `01`–`11` — such that production can proceed in parallel (photographer shoots, designer grades, engineer wires) with zero ambiguity, and such that no asset is produced that the design never uses.

**Reasoning.** A cinematic dark system lives or dies on asset discipline — one ungraded screenshot or one banding-riddled portrait export breaks the illusion (`01 §16`). Centralising the spec here means the "graded into the room" rule is enforced at production time, not discovered in review.

---

## 2. Asset Philosophy

1. **Everything is graded into the room.** No asset ships at its native white background, contrast, or colour temperature. Blacks lift to `night`, highlights warm toward Sol, edges dissolve into the dark where appropriate (`01 §16`). A raw asset is a bug.
2. **The set is closed.** The only human is Raheel (one portrait). The only product imagery is the three real projects. No stock people, no illustration, no decorative graphics (`01 §16`, §23.11).
3. **Real, not rendered.** No skeuomorphic device mockups, no fake dashboards; product UI is real, presented in machined glass (`01 §18`). "Device mockup" is a **CSS component**, not an image asset (§5.9).
4. **Procedural over painted.** Light and depth are shaders/CSS, not image assets (§5.11). The only texture asset is the one film grain.
5. **Honesty in assets.** No invented logos, socials, testimonials, or headshots of anyone but Raheel. Third-party PII in screenshots is scrubbed (§7).

**Reasoning.** Naming what we *never* produce is as important as what we do — it's the production-time expression of the brand's "things we never do" (`01 §23`), and it stops the asset list from ballooning with the decorative filler a dark cinematic site must refuse.

---

## 3. File Organization

Extends the existing `public/` tree. Content-hashing is handled by the build (Next/`next/image`); these are **source and served** names.

```
public/
├── portrait/
│   ├── hero-master.png            (graded master, ≥2000², RGBA — source)
│   ├── hero-monumental.{avif,webp}
│   ├── hero-conversational.{avif,webp}
│   ├── hero-distant.{avif,webp}
│   └── hero-chip.{avif,webp}
├── brand/
│   ├── monogram.svg               (RB mark)
│   ├── monogram-mono.svg          (single-colour variant)
│   ├── favicon.ico
│   ├── favicon-32.png favicon-16.png
│   ├── icon.svg                   (maskable/adaptive)
│   ├── apple-touch-icon.png       (180²)
│   └── icon-192.png icon-512.png  (PWA/manifest)
├── worlds/
│   ├── salhub/
│   │   ├── establishing.{avif,webp}        + -sm/-md/-lg crops
│   │   ├── logo.svg                         (monochromed mark)
│   │   ├── beat-1.{avif,webp} beat-2… beat-3…   (case-study close-ups)
│   │   ├── loop.{webm,mp4}  loop-poster.{avif,webp}   (OPTIONAL)
│   │   └── _source/  (raw captures, not shipped)
│   ├── strangerus/  (same shape)
│   └── nzh/         (same shape)
├── textures/
│   └── grain.svg                  (or inline; §5.10)
├── og/
│   ├── home.png                   (1200×630)
│   └── work-{salhub,strangerus,nzh}.png
└── fonts/                         (if self-hosted; else next/font)
    └── *.woff2
```

**Reasoning.** A per-world folder with `establishing`, tiered crops, `beat-*`, optional `loop`, and a non-shipped `_source/` mirrors exactly how the Showcase (`06`) and case-study routes consume media — the folder shape *is* the component's data shape, so wiring is mechanical.

---

## 4. Naming Conventions

- **kebab-case, semantic, role-first:** `hero-monumental.avif`, `salhub-establishing-md.webp`, `work-nzh.png`.
- **Scale/tier suffixes:** `-sm` / `-md` / `-lg` for art-directed crops (map to `11` tiers); `@2x` is **not** used — resolution is handled by `srcset` widths, not filename density.
- **No dates, no versions in filenames** — the build content-hashes; source versioning is git.
- **`_source/`** prefix (underscore) for raw, un-graded captures that never ship.
- **Formats as extensions only:** the same logical asset exists as `.avif` + `.webp` (+ `.png` for the alpha portrait fallback).

**Reasoning.** Role-first names let an engineer predict a path without a lookup (`worlds/<slug>/establishing.avif` is always the establishing shot), and banning `@2x`/date/version noise keeps the served tree clean and the `<picture>`/`srcset` wiring declarative.

---

## 5. The Asset Registry

### 5.1 Portrait — specifications

**Purpose:** the film's lead actor; the Hero LCP; appears at three scales + the sidebar chip (`01 §19`, `03`, `05`, `08`, `09`).
**Current state:** `public/portrait/hero.png` exists at **500×500 RGBA** — **insufficient** for Monumental at 2× (top visible-quality ceiling flagged across `03`/`05`/`09`).

| Field | Spec |
| --- | --- |
| Master dimensions | **≥ 2000 × 2000** (min acceptable 1400²), square 1:1, chest-up |
| Aspect ratio | 1:1 (the real crop) |
| Source format | PNG or 16-bit TIFF, **RGBA (alpha cut-out)** |
| Alpha | clean cut-out, **soft edge feather baked** (no hard alpha edge) |
| Colour space | sRGB, embedded profile |
| Priority | **P0** (Hero LCP) |
| Owner | Photographer (capture) → Designer (grade) → Engineer (export) |

**Production notes:** re-capture or up-res the existing portrait to ≥1400²; if the source lighting fights the site key (high, camera-left, warm), **re-grade or re-shoot** — the world does not bend to a photo (`01 §19`). Never mirror the image (the key-light direction would lie). Gaze toward camera (Hero and Contact are eye-contact moments).

### 5.2 Portrait — grading (Designer)

Apply once to the master; all exports derive from it (`01 §16`, §19; `03 §3.1`):

- **Blacks** lifted to `night` floor (`#0B0E12`-ward) — never crushed below the room's floor.
- **Skin** warmed a few hundred K toward the Sol key.
- **Edges** dissolved into the dark via a soft radial mask centred high (torso bottom feathers longest).
- **Key** implied high/camera-left (warm); **rim** a thin cool Ion on the opposite shoulder.
- **No** drop shadow, outline glow, or hard sticker edge.
- **Verify no banding** in the dark dissolve at export (the #1 failure mode — §6).

**Reasoning.** Grading the master once (not per-export, not at runtime) guarantees every scale is the same person under the same light; baking the edge-feather avoids a runtime mask cost and keeps the dissolve identical across AVIF/WebP.

### 5.3 Portrait — exports

Served sizes derive from the slot sizes in `03`/`11`. Square, so W = H.

| Export | Displayed slot | 1× px | 2× px | Format | Quality | Weight target |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-monumental` | ≤62svh (Hero/Contact) | ~900 | ~1800 | AVIF+WebP(+PNG) | AVIF q≈63 / WebP q≈82 | ≤ ~160KB @2× AVIF |
| `hero-conversational` | 46svh (About) | ~560 | ~1120 | AVIF+WebP | same | ≤ ~90KB |
| `hero-distant` | 12svh (Experience/Services) | ~160 | ~320 | AVIF+WebP | same | ≤ ~20KB |
| `hero-chip` | 56px (sidebar) | 56 | 112 | AVIF+WebP | same | ≤ ~6KB |

- **Alpha preserved** in AVIF and WebP; PNG alpha as last-resort fallback for the Monumental only.
- **Hero Monumental** is `priority` + `<link rel=preload as=image>` (LCP); others lazy on approach (`03 §11`, `05 §9`, `09 §15`).
- `sizes` per tier (`03 §11.2`): `(min-width:768px) 700px, 92vw` (Monumental).

**Reasoning.** Exporting exact slot sizes (not one giant image scaled by CSS) is what keeps the LCP fast and the chip tiny; separate AVIF/WebP with PNG only as a Monumental fallback balances modern compression against universal alpha support.

### 5.4 Monogram (RB)

**Purpose:** compact identity — mobile top-bar, collapsed rail, favicon/OG base (`04 §3.3`, `11 §7`).
**Current state:** does not exist — **must be produced.**

| Field | Spec |
| --- | --- |
| Form | "RB" mark — geometric or serif-derived, aligned to the Marquee/Console voices |
| Format | **SVG** (primary), + `monogram-mono.svg` single-colour |
| Colour | `bone`/`ion` monochrome via `currentColor`; **never a bright colour chip** (`01 §4.4`) |
| Dimensions | vector; legible at 24px (favicon) → 56px (bar) |
| Priority | **P0** (mobile identity + favicon base) |
| Owner | Designer |

**Production notes:** must read at 16px (favicon) and hold dignity at 56px; single-weight, restrained; delivered as optimized SVG (SVGO), `currentColor` so it inherits theme.

### 5.5 Project Logos

**Purpose:** small recognition mark beside each world title in the Showcase (`06 §3.2`).
**Current state:** the real marks live in the project repos (SalHub logos, StrangerUs `logo.svg`, NZH mark) — **not in this repo; must be sourced + treated.**

| Field | Spec |
| --- | --- |
| Format | SVG preferred (or high-res PNG w/ alpha) |
| Treatment | **monochromed to `bone`/`ion` or subtly graded** — never a bright coloured logo (`06 §3.2`) |
| Size | small, title-adjacent (~20–28px height) |
| Priority | **P1** (Showcase can fall back to the Marquee wordmark if a mark is unavailable) |
| Owner | Raheel (source files + usage rights) → Designer (treatment) |

**Production notes:** confirm Raheel has the right to display each client mark; if not, **omit the logo and use the project name in Marquee** (the Showcase is designed to work without logos). ⚠ Rights/consent per project.

### 5.6 Favicons

**Purpose:** browser tab, bookmarks, PWA, home-screen — the monogram as the site mark.
**Current state:** default `app/favicon.ico` from create-next-app — **replace.**

| Asset | Dimensions | Format | Notes |
| --- | --- | --- | --- |
| `favicon.ico` | 16/32/48 multi | ICO | legacy |
| `favicon-16.png` / `-32.png` | 16² / 32² | PNG | modern browsers |
| `icon.svg` | vector | SVG | scalable, `prefers-color-scheme` aware if needed |
| `apple-touch-icon.png` | 180² | PNG | iOS home screen; dark `night` background baked |
| `icon-192.png` / `icon-512.png` | 192² / 512² | PNG | manifest / maskable |

- **Background:** dark (`night`), monogram in `bone` — the mark must read on the OS's own light/dark chrome; use a maskable safe zone.
- **Priority:** **P0.** **Owner:** Designer (from monogram) → Engineer (manifest wiring).

**Reasoning.** The favicon is the smallest brand touchpoint and the first one cached; basing it on the single monogram keeps the identity coherent from a 16px tab to the Hero.

### 5.7 Project Screenshots / Establishing Visuals

**Purpose:** the dominant graded visual per world in the Showcase (`06 §3.2`).
**Current state:** real screenshots exist — SalHub (12), StrangerUs (5), NZH (4), ~2500px full-page. **They must be graded, cropped, and PII-scrubbed.**

| Field | Spec |
| --- | --- |
| Per world | **one establishing visual** (the cleanest, most dark-friendly screen) + tiered crops (§5.8) |
| Source | existing captures in `public/worlds/<slug>/` → move raws to `_source/` |
| Treatment | **graded into the room** (blacks→`night`, highlights warmed, optional vignette) so a bright UI never blows a hole in the dark (`01 §16`) |
| Dimensions | establishing served ~1600w (1×) / ~2400w (2×) inside its glass window |
| Format | AVIF + WebP |
| Quality | AVIF q≈52 / WebP q≈78 (UI detail must stay crisp) |
| Weight | ≤ ~220KB @2× AVIF per establishing |
| Priority | **P0** (the Showcase is the climax; needs all three) |
| Owner | Raheel (re-capture clean if needed) → Designer (grade/crop) → Engineer (export) |

**Production notes (grounded in the actual captures):**
- **Recommended establishing shots:** SalHub → the marketing hero ("Plan smarter. Host better events.") or "Grow your business" (dark-friendly, branded); StrangerUs → the map hero ("brings Users & Establishments together"); NZH → the mission hero ("safe and direct employment connection"). These read best in the dark; the **bright dashboards** (provider/admin/organizer consoles) are dense and light — reserve them for windowed close-ups, graded darker, or crops.
- **Consistency:** one locale per world (EN), consistent theme/density, brand logo visible in the establishing shot.
- **⚠ PII scrub:** the SalHub admin capture shows third-party emails (`m8911rohan@gmail.com`, `partner-provider@yopmail.com`) and the provider console shows a personal email — **blur/replace all non-Raheel PII and any real client data** before shipping (§7).

### 5.8 Art-Directed Crops

**Purpose:** per-tier framing so the subject stays legible on every frame (`11 §4.6`, `06`).
**Current state:** none — **must be produced from the establishing/beat sources.**

| Tier suffix | Frame | Crop intent |
| --- | --- | --- |
| `-lg` (STAGE/COMPACT) | wide | the establishing shot, full composition |
| `-md` (COLUMN) | squarer | tighter on the primary focal area |
| `-sm` (REEL) | portrait-ish | closest crop — one legible detail, no tiny UI |

- Delivered as `<source media>` variants; same grade across tiers.
- **Format/quality:** as §5.7. **Priority:** **P1** (STAGE ships first; `-md`/`-sm` follow). **Owner:** Designer.

**Reasoning.** CSS `object-fit: cover` on one wide image yields illegible slivers on a phone; art-directed crops per tier are the difference between "cinematic on every screen" and "squeezed" (`11 §1`). Producing them from the graded source keeps the grade identical.

### 5.9 Project Showcase Videos — **OPTIONAL**

**Purpose:** optional motion inside a world's glass window when motion genuinely beats a still (`06 §3.2`, `01 §17`).
**Current state:** **none in repo. Optional enhancement; the Showcase is complete on stills.**

| Field | Spec |
| --- | --- |
| Content | muted, short (~6–12s), **seamless loop**, real UI, graded to the room |
| Dimensions | match the window; ~1280w typical |
| Format | **AV1/VP9 in WebM** + **H.264/H.265 in MP4** fallback |
| Poster | required (`loop-poster.avif/webp`) — poster-first, video starts only in-view |
| Weight | ≤ ~1.5MB per loop (hard); prefer smaller |
| Priority | **P2 (optional)** |
| Owner | Raheel (screen-capture) → Designer (grade) → Engineer (encode/wire) |

**Production notes:** no audio track at all; `preload="none"`; one loop in memory at a time; `(prefers-reduced-data)` → poster only (`06 §10`). If a loop doesn't clearly beat the still, **don't produce it** (`01 §17`).

### 5.10 Case-Study Media (`/work/[slug]`)

**Purpose:** the three-beat close-ups + establishing for each deep case study (`06 §5.5`).
**Current state:** derivable from the existing screenshot sets.

| Field | Spec |
| --- | --- |
| Per world | establishing (reuse §5.7) + **3 composed close-ups** (`beat-1/2/3`) — macro crops of the interface |
| Format/quality/weight | as §5.7 |
| Loading | lazy (detail routes load on approach); not LCP |
| Priority | **P1** |
| Owner | Raheel (capture) → Designer (grade/crop) |

**Production notes:** each beat crop frames one decision/detail (tension → decision → resolution); graded; PII-scrubbed (§7). The case-study routes are reading documents — minimal motion, so stills suffice.

### 5.11 Device Mockups — **COMPONENT, not an asset**

The "machined glass window" (`01 §18`, `06 §3.2`) is **rendered in CSS/DOM** (a Slate/Smoke frame with a lit top edge), with the graded screenshot inside it. **No mockup image assets are produced** — no glossy phone/laptop PNGs (`01 §18`). Deliverable: the graded screenshot only (§5.7).

**Reasoning.** Rendering the frame in CSS keeps it on-brand (machined, not skeuomorphic), themeable, and weightless, and means the only asset is the real UI — exactly the "the interface is the hero, the frame is silent" rule.

### 5.12 Background Textures / Noise / Grain — **Lighting Assets**

**Purpose:** the one film grain over the entire product (`01 §16`, `03 §6`).
**Current state:** an inline SVG `feTurbulence` data-URI (V1). Acceptable; may formalize.

| Field | Spec |
| --- | --- |
| Form | one monochrome noise texture, ~**160×160** tile, fractal noise |
| Format | **inline SVG** (zero request — preferred) **or** tiny tiled PNG (~2–5KB) |
| Opacity | 2–3% (slightly stronger in the darkest scenes) |
| Behaviour | fixed overlay, **never animated**, one grain everywhere (`01 §16`) |
| Priority | **P0** (part of the base look) |
| Owner | Engineer (inline) / Designer (if a bespoke PNG is wanted) |

**Lighting assets proper:** **none.** The key/rim/ambient/glow are **shaders and CSS gradients**, not image files (`01 §11`, `03 §6`). No light PNGs, no lens-flare sprites, no gradient images. The shader's dither is procedural. **No production required.**

**Reasoning.** Keeping grain inline (no request) and lighting procedural (no files) is both a performance win and a brand guarantee — light can never be a "painted" asset that drifts from the shader.

### 5.13 Open Graph / Social Preview Images

**Purpose:** the link-preview card when the site (or a case study) is shared — the identity carried beyond the last pixel (`product vision §9`, `02 §9`).
**Current state:** none — **must be produced.**

| Asset | Dimensions | Aspect | Format | Content |
| --- | --- | --- | --- | --- |
| `og/home.png` | **1200 × 630** | 1.91:1 | PNG (or JPG) | portrait (graded) + name in Marquee, on `night`, one Sol accent |
| `og/work-<slug>.png` | 1200 × 630 | 1.91:1 | PNG/JPG | the world's graded establishing + Marquee title |

- **Format:** PNG or JPG (broad crawler compat; avoid AVIF/WebP for OG). **Weight:** ≤ ~300KB. **Quality:** high (it represents the brand).
- **Priority:** **P0** (home OG) / **P1** (per-work). **Owner:** Designer.
- **Also set:** `twitter:card = summary_large_image`, `og:image:alt`.

**Reasoning.** The share card is often the first impression of all — it must carry the exact grade and voices, or the "experience doesn't end at the last pixel" promise breaks. PNG/JPG because OG crawlers still under-support next-gen formats.

### 5.14 Fonts

**Purpose:** the three voices — **Marquee** (contrast serif), **Plate** (grotesk), **Console** (mono) (`01 §5`).
**Current state:** V1 used Archivo + JetBrains Mono via `next/font`; **V2 faces are a licensing decision (`01 §28`) — ⚠ unresolved.**

| Field | Spec |
| --- | --- |
| Faces | Marquee serif (display), Plate grotesk (text/UI), Console mono |
| Format | **woff2** (only), self-hosted or `next/font` |
| Subsetting | **Latin only** (site chrome is English — the projects' CJK/DE live inside screenshots, not the UI) |
| Weights | Marquee Regular(+Medium); Plate Regular+Medium; Console Regular — minimal (`01 §5.3`) |
| Loading | preload the above-the-fold faces (Marquee for the name, Plate for lines); `font-display: swap`; **metric-compatible fallbacks** so the Monumental name never layout-shifts |
| Priority | **P0** |
| Owner | Raheel (licensing) → Engineer (subset/host/preload) |

**Production notes:** ⚠ **licensing must be resolved before launch** — commercial display serifs (Söhne/Reckless/Canela-class) require a license; if undecided, ship a licensed/open stand-in and swap later (one config change, `01 §5.1`).

### 5.15 Icons

**Purpose:** the near-empty set — only where language fails (`01 §8`).
**Current state:** V1 centralised 3 (arrow-down, arrow-up-right, x). V2 adds a **menu** icon (mobile).

| Field | Spec |
| --- | --- |
| Set | `travel` (arrow-down), `external` (arrow-up-right), `close` (x), `menu` (mobile nav) — **~4 total** |
| Form | geometric line, **1.25px stroke** (normalized), `ion`/`bone` via `currentColor`, never filled, never Sol (`01 §8`) |
| Format | **inline SVG sprite** (no icon font, no per-icon requests) |
| Dimensions | 24 viewBox; rendered 16px inline / 20px standalone |
| Priority | **P0** (menu is needed for mobile nav) |
| Owner | Designer → Engineer (sprite) |

**Reasoning.** Four line icons as one inline sprite is the entire icon budget — anything more drifts toward the SaaS-dashboard look the brand refuses. The mobile `menu` is the only addition V2 strictly needs.

### 5.16 Illustrations — **NONE (prohibition)**

There are **no illustrations, spot graphics, blob shapes, 3D render props, or decorative vectors** in NOCTURNE (`01 §16`, §23.11). The only imagery is the portrait and the graded product screenshots. **No production; if proposed, reject.** (The optional engineering hairline in `05 §4.5` is a 1px rule, not an illustration.)

**Reasoning.** Stating the prohibition here stops "just a small illustration" from entering via the asset backlog — the closed set is the brand.

### 5.17 Résumé / CV · PDF Export · Email Signature — **OPTIONAL, not referenced by the design**

The design (`01`–`11`) **does not reference** a résumé, a downloadable PDF, or an email signature anywhere — Contact is a `mailto` ask with no résumé link (`09 §4`). These are **off-site collateral**, not homepage assets.

| Asset | Status | If pursued |
| --- | --- | --- |
| **Résumé / CV** | OPTIONAL — no home in the design | Adding a "Download CV" affordance is a **design amendment** (needs a home + a decision); content is ⚠ Raheel's real history (which is largely unconfirmed, per `08 §1`). |
| **PDF export** | OPTIONAL | If a CV exists, export as tagged, accessible PDF/UA, NOCTURNE-branded; ≤ ~400KB. |
| **Email signature** | OPTIONAL — brand-consistency touchpoint (`product vision §9`) | A plain-text or minimal-HTML signature (name · role · email · site), monogram optional; no image-heavy signature. |

**Priority:** **P2 (optional).** **Owner:** Raheel (content) → Designer (layout).

**Reasoning.** Per the explicit instruction not to invent assets the design never references, these are covered as *optional off-site collateral* and flagged as requiring a design amendment before they'd have a place — honest, and it prevents scope creep into a "download résumé" button the film was deliberately designed without.

---

## 6. Format & Compression Strategy

### 6.1 Images

- **Primary AVIF, fallback WebP**, via `<picture>` / `next/image`; **PNG only** as the Monumental portrait's last-resort alpha fallback.
- **Quality targets:** portrait AVIF q≈63 (crown asset — verify no banding in the dark dissolve); screenshots AVIF q≈52; OG PNG/JPG high.
- **Colour:** sRGB, stripped metadata (except sRGB profile).
- **CLS:** every image ships with intrinsic `width`/`height` (or a reserved aspect box) → CLS ≈ 0.

### 6.2 Video (optional, §5.9)

- **AV1/VP9 in WebM** (primary) + **H.264/H.265 MP4** (fallback); **no audio track**; `preload="none"`; poster required; in-view play; ≤1.5MB.

### 6.3 Poster frames

- Every optional loop has a graded poster (`loop-poster.avif/webp`) = the loop's first (or a chosen) frame, same grade; shown until play, and permanently under reduced-data/reduced-motion.

### 6.4 AVIF/WebP & MP4/WebM decision rule

- **UI/photographic stills → AVIF+WebP** (best compression, alpha).
- **OG cards → PNG/JPG** (crawler compat).
- **Motion → WebM(AV1/VP9)+MP4(H.264/H.265)**.
- **Marks/icons → SVG.**
- **Grain → inline SVG.**

**Reasoning.** Matching format to consumer (browser `<img>` vs OG crawler vs `<video>` vs vector) is what keeps weight minimal without breaking compatibility — AVIF everywhere would silently fail OG previews; PNG everywhere would blow the budget.

---

## 7. Accessibility Requirements

- **Alt text:** the **Hero portrait** carries a descriptive `alt` (its one introduction, `01 §21`); **every later portrait instance** is `alt=""`/`aria-hidden` (decorative repeat). **Establishing/beat visuals** carry meaningful `alt` describing the product/screen; **decorative crops/glass/grain** are `aria-hidden`.
- **PII scrubbing (hard requirement):** all third-party emails, names, phone numbers, IDs, and real client data in screenshots are **blurred or replaced with demo data** before shipping (grounded: the SalHub admin/provider captures contain real emails — §5.7). Raheel's own contact is acceptable where intended.
- **Text never baked into images** (except OG cards, which also set `og:image:alt`).
- **Contrast:** graded imagery must not reduce adjacent text below AA; local darkening (not a boxed scrim) protects text over busy screens (`01 §12`).
- **Reduced-data:** posters/stills replace video; heavy crops may serve smaller variants.

**Reasoning.** The PII scrub is both a legal/ethical necessity and a craft one — shipping a stranger's email in a portfolio screenshot is the opposite of the care the site claims; making it a hard asset-gate prevents it reaching production.

---

## 8. Performance Budgets

Restating the architecture's budgets as **asset gates** (`01 §1.3`; V1 architecture §10; `03 §11`).

| Budget | Target |
| --- | --- |
| **Hero portrait (LCP)** | ≤ ~160KB (Monumental @2× AVIF); preloaded; LCP ≤ 1.8s mid-tier mobile |
| **Above-the-fold image weight** | ≤ ~1.2MB critical |
| **Full homepage journey images** | ≤ ~4MB total |
| **Per establishing visual** | ≤ ~220KB @2× AVIF |
| **Per optional loop** | ≤ 1.5MB (hard); one in memory at a time |
| **Fonts** | subsetted woff2; preload only above-the-fold faces |
| **Icons** | one inline SVG sprite (~4 icons) |
| **Grain** | inline SVG (0 requests) |
| **CLS** | ≈ 0 (all media has reserved dimensions) |

**Reasoning.** Turning budgets into per-asset gates means an over-weight export is rejected at production, not discovered in a Lighthouse regression — the performance-as-aesthetic promise (`01 §1.3`) enforced at the source.

---

## 9. Engineering Implementation Notes

- **Serving:** `next/image` (or `<picture>` for art-directed crops) with `srcset`/`sizes` per tier (`11 §10`); AVIF+WebP negotiated automatically; PNG portrait fallback declared.
- **Portrait:** Monumental is `priority` + preload; others lazy; the `Portrait` pattern already maps scale → `sizes` (extend for the new exports).
- **Crops:** `<picture>` with `<source media="(max-width: …)">` pointing at `-sm`/`-md`/`-lg`; same `alt`.
- **Video (optional):** `<video muted playsinline preload="none" poster=…>` with `<source>` WebM then MP4; IntersectionObserver play/pause; unload off-screen; `(prefers-reduced-data)` guard.
- **Icons:** inline SVG sprite (`<svg><use href="#icon-…">`); `currentColor`; centralised (the existing `icons` primitive).
- **Fonts:** `next/font` (self-host, subset, `display:swap`) or `/public/fonts` + `@font-face` + `<link rel=preload>`; metric-compatible fallback stack per voice.
- **Favicons/manifest:** link the full set in `<head>` / `app` metadata; `theme-color` = `night`.
- **OG:** per-route `openGraph.images` (home + `/work/[slug]`); `twitter:card=summary_large_image`; `og:image:alt`.
- **Grain:** inline SVG in global CSS (current approach); never a network request.
- **Build:** content-hashed filenames, far-future cache headers, Brotli for text; raws in `_source/` excluded from the build.

**Reasoning.** Wiring notes tie each asset to its exact consumption mechanism (`next/image` vs `<picture>` vs `<video>` vs sprite vs `@font-face`), so the engineer never has to infer how an asset is meant to load — the guide and the code agree.

---

## 10. Responsive Asset Variants (summary)

| Asset | STAGE | COMPACT | COLUMN | REEL |
| --- | --- | --- | --- | --- |
| Portrait Monumental | ~1800² | ~1600² | width-fit | width-fit |
| Establishing | `-lg` | `-lg` | `-md` | `-sm` |
| Beat close-ups | full | full | `-md` | `-sm` or omit |
| Video loop | 1 max | 1 max | 1 or poster | **poster/still** default |
| Distant portrait | present | present | small/omit | omit |
| Sidebar identity | photo chip | photo chip | photo chip (48) | **monogram** |

(Per `11`. Art-directed crops, not CSS scaling.)

---

## 11. Production Checklist by Owner (quick view)

- **Photographer:** re-capture/up-res portrait to ≥1400² (§5.1).
- **Raheel:** clean re-captures of project screens (EN, demo data), consent for client marks/data, socials, licensing/CV decisions (§5.5, §5.7, §5.14, §5.16).
- **Designer:** portrait grade; monogram; favicons; logo treatments; screenshot grade + crops; case-study crops; OG cards (§5.2–§5.13).
- **Engineer:** exports; `<picture>`/`next/image`/`sizes`; sprite; fonts subset/preload; grain inline; OG metadata; PII-scrub verification gate; budget gates (§9).

---

## 12. Master Production Checklist (every asset before launch)

| # | Asset | Priority | Owner | Format | Dims / aspect | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Portrait master (graded) | **P0** | Photog→Designer | PNG/TIFF RGBA | ≥2000² · 1:1 | ⚠ re-export from 500² |
| 2 | Portrait exports (4 scales) | **P0** | Engineer | AVIF+WebP(+PNG) | per §5.3 | ☐ |
| 3 | Monogram RB (+mono) | **P0** | Designer | SVG | vector | ☐ new |
| 4 | Favicon set | **P0** | Designer→Eng | ICO/PNG/SVG | 16–512 | ☐ replace default |
| 5 | SalHub establishing (graded) | **P0** | Raheel→Designer | AVIF+WebP | ~1600–2400w | ⚠ grade+scrub |
| 6 | StrangerUs establishing | **P0** | Raheel→Designer | AVIF+WebP | ~1600–2400w | ⚠ grade |
| 7 | NZH establishing | **P0** | Raheel→Designer | AVIF+WebP | ~1600–2400w | ⚠ grade |
| 8 | Home OG card | **P0** | Designer | PNG/JPG | 1200×630 · 1.91:1 | ☐ new |
| 9 | Fonts (Marquee/Plate/Console) | **P0** | Raheel→Eng | woff2 | Latin subset | ⚠ licensing |
| 10 | Icon sprite (travel/external/close/menu) | **P0** | Designer→Eng | inline SVG | 24 viewBox | ☐ add menu |
| 11 | Film grain | **P0** | Engineer | inline SVG | 160² tile | ✓ (V1 inline) |
| 12 | Art-directed crops (`-md`/`-sm` ×3 worlds) | **P1** | Designer | AVIF+WebP | per tier | ☐ |
| 13 | Case-study close-ups (beat-1/2/3 ×3) | **P1** | Raheel→Designer | AVIF+WebP | per §5.10 | ☐ |
| 14 | Per-work OG cards (×3) | **P1** | Designer | PNG/JPG | 1200×630 | ☐ |
| 15 | Project logos (×3, treated) | **P1** | Raheel→Designer | SVG/PNG | ~24h | ⚠ rights; else omit |
| 16 | Showcase video loops (+posters) | **P2 opt** | Raheel→Designer→Eng | WebM+MP4 | window | ☐ optional |
| 17 | Résumé/CV + PDF | **P2 opt** | Raheel→Designer | PDF/UA | — | ⚠ not referenced; needs design amendment |
| 18 | Email signature | **P2 opt** | Raheel→Designer | text/HTML | — | ☐ optional |

**Launch gate:** all **P0** complete and **PII-scrubbed**; **P1** complete or gracefully degraded (crops fall back to `-lg`; logos fall back to Marquee wordmark; per-work OG falls back to home OG); **P2** optional.

**Reasoning.** One table with priority + owner + status is the single artifact a producer runs the launch from; encoding the graceful-degradation fallbacks (crop→`-lg`, logo→wordmark, work-OG→home-OG) means missing P1 assets never block launch — the site is designed to be complete at P0.

---

## 13. Open Questions & Decision Log

**Resolved (2026-07-24):**
- **Closed asset set:** portrait + graded real screenshots only; **no illustrations, no skeuomorphic mockups, no lighting image files, no stock people.** *(§2, §5.11, §5.15)*
- **Portrait ≥1400² (ideally 2000²) graded master**, exported to 4 scales; Monumental is LCP. *(§5.1–§5.3)*
- **Monogram** is the mobile/favicon identity; **project logos monochromed or omitted** (fall back to wordmark). *(§5.4, §5.5)*
- **AVIF+WebP** for stills, **PNG/JPG** for OG, **WebM+MP4** for optional video, **SVG** for marks/icons, **inline SVG** grain. *(§6)*
- **PII scrub is a hard launch gate.** *(§7)*
- **Résumé/CV/PDF/email-signature are OPTIONAL and not referenced by the design** — a "download CV" would be a design amendment. *(§5.17)*

**Open — ⚠ requires confirmation/production:**
- **Portrait re-shoot/up-res** to ≥1400² (current 500² insufficient). *(§5.1)*
- **Font licensing** for the three voices (`01 §28`). *(§5.14)*
- **Project mark usage rights** + clean re-captures with demo data (PII). *(§5.5, §5.7)*
- Whether **showcase video loops** are produced (default: no; stills ship). *(§5.9)*
- Whether a **CV/résumé** enters the design at all (default: no). *(§5.17)*
- Real **social handles** (for OG/Contact) — none exist yet (`09 §1.2`).

**Amendment protocol:** the closed-set philosophy (§2), the no-illustration/no-mockup rules (§5.11, §5.15), and the "optional off-site collateral" status of résumé/PDF/signature (§5.17) are asset-constitution items — changes are proposed here, dated; any new asset family must be referenced by a design document (`01`–`11`) first, or it doesn't ship.

---

*North star for this file: produce only what the film needs, and grade all of it into the room. One portrait, one monogram, three real products graded into the dark, a handful of line icons, three type voices, and a single grain — nothing stock, nothing illustrated, nothing skeuomorphic, no promise unkept and no stranger's data shipped. Every asset has a size, a format, a budget, and an owner; the site is complete at P0 and richer at P1.*
