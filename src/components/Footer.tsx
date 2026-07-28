import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="text-xl font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-gray-500 mt-1">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors duration-200">
            Inicio
          </Link>
          <Link to="/nosotros" className="hover:text-white transition-colors duration-200">
            Nosotros
          </Link>
          <Link to="/soluciones" className="hover:text-white transition-colors duration-200">
            Soluciones
          </Link>
          <Link to="/proyectos" className="hover:text-white transition-colors duration-200">
            Proyectos
          </Link>
          <Link to="/calidad" className="hover:text-white transition-colors duration-200">
            Calidad
          </Link>
          <Link to="/contacto" className="hover:text-white transition-colors duration-200">
            Contacto
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
