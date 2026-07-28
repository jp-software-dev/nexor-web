import { Mail, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/site';

export default function ContactPanel() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="liquid-glass border border-white/10 rounded-2xl p-8 space-y-5">
        <div className="flex items-start gap-4">
          <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-white" />
          <div>
            <p className="text-sm text-gray-400">Dirección</p>
            <p className="text-white">{siteConfig.addressDisplay}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="h-5 w-5 mt-0.5 shrink-0 text-white" />
          <div>
            <a
              href={buildWhatsAppLink('Hola, quiero pedir una cita con NEXOR Industrial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              Pide una cita:
            </a>
          </div>
        </div>

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
          <Clock className="h-5 w-5 mt-0.5 shrink-0 text-white" />
          <div>
            <p className="text-sm text-gray-400">Horarios de atención</p>
            {siteConfig.hours.map((slot) => (
              <p key={slot.days} className="text-white">
                {slot.days}: {slot.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="liquid-glass border border-white/10 rounded-2xl overflow-hidden h-64 lg:flex-1 relative">
        <iframe
          title={`Ubicación en ${siteConfig.city}`}
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
    </div>
  );
}
