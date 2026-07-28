export interface ProcessStep {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  capabilities: string[];
  industries: string[];
  process: ProcessStep[];
  highlighted?: boolean;
}

const sharedProcess: ProcessStep[] = [
  {
    title: 'Levantamiento técnico',
    description:
      'Analizamos planos, tolerancias y requerimientos de tu proyecto para definir la solución óptima de manufactura.',
  },
  {
    title: 'Cotización e ingeniería',
    description: 'Elaboramos propuesta técnica y económica, con tiempos de entrega y control de materiales.',
  },
  {
    title: 'Producción',
    description: 'Fabricamos bajo estándares de calidad certificados, con trazabilidad en cada etapa del proceso.',
  },
  {
    title: 'Control de calidad',
    description: 'Verificamos dimensiones, acabados y tolerancias antes de liberar el producto para entrega.',
  },
  {
    title: 'Entrega y soporte',
    description: 'Coordinamos logística de entrega y damos seguimiento post-venta a tu línea de producción.',
  },
];

export const solutions: Solution[] = [
  {
    id: 'maquinado-cnc',
    slug: 'maquinado-cnc-precision',
    category: 'Manufactura de precisión',
    title: 'Maquinado CNC de Precisión',
    shortDescription:
      'Piezas de precisión en torno y fresado CNC, con tolerancias estrictas para componentes críticos.',
    longDescription:
      'Producimos componentes de precisión en centros de maquinado CNC de 3 y 4 ejes, con capacidad para lotes de prototipo y producción en serie. Trabajamos acero, aluminio, bronce y aceros inoxidables, con control dimensional en cada corrida.',
    highlighted: true,
    capabilities: [
      'Torno y fresado CNC de 3 y 4 ejes.',
      'Tolerancias desde ±0.02 mm.',
      'Producción de prototipos y series.',
      'Reporte dimensional (CMM) por lote.',
      'Trazabilidad de material certificada.',
    ],
    industries: ['Automotriz', 'Aeroespacial', 'Maquinaria industrial'],
    process: sharedProcess,
  },
  {
    id: 'estructuras-metalicas',
    slug: 'fabricacion-estructuras-metalicas',
    category: 'Fabricación',
    title: 'Fabricación de Estructuras Metálicas',
    shortDescription: 'Diseño, corte, habilitado y soldadura de estructuras y equipo industrial a medida.',
    longDescription:
      'Fabricamos estructuras metálicas, bandas transportadoras, tanques y equipo especializado bajo diseño propio o planos del cliente. Soldadores certificados y procesos de habilitado con corte láser y plasma CNC.',
    capabilities: [
      'Corte láser y plasma CNC.',
      'Soldadura certificada (MIG, TIG, arco).',
      'Diseño y cálculo estructural.',
      'Acabados: pintura industrial y galvanizado.',
      'Montaje en sitio disponible.',
    ],
    industries: ['Alimentos y bebidas', 'Construcción industrial', 'Minería'],
    process: sharedProcess,
  },
  {
    id: 'automatizacion-mantenimiento',
    slug: 'automatizacion-mantenimiento-industrial',
    category: 'Automatización',
    title: 'Automatización y Mantenimiento Industrial',
    shortDescription: 'Mantenimiento preventivo, predictivo y proyectos de automatización para líneas de producción.',
    longDescription:
      'Diseñamos e implementamos soluciones de automatización de procesos, además de programas de mantenimiento preventivo y predictivo que reducen paros no planeados y extienden la vida útil de tu maquinaria.',
    capabilities: [
      'Programación de PLC y HMI.',
      'Mantenimiento predictivo con análisis de vibración.',
      'Retrofit de líneas de producción existentes.',
      'Planes de mantenimiento preventivo programado.',
      'Soporte técnico y respuesta a emergencias.',
    ],
    industries: ['Manufactura general', 'Cementera', 'Energía'],
    process: sharedProcess,
  },
  {
    id: 'herramentales',
    slug: 'diseno-manufactura-herramentales',
    category: 'Ingeniería',
    title: 'Diseño y Manufactura de Herramentales',
    shortDescription: 'Moldes, dispositivos y herramentales especiales diseñados para tu proceso productivo.',
    longDescription:
      'Diseñamos y fabricamos herramentales, dispositivos de sujeción (jigs & fixtures) y moldes a la medida de tu proceso, optimizando tiempos de ciclo y repetibilidad en producción.',
    capabilities: [
      'Diseño CAD/CAM especializado.',
      'Dispositivos de sujeción (jigs & fixtures).',
      'Moldes y troqueles a medida.',
      'Validación funcional antes de entrega.',
      'Mejora continua de herramentales existentes.',
    ],
    industries: ['Automotriz', 'Electrodomésticos', 'Manufactura general'],
    process: sharedProcess,
  },
];

export function getSolutionBySlug(slug: string | undefined): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
