# rig.ai — Page Topology

Single-page dark landing (Astro original → cloned to Next.js). Scroll height ~9286px @ 1440. Container max-width **1200px**, centered. Body bg `--ink`, text `--paper`.

## Section order (top → bottom)

| # | Component | Class (original) | Interaction | Notes |
|---|-----------|------------------|-------------|-------|
| 0 | `SiteHeader` | `.site-header` | static (NOT sticky) | logo (wordmark) left, `Blog` + `Get Early Access` chamfer btn right. Scrolls away with hero. |
| 1 | `Hero` | `.hero` | static + ticker | RED bg. Chalet 112px "On-device AI coding. No cloud. No limits.". Ink text. Join Waitlist (dark chamfer) + Our Approach (outline chamfer). Bottom marquee ticker. |
| 2 | `ProblemSection` | `.signal-section.problem-section` | scroll-reveal | Chalet heading, radar/eye SVG left, 2×2 problem cards right, red waveform transition. Section label pill "✕ THE PROBLEM". |
| 3 | `IntroRig` | `#intro-rig.offline-section.three-col` | scroll-reveal | "✓ INTRODUCING RIG" pill, Chalet "Everything local. Own your AI.", flow diagram (CLOUD ✕→ YOUR MACHINE {CODE→RIG→RESPONSE green} ✕→ TELEMETRY). |
| 4 | `WorkOffline` | `.offline-section` | scroll-reveal | Globe wireframe + vertical severed diagram left; "▭ OFFLINE" pill + Chalet "Work offline" right. |
| 5 | `BenefitsStrip` | `.offline-section.three-col` | static | 3 cols: UNLIMITED / PRIVACY / LATENCY, each icon-pill + Chalet head + body. |
| 6 | `Approach` | `.how-section` | **scroll-driven stepper** | "◎ OUR APPROACH" pill, Chalet "Purpose beats scale." Left = STEP 01/02/03 (active brightens); right = sticky shader card, ASCII bar-chart per step. |
| 7 | `Capabilities` | `.illust-features` | scroll-reveal | "⚙ CAPABILITIES" pill, Chalet "Your machine, unleashed.", 3×2 card grid [01]–[06]. |
| 8 | `StatsStrip` | `.stats-strip` | static | 4 cols: LATENCY 0ms / PRIVACY 100% / COST $0 / UPTIME Local. |
| 9 | `Terminal` | `.terminal-section.grid-bg` | typing anim | "▤ ENGINEERED INTELLIGENCE" pill, Chalet "Built for control freaks", terminal window w/ RIG ASCII + boot log + typing; flanking dotted-line labels (3 left, 3 right). Grid bg. |
| 10 | `EarlyAccess` | `.early-access` | static form | "✉ EARLY ACCESS" pill, Chalet "Rig is almost ready.", email input + JOIN WAITLIST chamfer btn + Turnstile stub. |
| 11 | `Faq` | `.faq-section` | accordion | "◔ FAQ" pill, Chalet "Frequently asked questions.", 8 accordion items (01–08). |
| 12 | `CtaSection` | `.cta-section` | static | RigMark glyph, Chalet "Break free from big AI", red chamfer "Request Early Access ↵", subtitle. cta-vortex.png red tunnel bg. |
| 13 | `Footer` | `footer` | static | wordmark + tagline, CONNECT / LEGAL columns, divider, © row + "▪ ALL SYSTEMS LOCAL". |

Between flow sections there are `.section-divider` 1px lines (border-dim).

## Assets
- `public/assets/rig-wordmark.svg` — header/footer logo
- `public/assets/cta-vortex.png` / `.webp` — CTA red vortex bg
- RigMark glyph SVG (163×160, 5 paths) → `RigMark` icon component
- Fonts (self-hosted woff2): Chalet, Instrument Sans, Chivo Mono, Geist Pixel Square
- Favicon: inline SVG (ink rounded square + rig glyph)
