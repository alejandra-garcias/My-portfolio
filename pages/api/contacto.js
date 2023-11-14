// pages/api/contacto.js
import { sendEmail } from '../../utils/sendEmail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { emailto, name, email, message } = req.body;

    try {
      // Enviar el correo electrónico
      await sendEmail(emailto, `Nuevo mensaje de ${name}`, `<p>${email} \n -${message}</p>`);

      res.status(200).json({ success: true, message: 'Correo enviado con éxito.' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Método no permitido.' });
  }
}
