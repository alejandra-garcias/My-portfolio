
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'alejandra.garsanchez@gmail.com', 
    pass: 'tzyq kceh qdvb cbte', 
  },
});

export const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: 'alejandra.garsanchez@gmail.com', // Coloca tu dirección de correo electrónico
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: %s', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
};