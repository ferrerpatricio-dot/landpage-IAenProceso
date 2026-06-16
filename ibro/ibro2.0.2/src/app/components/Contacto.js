'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [warningMsg, setWarningMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setWarningMsg('');

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.success === false && data.message) {
          // The route returned a warning because SMTP_PASS is missing
          setWarningMsg(data.message);
        }
        setSubmitted(true);
        // Clear form fields
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          empresa: '',
          mensaje: '',
        });
      } else {
        setErrorMsg(data.error || 'Ocurrió un error al enviar el mensaje. Intente nuevamente.');
      }
    } catch (error) {
      setErrorMsg('Error de red. Por favor, verifique su conexión e intente nuevamente.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-tag">Hablemos</span>
          <h2 className="section-title">Contáctanos</h2>
          <p className="contacto-intro">
            Para una atención más personalizada, contáctanos rellenando el siguiente formulario.
          </p>
        </div>

        <div className="contacto-grid">
          {/* Info Column */}
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <strong>Correo Electrónico</strong>
                <a href="mailto:ferrer.patrixio@gmail.com">ferrer.patrixio@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <strong>Teléfono / WhatsApp</strong>
                <a
                  href="https://wa.me/56982208220?text=Hola%20IBRO%2C%20me%20gustar%C3%ADa%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20consultor%C3%ADa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 8220 8220
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <strong>Ubicación</strong>
                <span>Antofagasta, Chile</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contacto-form-container">
            {submitted ? (
              <div className="contacto-success">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                {warningMsg ? (
                  <>
                    <h3>¡Formulario recibido!</h3>
                    <p style={{ color: '#C8A254', fontWeight: '500', marginBottom: '1.5rem' }}>
                      {warningMsg}
                    </p>
                  </>
                ) : (
                  <>
                    <h3>¡Mensaje enviado con éxito!</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                      Tu consulta ha sido enviada de manera directa desde la aplicación a <strong>ferrer.patricio@gmail.com</strong>.
                      Nos comunicaremos contigo a la brevedad.
                    </p>
                  </>
                )}
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setWarningMsg(''); }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    disabled={loading}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+56 9..."
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Corporativo *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@empresa.com"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="empresa">Empresa / Organización *</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">¿En qué podemos ayudarte? *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe los requerimientos o servicios de interés..."
                    disabled={loading}
                  />
                </div>

                {errorMsg && (
                  <p style={{ color: '#ff4d4d', fontSize: '0.9rem', margin: '0.25rem 0', fontWeight: '500' }}>
                    ⚠️ {errorMsg}
                  </p>
                )}

                <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
                  {loading ? 'Enviando...' : 'Quiero que me contacten'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
