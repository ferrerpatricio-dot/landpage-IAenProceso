import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'IBRO | Soluciones Especializadas en Gestión de Personas',
  description:
    'Consultoría en RRHH: servicios transitorios, outsourcing, selección de personal, asesoría laboral, Ley Karin, soluciones BI y más. Más de 20 años de experiencia en gestión de personas.',
  keywords:
    'consultoría RRHH, gestión de personas, outsourcing, servicios transitorios, selección de personal, asesoría laboral, Ley Karin, Chile',
  openGraph: {
    title: 'IBRO | Soluciones Especializadas en Gestión de Personas',
    description:
      'Entregamos soluciones a medida para mejorar la gestión de personas de tu empresa.',
    url: 'https://www.ibro.cl',
    siteName: 'IBRO',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
