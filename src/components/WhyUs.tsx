import { Gauge, ShieldCheck, Truck, Wrench } from 'lucide-react';
import Reveal from './Reveal';

const reasons = [
  {
    icon: Gauge,
    title: 'Capacidad instalada real',
    description: 'Maquinaria propia y personal certificado, sin subcontratar tu producción crítica.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad verificable',
    description: 'Control dimensional y trazabilidad de material en cada lote entregado.',
  },
  {
    icon: Truck,
    title: 'Cumplimiento de plazos',
    description: '99.2% de entregas dentro del plazo comprometido en los últimos 24 meses.',
  },
  {
    icon: Wrench,
    title: 'Soporte técnico continuo',
    description: 'Acompañamiento post-entrega y mantenimiento para tu línea de producción.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal duration={800}>
          <span className="text-sm uppercase tracking-widest text-gray-400">Por qué NEXOR</span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-16 max-w-2xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Un socio de manufactura, no solo un proveedor.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 100}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full">
                <reason.icon className="h-6 w-6 text-white mb-4" />
                <h3 className="text-base font-medium mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
