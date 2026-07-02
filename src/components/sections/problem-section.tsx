import { X } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";
import type { ProblemCard } from "@/types/content";

const CARDS: ProblemCard[] = [
  {
    label: "Data Extraction",
    num: "001",
    title: "They train on your code.",
    body: "Every prompt. Every file. Every fix.\nIt flows through infrastructure you don't control — improving systems they want to use to replace you.",
  },
  {
    label: "Artificial Scarcity",
    num: "002",
    title: "They meter your ambition.",
    body: "Slowdowns, overages, caps.\nRight when you're deep in a sprint, the meter decides you've had enough.",
  },
  {
    label: "Silent Downgrades",
    num: "003",
    title: "They change the model.",
    body: "They silently downgrade to cheaper models during peak load. Full price, degraded experience.",
  },
  {
    label: "Cloud Dependency",
    num: "004",
    title: "They control your flow.",
    body: "Every completion makes a round trip across the internet.\nThousands of tiny interruptions, every single day.",
  },
];

function RadarEye() {
  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[380px] text-paper/25" fill="none">
      {[40, 80, 120, 160].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.6" />
      ))}
      {/* crosshair corner ticks */}
      {[
        [40, 40, 70, 40],
        [40, 40, 40, 70],
        [360, 40, 330, 40],
        [360, 40, 360, 70],
        [40, 360, 70, 360],
        [40, 360, 40, 330],
        [360, 360, 330, 360],
        [360, 360, 360, 330],
      ].map((l, i) => (
        <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="currentColor" strokeWidth="0.8" />
      ))}
      {/* scan dots */}
      <circle cx="245" cy="130" r="2" fill="currentColor" />
      <circle cx="120" cy="250" r="2.5" fill="currentColor" />
      <circle cx="300" cy="280" r="1.6" fill="currentColor" />
      {/* eye almond */}
      <path d="M120 200 Q200 150 280 200 Q200 250 120 200 Z" stroke="currentColor" strokeWidth="1" />
      {/* pupil */}
      <circle cx="200" cy="200" r="14" className="text-red" fill="currentColor" />
    </svg>
  );
}

function Waveform() {
  const bars = Array.from({ length: 60 }, (_, i) => {
    const h = 4 + Math.round(28 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.3)));
    return h;
  });
  return (
    <div className="flex items-end justify-center gap-[3px] pt-16" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} className="w-[6px] bg-red/80" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="signal-section relative overflow-hidden py-24">
      <div className="rig-container">
        <div className="flex justify-center">
          <BadgePill icon={<X size={13} />}>The Problem</BadgePill>
        </div>

        <Reveal className="mt-12">
          <h2 className="scanlines display-hero text-[clamp(2.5rem,6.6vw,80px)] text-paper">
            You don&apos;t own your AI.
            <br />
            And you&apos;re being watched.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line/60 md:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)]">
          <div className="relative flex items-center justify-center bg-ink p-10">
            <RadarEye />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/25">
              Monitoring Active
            </span>
          </div>

          <div className="grid bg-line/60 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal
                key={card.num}
                delay={i * 80}
                className="flex flex-col gap-3 bg-ink p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                    {card.label}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-paper/25">
                    {card.num}
                  </span>
                </div>
                <h3 className="font-display text-[26px] font-bold leading-tight text-paper">
                  {card.title}
                </h3>
                <p className="whitespace-pre-line text-[15px] leading-relaxed text-paper/45">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Waveform />
      </div>
    </section>
  );
}
