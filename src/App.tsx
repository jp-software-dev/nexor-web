import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="soluciones" element={<SolutionsPage />} />
          <Route path="soluciones/:slug" element={<SolutionDetailPage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="calidad" element={<QualityPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
