import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { solutions } from '../data/solutions';

interface SolutionsOverviewProps {
  showHeading?: boolean;
}

export default function SolutionsOverview({ showHeading = true }: SolutionsOverviewProps) {
  return (
    <section id="soluciones" className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <Reveal duration={800}>
            <span className="text-sm uppercase tracking-widest text-gray-400">Soluciones</span>
            <h2
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-2xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Capacidad de manufactura para cada etapa de tu proceso.
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mb-16">
              Cuatro líneas de negocio integradas, para que no tengas que coordinar múltiples proveedores.
            </p>
          </Reveal>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.id} delay={index * 100}>
              <div
                className={`liquid-glass rounded-2xl p-8 flex flex-col h-full border ${
                  solution.highlighted ? 'border-white/30' : 'border-white/10'
                }`}
              >
                {solution.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-white text-black text-xs font-medium px-3 py-1">
                    Más solicitado
                  </span>
                )}

                <span className="text-sm text-gray-400">{solution.category}</span>
                <h3 className="text-xl md:text-2xl font-medium mt-1 mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6">{solution.shortDescription}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {solution.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability} className="flex items-start gap-3 text-sm text-gray-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/soluciones/${solution.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
                >
                  Conocer solución
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
