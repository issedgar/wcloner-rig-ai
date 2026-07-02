import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chalet = localFont({
  src: "../fonts/chalet_londonnineteensixty.woff2",
  variable: "--font-chalet",
  weight: "400 700",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../fonts/InstrumentSans-latin.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const chivoMono = localFont({
  src: "../fonts/ChivoMono-latin.woff2",
  variable: "--font-chivo",
  weight: "300 700",
  display: "swap",
});

const geistPixel = localFont({
  src: "../fonts/GeistPixel-Square.woff2",
  variable: "--font-pixel",
  weight: "400",
  display: "swap",
});

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='48' fill='%230a0a0a'/%3E%3Cg transform='translate(60 61) scale(0.835)' fill='%23f0ede6'%3E%3Cpath d='M162.809 89.412H82.684c-7.901 0-15.478 3.141-21.063 8.73-5.577 5.583-8.71 13.152-8.71 21.043v40.811h19.259V126.45c0-9.638.174-18.449.174-18.449h90.465V89.412Z'/%3E%3Cpath d='M162.808 118.61h-50.993c-7.901 0-15.478 3.141-21.063 8.731-5.577 5.582-8.71 13.151-8.71 21.043v11.613h22.867v-15.945c0-9.638 0-9.97 0-9.97h57.899V118.61Z'/%3E%3Cpath d='M162.809 146.002c-18.103 0-28.242-.006-46.345.002V160h46.345v-13.998Z'/%3E%3Cpath d='M162.809.003H70.886C52.08.003 34.045 7.476 20.75 20.777 7.464 34.07 0 52.095 0 70.889 0 99.286 0 140.767 0 159.997h15.785V67.714c0-14.457 0-26.177 0-26.177h147.027V0l-.003.003Z'/%3E%3Cpath d='M162.809 51.87H56.804c-7.901 0-15.478 3.141-21.063 8.731-5.577 5.582-8.71 13.151-8.71 21.043v78.353h14.785V96.318c0-9.638 0-17.449 0-17.449h120.993V51.867v.003Z'/%3E%3C/g%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL("https://rig.ai"),
  title: "Rig - Local-First AI Coding Assistant",
  description:
    "A complete AI coding agent that executes entirely on your machine. No API calls. No usage caps. No cloud dependency.",
  icons: { icon: favicon },
  openGraph: {
    title: "Rig - Local-First AI Coding Assistant",
    description:
      "A complete AI coding agent that executes entirely on your machine. No API calls. No usage caps. No cloud dependency.",
    images: ["/seo/rig-graph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rig - Local-First AI Coding Assistant",
    images: ["/seo/rig-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chalet.variable} ${instrumentSans.variable} ${chivoMono.variable} ${geistPixel.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
