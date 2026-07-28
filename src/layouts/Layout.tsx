import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Layout() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
