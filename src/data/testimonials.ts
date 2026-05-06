export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Fábrega",
    role: "Empresario — Derecho Corporativo",
    text: "El Dr. Pinzón y su equipo gestionaron la constitución de nuestra sociedad y la estructuración de contratos con una precisión y rapidez excepcionales. Son el aliado legal que toda empresa necesita en Panamá.",
    rating: 5,
  },
  {
    id: 2,
    name: "Patricia Herrera",
    role: "Cliente — Derecho de Familia",
    text: "Pinzón & Pinzón manejó mi proceso de divorcio con una discreción y profesionalidad que agradezco profundamente. La Licda. Pinzón me acompañó en cada etapa y siempre priorizó el bienestar de mis hijos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Inversiones Baru S.A.",
    role: "Cliente — Derecho Inmobiliario",
    text: "Contratamos a Pinzón & Pinzón para una transacción inmobiliaria compleja y su manejo fue impecable. Su conocimiento del mercado panameño y la rigurosidad de su trabajo nos dieron total tranquilidad.",
    rating: 5,
  },
];
