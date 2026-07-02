import type { Stat } from "@/types/content";

const STATS: Stat[] = [
  { label: "Latency", value: "0ms", note: "No round-trip required" },
  { label: "Privacy", value: "100%", note: "Air-gapped by design" },
  { label: "Cost / Token", value: "$0", note: "Your GPU, your tokens" },
  { label: "Uptime", value: "Local", note: "No dependency on cloud" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-line/40">
      <div className="rig-container grid divide-y divide-line/40 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-6 py-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-red">
              {s.label}
            </div>
            <div className="mt-3 font-display text-[40px] font-bold leading-none text-paper">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] text-paper/40">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
