import { EhcWordmark } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";
import { SiteHeader } from "./site-header";

const TICKER = [
  "Cero telemetría",
  "Inferencia nativa",
  "100% offline",
  "Tus datos, tus reglas",
  "Sin cuotas",
  "Modelo local",
  "Contexto ilimitado",
];

function HeroCoreFigure() {
  return (
    <svg
      viewBox="0 0 560 560"
      className="hero-core-figure pointer-events-none absolute right-[2vw] top-1/2 z-[2] hidden h-[520px] w-[520px] -translate-y-1/2 text-ink lg:block xl:right-[5vw]"
      fill="none"
      aria-hidden
    >
      <g className="hero-core-shell" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="280 42 494 166 494 414 280 538 66 414 66 166" />

        <path d="M280 42V538" />
        <path d="M66 166L494 414" />
        <path d="M494 166L66 414" />
        <path d="M280 144V432" />
        <path d="M156 216L404 360" />
        <path d="M404 216L156 360" />
      </g>

      <g className="hero-core-inner" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="280 144 404 216 404 360 280 432 156 360 156 216" />
        <polygon points="280 226 332 256 332 316 280 346 228 316 228 256" />
      </g>

      <g className="hero-core-grid" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M173 104V476" />
        <path d="M387 104V476" />
        <path d="M66 290H156" />
        <path d="M404 290H494" />
        <path d="M173 228L280 166L387 228" />
        <path d="M173 352L280 414L387 352" />
        <path d="M120 197L280 104L440 197" />
        <path d="M120 383L280 476L440 383" />
      </g>

      <g className="hero-core-core" fill="currentColor">
        <polygon className="hero-core-core-top" points="280 226 332 256 280 286 228 256" />
        <polygon className="hero-core-core-left" points="228 256 280 286 280 346 228 316" />
        <polygon className="hero-core-core-right" points="332 256 280 286 280 346 332 316" />
      </g>

      <g className="hero-core-signal" stroke="currentColor" strokeLinecap="round">
        <path d="M280 42V226" />
        <path d="M66 166L228 256" />
        <path d="M494 414L332 316" />
      </g>

      <g className="hero-core-nodes" fill="currentColor">
        <rect x="275" y="37" width="10" height="10" />
        <rect x="489" y="161" width="10" height="10" />
        <rect x="489" y="409" width="10" height="10" />
        <rect x="275" y="533" width="10" height="10" />
        <rect x="61" y="409" width="10" height="10" />
        <rect x="61" y="161" width="10" height="10" />
        <rect x="275" y="139" width="10" height="10" />
        <rect x="399" y="211" width="10" height="10" />
        <rect x="399" y="355" width="10" height="10" />
        <rect x="275" y="427" width="10" height="10" />
        <rect x="151" y="355" width="10" height="10" />
        <rect x="151" y="211" width="10" height="10" />
      </g>
    </svg>
  );
}

function TickerRow() {
  return (
    <div className="ticker-track" aria-hidden>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0">
          {TICKER.map((item) => (
            <span
              key={item}
              className="flex items-center whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink"
            >
              {item}
              <span className="mx-6 text-ink/40">•</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-red text-ink">
      <SiteHeader />

      {/* enriched background: scanlines + AI core + glitching ehc watermark */}
      <div className="hero-scanlines" />
      <HeroCoreFigure />
      <EhcWordmark className="watermark-flash pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[34vw] leading-none text-ink/[0.06]" />

      <div className="rig-container relative z-10 pt-[150px] pb-14">
        <h1 className="display-hero text-[clamp(3rem,8.4vw,104px)]">
          Tu conocimiento.
          <br />
          En tu máquina.
        </h1>
        <p className="mt-8 max-w-[500px] text-[18px] font-semibold leading-[1.6] text-ink">
          Un segundo cerebro con IA que vive entero en tu equipo. Sin llamadas a
          la nube. Sin cuotas.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ChamferLink href="/en-construccion" variant="dark">
            Unirme a la lista
          </ChamferLink>
          <ChamferLink href="#intro-ehc" variant="outline" className="ring-ink/30 text-ink">
            Nuestro enfoque
          </ChamferLink>
        </div>
      </div>

      <div className="relative border-t border-ink/15 py-4">
        <TickerRow />
      </div>
    </section>
  );
}
