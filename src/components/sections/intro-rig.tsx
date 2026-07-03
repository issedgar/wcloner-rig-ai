import { Check, X } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Reveal } from "@/components/ui/reveal";

function DiagramBox({
  label,
  active,
  className,
  children,
}: {
  label?: string;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative border px-6 py-4 text-center ${
        active ? "border-line/80 bg-ink" : "border-dashed border-line-dim"
      } ${className ?? ""}`}
    >
      {label && (
        <span className="absolute -top-2.5 left-4 bg-ink px-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

function SeverMark() {
  return (
    <div className="flex flex-col items-center gap-1 py-2" aria-hidden>
      <span className="dotted-v h-4 w-px" />
      <X size={18} className="text-red" />
      <span className="dotted-v h-4 w-px" />
    </div>
  );
}

export function IntroRig() {
  return (
    <section id="intro-ehc" className="relative overflow-hidden py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<Check size={13} />}>Presentamos ehc</BadgePill>
          <Reveal>
            <h2 className="scanlines section-title mt-10 text-[clamp(2.5rem,6.4vw,76px)]">
              Todo local.
              <br />
              Dueño de tu mente digital.
            </h2>
          </Reveal>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-paper/45">
            Un segundo cerebro con IA que corre entero en tu propio hardware. Sin
            límites de uso. Sin dependencia de la nube.
          </p>
        </div>

        {/* flow diagram */}
        <Reveal className="mx-auto mt-16 flex max-w-[860px] flex-col items-center font-mono">
          <DiagramBox className="w-48">
            <span className="text-[11px] uppercase tracking-[0.2em] text-paper/35">
              Nube
            </span>
          </DiagramBox>

          <SeverMark />

          <DiagramBox label="Tu equipo" active className="w-full">
            <div className="flex flex-col items-stretch gap-4 py-2 sm:flex-row sm:items-center">
              <div className="flex-1 border border-line/80 px-4 py-4">
                <div className="text-[12px] font-semibold tracking-[0.1em] text-paper">
                  TUS NOTAS
                </div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-paper/35">
                  APUNTES · ARCHIVOS
                </div>
              </div>

              <span className="dotted-h-green mx-auto h-px w-8 shrink-0 sm:w-10" />

              <div className="flex-1 border border-line/80 px-4 py-4">
                <div className="font-pixel text-[15px] tracking-[0.35em] text-paper">
                  EHC
                </div>
                <div className="mt-1 flex items-center justify-center gap-1 text-[10px] tracking-[0.12em] text-green">
                  <Check size={11} /> INFERENCIA LOCAL
                </div>
                <div className="mt-3 flex justify-center gap-3 border-t border-line/70 pt-2 text-[9px] tracking-[0.15em] text-paper/30">
                  <span>GPU</span>
                  <span>ÍNDICE</span>
                  <span>MODELO</span>
                </div>
              </div>

              <span className="dotted-h-green mx-auto h-px w-8 shrink-0 sm:w-10" />

              <div className="flex-1 border border-line/80 px-4 py-4">
                <div className="text-[12px] font-semibold tracking-[0.1em] text-paper">
                  RESPUESTA
                </div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-green">
                  &lt;300ms · EN EQUIPO
                </div>
              </div>
            </div>
          </DiagramBox>

          <SeverMark />

          <DiagramBox className="w-48">
            <span className="text-[11px] uppercase tracking-[0.2em] text-paper/35">
              Telemetría
            </span>
          </DiagramBox>
        </Reveal>
      </div>
    </section>
  );
}
