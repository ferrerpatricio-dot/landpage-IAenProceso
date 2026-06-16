'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué incluye el servicio de administración de personal?',
    answer:
      'Incluye desde el ingreso hasta el egreso del trabajador: contratos, anexos, vacaciones, licencias, asistencia y desvinculaciones, asegurando el total cumplimiento normativo.',
  },
  {
    question: '¿Qué diferencia hay entre outsourcing y servicios transitorios?',
    answer:
      'Outsourcing implica delegar funciones y procesos específicos por un período prolongado. Los servicios transitorios están diseñados para cubrir necesidades temporales y específicas según lo regulado por la ley laboral (como licencias médicas o incrementos de producción).',
  },
  {
    question: '¿Pueden asesorarnos en temas como la Ley Karin?',
    answer:
      'Sí, entregamos asesoría integral y actualizada sobre la Ley Karin, prevención de acoso, canales de denuncias, investigaciones y actualización de reglamentos internos de higiene y seguridad.',
  },
  {
    question: '¿Realizan auditorías laborales para verificar cumplimiento?',
    answer:
      'Sí, realizamos auditorías completas a carpetas del personal, procesos de pago, contratos y finiquitos para identificar desviaciones y mitigar contingencias legales ante la Dirección del Trabajo.',
  },
  {
    question: '¿Cuáles son los beneficios de externalizar la administración de personal?',
    answer:
      'Permite ahorrar tiempo y recursos internos, reduce el riesgo de multas y demandas por errores administrativos, garantiza el cumplimiento de la ley y permite a la directiva enfocarse en el core business de su empresa.',
  },
  {
    question: '¿Cómo se maneja la confidencialidad de la información del personal?',
    answer:
      'Firmamos rigurosos acuerdos de confidencialidad y seguimos estrictos protocolos de protección de datos personales para resguardar la información sensible del personal y de su empresa.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-tag">Preguntas Frecuentes</span>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`faq-item${isActive ? ' active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-chevron"
                    width="18"
                    height="18"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isActive ? '300px' : '0px',
                    opacity: isActive ? 1 : 0,
                    paddingBottom: isActive ? '1.25rem' : '0px',
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
