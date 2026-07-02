import { MonitorOff, WifiOff, X } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";

function GlobeWire() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="pointer-events-none absolute inset-0 h-full w-full text-paper/10"
      fill="none"
      aria-hidden
    >
      <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="0.6" />
      {[40, 90, 140, 190].map((rx) => (
        <ellipse key={rx} cx="250" cy="250" rx={rx} ry="200" stroke="currentColor" strokeWidth="0.5" />
      ))}
      {[-160, -80, 0, 80, 160].map((dy) => (
        <ellipse
          key={dy}
          cx="250"
          cy={250 + dy}
          rx={Math.sqrt(Math.max(0, 200 * 200 - dy * dy))}
          ry={30}
          stroke="currentColor"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}

function SeverStep() {
  return (
    <div className="flex flex-col items-center gap-1 py-1.5" aria-hidden>
      <span className="dotted-v h-3 w-px" />
      <X size={16} className="text-red" />
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red/80">
        Severed
      </span>
      <span className="dotted-v h-3 w-px" />
    </div>
  );
}

export function WorkOffline() {
  return (
    <section className="relative overflow-hidden py-4">
      <div className="rig-container grid items-center gap-10 md:grid-cols-2">
        {/* diagram */}
        <div className="relative flex min-h-[440px] items-center justify-center">
          <GlobeWire />
          <div className="relative flex flex-col items-center font-mono">
            <div className="border border-dashed border-line-dim px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-paper/35">
              Cloud Servers
            </div>
            <SeverStep />
            <div className="relative border border-line bg-ink px-8 py-4 text-center">
              <span className="absolute -left-11 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-line/60 bg-ink text-red">
                <WifiOff size={15} />
              </span>
              <div className="text-[12px] font-semibold uppercase tracking-[0.15em] text-paper">
                Your Machine
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-green">
                ✓ Rig model active
              </div>
            </div>
            <SeverStep />
            <div className="border border-dashed border-line-dim px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-paper/35">
              Nothing Leaves
            </div>
          </div>
        </div>

        {/* copy */}
        <Reveal>
          <BadgePill icon={<MonitorOff size={13} />}>Offline</BadgePill>
          <h2 className="section-title mt-6 text-left text-[clamp(2.25rem,5vw,64px)]">
            Work offline
          </h2>
          <p className="mt-5 max-w-[440px] text-[17px] leading-relaxed text-paper/45">
            Flights. Spotty Wi-Fi. Network outages. Nothing stops your flow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
