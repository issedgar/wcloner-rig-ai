"use client";

import { Mail } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { ChamferButton } from "@/components/ui/chamfer-button";
import { Reveal } from "@/components/ui/reveal";

export function EarlyAccess() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="rig-container flex flex-col items-center text-center">
        <BadgePill icon={<Mail size={13} />}>Early Access</BadgePill>
        <Reveal>
          <h2 className="scanlines section-title mt-8 text-[clamp(2.5rem,6vw,72px)]">
            Rig is almost ready.
          </h2>
        </Reveal>
        <p className="mt-5 max-w-[420px] text-[17px] leading-relaxed text-paper/45">
          We&apos;re inviting engineers to run it on real code and help shape what
          ships.
        </p>

        <form
          className="mt-10 flex w-full max-w-[560px] flex-col items-stretch gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="you@company.com"
            aria-label="Email address"
            className="chamfer flex-1 border border-line/50 bg-paper/[0.03] px-5 py-3.5 font-mono text-[13px] text-paper placeholder:text-paper/30 focus:border-red/60 focus:outline-none"
          />
          <ChamferButton type="submit" variant="red">
            Join Waitlist
          </ChamferButton>
        </form>

        <div className="mt-4 flex w-full max-w-[400px] items-center gap-3 border border-line/40 bg-paper/[0.02] px-4 py-3 text-left">
          <span className="size-5 shrink-0 border border-line/60" />
          <span className="flex-1 text-[13px] text-paper/60">Verify you are human</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/30">
            Cloudflare
          </span>
        </div>
      </div>
    </section>
  );
}
