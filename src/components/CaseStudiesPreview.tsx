import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesPreview() {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal duration={800}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <span className="text-sm uppercase tracking-widest text-gray-400">Casos de éxito</span>
              <h2
                className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal max-w-2xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Resultados que se miden en tu línea de producción.
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="shrink-0 inline-flex items-center gap-2 liquid-glass border border-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-400">{item.sector}</span>
                <h3 className="text-lg font-medium mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1">{item.description}</p>
                <div className="text-2xl font-normal" style={{ letterSpacing: '-0.02em' }}>
                  {item.result}
                </div>
                <span className="text-xs text-gray-500 mt-1">{item.client}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
