export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: "¿Cuánto cuesta la primera consulta?",
    answer:
      "La primera consulta es completamente gratuita y sin compromiso. Queremos conocer su situación, evaluar su caso y explicarle las opciones disponibles antes de tomar cualquier decisión en conjunto.",
  },
  {
    id: 2,
    question: "¿Cuánto tiempo puede tomar mi caso?",
    answer:
      "El tiempo varía según la complejidad del asunto. Un trámite corporativo puede resolverse en días, mientras que un litigio civil o penal puede extenderse varios meses. En su consulta le daremos una estimación realista basada en su situación específica.",
  },
  {
    id: 3,
    question: "¿Tienen representación en todo Panamá?",
    answer:
      "Nuestra oficina principal está en Ciudad de Panamá. Contamos con una red de abogados colaboradores en las principales provincias de la República. Para casos fuera de nuestra cobertura directa, evaluamos cada situación individualmente.",
  },
  {
    id: 4,
    question: "¿Cómo funcionan los honorarios?",
    answer:
      "Manejamos diferentes esquemas según el tipo de caso: honorarios fijos para trámites definidos, por hora para asesorías continuas, o de contingencia en casos específicos. Todo se discute y acuerda de forma transparente antes de comenzar, sin costos ocultos.",
  },
  {
    id: 5,
    question: "¿Puedo agendar una consulta en línea?",
    answer:
      "Sí. Ofrecemos consultas presenciales en nuestra oficina en Ciudad de Panamá y consultas por videollamada. Puede contactarnos por teléfono, WhatsApp o mediante el formulario de esta página.",
  },
  {
    id: 6,
    question: "¿Qué documentos debo llevar a la primera consulta?",
    answer:
      "Depende del tipo de caso. En general, es útil traer cédula o pasaporte, contratos o documentos relacionados con el problema, y cualquier comunicación relevante recibida de la contraparte o de autoridades. Escríbanos y le indicamos exactamente qué necesita.",
  },
  {
    id: 7,
    question: "¿Mis datos y mi caso son confidenciales?",
    answer:
      "Absolutamente. El secreto profesional es uno de los pilares de nuestra firma. Toda la información que nos comparte está protegida por el deber de confidencialidad del abogado y nunca será compartida con terceros sin su consentimiento expreso.",
  },
];
