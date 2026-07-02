"use client";

import { useEffect, useRef, useState } from "react";
import { ScanSearch } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { cn } from "@/lib/utils";
import type { ApproachPanel, ApproachStep } from "@/types/content";

const STEPS: ApproachStep[] = [
  {
    num: "Step 01",
    title: "A focused model, trained specifically for coding.",
    body: [
      "Every parameter in the model is dedicated to coding, planning, tool use, and structured edits. The entire training process is focused on engineering work.",
      "By narrowing the domain, we concentrate intelligence where it matters — deeper reasoning, better code, sharper tool use.",
    ],
  },
  {
    num: "Step 02",
    title: "Full intelligence, compressed to fit your machine.",
    body: [
      "The model is compressed to run efficiently on consumer machines — carefully preserving the reasoning patterns that matter most.",
      "The result is an 8 GB model that fits comfortably in memory on a MacBook. Full reasoning. Local execution. Zero cost per token.",
    ],
  },
  {
    num: "Step 03",
    title: "A custom runtime, engineered for Apple Silicon.",
    body: [
      "The model runs through a custom inference engine optimized specifically for Apple Silicon. Model, context engine, and tools are designed as a single coordinated system.",
      "That tight integration is what makes local execution fast, reliable, and practical.",
    ],
  },
];

const PANELS: ApproachPanel[] = [
  {
    title: "Training Focus",
    rows: [
      { label: "Rig", bar: "████████████████████", value: "100%", tone: "green" },
      { label: "Most AI models", bar: "███░░░░░░░░░░░░░░░░░", value: "~15–20%", tone: "dim" },
    ],
    note: [
      "General-purpose models spread capacity across chat, translation, creative writing, and more.",
      "Rig dedicates every parameter to engineering.",
    ],
  },
  {
    title: "Model size (memory required)",
    rows: [
      { label: "Cloud models", bar: "████████████████████", value: "200+ GB", tone: "dim" },
      { label: "Open source", bar: "██████░░░░░░░░░░░░░░", value: "28–140 GB", tone: "dim" },
      { label: "Rig", bar: "█░░░░░░░░░░░░░░░░░░░", value: "8 GB", tone: "green" },
    ],
    note: ["Fits in 16 GB unified memory.", "Accuracy loss: <0.3%"],
  },
  {
    title: "First token latency",
    rows: [
      { label: "Rig", bar: "█░░░░░░░░░░░░░░░░░░░", value: "300 ms", tone: "green" },
      { label: "Cloud APIs", bar: "████████████████████", value: "400–1,000 ms", tone: "dim" },
    ],
    note: ["Cost per 1K tokens", "Rig $0.00 · Cloud APIs $0.01–0.06"],
  },
];

function Panel({ panel }: { panel: ApproachPanel }) {
  return (
    <div className="font-mono text-[13px] leading-relaxed">
      <div className="text-[12px] uppercase tracking-[0.15em] text-paper/45">{panel.title}</div>
      <div className="mt-6 space-y-2">
        {panel.rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 whitespace-nowrap">
            <span className="w-28 shrink-0 text-paper/70">{r.label}</span>
            <span
              className={cn(
                "tracking-[-1px]",
                r.tone === "green" ? "text-green" : "text-paper/30"
              )}
            >
              {r.bar}
            </span>
            <span className={cn(r.tone === "green" ? "text-green" : "text-paper/55")}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
      {panel.note && (
        <div className="mt-6 space-y-2 text-[12px] text-paper/40">
          {panel.note.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function Approach() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<ScanSearch size={13} />}>Our Approach</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">Purpose beats scale.</h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-paper/45">
            Rig is a closed system — model, context, tools, and inference —
            engineered together for one job: real coding work.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* steps */}
          <div>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                data-idx={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={cn(
                  "border-t border-line/40 py-10 transition-opacity duration-500 first:border-t-0",
                  active === i ? "opacity-100" : "opacity-35"
                )}
              >
                <div className="h-px w-full bg-line/30">
                  <div
                    className={cn(
                      "h-px bg-red transition-all duration-500",
                      active === i ? "w-full" : "w-0"
                    )}
                  />
                </div>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-red">
                  {step.num}
                </div>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,2.6vw,30px)] font-bold leading-tight text-paper">
                  {step.title}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-paper/45">
                  {step.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* sticky illustration */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="grid-bg chamfer relative overflow-hidden border border-red/30 bg-ink/60 p-8">
                <Panel panel={PANELS[active]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
