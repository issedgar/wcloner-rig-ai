import { Cog } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";
import type { Capability } from "@/types/content";

const CAPS: Capability[] = [
  {
    num: "01",
    title: "Understands your architecture.",
    body: "Builds a connected model of modules, dependencies, and relationships so reasoning happens across files and aligns with your architecture.",
  },
  {
    num: "02",
    title: "Tracks relationships, prevents breakage.",
    body: "Edits that respect function contracts, type boundaries, and dependency graphs — reducing bugs and regressions.",
  },
  {
    num: "03",
    title: "Strategizes before acting.",
    body: "Explore → Plan → Execute workflows ensure multiple steps are reasoned out before changes occur.",
  },
  {
    num: "04",
    title: "Executes complex coding workflows.",
    body: "From refactors to test generation to feature builds — coordinate tools, code edits, web search, and commands as needed.",
  },
  {
    num: "05",
    title: "Isolates agent sandboxes.",
    body: "Each agent runs in its own workspace so experiments are safe, parallel workflows don't clash, and code changes stay isolated until you merge them.",
  },
  {
    num: "06",
    title: "Runs at full speed.",
    body: "Custom Rust inference engine optimized for CUDA and Metal — delivering up to 144 tokens per second on consumer hardware.",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<Cog size={13} />}>Capabilities</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            Your machine, unleashed.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c, i) => (
            <Reveal
              key={c.num}
              delay={(i % 3) * 80}
              className="chamfer border border-line/50 bg-paper/[0.02] p-8 transition-colors hover:bg-paper/[0.05]"
            >
              <div className="font-mono text-[12px] tracking-[0.15em] text-red">[ {c.num} ]</div>
              <h3 className="mt-4 font-display text-[24px] font-bold leading-tight text-paper">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/45">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
