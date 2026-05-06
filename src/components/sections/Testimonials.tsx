import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Lo que Dicen Nuestros Clientes"
          subtitle="La confianza de quienes nos han elegido es nuestro mayor reconocimiento."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-cream border border-chocolate/10 p-8 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-heading text-7xl text-gold/20 leading-none absolute top-4 left-6 select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              <p className="text-chocolate-mid text-sm leading-relaxed relative z-10 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-chocolate/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-chocolate flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-bold">
                    {t.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-chocolate-dark text-sm">
                    {t.name}
                  </p>
                  <p className="text-chocolate-mid text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
          {[
            "Colegio Nacional de Abogados de Panamá",
            "Asociación de Abogados de Panamá",
            "Inter-American Bar Association",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-chocolate-mid text-xs font-medium tracking-wider uppercase"
            >
              <div className="w-4 h-4 border border-chocolate-mid rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
