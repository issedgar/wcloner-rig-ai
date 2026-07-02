"use client";

import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

const ITEMS: FaqItem[] = [
  {
    num: "01",
    question: "What is Rig?",
    answer:
      "Rig is a local-first AI coding assistant that runs entirely on your machine. It uses a modified open-source model post-trained exclusively for code, executed by a custom Rust inference engine optimized for Apple Silicon. Rig delivers fast and low latency agentic coding, requires no API calls, has no usage caps, collects zero telemetry, and costs $0 per token. All code and files stay on your machine. Rig currently supports macOS with Linux and Windows support planned.",
  },
  {
    num: "02",
    question: "What Model does Rig use?",
    answer:
      "Rig uses a customized open source model. We modified it to work exclusively with the Rig agent harness, context engine, and tools. This allows us to shrink the model's total footprint without losing intelligence or coding capability.",
  },
  {
    num: "03",
    question: "What are the Hardware Requirements?",
    answer:
      "Rig is currently optimized to run on Apple Silicon devices using M2 or later with at least 32GB of RAM. We hope to continue optimizing to reduce the memory requirements and one day work well with only 16GB of RAM. Support for Window and Linux are coming soon.",
  },
  {
    num: "04",
    question: "How Does Rig Compare to Large Cloud Models?",
    answer:
      "Rig's model is still in development so we do not have benchmarks available yet. Our early tests indicate the Rig model will be on par with state of the art models thanks to the combination of our context engine and post training pipeline.",
  },
  {
    num: "05",
    question: "Can Rig Search the Web?",
    answer:
      "Yes, Rig has all the same tools you'd expect from a coding agent, including web search, file read / write, plan mode, and more.",
  },
  {
    num: "06",
    question: "How will Rig be Priced?",
    answer:
      "Rig's pricing model is planned to be a flat monthly or annual subscription on par with other coding agents but completely unlimited and offline.",
  },
  {
    num: "07",
    question: "Will Rig Collect my Data?",
    answer:
      "No, Rig is committed to being the most secure and private coding agent available. Our telemetry will be limited to a license check with a grace period. Your code and conversations will never leave your machine.",
  },
  {
    num: "08",
    question: "When Will Rig be Available?",
    answer:
      "We are rolling out closed beta access now. Keep an eye on your email for an invite to the test builds and slack community. Wider release is planned for Q3 2026. We're focused on creating the best possible coding assistant capable of supporting real software engineers on their most important projects.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<HelpCircle size={13} />}>FAQ</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.25rem,5.5vw,64px)]">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-[820px] border-t border-line/40">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.num} className="border-b border-line/40">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-6 text-left transition-opacity hover:opacity-80"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-[12px] tracking-[0.15em] text-red">
                    {item.num}
                  </span>
                  <span className="flex-1 font-display text-[clamp(1.15rem,2vw,22px)] font-bold text-paper">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-paper/50 transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[680px] pl-9 text-[15px] leading-relaxed text-paper/45">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
