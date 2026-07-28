import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SolutionsOverview from '../components/SolutionsOverview';
import CTASection from '../components/CTASection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function SolutionsPage() {
  useDocumentMeta({
    title: 'Soluciones Industriales',
    description:
      'Maquinado CNC, fabricación de estructuras metálicas, automatización, mantenimiento industrial y herramentales. Conoce nuestras líneas de negocio.',
    path: '/soluciones',
  });

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-4 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">Soluciones</span>
            <h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Todo lo que tu línea de producción necesita, integrado.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl">
              Cuatro líneas de negocio especializadas, con ingeniería propia y control de calidad en cada
              entrega.
            </p>
          </Reveal>
        </div>
      </section>

      <SolutionsOverview showHeading={false} />
      <CTASection />
    </>
  );
}
