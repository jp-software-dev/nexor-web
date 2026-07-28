import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getServiceBySlug, formatPrice } from '../data/services';
import { buildWhatsAppLink } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  useDocumentMeta({
    title: service ? service.title : 'Servicio no encontrado',
    description: service ? service.shortDescription : 'El servicio solicitado no existe.',
    path: `/servicios/${slug ?? ''}`,
  });

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const whatsappLink = buildWhatsAppLink(
    `Hola, quiero cotizar la ${service.title} (${formatPrice(service.price)} / Base).`,
  );

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">{service.subtitle}</span>
            <h1
              className="mt-3 text-4xl md:text-5xl lg:text-6xl font-normal mb-6 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-10">{service.longDescription}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="liquid-glass border border-white/20 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
              <div>
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-gray-500 line-through text-lg">
                    {formatPrice(service.originalPrice)}
                  </span>
                  <span className="text-xs font-medium text-black bg-white rounded-full px-2 py-0.5">
                    -{service.discountPercent}% AL COSTO TOTAL
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400">Desde</span>
                  <span className="text-4xl md:text-5xl font-normal" style={{ letterSpacing: '-0.03em' }}>
                    {formatPrice(service.price)}
                  </span>
                  <span className="text-gray-400 text-sm">/ Base</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/contacto?servicio=${service.slug}`}
                  className="bg-white text-black text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  Cotizar Arquitectura
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
                Qué incluye
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="text-2xl font-medium mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ideal para
              </h2>
              <ul className="space-y-4">
                {service.idealFor.map((item) => (
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

          <Reveal>
            <h2 className="text-2xl font-medium mb-8" style={{ letterSpacing: '-0.02em' }}>
              Cómo construimos tu arquitectura
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-20">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="liquid-glass border border-white/10 rounded-xl p-6 h-full">
                  <span className="text-3xl font-light text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-medium mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="liquid-glass border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-medium mb-1">¿Hablamos de tu proyecto?</h3>
              <p className="text-gray-400 text-sm">Cotización sin costo, respuesta en menos de 24 horas.</p>
            </div>
            <Link
              to={`/contacto?servicio=${service.slug}`}
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
