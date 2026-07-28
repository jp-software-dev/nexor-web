import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';
import Navbar from './Navbar';
import WhatsAppIcon from './WhatsAppIcon';
import { buildWhatsAppLink } from '../config/site';

export default function Hero() {
  const whatsappLink = buildWhatsAppLink(
    'Hola, quiero cotizar un proyecto de manufactura con NEXOR Industrial.',
  );

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col justify-end px-6 pb-16 pt-24 md:px-12 lg:px-16 lg:pb-20">
          <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-8">
            <div>
              <span className="mb-5 inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
                Manufactura industrial de precisión
              </span>
              <AnimatedHeading
                text={'Precisión que\nsostiene tu producción.'}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-5"
                style={{ letterSpacing: '-0.04em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
                  Maquinado CNC, fabricación de estructuras y automatización industrial para empresas que no
                  pueden permitirse un paro de línea.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Cotizar ahora
                  </a>
                  <a
                    href="#soluciones"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black"
                  >
                    Ver soluciones
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light">
                    Maquinado. Fabricación. Automatización.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
