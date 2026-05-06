"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    area: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulates submission delay for demo purposes
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contáctenos"
          subtitle="Dé el primer paso. La consulta inicial es gratuita y sin compromiso."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="bg-chocolate p-10 h-full relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold" />

              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Información de Contacto
              </h3>
              <p className="text-white/60 text-sm mb-8">
                Estamos disponibles para atenderle de forma presencial,
                telefónica o por videollamada.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Teléfono
                    </p>
                    <a
                      href="tel:+5073405678"
                      className="text-white hover:text-gold font-medium transition-colors"
                    >
                      +507 340-5678
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Correo electrónico
                    </p>
                    <a
                      href="mailto:contacto@pinzonasociados.pa"
                      className="text-white hover:text-gold font-medium transition-colors"
                    >
                      contacto@pinzonasociados.pa
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Dirección
                    </p>
                    <p className="text-white font-medium leading-snug">
                      Av. Samuel Lewis, Torre Omega, Piso 10<br />
                      Obarrio, Ciudad de Panamá
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Horario de atención
                    </p>
                    <p className="text-white font-medium">
                      Lunes a Viernes: 8:00 – 17:00<br />
                      Sábado: 10:00 – 14:00
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  Para urgencias fuera de horario, deje un mensaje en nuestro
                  correo y nos comunicaremos a la brevedad posible.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-chocolate/10 p-8 lg:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-chocolate-dark mb-3">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-chocolate-mid text-sm max-w-xs">
                  Nos comunicaremos con usted en un plazo máximo de 24 horas
                  hábiles. Gracias por contactarnos.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      nombre: "",
                      email: "",
                      telefono: "",
                      area: "",
                      mensaje: "",
                    });
                  }}
                  className="mt-6 text-gold hover:text-gold-light text-sm font-medium transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-bold text-chocolate-dark mb-1">
                  Envíenos un Mensaje
                </h3>
                <p className="text-chocolate-mid text-sm mb-7">
                  Cuéntenos su situación y nos pondremos en contacto pronto.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-chocolate-dark text-xs font-semibold uppercase tracking-wider mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Su nombre completo"
                        className="w-full border border-chocolate/20 bg-cream px-4 py-3 text-sm text-chocolate-dark placeholder-chocolate-light focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-chocolate-dark text-xs font-semibold uppercase tracking-wider mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="Su número de teléfono"
                        className="w-full border border-chocolate/20 bg-cream px-4 py-3 text-sm text-chocolate-dark placeholder-chocolate-light focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-chocolate-dark text-xs font-semibold uppercase tracking-wider mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="su@correo.com"
                      className="w-full border border-chocolate/20 bg-cream px-4 py-3 text-sm text-chocolate-dark placeholder-chocolate-light focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-chocolate-dark text-xs font-semibold uppercase tracking-wider mb-2">
                      Área de interés
                    </label>
                    <select
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      className="w-full border border-chocolate/20 bg-cream px-4 py-3 text-sm text-chocolate-dark focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Seleccione un área</option>
                      <option>Derecho Civil</option>
                      <option>Derecho Penal</option>
                      <option>Derecho Laboral</option>
                      <option>Derecho Familiar</option>
                      <option>Derecho Corporativo</option>
                      <option>Derecho Inmobiliario</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-chocolate-dark text-xs font-semibold uppercase tracking-wider mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describa brevemente su situación legal..."
                      className="w-full border border-chocolate/20 bg-cream px-4 py-3 text-sm text-chocolate-dark placeholder-chocolate-light focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-chocolate-light text-xs text-center">
                    Al enviar este formulario, acepta que nos comuniquemos con
                    usted para responder a su consulta.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
