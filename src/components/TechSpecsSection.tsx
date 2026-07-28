import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Ruler,
  Weight,
  RotateCw,
  Monitor,
  Zap,
  BatteryFull,
  Feather,
  ShieldCheck,
  Fingerprint,
  Vibrate,
  Crosshair,
  Timer,
} from 'lucide-react';
import Reveal from './Reveal';

type Category = 'industrial' | 'clinico' | 'haptico';

interface Spec {
  icon: LucideIcon;
  label: string;
  value: string;
  category: Category;
}

const categories: { id: Category; label: string }[] = [
  { id: 'industrial', label: 'Industrial' },
  { id: 'clinico', label: 'Clínico' },
  { id: 'haptico', label: 'Háptico' },
];

const specs: Spec[] = [
  { icon: Ruler, label: 'Tolerancia dimensional', value: '± 0.02 mm', category: 'industrial' },
  { icon: Weight, label: 'Capacidad de carga por efector', value: '25 kg / 140 N', category: 'industrial' },
  { icon: RotateCw, label: 'Vida útil del actuador', value: '2,000,000 ciclos', category: 'industrial' },
  { icon: Monitor, label: 'Compatibilidad de software', value: 'Windows 10/11, WAMP, SQL Server', category: 'industrial' },
  { icon: Zap, label: 'Latencia de respuesta neuromuscular', value: '< 10 ms', category: 'clinico' },
  { icon: BatteryFull, label: 'Autonomía de batería', value: '14 h de uso continuo', category: 'clinico' },
  { icon: Feather, label: 'Peso del dispositivo', value: '480 g (mano completa)', category: 'clinico' },
  { icon: ShieldCheck, label: 'Grado de protección', value: 'IP54', category: 'clinico' },
  { icon: Fingerprint, label: 'Puntos de sensado táctil', value: '24 sensores de presión', category: 'haptico' },
  { icon: Vibrate, label: 'Retroalimentación háptica', value: '6 niveles graduados', category: 'haptico' },
  { icon: Crosshair, label: 'Precisión de agarre proporcional', value: '± 2% de fuerza objetivo', category: 'haptico' },
  { icon: Timer, label: 'Tiempo de calibración inicial', value: '< 5 minutos', category: 'haptico' },
];

export default function TechSpecsSection() {
  const [filter, setFilter] = useState<Category>('industrial');
  const visibleSpecs = specs.filter((spec) => spec.category === filter);

  return (
    <section id="especificaciones" className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal duration={800}>
          <span className="text-sm uppercase tracking-widest text-gray-400">Especificaciones técnicas</span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-10 max-w-2xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Los números que le importan a tu equipo de ingeniería.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-nowrap items-center justify-start gap-1.5 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border text-[11px] sm:text-sm font-medium px-3 py-1.5 sm:px-6 sm:py-2.5 transition-colors duration-200 ${
                  filter === cat.id
                    ? 'bg-white text-black border-white'
                    : 'liquid-glass border-white/15 text-gray-300 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleSpecs.map((spec, index) => (
            <Reveal key={spec.label} delay={index * 80}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full">
                <spec.icon className="h-5 w-5 text-white mb-4" strokeWidth={1.5} />
                <div className="text-lg font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {spec.value}
                </div>
                <p className="text-sm text-gray-400">{spec.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
