# Portfolio Saurabh — Cinematic

A production-oriented Next.js 14 App Router portfolio with a dark cyberpunk/editorial visual system.

## Signature interaction

`src/components/CinematicVideo.tsx` maps document scroll to a non-looping HTML5 video timeline and uses LERP seeking for smooth frame interpolation. Pointer position adds a subtle 3D camera/parallax transform. Vignette, dynamic red tracking glow, SVG grain and scanlines complete the cinematic layer.

## Stack

- Next.js 14 + App Router
- TypeScript
- Tailwind CSS
- Lenis smooth scrolling
- CSS 3D transforms

## Assets

Add the supplied MP4 at `public/video/portfolio-background.mp4`.

Optional supplied portrait: `public/images/profile.png`.

The GitHub connector can create and edit the source files, but binary uploads from the chat sandbox are not exposed by the repository API used here.

## Run

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm start
```
