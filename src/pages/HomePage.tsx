import Hero from '../components/Hero';
import HabitatSection from '../components/HabitatSection';
import ControlInterfaceSection from '../components/ControlInterfaceSection';
import TechSpecsSection from '../components/TechSpecsSection';
import B2BLeadForm from '../components/B2BLeadForm';
import TrustBar from '../components/TrustBar';
import SolutionsOverview from '../components/SolutionsOverview';
import WhyUs from '../components/WhyUs';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import CTASection from '../components/CTASection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HomePage() {
  useDocumentMeta({
    title: 'Manufactura de Precisión y Soluciones Industriales',
    description:
      'NEXOR Industrial: maquinado CNC, fabricación de estructuras metálicas, automatización y mantenimiento industrial. Cotiza tu proyecto hoy mismo.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <HabitatSection />
      <ControlInterfaceSection />
      <TechSpecsSection />
      <B2BLeadForm />
      <TrustBar />
      <SolutionsOverview />
      <WhyUs />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
}
