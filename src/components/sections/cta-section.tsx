import Image from "next/image";
import { RigMark } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-40 text-center">
      {/* red vortex backdrop */}
      <Image
        src="/assets/cta-vortex.webp"
        alt=""
        aria-hidden
        width={1600}
        height={900}
        priority={false}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full select-none opacity-90"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink via-ink/70 to-transparent" />

      <div className="rig-container relative z-10 flex flex-col items-center">
        <RigMark className="h-9 w-auto text-red" />
        <h2 className="display-hero mt-8 text-[clamp(3rem,9vw,110px)] text-paper">
          Break free
          <br />
          from big AI
        </h2>
        <ChamferLink href="/waitlist" variant="red" className="mt-10 px-10 py-5 text-sm">
          Request Early Access ↵
        </ChamferLink>
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.15em] text-paper/40">
          No credit card. No usage meter.
        </p>
      </div>
    </section>
  );
}
