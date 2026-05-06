import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  "Más de 20 años de experiencia",
  "Primera consulta gratuita",
  "Resultados comprobados en Panamá",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chocolate"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c9a84c 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #263310 0%, transparent 50%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-chocolate to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 text-gold text-sm font-medium tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          Firma de Abogados · Ciudad de Panamá
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Experiencia Legal{" "}
          <span className="text-gold italic">Sólida</span>{" "}
          a su Servicio
        </h1>

        <div className="mt-6 h-0.5 w-20 bg-gold mx-auto" />

        <p className="mt-6 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Pinzón &amp; Pinzón Asociados es una firma de abogados con amplia trayectoria
          en Panamá, brindando asesoría legal de excelencia en derecho corporativo,
          civil, familiar, penal, laboral e inmobiliario.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contacto" variant="primary" size="lg">
            Agendar Consulta Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button href="#servicios" variant="outline" size="lg">
            Ver Nuestros Servicios
          </Button>
        </div>

        <div className="mt-8">
          <a
            href="tel:+5073405678"
            className="inline-flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-200 group"
          >
            <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-gold/50 flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-xs tracking-wider uppercase text-white/40 group-hover:text-gold/60 transition-colors">
                Llámenos ahora
              </span>
              <span className="block text-base font-semibold text-white/80 group-hover:text-gold transition-colors">
                +507 340-5678
              </span>
            </div>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { value: "20+", label: "Años de experiencia" },
            { value: "1,200+", label: "Casos resueltos" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "6", label: "Áreas de práctica" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
