import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { IntroRig } from "@/components/sections/intro-rig";
import { WorkOffline } from "@/components/sections/work-offline";
import { BenefitsStrip } from "@/components/sections/benefits-strip";
import { Approach } from "@/components/sections/approach";
import { Capabilities } from "@/components/sections/capabilities";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Terminal } from "@/components/sections/terminal";
import { EarlyAccess } from "@/components/sections/early-access";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <IntroRig />
      <div className="section-divider" />
      <WorkOffline />
      <BenefitsStrip />
      <div className="section-divider" />
      <Approach />
      <div className="section-divider" />
      <Capabilities />
      <StatsStrip />
      <Terminal />
      <div className="section-divider" />
      <EarlyAccess />
      <div className="section-divider" />
      <Faq />
      <div className="section-divider" />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
