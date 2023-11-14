import { useState } from "react";
import axios from "axios";
import "./Form.scss";


const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST a la API
      const response = await axios.post("/api/contacto", {
        emailto: "alejandra.garsanchez@gmail.com",
        name,
        email,
        message,
      });

      if (response.data.success) {
        // Puedes manejar el éxito aquí, como mostrar un mensaje al usuario
        console.log("Correo enviado con éxito.");

        // Limpiar los campos del formulario
        setName("");
        setEmail("");
        setMessage("");
        // Mostrar el mensaje de éxito
        setSuccessMessage("¡El formulario se envió con éxito!");
        setErrorMessage(""); // Limpiar el mensaje de error si lo hubiera
      } else {
        // Puedes manejar el error aquí, como mostrar un mensaje de error al usuario
        console.error("Error al enviar el correo:", response.data.message);
        setErrorMessage("Hubo un error al enviar el formulario.");
        setSuccessMessage(""); // Limpiar el mensaje de éxito si lo hubiera
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Mostrar el mensaje de error
      setErrorMessage("Hubo un error al enviar el formulario.");
      setSuccessMessage(""); // Limpiar el mensaje de éxito si lo hubiera
    }
  };

  return (
    <div className="contact-form">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="personal-details">
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="message">
        <textarea
          name="message"
          placeholder="Escribe tu mensaje aqui..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        </div>
        <div className="button-form">
        <button type="submit">¡Envíame!</button></div>
        {/* Mostrar mensajes de éxito y error */}
        {successMessage && <p style={{ color: "white" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        
      </form>
    </div>
  );
};

export default Contacto;
