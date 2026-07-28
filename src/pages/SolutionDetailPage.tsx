import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ProcessSteps from '../components/ProcessSteps';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getSolutionBySlug } from '../data/solutions';
import { buildWhatsAppLink } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug);

  useDocumentMeta({
    title: solution ? solution.title : 'Solución no encontrada',
    description: solution ? solution.shortDescription : 'La solución solicitada no existe.',
    path: `/soluciones/${slug ?? ''}`,
  });

  if (!solution) {
    return <Navigate to="/soluciones" replace />;
  }

  const whatsappLink = buildWhatsAppLink(
    `Hola, quiero cotizar ${solution.title}. ¿Podrían apoyarme con información?`,
  );

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">{solution.category}</span>
            <h1
              className="mt-3 text-4xl md:text-5xl lg:text-6xl font-normal mb-6 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {solution.title}
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-10">{solution.longDescription}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="liquid-glass border border-white/20 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
              <div>
                <p className="text-sm text-gray-400 mb-1">Cotización a la medida</p>
                <p className="text-lg text-white max-w-md">
                  Cada proyecto se cotiza según planos, materiales y volumen. Respuesta técnica en menos de
                  24 horas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to={`/contacto?solucion=${solution.slug}`}
                  className="bg-white text-black text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  Cotizar ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass border border-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 mb-20">
            <Reveal>
              <h2 className="text-2xl font-medium mb-6" style={{ letterSpacing: '-0.02em' }}>
                Capacidades
              </h2>
              <ul className="space-y-4">
                {solution.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-gray-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="text-2xl font-medium mb-6" style={{ letterSpacing: '-0.02em' }}>
                Industrias que atendemos
              </h2>
              <ul className="space-y-4">
                {solution.industries.map((item) => (
                  <li
                    key={item}
                    className="liquid-glass border border-white/10 rounded-xl px-5 py-4 text-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mb-20">
            <ProcessSteps steps={solution.process} title="Cómo entregamos tu proyecto" />
          </div>

          <Reveal className="liquid-glass border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-medium mb-1">¿Hablamos de tu proyecto?</h3>
              <p className="text-gray-400 text-sm">Cotización técnica sin costo, respuesta en menos de 24 horas.</p>
            </div>
            <Link
              to={`/contacto?solucion=${solution.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 shrink-0"
            >
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
