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
    label: "Ilimitado",
    title: "Quita el medidor",
    body: "Reorganiza todo tu archivo. Explora una idea todo el día. Lanza búsquedas y síntesis sin pensar en el costo.",
  },
  {
    label: "Privacidad",
    title: "Corta la conexión",
    body: "Tus notas, apuntes y archivos nunca salen de tu equipo. Ni anonimizados. Ni agregados. Ni enviados.",
  },
  {
    label: "Latencia",
    title: "Deja de esperar",
    body: "Sin viaje de ida y vuelta a un centro de datos. La inferencia ocurre en tu equipo, en milisegundos.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="border-t border-line/70 py-4">
      <div className="rig-container grid divide-y divide-line/70 md:grid-cols-3 md:divide-x md:divide-y-0">
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
