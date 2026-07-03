"use client";

import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

const ITEMS: FaqItem[] = [
  {
    num: "01",
    question: "¿Qué es ehc?",
    answer:
      "ehc es un segundo cerebro con IA local-first que corre entero en tu máquina. Usa un modelo de código abierto modificado, post-entrenado para trabajar con tu conocimiento, ejecutado por un motor de inferencia propio en Rust optimizado para Apple Silicon. ehc ofrece búsqueda y síntesis ágil y de baja latencia, sin llamadas a API, sin topes de uso, con cero telemetría y a $0 por token. Todas tus notas y archivos se quedan en tu equipo. Hoy funciona en macOS, con Linux y Windows en camino.",
  },
  {
    num: "02",
    question: "¿Qué modelo usa ehc?",
    answer:
      "ehc usa un modelo de código abierto personalizado. Lo modificamos para trabajar en exclusiva con el agente, el motor de contexto y las herramientas de ehc. Eso nos permite reducir el tamaño total del modelo sin perder inteligencia ni capacidad.",
  },
  {
    num: "03",
    question: "¿Cuáles son los requisitos de hardware?",
    answer:
      "Hoy ehc está optimizado para dispositivos Apple Silicon con M2 o superior y al menos 32 GB de RAM. Seguimos optimizando para reducir el requisito de memoria y algún día funcionar bien con solo 16 GB. Soporte para Windows y Linux muy pronto.",
  },
  {
    num: "04",
    question: "¿Cómo se compara ehc con los grandes modelos en la nube?",
    answer:
      "El modelo de ehc sigue en desarrollo, así que aún no tenemos benchmarks. Nuestras pruebas tempranas indican que estará a la altura de los modelos de última generación gracias a la combinación de nuestro motor de contexto y el pipeline de post-entrenamiento.",
  },
  {
    num: "05",
    question: "¿ehc puede buscar en la web?",
    answer:
      "Sí. ehc tiene todas las herramientas que esperas de un agente, incluida búsqueda web, lectura y escritura de archivos, modo plan y más.",
  },
  {
    num: "06",
    question: "¿Cómo se cobrará ehc?",
    answer:
      "El modelo de precios planeado es una suscripción mensual o anual plana, a la par de otros agentes, pero completamente ilimitada y offline.",
  },
  {
    num: "07",
    question: "¿ehc recopilará mis datos?",
    answer:
      "No. ehc se compromete a ser el asistente más seguro y privado disponible. Nuestra telemetría se limitará a una verificación de licencia con periodo de gracia. Tus notas y conversaciones nunca saldrán de tu equipo.",
  },
  {
    num: "08",
    question: "¿Cuándo estará disponible ehc?",
    answer:
      "Estamos abriendo acceso beta cerrado ahora. Revisa tu correo por una invitación a las builds de prueba y la comunidad. El lanzamiento amplio se planea para el Q3 2026. Nos enfocamos en crear el mejor asistente posible para acompañar tu conocimiento más importante.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      <div className="rig-container">
        <div className="flex flex-col items-center text-center">
          <BadgePill icon={<HelpCircle size={13} />}>FAQ</BadgePill>
          <h2 className="section-title mt-8 text-[clamp(2.25rem,5.5vw,64px)]">
            Preguntas frecuentes.
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-[820px] border-t border-line/70">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.num} className="border-b border-line/70">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-6 text-left transition-opacity hover:opacity-80"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-[12px] tracking-[0.15em] text-red">
                    {item.num}
                  </span>
                  <span className="flex-1 font-display text-[clamp(1.15rem,2vw,22px)] font-bold text-paper">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-paper/50 transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[680px] pl-9 text-[15px] leading-relaxed text-paper/45">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
