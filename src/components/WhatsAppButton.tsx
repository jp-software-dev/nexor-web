import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppLink } from '../config/site';

export default function WhatsAppButton() {
  const link = buildWhatsAppLink('Hola, quiero cotizar un proyecto con NEXOR Industrial.');

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicita una reserva por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 h-14 pl-4 pr-4 md:pr-5"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span className="hidden md:inline text-sm font-medium whitespace-nowrap">Solicita una reserva</span>
    </a>
  );
}
