import { Clock, Infinity as InfinityIcon, Lock } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";
import type { Benefit } from "@/types/content";

const ICONS = [
  <InfinityIcon key="u" size={13} />,
  <Lock key="p" size={13} />,
  <Clock key="l" size={13} />,
];

const BENEFITS: Benefit[] = [
  {
    label: "Unlimited",
    title: "Remove the meter",
    body: "Refactor the whole codebase. Riff on an idea all day. Run agent loops without thinking about cost.",
  },
  {
    label: "Privacy",
    title: "Sever the connection",
    body: "Your code, keystrokes, and files never leave your machine. Not anonymized. Not aggregated. Not sent.",
  },
  {
    label: "Latency",
    title: "Stop waiting",
    body: "No round-trip to a data center. Inference happens on your machine, in single-digit milliseconds.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="border-t border-line/40 py-4">
      <div className="rig-container grid divide-y divide-line/40 md:grid-cols-3 md:divide-x md:divide-y-0">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.label} delay={i * 90} className="px-2 py-10 text-center md:px-8">
            <div className="flex justify-center">
              <BadgePill icon={ICONS[i]}>{b.label}</BadgePill>
            </div>
            <h3 className="section-title mt-5 text-[clamp(1.9rem,3vw,34px)]">{b.title}</h3>
            <p className="mx-auto mt-3 max-w-[300px] text-[15px] leading-relaxed text-paper/45">
              {b.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
