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
    id: 'salud',
    client: 'Red de clínicas de rehabilitación',
    sector: 'Sector Salud',
    title: 'Ajuste de prótesis biónicas a escala multi-clínica',
    result: '+41% pacientes atendidos/mes',
    description:
      'Estandarizamos el proceso de calibración de efectores protésicos entre clínicas, acelerando el tiempo de adaptación de cada paciente.',
  },
  {
    id: 'empaque',
    client: 'Planta de empaque y envasado',
    sector: 'Empaque',
    title: 'Automatización de línea de paletizado con efectores robóticos',
    result: '+27% unidades empacadas/hora',
    description:
      'Integramos brazos robóticos con efectores finales a medida en la línea de paletizado, elevando el throughput sin ampliar la planta.',
  },
  {
    id: 'logistica',
    client: 'Centro de distribución nacional',
    sector: 'Logística',
    title: 'Picking asistido por robótica en centro de distribución',
    result: '-19% errores de picking',
    description:
      'Implementamos estaciones de picking asistido con sensores hápticos, reduciendo errores de surtido y tiempos de preparación de pedidos.',
  },
];
