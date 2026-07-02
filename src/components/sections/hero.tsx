import { RigMark } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";
import { SiteHeader } from "./site-header";

const TICKER = [
  "Zero telemetry",
  "Native inference",
  "100% offline",
  "Your hardware, your rules",
  "No tokens, no limits",
  "Specialized SLM",
  "Unbounded context",
];

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

      {/* faint wordmark watermark */}
      <RigMark className="pointer-events-none absolute -right-16 top-1/2 h-[130%] w-auto -translate-y-1/2 text-ink/[0.06]" />

      <div className="rig-container relative pt-[150px] pb-14">
        <h1 className="display-hero text-[clamp(3.25rem,9.2vw,112px)]">
          On-device AI coding.
          <br />
          No cloud. No limits.
        </h1>
        <p className="mt-8 max-w-[480px] text-[18px] font-semibold leading-[1.6] text-ink">
          A complete coding agent that executes entirely on your machine. No API
          calls. No usage caps.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ChamferLink href="/waitlist" variant="dark">
            Join Waitlist
          </ChamferLink>
          <ChamferLink href="#intro-rig" variant="outline" className="ring-ink/30 text-ink">
            Our Approach
          </ChamferLink>
        </div>
      </div>

      <div className="relative border-t border-ink/15 py-4">
        <TickerRow />
      </div>
    </section>
  );
}
