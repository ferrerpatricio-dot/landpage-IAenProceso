import Header from './components/Header';
import Hero from './components/Hero';
import PropuestaValor from './components/PropuestaValor';
import Servicios from './components/Servicios';
import Motivacion from './components/Motivacion';
import Equipo from './components/Equipo';
import PorQueElegirnos from './components/PorQueElegirnos';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropuestaValor />
        <Servicios />
        <Motivacion />
        <Equipo />
        <PorQueElegirnos />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
