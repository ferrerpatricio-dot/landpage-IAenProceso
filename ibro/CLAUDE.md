# IBRO Landing Page - Guía de Desarrollo

Este proyecto es una Landing Page moderna y profesional para **IBRO**, construida con Next.js (App Router) y CSS vainilla.

## 🛠️ Comandos de Desarrollo

Ejecute los siguientes comandos en la carpeta `LANDPAGE/ibro`:

* **Servidor de desarrollo:** `npm run dev`
* **Compilación de producción:** `npm run build`
* **Iniciar en producción:** `npm run start`
* **Linter de código:** `npm run lint`

## 📁 Estructura del Proyecto

* `src/app/page.js` - Ensambla todas las secciones en orden.
* `src/app/layout.js` - Layout principal (SEO, fuentes Google Outfit e Inter).
* `src/app/globals.css` - Sistema de diseño y estilos de componentes (sin Tailwind).
* `src/app/components/` - Componentes modulares e interactivos de la landing page.
  * `Header.js` - Navegación sticky con efecto blur y menú móvil.
  * `Hero.js` - Portada de impacto con estadísticas y CTAs.
  * `PropuestaValor.js` - Franja destacada en tono turquesa.
  * `Servicios.js` - Grid 3x2 de servicios con iconos SVG.
  * `Motivacion.js` - Carrusel interactivo y auto-reproducible.
  * `Equipo.js` - Presentación de las socias fundadoras.
  * `PorQueElegirnos.js` - Razones clave de diferenciación con animaciones scroll.
  * `FAQ.js` - Acordeón desplegable de dudas.
  * `Contacto.js` - Formulario con envío automático via `mailto`.
  * `Footer.js` - Cierre corporativo y link a redes.
  * `WhatsAppButton.js` - Botón flotante para chat rápido.

## 🟢 Activar Botón de WhatsApp

El botón flotante de WhatsApp viene desactivado por defecto (retorna `null`). Para activarlo:

1. Abra [WhatsAppButton.js](file:///c:/Users/ferre/OneDrive/Documentos/APLICACIONES/antigravity/LANDPAGE/ibro/src/app/components/WhatsAppButton.js).
2. Modifique la constante `WHATSAPP_NUMBER` con el número real de la empresa (formato internacional sin el símbolo `+`, ej: `'56912345678'`).
3. Comente o elimine la línea `return null;`.
4. Descomente el bloque JSX `return ( ... )` que se encuentra abajo en el archivo.
