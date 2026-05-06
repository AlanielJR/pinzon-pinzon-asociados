import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "#servicios", label: "Áreas de Práctica" },
  { href: "#nosotros", label: "Nuestro Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas Frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Scale className="w-6 h-6 text-gold" />
              <div>
                <span className="font-heading text-xl font-bold text-gold block leading-none">
                  Pinzón &amp; Pinzón
                </span>
                <span className="text-white/50 text-xs tracking-widest uppercase">
                  Asociados
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Firma de abogados con amplia trayectoria en Ciudad de Panamá. Comprometidos
              con la excelencia, la ética y la protección de sus intereses.
            </p>
            <div className="mt-5 h-0.5 w-12 bg-gold" />
          </div>

          <div>
            <h3 className="font-heading text-gold font-semibold text-lg mb-5">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-gold text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-gold font-semibold text-lg mb-5">Contáctenos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+5073405678" className="text-white/80 hover:text-gold text-sm transition-colors">
                  +507 340-5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@pinzonasociados.pa" className="text-white/80 hover:text-gold text-sm transition-colors">
                  contacto@pinzonasociados.pa
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Av. Samuel Lewis, Torre Omega, Piso 10<br />
                  Obarrio, Ciudad de Panamá
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Lun–Vie: 8:00 – 17:00<br />
                  Sáb: 9:00 – 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} Pinzón &amp; Pinzón Asociados. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">
            El contenido de este sitio es informativo y no constituye asesoría legal.
          </p>
        </div>
      </div>
    </footer>
  );
}
