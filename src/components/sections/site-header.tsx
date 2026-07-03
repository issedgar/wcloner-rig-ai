import Link from "next/link";
import { EhcWordmark, GithubIcon } from "@/components/icons";
import { ChamferLink } from "@/components/ui/chamfer-button";

const REPO_URL = "https://github.com/issedgar/wcloner-rig-ai";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-ink">
      <div className="rig-container flex h-[86px] items-center justify-between">
        <Link href="/" aria-label="ehc inicio" className="flex items-center">
          <EhcWordmark className="text-[26px] text-ink" />
        </Link>
        <nav className="flex items-center gap-7">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositorio en GitHub"
            className="flex items-center text-ink transition-opacity hover:opacity-70"
          >
            <GithubIcon size={22} />
          </a>
          <ChamferLink href="/en-construccion" variant="dark">
            Acceso anticipado
          </ChamferLink>
        </nav>
      </div>
    </header>
  );
}
