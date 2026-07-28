import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { services, getServiceBySlug } from '../data/services';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contacto y Cotizaciones',
    description:
      'Solicita tu cotización para Arquitectura B2B Premium o Arquitectura Comercial. Formulario, WhatsApp y ubicación en Ciudad de México.',
    path: '/contacto',
  });

  const [searchParams] = useSearchParams();
  const presetServiceSlug = searchParams.get('servicio') ?? undefined;
  const presetService = getServiceBySlug(presetServiceSlug);

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetService) {
      setForm((prev) => ({ ...prev, service: presetService.id }));
    }
  }, [presetService]);

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildWhatsAppMessage = () => {
    const serviceLabel = services.find((s) => s.id === form.service)?.title ?? 'un servicio de VEX';
    const lines = [
      `Hola, soy ${form.name || '—'}.`,
      `Quiero cotizar: ${serviceLabel}.`,
      form.company ? `Empresa: ${form.company}.` : null,
      form.email ? `Correo: ${form.email}.` : null,
      form.message ? `Mensaje: ${form.message}` : null,
    ].filter(Boolean);
    return lines.join(' ');
  };

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">Contacto</span>
            <h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-2xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Solicita tu cotización.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mb-16">
              Cuéntanos sobre tu proyecto y te responderemos con una propuesta a la medida — por correo o WhatsApp.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal delay={100} className="lg:col-span-3 liquid-glass border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-medium mb-2">¡Gracias por tu solicitud!</h3>
                  <p className="text-gray-300 max-w-sm">
                    Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                    className="mt-6 liquid-glass border border-white/20 px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white hover:text-black"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="company" className="block text-sm text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={handleChange('company')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                      placeholder="tu@correo.com"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                      placeholder="+52 55 0000 0000"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="block text-sm text-gray-300 mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={handleChange('service')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="" disabled className="bg-black">
                        Selecciona un servicio
                      </option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id} className="bg-black">
                          {service.title}
                        </option>
                      ))}
                      <option value="otro" className="bg-black">
                        Otro / No estoy seguro
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 resize-none"
                      placeholder="Cuéntanos brevemente sobre tu proyecto"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
                    >
                      Enviar solicitud
                    </button>
                    <a
                      href={buildWhatsAppLink(buildWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enviar por WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </Reveal>

            <Reveal delay={200} className="lg:col-span-2 flex flex-col gap-6">
              <div className="liquid-glass border border-white/10 rounded-2xl p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-0.5 shrink-0 text-white" />
                  <div>
                    <p className="text-sm text-gray-400">Correo</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-gray-300">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0 text-white" />
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <a href={`tel:${siteConfig.phoneTel}`} className="text-white hover:text-gray-300">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WhatsAppIcon className="h-5 w-5 mt-0.5 shrink-0 text-white" />
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <a
                      href={buildWhatsAppLink('Hola, quiero cotizar un sitio web con VEX.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-white" />
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-white">{siteConfig.addressDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="liquid-glass border border-white/10 rounded-2xl overflow-hidden h-64 lg:flex-1 relative">
                <iframe
                  title="Ubicación en Ciudad de México"
                  src={siteConfig.mapEmbedSrc}
                  className="h-full w-full border-0 grayscale invert-[0.92] contrast-[0.9]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 liquid-glass border border-white/20 text-white text-xs font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Abrir en Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
