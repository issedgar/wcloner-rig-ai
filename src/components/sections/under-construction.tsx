import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { EhcWordmark } from "@/components/icons";
import { BadgePill } from "@/components/ui/badge-pill";
import { ChamferLink } from "@/components/ui/chamfer-button";

export function UnderConstruction() {
  return (
    <main className="grid-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* faint watermark */}
      <EhcWordmark className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[38vw] leading-none text-paper/[0.03]" />

      <div className="relative flex flex-col items-center">
        <Link href="/" aria-label="ehc inicio">
          <EhcWordmark className="text-[28px] text-paper" />
        </Link>

        <div className="mt-10">
          <BadgePill icon={<Wrench size={13} />}>En construcción</BadgePill>
        </div>

        <h1 className="section-title mt-8 text-[clamp(2.75rem,8vw,88px)]">
          Estamos
          <br />
          construyendo esto.
        </h1>

        <p className="mt-6 max-w-[440px] text-[17px] leading-relaxed text-paper/45">
          Esta parte de ehc todavía está en obra. Guardamos cada detalle en local —
          vuelve pronto.
        </p>

        <ChamferLink href="/" variant="red" className="mt-10 gap-2">
          <ArrowLeft size={15} /> Volver al inicio
        </ChamferLink>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/25">
          ehc://localhost · building...
        </p>
      </div>
    </main>
  );
}
