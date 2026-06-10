import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { nombre, telefono, email, empresa, mensaje } = await request.json();

    // Validations
    if (!nombre || !email || !empresa || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    // SMTP Configuration from Environment Variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const smtpSecure = smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || 'ferrer.patrixio@gmail.com'; 
    const smtpPass = process.env.SMTP_PASS; // SMTP Password or App Password
    
    // Recipient Account (as specified by user)
    const emailTo = process.env.EMAIL_TO || 'ferrer.patricio@gmail.com';

    // If there is no SMTP password configured, alert the user but log it
    if (!smtpPass) {
      console.warn('Advertencia: SMTP_PASS no está configurada en las variables de entorno.');
      return NextResponse.json(
        { 
          success: false, 
          message: 'El servidor recibió el formulario, pero falta configurar SMTP_PASS en las variables de entorno (.env.local) para realizar el envío real.' 
        },
        { status: 200 } // Return 200 so the frontend can handle the reminder message gracefully
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Elegant HTML Template for the email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #1B2E4B; padding: 15px; text-align: center; border-radius: 6px 6px 0 0;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold;">Nuevo Contacto - Landing Page IBRO</h2>
        </div>
        <div style="padding: 20px; color: #1e293b;">
          <p style="font-size: 16px; line-height: 1.5; color: #1e293b;">Se ha recibido una nueva consulta de servicios a través del formulario de la landing page:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 120px; color: #4A9BA5;">Nombre:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #4A9BA5;">Empresa:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #4A9BA5;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;"><a href="mailto:${email}" style="color: #4A9BA5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #4A9BA5;">Teléfono:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b;">${telefono || 'No especificado'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #C8A254; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 8px; color: #1B2E4B;">Mensaje:</strong>
            <p style="margin: 0; line-height: 1.6; color: #334155; white-space: pre-line;">${mensaje}</p>
          </div>
        </div>
        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; text-align: center; color: #64748b;">
          Este correo fue generado automáticamente desde la Landing Page de IBRO.
        </div>
      </div>
    `;

    // Email Options
    const mailOptions = {
      from: `"IBRO Web" <${smtpUser}>`, // Send FROM the app account
      to: emailTo, // Send TO destination account
      replyTo: email, // Reply goes to user who filled the form
      subject: `Contacto IBRO - ${nombre} (${empresa})`,
      text: `Nuevo mensaje de contacto:\n\nNombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nTeléfono: ${telefono || 'No especificado'}\n\nMensaje:\n${mensaje}`,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Correo enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar email a través de la API:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error en el servidor al procesar el envío del correo' },
      { status: 500 }
    );
  }
}
