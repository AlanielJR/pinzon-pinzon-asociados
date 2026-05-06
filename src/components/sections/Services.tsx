import {
  Scale,
  Shield,
  Briefcase,
  Heart,
  Building2,
  Globe,
  FileText,
  LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Shield,
  Briefcase,
  Heart,
  Building2,
  Globe,
  FileText,
};

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Servicios Legales"
          subtitle="Asesoría personalizada en las áreas del derecho que más importan para usted y su familia."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white border border-chocolate/10 p-8 hover:border-gold hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 bg-cream flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-6 h-6 text-chocolate-mid group-hover:text-gold transition-colors duration-300" />
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-chocolate-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-chocolate-mid text-sm leading-relaxed">
                  {service.description}
                </p>

                {service.items && (
                  <ul className="mt-4 space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-chocolate-mid">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
