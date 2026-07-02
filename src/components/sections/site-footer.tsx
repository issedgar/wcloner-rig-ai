import { RigWordmark } from "@/components/icons";

const CONNECT = [
  { label: "Twitter", href: "https://x.com/rig_code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/get-rig/" },
];

const LEGAL = [{ label: "Privacy Policy", href: "/privacy" }];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/40 py-16">
      <div className="rig-container">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <RigWordmark className="h-6 w-auto text-paper" />
            <p className="mt-5 max-w-[280px] text-[15px] leading-relaxed text-paper/45">
              Local-first AI for developers who refuse to be dependent on the cloud.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
              Connect
            </div>
            <ul className="mt-5 space-y-3">
              {CONNECT.map((l) => (
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line/30 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40 sm:flex-row sm:items-center">
          <span>© 2026 Rig AI Inc. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="size-2 bg-red" /> All systems local
          </span>
        </div>
      </div>
    </footer>
  );
}
