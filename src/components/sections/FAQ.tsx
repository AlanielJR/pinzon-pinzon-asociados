"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccordionItem } from "@/components/ui/AccordionItem";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Preguntas Frecuentes"
          subtitle="Resolvemos las dudas más comunes antes de que comience su proceso legal."
        />

        <div className="mt-12 bg-white border border-chocolate/10 divide-y-0 px-8">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))}
        </div>

        <p className="mt-8 text-center text-chocolate-mid text-sm">
          ¿No encontró su respuesta?{" "}
          <a
            href="#contacto"
            className="text-gold hover:text-gold-light font-medium transition-colors"
          >
            Escríbanos directamente →
          </a>
        </p>
      </div>
    </section>
  );
}
