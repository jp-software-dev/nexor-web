import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppLink } from '../config/site';

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export default function CTASection({
  title = '¿Listo para optimizar tu producción?',
  description = 'Agenda una cita con un experto y recibe una propuesta técnica sin costo.',
  whatsappMessage = 'Hola, quiero agendar una cita con un experto de NEXOR Industrial.',
}: CTASectionProps) {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-16">
      <Reveal className="mx-auto max-w-3xl text-center liquid-glass border border-white/10 rounded-2xl px-8 py-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
          {title}
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agenda una cita con un experto
          </a>
          <Link
            to="/contacto"
            className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Ir al formulario de contacto
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
