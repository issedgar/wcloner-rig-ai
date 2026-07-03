import { EhcWordmark } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";

function CtaDataAperture() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className="cta-data-aperture pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(72vw,720px)] min-h-[420px] w-full select-none text-red"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="cta-aperture-glow" cx="50%" cy="62%" r="44%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="38%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cta-aperture-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="52%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.34" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#cta-aperture-fade)" opacity="0.5" />
      <ellipse cx="800" cy="610" rx="640" ry="260" fill="url(#cta-aperture-glow)" />

      <g className="cta-aperture-grid" stroke="currentColor" strokeLinecap="round">
        {[-540, -420, -300, -180, -60, 60, 180, 300, 420, 540].map((offset) => (
          <path key={`l-${offset}`} d={`M${800 + offset} 900L800 430`} />
        ))}
        {[520, 610, 700, 790, 880].map((y) => (
          <path key={`h-${y}`} d={`M${120 + (y - 520) * 1.4} ${y}H${1480 - (y - 520) * 1.4}`} />
        ))}
      </g>

      <g className="cta-aperture-shell" stroke="currentColor" strokeLinejoin="round">
        <polygon points="800 386 1176 560 800 734 424 560" />
        <polygon points="800 442 1054 560 800 678 546 560" />
        <polygon points="800 498 934 560 800 622 666 560" />
        <path d="M424 560L800 900L1176 560" />
        <path d="M546 560L800 790L1054 560" />
        <path d="M666 560L800 676L934 560" />
      </g>

      <g className="cta-aperture-core" fill="currentColor">
        <polygon points="800 498 934 560 800 622 666 560" />
        <polygon points="666 560 800 622 800 690 666 626" />
        <polygon points="934 560 800 622 800 690 934 626" />
      </g>

      <g className="cta-aperture-nodes" fill="currentColor">
        <rect x="794" y="380" width="12" height="12" />
        <rect x="1170" y="554" width="12" height="12" />
        <rect x="794" y="728" width="12" height="12" />
        <rect x="418" y="554" width="12" height="12" />
        <rect x="1048" y="554" width="12" height="12" />
        <rect x="540" y="554" width="12" height="12" />
        <rect x="794" y="784" width="12" height="12" />
      </g>
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-40 text-center">
      <CtaDataAperture />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink via-ink/70 to-transparent" />

      <div className="rig-container relative z-10 flex flex-col items-center">
        <EhcWordmark className="text-4xl text-red" />
        <h2 className="display-hero mt-8 text-[clamp(3rem,9vw,110px)] text-paper">
          Libérate
          <br />
          de la gran IA
        </h2>
        <ChamferLink href="/en-construccion" variant="red" className="mt-10 px-10 py-5 text-sm">
          Solicita acceso anticipado ↵
        </ChamferLink>
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.15em] text-paper/40">
          Sin tarjeta. Sin medidor.
        </p>
      </div>
    </section>
  );
}
