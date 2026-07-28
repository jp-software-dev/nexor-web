import Reveal from './Reveal';
import { useParallax } from '../hooks/useParallax';

interface HabitatPanelProps {
  image: string;
  label: string;
  caption: string;
  heightClassName: string;
  strength?: number;
}

function HabitatPanel({ image, label, caption, heightClassName, strength = 0.08 }: HabitatPanelProps) {
  const parallaxRef = useParallax<HTMLDivElement>(strength);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${heightClassName}`}>
      <div ref={parallaxRef} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover grayscale-[0.4] contrast-[1.05]"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

      <div className="liquid-glass absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3">
        <span className="text-xs uppercase tracking-widest text-gray-400">{label}</span>
        <p className="mt-1 text-sm text-white">{caption}</p>
      </div>
    </div>
  );
}

export default function HabitatSection() {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <Reveal duration={800}>
          <span className="text-sm uppercase tracking-widest text-gray-400">El producto en su hábitat</span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-2xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Diseñado para la línea de producción. Validado en el laboratorio clínico.
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mb-16">
            Cada efector final y cada prótesis se somete al mismo entorno donde va a operar: plantas de
            ensamblaje de alto volumen y centros de rehabilitación especializados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <Reveal delay={100} className="md:col-span-4">
            <HabitatPanel
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              label="Línea de ensamblaje"
              caption="Integración de efectores finales en planta industrial, operación 24/7."
              heightClassName="h-[320px] md:h-[520px]"
              strength={0.1}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:col-span-2">
            <Reveal delay={200}>
              <HabitatPanel
                image="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                label="Laboratorio clínico"
                caption="Ajuste funcional y calibración de prótesis con equipo especializado."
                heightClassName="h-[240px] md:h-[250px]"
                strength={0.06}
              />
            </Reveal>
            <Reveal delay={300}>
              <HabitatPanel
                image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                label="Control de calidad"
                caption="Verificación dimensional y trazabilidad bajo norma ISO."
                heightClassName="h-[240px] md:h-[250px]"
                strength={0.06}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
