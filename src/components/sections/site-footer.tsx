import { EhcWordmark } from "@/components/icons";

const CONNECT = [
  { label: "Twitter", href: "https://x.com/hc_carrillo", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edgar-h-c-188b05310",
    external: true,
  },
];

const LEGAL = [{ label: "Aviso de privacidad", href: "/en-construccion", external: false }];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 py-16">
      <div className="rig-container">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <EhcWordmark className="text-3xl text-paper" />
            <p className="mt-5 max-w-[280px] text-[15px] leading-relaxed text-paper/45">
              IA local-first para quienes se niegan a entregar su conocimiento a la nube.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Conecta
            </div>
            <ul className="mt-5 space-y-3">
              {CONNECT.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Legal
            </div>
            <ul className="mt-5 space-y-3">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line/60 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40 sm:flex-row sm:items-center">
          <span>© 2026 ehc. Todos los derechos reservados.</span>
          <span className="flex items-center gap-2">
            <span className="size-2 bg-red" /> Todo local
          </span>
        </div>
      </div>
    </footer>
  );
}
