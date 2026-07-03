import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/geist";

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='48' fill='%230a0a0a'/%3E%3Ctext x='128' y='140' font-family='Arial,Helvetica,sans-serif' font-size='108' font-weight='700' fill='%2300a1ff' text-anchor='middle' dominant-baseline='central'%3Eehc%3C/text%3E%3C/svg%3E";

const TITLE = "ehc — Tu segundo cerebro con IA, 100% local";
const DESCRIPTION =
  "Un segundo cerebro con IA que vive entero en tu equipo. Sin llamadas a la nube. Sin cuotas. Sin telemetría.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: favicon },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
