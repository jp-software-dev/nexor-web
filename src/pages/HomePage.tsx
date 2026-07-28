import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HomePage() {
  useDocumentMeta({
    title: 'Desarrollo Web Premium B2B y Comercial',
    description:
      'Diseñamos y construimos sitios web B2B premium y arquitecturas comerciales multipágina de alto impacto: diseño, SEO y WhatsApp integrado.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <ServicesOverview />

      <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
        <Reveal className="mx-auto max-w-3xl text-center liquid-glass border border-white/10 rounded-2xl px-8 py-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            ¿Listo para llevar tu sitio al siguiente nivel?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Solicita tu cotización sin costo y te ayudamos a elegir la arquitectura correcta para tu negocio.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
          >
            Solicitar cotización
          </Link>
        </Reveal>
      </section>
    </>
  );
}
