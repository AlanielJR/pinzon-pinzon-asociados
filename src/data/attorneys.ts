export interface Attorney {
  id: number;
  initials: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
}

export const attorneys: Attorney[] = [
  {
    id: 1,
    initials: "MP",
    name: "Dr. Manuel Pinzón",
    title: "Socio Principal",
    specialty: "Derecho Corporativo y Civil",
    bio: "Con más de 20 años de trayectoria en la práctica legal en Panamá, el Dr. Manuel Pinzón es referente en derecho corporativo y civil. Ha representado a empresas nacionales e internacionales en transacciones complejas, litigios y estructuración de negocios en la República de Panamá.",
  },
  {
    id: 2,
    initials: "AP",
    name: "Licda. Andrea Pinzón",
    title: "Socia",
    specialty: "Derecho de Familia y Penal",
    bio: "Especialista en derecho de familia y derecho penal con amplia experiencia en tribunales panameños. La Licda. Pinzón se distingue por su enfoque estratégico y su capacidad para encontrar soluciones eficientes en casos de alta sensibilidad.",
  },
  {
    id: 3,
    initials: "RM",
    name: "Lic. Roberto Mora",
    title: "Asociado Senior",
    specialty: "Derecho Laboral e Inmobiliario",
    bio: "El Lic. Mora cuenta con sólida experiencia en materia laboral e inmobiliaria en Panamá. Su trato directo y cercano con los clientes lo convierte en el aliado ideal para resolver conflictos laborales y transacciones de bienes raíces.",
  },
];
