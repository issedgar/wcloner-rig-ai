"use client";

import { useEffect, useRef, useState } from "react";
import { ScanSearch } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { cn } from "@/lib/utils";
import type { ApproachPanel, ApproachStep } from "@/types/content";

const STEPS: ApproachStep[] = [
  {
    num: "Paso 01",
    title: "Un modelo enfocado, entrenado para tu conocimiento.",
    body: [
      "Cada parámetro del modelo se dedica a organizar, conectar y razonar sobre tus notas. Todo el entrenamiento se enfoca en el trabajo del conocimiento.",
      "Al acotar el dominio, concentramos la inteligencia donde importa — razonamiento más profundo, mejores conexiones, síntesis más aguda.",
    ],
  },
  {
    num: "Paso 02",
    title: "Inteligencia completa, comprimida para tu equipo.",
    body: [
      "El modelo se comprime para correr con eficiencia en equipos de consumo — preservando con cuidado los patrones de razonamiento que más importan.",
      "El resultado es un modelo de 8 GB que cabe cómodo en memoria en una MacBook. Razonamiento completo. Ejecución local. Cero costo por token.",
    ],
  },
  {
    num: "Paso 03",
    title: "Un runtime a medida, diseñado para Apple Silicon.",
    body: [
      "El modelo corre en un motor de inferencia propio optimizado específicamente para Apple Silicon. Modelo, motor de contexto y herramientas se diseñan como un solo sistema coordinado.",
      "Esa integración estrecha es lo que hace la ejecución local rápida, fiable y práctica.",
    ],
  },
];

const PANELS: ApproachPanel[] = [
  {
    title: "Enfoque de entrenamiento",
    rows: [
      { label: "ehc", bar: "████████████████████", value: "100%", tone: "green" },
      { label: "Otros modelos", bar: "███░░░░░░░░░░░░░░░░░", value: "~15–20%", tone: "dim" },
    ],
    note: [
      "Los modelos de propósito general reparten su capacidad entre chat, traducción, escritura creativa y más.",
      "ehc dedica cada parámetro a tu conocimiento.",
    ],
  },
  {
    title: "Tamaño del modelo (memoria)",
    rows: [
      { label: "Modelos en la nube", bar: "████████████████████", value: "200+ GB", tone: "dim" },
      { label: "Código abierto", bar: "██████░░░░░░░░░░░░░░", value: "28–140 GB", tone: "dim" },
      { label: "ehc", bar: "█░░░░░░░░░░░░░░░░░░░", value: "8 GB", tone: "green" },
    ],
    note: ["Cabe en 16 GB de memoria unificada.", "Pérdida de precisión: <0.3%"],
  },
  {
    title: "Latencia del primer token",
    rows: [
      { label: "ehc", bar: "█░░░░░░░░░░░░░░░░░░░", value: "300 ms", tone: "green" },
      { label: "APIs en la nube", bar: "████████████████████", value: "400–1.000 ms", tone: "dim" },
    ],
    note: ["Costo por 1K tokens", "ehc $0.00 · APIs en la nube $0.01–0.06"],
  },
];

function Panel({ panel }: { panel: ApproachPanel }) {
  return (
    <div className="font-mono text-[13px] leading-relaxed">
      <div className="text-[12px] uppercase tracking-[0.15em] text-paper/45">{panel.title}</div>
      <div className="mt-6 space-y-2">
        {panel.rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 whitespace-nowrap">
            <span className="w-36 shrink-0 text-paper/70">{r.label}</span>
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
          <BadgePill icon={<ScanSearch size={13} />}>Nuestro enfoque</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            El propósito vence a la escala.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-paper/45">
            ehc es un sistema cerrado — modelo, contexto, herramientas e
            inferencia — diseñados juntos para un solo trabajo: tu conocimiento.
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
                  "border-t border-line/70 py-10 transition-opacity duration-500 first:border-t-0",
                  active === i ? "opacity-100" : "opacity-35"
                )}
              >
                <div className="h-px w-full bg-line/60">
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
