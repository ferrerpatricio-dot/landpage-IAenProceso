const servicios = [
  {
    title: 'Servicios Transitorios y Outsourcing',
    description:
      'Contrata personal por tiempo limitado para cubrir licencias, reemplazos o proyectos específicos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Selección y Reclutamiento',
    description:
      'Conectamos a tu empresa con el talento adecuado mediante un proceso ágil y preciso.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36L8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0L12 11.5" />
        <path d="M12 5.36l3.13 3.14a2.13 2.13 0 0 1 0 3h0a2.13 2.13 0 0 1-3 0L12 11.5" />
      </svg>
    ),
  },
  {
    title: 'Asesoría Laboral Integral',
    description:
      'Fortalecemos tus procesos laborales para minimizar los riesgos legales que podrían afectar a tu organización.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <path d="M12 3v18" />
        <path d="M1 12h22" />
        <path d="M5.2 5.2L12 12l6.8-6.8" />
        <path d="M5.2 18.8L12 12l6.8 6.8" />
      </svg>
    ),
  },
  {
    title: 'Servicios Administrativos para EECC',
    description:
      'Ofrecemos servicios de acreditación de personal, generación de carpeta de arranque, gestión documental y otros.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Investigación externa en casos Ley Karin / Canal de denuncias',
    description:
      'Implementamos un canal confidencial y seguro para reportar conductas indebidas dentro de tu organización.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
        <circle cx="18" cy="8" r="3" fill="currentColor" stroke="none" />
        <line x1="18" y1="7" x2="18" y2="8.5" stroke="white" strokeWidth="1.5" />
        <circle cx="18" cy="9.5" r="0.3" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Soluciones BI',
    description:
      'Diseñamos dashboards interactivos que transforman los datos de RRHH en información clave para la toma de decisiones.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="4,10 8,6 12,8 20,2" />
        <polyline points="16,2 20,2 20,6" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestros Servicios</span>
          <h2 className="section-title">
            Ofrecemos soluciones que contribuyen al éxito de tu empresa
          </h2>
        </div>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div className="servicio-card" key={index}>
              <div className="servicio-icon-wrapper">{servicio.icon}</div>
              <h3 className="servicio-title">{servicio.title}</h3>
              <p className="servicio-description">{servicio.description}</p>
              <a href="#contacto" className="servicio-cta">
                Consultar por este servicio →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
