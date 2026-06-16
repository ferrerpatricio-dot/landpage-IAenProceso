# Registro de Cambios — IBRO Landing Page

---

## [2.0.2] — 2026-06-16 · 15:45 hs

### Cambios realizados

#### Eliminación de integración Google Sheets
- **`src/app/api/contacto/route.js`** — Se eliminó completamente la función `fireIntegrations()` que enviaba los datos del formulario a la planilla de Google Sheets mediante un Google Apps Script. También se eliminaron todas las llamadas a dicha función (en el flujo normal de envío y en el fallback por SMTP no configurado). El endpoint `/api/contacto` ahora solo realiza el envío por correo electrónico SMTP.
- **`.env.local`** — Se eliminó la variable de entorno `GOOGLE_SHEETS_URL` (URL del Apps Script de Google Sheets), ya que la integración fue removida del código.

#### Versión
- **`package.json`** — Se actualizó la versión del proyecto de `0.1.0` a `2.0.2`.

### Motivo del cambio
Simplificación del flujo de captación de leads: se elimina la dependencia de Google Sheets para reducir puntos de falla y mantener un único canal de notificación (correo electrónico SMTP).

### Canal de notificación activo tras este cambio
- Envío SMTP via `nodemailer` al correo configurado en `EMAIL_TO` (actualmente `ferrer.patricio@gmail.com`).

---

## [1.1.0] — anterior

- Integración dual: envío SMTP + registro automático en Google Sheets via Apps Script.

## [0.1.0] — anterior

- Versión inicial del proyecto IBRO con Next.js 16.2.9.
