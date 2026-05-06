export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: "Building2",
    title: "Derecho Corporativo",
    description:
      "Asesoría integral a empresas en su constitución, operación y expansión dentro de la República de Panamá y mercados internacionales.",
    items: ["Constitución de sociedades", "Fusiones y adquisiciones", "Contratos mercantiles", "Cumplimiento normativo"],
  },
  {
    id: 2,
    icon: "Scale",
    title: "Derecho Civil",
    description:
      "Representación en litigios civiles y asesoría en contratos, sucesiones y toda materia relacionada con el derecho privado.",
    items: ["Contratos y obligaciones", "Sucesiones y herencias", "Responsabilidad civil"],
  },
  {
    id: 3,
    icon: "Heart",
    title: "Derecho de Familia",
    description:
      "Acompañamiento humano y profesional en los asuntos legales más sensibles que afectan a las familias panameñas.",
    items: ["Divorcios", "Custodia de menores", "Pensión alimenticia", "Adopciones"],
  },
  {
    id: 4,
    icon: "Shield",
    title: "Derecho Penal",
    description:
      "Defensa penal sólida y estratégica ante cualquier proceso criminal, garantizando el debido proceso y la protección de sus derechos.",
    items: ["Defensa en investigaciones", "Representación en juicio", "Recursos y apelaciones"],
  },
  {
    id: 5,
    icon: "Briefcase",
    title: "Derecho Laboral",
    description:
      "Protección de trabajadores y empresas en el marco del Código de Trabajo de la República de Panamá.",
    items: ["Contratos laborales", "Despidos y liquidaciones", "Conflictos sindicales"],
  },
  {
    id: 6,
    icon: "Home",
    title: "Derecho Inmobiliario",
    description:
      "Gestión legal completa en transacciones, litigios y regularización de bienes raíces en Panamá.",
    items: ["Compraventa de inmuebles", "Arrendamientos", "Litigios de posesión"],
  },
];
