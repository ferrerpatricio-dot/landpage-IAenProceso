'use client';

import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    emoji: '🌟',
    title: 'Conectar talento y oportunidades',
    text: 'Creemos que cada persona tiene un potencial único y nos motiva ayudar a que encuentre el lugar donde pueda crecer.',
  },
  {
    emoji: '🤝',
    title: 'Generar confianza',
    text: 'Sabemos que detrás de cada contratación hay un proyecto de vida y una meta empresarial. Nos mueve construir relaciones sólidas.',
  },
  {
    emoji: '🚀',
    title: 'Impulsar el desarrollo',
    text: 'Queremos que tanto empresas como profesionales puedan avanzar más rápido gracias a procesos de selección ágiles y justos.',
  },
  {
    emoji: '💡',
    title: 'Innovar en RRHH',
    text: 'Nos motiva usar la tecnología y nuevas metodologías para transformar la forma en que se conecta el talento con las oportunidades.',
  },
];

export default function Motivacion() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="motivacion-section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-tag">Lo que nos moviliza</span>
          <h2 className="section-title">Nuestra Motivación</h2>
        </div>
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <span className="carousel-emoji">{slide.emoji}</span>
                <h3 className="carousel-title">{slide.title}</h3>
                <p className="carousel-text">{slide.text}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot${currentSlide === index ? ' active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
