import type { Stat } from "@/types/content";

const STATS: Stat[] = [
  { label: "Latencia", value: "0ms", note: "Sin viaje de ida y vuelta" },
  { label: "Privacidad", value: "100%", note: "Aislado por diseño" },
  { label: "Costo / Token", value: "$0", note: "Tu GPU, tus tokens" },
  { label: "Disponibilidad", value: "Local", note: "Sin dependencia de la nube" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-line/70">
      <div className="rig-container grid divide-y divide-line/70 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
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
