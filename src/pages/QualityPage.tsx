import { ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { certifications, stats } from '../data/stats';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function QualityPage() {
  useDocumentMeta({
    title: 'Calidad y Certificaciones',
    description:
      'Conoce el sistema de gestión de calidad de NEXOR Industrial: certificaciones ISO, control dimensional y trazabilidad en cada proyecto.',
    path: '/calidad',
  });

  return (
    <>
      <PageHeader />

      <section className="bg-black text-white px-6 pt-16 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-gray-400">Calidad</span>
            <h1
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-normal mb-4 max-w-3xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              La calidad no se inspecciona al final, se construye en cada paso.
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-16">
              Nuestro sistema de gestión de calidad certificado garantiza trazabilidad de material y control
              dimensional en cada lote que sale de planta.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3 mb-20">
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 100}>
                <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full">
                  <ShieldCheck className="h-6 w-6 text-white mb-4" />
                  <h2 className="text-base font-medium mb-2">{cert.name}</h2>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="liquid-glass border border-white/10 rounded-2xl p-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-normal" style={{ letterSpacing: '-0.03em' }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="¿Necesitas documentación de calidad para tu área de compras?"
        description="Solicítala directamente y te la enviamos junto con tu cotización."
      />
    </>
  );
}
