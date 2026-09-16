# Portfolio Saurabh — Cinematic

A dark cyberpunk/editorial portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS and Lenis.

## Signature engine

`src/components/CinematicVideo.tsx` uses a non-looping, non-autoplaying HTML5 video as an interactive visual timeline. Document scroll becomes the target `currentTime`, a per-frame LERP smooths seeking, and pointer position applies a 3D camera/parallax transform. The layer also adds a vignette, mouse-tracking red glow, SVG grain and 1px scanlines.

## 3D systems

- `src/components/sections/Certifications.tsx` — draggable cylindrical gallery with responsive radius, camera pull-back geometry, inertia damping (`0.945`) and auto-spin fallback.
- `src/components/sections/Experience.tsx` — bilateral experience/education timeline with a central neon-red spine and pulsing nodes.
- `src/components/sections/Hero.tsx` — editorial Oswald typography, dual-tone gradient treatment, telemetry metrics and magnetic CTA interaction.
- `src/components/LenisProvider.tsx` — smooth scrolling without `overflow:hidden` on `html` or `body`.

## Design tokens

- `--bg: #030303`
- `--surface: #090909`
- `--accent-red: #c40024`
- `--bright-red: #e0002a`
- `--text: #f5f5f5`

## Assets

Place the supplied 5–10 second background video at:

`public/video/portfolio-background.mp4`

Optional supplied portrait:

`public/images/profile.png`

The source video is intended to be H.264 MP4 and muted/no-audio for efficient background playback and frame seeking.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```
