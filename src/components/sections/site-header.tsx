import Link from "next/link";
import { RigWordmark } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-ink">
      <div className="rig-container flex h-[86px] items-center justify-between">
        <Link href="/" aria-label="Rig home" className="flex items-center">
          <RigWordmark className="h-[22px] w-auto" />
        </Link>
        <nav className="flex items-center gap-8">
          <a
            href="/blog"
            className="font-sans text-[15px] text-ink/80 transition-opacity hover:opacity-70"
          >
            Blog
          </a>
          <ChamferLink href="/waitlist" variant="dark">
            Get Early Access
          </ChamferLink>
        </nav>
      </div>
    </header>
  );
}
