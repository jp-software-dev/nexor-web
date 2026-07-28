import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { caseStudies } from '../data/caseStudies';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ProjectsPage() {
  useDocumentMeta({
    title: 'Proyectos y Casos de Éxito',
    description:
      'Conoce los proyectos de manufactura y automatización que NEXOR Industrial ha entregado para empresas automotrices, alimenticias e industriales.',
    path: '/proyectos',
  });

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">Proyectos</span>
            <h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Proyectos entregados, resultados medibles.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-16">
              Una muestra de cómo trabajamos con empresas industriales para resolver problemas reales de
              producción.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                <div className="liquid-glass border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-400">{item.sector}</span>
                  <h2 className="text-xl md:text-2xl font-medium mt-2 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h2>
                  <p className="text-gray-300 mb-8 flex-1">{item.description}</p>
                  <div className="flex items-end justify-between border-t border-white/10 pt-6">
                    <span className="text-xs text-gray-500">{item.client}</span>
                    <span className="text-2xl font-normal" style={{ letterSpacing: '-0.02em' }}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tu proyecto es el siguiente caso de éxito?"
        description="Cuéntanos tu reto de producción y te ayudamos a resolverlo."
      />
    </>
  );
}
