import { attorneys } from "@/data/attorneys";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle } from "lucide-react";

const values = [
  "Confidencialidad absoluta en todos los casos",
  "Comunicación clara y transparente con cada cliente",
  "Defensa estratégica orientada a resultados concretos",
  "Honorarios justos y acordados sin sorpresas",
];

export function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Firm description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          <div>
            <SectionHeader title="Nuestra Firma" subtitle="" centered={false} />
            <p className="mt-6 text-chocolate-mid leading-relaxed">
              Pinzón &amp; Pinzón Asociados nació de la visión de construir una firma
              de abogados que combinara la experiencia de una práctica consolidada con
              la cercanía y dedicación que cada cliente merece. Con más de dos décadas
              en el mercado panameño, hemos construido una reputación sólida basada en
              resultados, ética y excelencia.
            </p>
            <p className="mt-4 text-chocolate-mid leading-relaxed">
              Nuestro equipo multidisciplinario trabaja de forma coordinada para ofrecer
              soluciones integrales en las principales ramas del derecho, atendiendo
              tanto a personas naturales como a empresas nacionales e internacionales.
            </p>
            <ul className="mt-8 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-chocolate-dark text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-chocolate p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="font-heading text-2xl font-bold text-white mb-8">
              Por qué elegirnos
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "2003", label: "Año de fundación" },
                { value: "+20", label: "Años en el mercado" },
                { value: "+1,200", label: "Casos resueltos" },
                { value: "6", label: "Áreas de práctica" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-4xl font-bold text-gold">{s.value}</div>
                  <div className="text-white/60 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/70 text-sm italic leading-relaxed">
                &ldquo;Nuestra misión es que cada cliente se sienta respaldado, informado
                y representado con la excelencia y el compromiso que su caso merece.&rdquo;
              </p>
              <p className="mt-3 text-gold text-sm font-semibold">
                — Dr. Manuel Pinzón, Socio Principal
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <SectionHeader
          title="Nuestro Equipo"
          subtitle="Profesionales especializados con amplia trayectoria en sus respectivas áreas del derecho panameño."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="bg-white border border-chocolate/10 p-8 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-chocolate flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                <span className="font-heading text-xl font-bold text-gold group-hover:text-chocolate-dark transition-colors duration-300">
                  {attorney.initials}
                </span>
              </div>
              <div className="h-0.5 w-8 bg-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-chocolate-dark">
                {attorney.name}
              </h3>
              <p className="text-gold text-sm font-semibold mt-1">{attorney.title}</p>
              <p className="text-chocolate-mid text-xs uppercase tracking-wider mt-1 mb-4">
                {attorney.specialty}
              </p>
              <p className="text-chocolate-mid text-sm leading-relaxed">{attorney.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
