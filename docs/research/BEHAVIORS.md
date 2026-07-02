# rig.ai — Behaviors

## Global
- **Header:** `position: static`, NOT sticky. Scrolls away with hero. No scroll-shrink.
- **No smooth-scroll library** (no Lenis/Locomotive). Native scroll.
- **Reveal on scroll:** sections/children get `.is-visible` via IntersectionObserver → fade-up (opacity 0→1, translateY). Approximate with a reusable `useReveal` hook (IntersectionObserver, once).
- **Scanline/glitch texture** over big Chalet headings (subtle horizontal lines + occasional flicker). Decorative — approximate with a repeating-linear-gradient overlay; skip per-letter glitch keyframes.

## Per-section
- **Hero ticker** (`.hero-ticker-inner`): CSS marquee, `animation: ticker 18s linear infinite` (translateX -50%, duplicated content). Items separated by `•`: Zero telemetry • Native inference • 100% offline • Your hardware, your rules • No tokens, no limits • Specialized SLM • Unbounded context.
- **Problem radar/eye:** decorative animated SVG (concentric circles + red pupil). Static-ish; subtle flicker. Rebuild as SVG.
- **Intro/Offline diagrams:** green dotted connectors = active local links; red ✕ = severed. Small drift animation on nodes (optional).
- **Approach stepper (scroll-driven):** `.how-step.active` toggles as each step scrolls to viewport center (IntersectionObserver). Active step = full opacity + progress-fill bar; inactive dimmed (~0.35). Right `.shader-overlay-card` swaps `.card-content.active` to match active step. 3 states:
  - 01 Training Focus — Rig 100% vs Most AI ~15–20%
  - 02 Model size — Cloud 200+GB / Open source 28–140GB / Rig 8GB
  - 03 First token latency — Rig 300ms vs Cloud 400–1000ms; cost $0 vs $0.01–0.06
- **Terminal:** boot log types in; last line `λ refactor aut▮` with blinking cursor. Approximate with a CSS/JS typing effect or static + blinking caret.
- **FAQ:** click to expand/collapse accordion (one or many open). Rotate caret, animate height.
- **Buttons/cards hover:** subtle opacity/lift; chamfer buttons keep clip-path. cards lighten bg slightly.

## Design tokens (from :root)
- `--red` oklch(.6329 .2075 31.49) = rgb(237,70,45) · `--red-glow` /40%
- `--blue` oklch(.5312 .260273 266.7713) · `--green` oklch(.8003 .1821 151.71)
- `--ink` oklch(.1448 0 0) ≈ #0a0a0a · `--paper` oklch(.9465 .0099 87.47) = rgb(240,237,230)
- `--border` = paper /14% · `--chamfer` 14px
- text-muted paper/.4, tertiary /.35, faint /.25
- Fonts: **Chalet** (display, 700), **Instrument Sans** (body 400/600), **Chivo Mono** (labels/mono), **Geist Pixel Square** (pixel accents)
- `.badge`/pill: Chivo Mono 12px, ls 1.44px, uppercase, red text, border 1px rgba(237,70,45,.2), bg rgba(10,10,10,.88), pad 8×16, gap 9.6, flex
- `.section-title`: Chalet 56px/51.52 lh, ls -1.68px, paper, centered
- hero h1: Chalet 112px/98.56 lh, ls -4.48px, weight 700
- chamfer clip-path: `polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)`
