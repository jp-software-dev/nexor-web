import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { companyValues } from '../data/stats';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function AboutPage() {
  useDocumentMeta({
    title: 'Nosotros',
    description:
      'Conoce a NEXOR Industrial: más de 12 años fabricando componentes de precisión y soluciones industriales para empresas manufactureras en México.',
    path: '/nosotros',
  });

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">Nosotros</span>
            <h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-6 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Manufactura con estándares que tu operación puede exigir.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-16">
              Desde nuestra planta en Tejupilco, Estado de México, fabricamos componentes de precisión y
              soluciones industriales para empresas que dependen de la exactitud y el cumplimiento de plazos
              para mantener su producción en marcha.
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 mb-20">
            <Reveal>
              <h2 className="text-2xl font-medium mb-4" style={{ letterSpacing: '-0.02em' }}>
                Nuestra historia
              </h2>
              <p className="text-gray-300 leading-relaxed">
                NEXOR Industrial nació para resolver un problema común entre fabricantes: la dependencia de
                múltiples proveedores para un mismo proyecto. Integramos maquinado, fabricación, automatización
                e ingeniería de herramentales bajo un solo techo, con control de calidad propio en cada etapa.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-2xl font-medium mb-4" style={{ letterSpacing: '-0.02em' }}>
                Misión y visión
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ser el socio de manufactura que las empresas industriales eligen cuando la precisión y el
                cumplimiento no son negociables, expandiendo nuestra capacidad instalada para acompañar el
                crecimiento de nuestros clientes en México y Norteamérica.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-2xl font-medium mb-8" style={{ letterSpacing: '-0.02em' }}>
              Lo que nos guía
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3 mb-4">
            {companyValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full">
                  <h3 className="text-base font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres conocer nuestra planta?"
        description="Agenda una visita técnica y conoce de cerca nuestra capacidad instalada."
        whatsappMessage="Hola, me gustaría agendar una visita a la planta de NEXOR Industrial."
      />
    </>
  );
}
