import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, buildWhatsAppLink } from '../config/site';

const solutionLinks = [
  { label: 'Efectores Finales', href: '/soluciones' },
  { label: 'Prótesis Biónicas', href: '/soluciones' },
  { label: 'Sistemas Hápticos', href: '/soluciones' },
  { label: 'Retrofit Robótico', href: '/soluciones' },
];

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Tecnología', href: '/calidad' },
  { label: 'Casos de Éxito', href: '/proyectos' },
  { label: 'Especificaciones', href: '/#especificaciones' },
  { label: 'Contacto', href: '/contacto' },
];

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-gray-400 mt-3 max-w-xs">
              Hardware biónico inteligente y soluciones de alta ingeniería diseñadas para empresas que exigen
              precisión.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center h-9 w-9 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/40 transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500">Soluciones</span>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500">Navegación</span>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.href.includes('#') ? (
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500">Contacto</span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-400">Ciudad de México.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" strokeWidth={1.5} />
                <a
                  href={buildWhatsAppLink('Hola, quiero pedir una cita con NEXOR Industrial.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pide una cita
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" strokeWidth={1.5} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-400">Solicita cotización B2B</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-center text-[11px] uppercase tracking-widest text-gray-500">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
