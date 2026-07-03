import { Cog } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";
import type { Capability } from "@/types/content";

const CAPS: Capability[] = [
  {
    num: "01",
    title: "Entiende tu grafo de conocimiento.",
    body: "Construye un modelo conectado de notas, temas y relaciones para que el razonamiento ocurra entre documentos y siga tu forma de pensar.",
  },
  {
    num: "02",
    title: "Conecta ideas, evita duplicados.",
    body: "Vínculos que respetan el contexto, los límites de cada tema y el grafo de dependencias — reduciendo ruido y repeticiones.",
  },
  {
    num: "03",
    title: "Razona antes de responder.",
    body: "Los flujos Explorar → Planear → Ejecutar aseguran que cada paso se piense antes de sintetizar.",
  },
  {
    num: "04",
    title: "Ejecuta flujos complejos de conocimiento.",
    body: "De resúmenes a conexión de fuentes y redacción — coordina herramientas, búsqueda web y comandos según haga falta.",
  },
  {
    num: "05",
    title: "Aísla espacios de trabajo.",
    body: "Cada agente corre en su propio espacio: los experimentos son seguros, los flujos en paralelo no chocan y los cambios quedan aislados hasta que los integras.",
  },
  {
    num: "06",
    title: "Corre a máxima velocidad.",
    body: "Motor de inferencia propio en Rust optimizado para CUDA y Metal — hasta 144 tokens por segundo en hardware de consumo.",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<Cog size={13} />}>Capacidades</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            Tu máquina, sin límites.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c, i) => (
            <Reveal
              key={c.num}
              delay={(i % 3) * 80}
              className="chamfer border border-line/70 bg-paper/[0.02] p-8 transition-colors hover:bg-paper/[0.05]"
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
