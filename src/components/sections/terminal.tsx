"use client";

import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import type { TerminalLabel } from "@/types/content";

const RIG_ASCII = `██████╗  ██╗ ██████╗
██╔══██╗ ██║ ██╔════╝
██████╔╝ ██║ ██║  ███╗
██╔══██╗ ██║ ██║   ██║
██║  ██║ ██║ ╚██████║
╚═╝  ╚═╝ ╚═╝  ╚═════╝`;

const LEFT: TerminalLabel[] = [
  { title: "Custom Model", sub: "Optimized for consumer hardware" },
  { title: "Inference", sub: "Cross-OS using Rust" },
  { title: "Context Graph", sub: "Repo-wide code understanding" },
];

const RIGHT: TerminalLabel[] = [
  { title: "Terminal UI", sub: "Built in Rust and blazing fast" },
  { title: "Heavily Tuned", sub: "Consistent tool calls and plan use" },
  { title: "Opinionated", sub: "Focused on code correctness" },
];

const TYPE = "refactor auth middleware";

function useTypewriter(text: string) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let i = 0;
    let dir = 1;
    const id = setInterval(() => {
      i += dir;
      if (i >= text.length) dir = -1;
      if (i <= 0) dir = 1;
      setN(i);
    }, 160);
    return () => clearInterval(id);
  }, [text]);
  return text.slice(0, n);
}

function SideLabels({ items, side }: { items: TerminalLabel[]; side: "left" | "right" }) {
  return (
    <div className="hidden flex-col justify-center gap-16 lg:flex">
      {items.map((it) => (
        <div
          key={it.title}
          className={`flex items-center gap-3 ${side === "left" ? "flex-row-reverse text-right" : "text-left"}`}
        >
          <span className="size-1.5 shrink-0 rounded-full bg-line" />
          <span className={`h-px w-10 shrink-0 ${side === "left" ? "dotted-h-green opacity-40" : "dotted-h-green opacity-40"}`} />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/80">
              {it.title}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/30">
              {it.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Terminal() {
  const typed = useTypewriter(TYPE);

  return (
    <section className="grid-bg relative overflow-hidden py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<SlidersHorizontal size={13} />}>Engineered Intelligence</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            Built for control freaks
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <SideLabels items={LEFT} side="left" />

          {/* terminal window */}
          <div className="chamfer mx-auto w-full max-w-[620px] border border-line/50 bg-[#0d0d0d] shadow-2xl">
            <div className="flex items-center justify-between border-b border-line/40 px-4 py-3">
              <div className="flex gap-2">
                {["#3a3a3a", "#3a3a3a", "#3a3a3a"].map((c, i) => (
                  <span key={i} className="size-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-mono text-[11px] tracking-[0.15em] text-paper/40">
                RIG://LOCALHOST · OFFLINE
              </span>
              <span className="size-2 rounded-full bg-red" />
            </div>

            <div className="px-6 py-6 font-mono text-[13px] leading-relaxed">
              <div className="text-paper/85">
                <span className="text-red">λ</span> rig init
              </div>
              <pre className="my-4 select-none text-[9px] leading-[1.1] text-paper/25 sm:text-[11px]">
                {RIG_ASCII}
              </pre>
              <div className="space-y-1 text-paper/50">
                <div>&gt; Scanning hardware...</div>
                <div>&gt; Found M4 · 16GB RAM</div>
                <div>
                  &gt; Loading RIG Model <span className="text-red">OK</span>
                </div>
                <div>&gt; Indexing 2,418 files · 87,102 symbols</div>
              </div>
              <div className="mt-4 text-paper/85">
                <span className="text-green">✓</span> Ready. Network:{" "}
                <span className="text-red">OFF</span> · Telemetry:{" "}
                <span className="text-red">OFF</span>
              </div>
              <div className="mt-4 text-paper/85">
                <span className="text-red">λ</span> {typed}
                <span className="caret ml-0.5 align-middle" />
              </div>
            </div>
          </div>

          <SideLabels items={RIGHT} side="right" />
        </div>
      </div>
    </section>
  );
}
