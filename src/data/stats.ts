export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '180+', label: 'Proyectos entregados' },
  { value: '99.2%', label: 'Cumplimiento de plazos' },
  { value: '3', label: 'Certificaciones de calidad' },
];

export interface Certification {
  name: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    name: 'ISO 9001:2015',
    description: 'Sistema de gestión de calidad certificado en todos nuestros procesos productivos.',
  },
  {
    name: 'ISO 14001:2015',
    description: 'Gestión ambiental responsable en manufactura y manejo de materiales.',
  },
  {
    name: 'Control dimensional CMM',
    description: 'Verificación metrológica en máquina de medición por coordenadas para piezas críticas.',
  },
];

export interface Value {
  title: string;
  description: string;
}

export const companyValues: Value[] = [
  {
    title: 'Precisión',
    description: 'Cada pieza se fabrica y verifica bajo tolerancias estrictas, sin excepciones.',
  },
  {
    title: 'Cumplimiento',
    description: 'Los tiempos de entrega comprometidos son una prioridad operativa, no una promesa comercial.',
  },
  {
    title: 'Mejora continua',
    description: 'Optimizamos procesos y herramentales de forma constante para reducir costos y tiempos de tu operación.',
  },
];
