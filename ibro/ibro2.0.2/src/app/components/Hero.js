export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 30, 60, 0.75), rgba(0, 30, 60, 0.85)), url('/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">Consultoría en RRHH · Norte de Chile · Desde 2024</span>
          <h1 className="hero-title">
            Soluciones Especializadas en Gestión de Personas
          </h1>
          <p className="hero-subtitle">
            Entregamos soluciones a medida para mejorar la gestión de personas de tu empresa
          </p>
          <div className="hero-cta-group">
            <a href="#contacto" className="btn btn-primary">
              Cotiza aquí
            </a>
            <a href="#servicios" className="btn btn-outline btn-outline-white">
              Conocer servicios
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">20+</span>
              <span className="hero-stat-label">Años de experiencia</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">9</span>
              <span className="hero-stat-label">Servicios especializados</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Cumplimiento Normativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
