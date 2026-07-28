export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  title: string;
  result: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'automotriz',
    client: 'Proveedor Tier 1 Automotriz',
    sector: 'Automotriz',
    title: 'Reducción de tiempos de entrega en componentes de precisión',
    result: '-32% tiempo de ciclo',
    description:
      'Rediseñamos el proceso de maquinado de una familia de componentes críticos, reduciendo tiempos de entrega sin sacrificar tolerancias.',
  },
  {
    id: 'alimentos',
    client: 'Planta procesadora de alimentos',
    sector: 'Alimentos y bebidas',
    title: 'Fabricación e instalación de línea de transportadores',
    result: '+18% capacidad de línea',
    description:
      'Diseñamos, fabricamos e instalamos un sistema de bandas transportadoras a medida, aumentando la capacidad de producción de la planta.',
  },
  {
    id: 'cementera',
    client: 'Planta cementera regional',
    sector: 'Cementera',
    title: 'Programa de mantenimiento predictivo',
    result: '-45% paros no planeados',
    description:
      'Implementamos un programa de mantenimiento predictivo con análisis de vibración, reduciendo significativamente los paros no programados.',
  },
];
