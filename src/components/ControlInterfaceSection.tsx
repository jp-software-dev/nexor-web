import { Check, TrendingUp, Radio } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  'Telemetría en tiempo real de cada articulación y sensor',
  'Calibración remota OTA sin detener la operación',
  'Integración vía API REST con tu MES o ERP existente',
];

const stats = [
  { label: 'Ciclos de agarre', value: '1,204', trend: '+8.2%' },
  { label: 'Latencia neural', value: '8 ms', trend: '-12%' },
  { label: 'Autonomía', value: '92%', trend: '+3.1%' },
];

const chartPoints = '0,34 16,28 32,31 48,18 64,22 80,9 100,14';
const bars = [40, 65, 50, 80, 60, 90, 70];

export default function ControlInterfaceSection() {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal duration={800}>
          <span className="text-sm uppercase tracking-widest text-gray-400">Interfaz de Control</span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-lg"
            style={{ letterSpacing: '-0.03em' }}
          >
            Un ecosistema de software que habla el idioma de tu ingeniería.
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-md mb-8">
            NEXOR Control Suite conecta cada dispositivo biónico a un panel central, para que tu equipo técnico
            monitoree rendimiento y salud del sistema sin salir de su flujo de trabajo.
          </p>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto max-w-md py-6">
            <div className="liquid-glass absolute -bottom-6 -right-4 w-3/4 rounded-2xl border border-white/10 rotate-3 h-40 sm:h-48" />

            <div className="liquid-glass relative rounded-2xl border border-white/15 backdrop-blur-xl px-6 py-6 shadow-[0_30px_80px_-30px_rgba(255,255,255,0.15)]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Radio className="h-3.5 w-3.5 text-white" />
                  En línea
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <span className="text-[11px] text-gray-400">{stat.label}</span>
                    <div className="mt-1 text-lg font-medium" style={{ letterSpacing: '-0.02em' }}>
                      {stat.value}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-300">
                      <TrendingUp className="h-3 w-3" />
                      {stat.trend}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 mb-4">
                <span className="text-[11px] text-gray-400 mb-2 block">Rendimiento — 7 días</span>
                <svg viewBox="0 0 100 40" className="w-full h-16" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points={`0,40 ${chartPoints} 100,40`} fill="url(#chartFill)" />
                  <polyline points={chartPoints} fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                <span className="text-[11px] text-gray-400 mb-3 block">Uso diario</span>
                <div className="flex items-end gap-2 h-12">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-sm bg-white/25"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
