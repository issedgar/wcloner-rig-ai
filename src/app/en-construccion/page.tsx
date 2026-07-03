import type { Metadata } from "next";
import { UnderConstruction } from "@/components/sections/under-construction";

export const metadata: Metadata = {
  title: "En construcción — ehc",
};

export default function EnConstruccionPage() {
  return <UnderConstruction />;
}
