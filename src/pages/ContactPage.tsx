import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import WhatsAppIcon from '../components/WhatsAppIcon';
import ContactPanel from '../components/ContactPanel';
import { solutions, getSolutionBySlug } from '../data/solutions';
import { buildWhatsAppLink } from '../config/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  solution: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  solution: '',
  message: '',
};

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contacto y Cotizaciones',
    description:
      'Solicita tu cotización con NEXOR Industrial. Formulario, WhatsApp y ubicación en Tejupilco, Estado de México.',
    path: '/contacto',
  });

  const [searchParams] = useSearchParams();
  const presetSolutionSlug = searchParams.get('solucion') ?? undefined;
  const presetSolution = getSolutionBySlug(presetSolutionSlug);

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetSolution) {
      setForm((prev) => ({ ...prev, solution: presetSolution.id }));
    }
  }, [presetSolution]);

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
    const solutionLabel = solutions.find((s) => s.id === form.solution)?.title ?? 'una solución industrial';
    const lines = [
      `Hola, soy ${form.name || '—'}.`,
      form.company ? `Empresa: ${form.company}.` : null,
      `Quiero cotizar: ${solutionLabel}.`,
      form.email ? `Correo: ${form.email}.` : null,
      form.phone ? `Teléfono: ${form.phone}.` : null,
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
              Cuéntanos sobre tu proyecto y un ingeniero de ventas te responderá con una propuesta técnica —
              por correo o WhatsApp.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal delay={100} className="lg:col-span-3 liquid-glass border border-white/10 rounded-2xl p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 className="h-12 w-12 mb-4 text-white" />
                  <h3 className="text-xl font-medium mb-2">¡Gracias por tu solicitud!</h3>
                  <p className="text-gray-300 max-w-sm">
                    Hemos recibido tu información. Nuestro equipo técnico se pondrá en contacto contigo a la
                    brevedad.
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
                      Empresa *
                    </label>
                    <input
                      id="company"
                      required
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
                      placeholder="tu@empresa.com"
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
                      placeholder="Tu número de contacto"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="solution" className="block text-sm text-gray-300 mb-2">
                      Solución de interés *
                    </label>
                    <select
                      id="solution"
                      required
                      value={form.solution}
                      onChange={handleChange('solution')}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="" disabled className="bg-black">
                        Selecciona una solución
                      </option>
                      {solutions.map((solution) => (
                        <option key={solution.id} value={solution.id} className="bg-black">
                          {solution.title}
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
                      placeholder="Cuéntanos brevemente sobre tu proyecto: volumen, material, tiempos"
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

            <Reveal delay={200} className="lg:col-span-2">
              <ContactPanel />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
