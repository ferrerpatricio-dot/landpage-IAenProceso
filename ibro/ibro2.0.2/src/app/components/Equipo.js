import Image from 'next/image';

const miembros = [
  {
    imagen: '/images/flizana.png',
    nombre: 'Francia Lizana Ibaceta',
    cargo: 'Socia Fundadora',
    bio: 'Ingeniera Comercial, Magíster en Desarrollo Organizacional y RR.HH. Certificada por la Universidad de Chile en Ley Karin, con 20 años de experiencia en gestión de personas y relaciones laborales.',
  },
  {
    imagen: '/images/andrea.png',
    nombre: 'Andrea Cox García',
    cargo: 'Socia Fundadora',
    bio: 'Trabajadora Social con mención en Salud Mental. Magíster en Dirección de Capital Humano. Docente y especialista en intervención organizacional desde el enfoque psicosocial.',
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="equipo-section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-tag">Nosotros</span>
          <h2 className="section-title">Equipo Directivo</h2>
        </div>
        <p className="equipo-description">
          Nuestro equipo está compuesto por profesionales especialistas en temas
          legales, administrativos, contables, financieros y tecnológicos.
        </p>
        <div className="equipo-grid">
          {miembros.map((miembro, index) => (
            <div className="equipo-card" key={index}>
              <div className="equipo-image-wrapper">
                <Image
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  width={200}
                  height={200}
                  className="equipo-image"
                />
              </div>
              <h3 className="equipo-nombre">{miembro.nombre}</h3>
              <span className="equipo-cargo">{miembro.cargo}</span>
              <p className="equipo-bio">{miembro.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
