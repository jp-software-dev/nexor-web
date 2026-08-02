import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { buildWhatsAppLink, sanitizeInput } from '../config/site';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  website: '',
};

const isValidEmail = (value: string) => value.includes('@');

export default function B2BLeadForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    setForm((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const emailValid = isValidEmail(form.email);
  const isFormValid =
    form.name.trim().length > 0 &&
    form.company.trim().length > 0 &&
    emailValid &&
    form.phone.trim().length > 0;

  const buildWhatsAppMessage = () => {
    const safe = {
      name: sanitizeInput(form.name),
      company: sanitizeInput(form.company),
      email: sanitizeInput(form.email),
      phone: sanitizeInput(form.phone),
      message: sanitizeInput(form.message),
    };

    return [
      `Hola, soy ${safe.name || '—'} de ${safe.company || 'una empresa'}.`,
      safe.email ? `Correo corporativo: ${safe.email}.` : null,
      safe.phone ? `Teléfono: ${safe.phone}.` : null,
      safe.message ? `Mensaje: ${safe.message}` : null,
    ]
      .filter(Boolean)
      .join(' ');
  };

  const sendToWhatsApp = () => {
    // Honeypot: bots fill every field, real users never see it. Bail out silently.
    if (form.website) return;
    if (!isFormValid) return;
    window.open(buildWhatsAppLink(buildWhatsAppMessage()), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <Reveal className="mx-auto max-w-3xl liquid-glass border border-white/10 rounded-2xl px-6 py-10 sm:px-10 sm:py-12">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <CheckCircle2 className="h-12 w-12 mb-4 text-white" />
            <h3 className="text-xl font-medium mb-2">¡Gracias por tu solicitud!</h3>
            <p className="text-gray-300 max-w-sm">
              Un ingeniero de ventas revisará tu caso y te contactará a la brevedad.
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
          <>
            <span className="text-sm uppercase tracking-widest text-gray-400">Solicita una propuesta</span>
            <h2
              className="mt-3 text-2xl md:text-3xl lg:text-4xl font-normal mb-8 max-w-xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Habla con un ingeniero sobre tu proyecto.
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              {/* Honeypot: hidden from real users, bots tend to fill every field */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange('website')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="sm:col-span-1">
                <label htmlFor="lead-name" className="block text-sm text-gray-300 mb-2">
                  Nombre *
                </label>
                <input
                  id="lead-name"
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                  className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lead-company" className="block text-sm text-gray-300 mb-2">
                  Empresa *
                </label>
                <input
                  id="lead-company"
                  required
                  value={form.company}
                  onChange={handleChange('company')}
                  className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lead-email" className="block text-sm text-gray-300 mb-2">
                  Correo corporativo *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange('email')}
                  className={`w-full rounded-lg bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none ${
                    form.email.length > 0 && !emailValid
                      ? 'border-red-500/60 focus:border-red-500/60'
                      : 'border-white/15 focus:border-white/40'
                  }`}
                  placeholder="tu correo electronico"
                />
                {form.email.length > 0 && !emailValid && (
                  <p className="mt-1.5 text-xs text-red-400">Ingresa un correo válido (debe contener @).</p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="lead-phone" className="block text-sm text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  value={form.phone}
                  onChange={handlePhoneChange}
                  className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                  placeholder="Solo números"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="lead-message" className="block text-sm text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="lead-message"
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
                  disabled={!isFormValid}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isFormValid
                      ? 'bg-white text-black hover:bg-gray-100 cursor-pointer'
                      : 'bg-white/20 text-white/40 opacity-50 cursor-not-allowed'
                  }`}
                >
                  Enviar solicitud
                </button>
                <button
                  type="button"
                  disabled={!isFormValid}
                  onClick={sendToWhatsApp}
                  className={`liquid-glass border px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                    isFormValid
                      ? 'border-white/20 text-white hover:bg-white hover:text-black cursor-pointer'
                      : 'border-white/10 text-white/40 opacity-50 cursor-not-allowed'
                  }`}
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </>
        )}
      </Reveal>
    </section>
  );
}
