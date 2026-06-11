import Image from 'next/image';

const footerLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#equipo' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Image
              src="/images/logogibro.png"
              alt="IBRO Logo"
              width={110}
              height={45}
              className="footer-logo-img"
            />
            <p>
              Entregamos soluciones a medida y de alta calidad para potenciar la gestión de personas en su organización.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-links">
            <h4>Enlaces</h4>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} IBRO. Todos los derechos reservados.</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted, #6b7280)', marginTop: '0.25rem' }}>v1.1.0</p>
        </div>
      </div>
    </footer>
  );
}
