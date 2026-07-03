import { Mail } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { ChamferLink } from "@/components/ui/chamfer-button";
import { Reveal } from "@/components/ui/reveal";

export function EarlyAccess() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="rig-container flex flex-col items-center text-center">
        <BadgePill icon={<Mail size={13} />}>Acceso anticipado</BadgePill>
        <Reveal>
          <h2 className="scanlines section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            ehc casi está listo.
          </h2>
        </Reveal>
        <p className="mt-5 max-w-[440px] text-[17px] leading-relaxed text-paper/45">
          Estamos invitando a personas para que lo usen con conocimiento real y
          ayuden a dar forma a lo que sale.
        </p>

        <div className="mt-10 flex w-full max-w-[560px] flex-col items-stretch gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="tu@correo.com"
            aria-label="Correo electrónico"
            className="chamfer flex-1 border border-line/70 bg-paper/[0.03] px-5 py-3.5 font-mono text-[13px] text-paper placeholder:text-paper/30 focus:border-red/60 focus:outline-none"
          />
          <ChamferLink href="/en-construccion" variant="red" className="justify-center">
            Unirme a la lista
          </ChamferLink>
        </div>

        <div className="mt-4 flex w-full max-w-[400px] items-center gap-3 border border-line/70 bg-paper/[0.02] px-4 py-3 text-left">
          <span className="size-5 shrink-0 border border-line/80" />
          <span className="flex-1 text-[13px] text-paper/60">Verifica que eres humano</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/30">
            Cloudflare
          </span>
        </div>
      </div>
    </section>
  );
}
