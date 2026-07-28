import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Calidad', href: '/calidad' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          NEXOR <span className="text-gray-400 font-normal">Industrial</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-white transition-colors duration-200 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden sm:inline-block bg-white text-black px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
          >
            Cotizar ahora
          </Link>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-1"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="liquid-glass rounded-xl mt-2 px-4 py-4 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white transition-colors duration-200 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
