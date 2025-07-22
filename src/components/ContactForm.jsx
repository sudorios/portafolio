import React from "react";

function ContactForm() {
  const [mensaje, setMensaje] = React.useState("");
  const [enviado, setEnviado] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleChange(e) {
    setMensaje(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!mensaje.trim()) {
      setError("Por favor escribe un mensaje válido.");
      return;
    }
    setError("");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="text-2xl text-blue-700 font-bold mb-2">
          ¡Gracias por tu mensaje!
        </div>
        <div className="text-gray-700 text-center">
          Nuestro equipo ha recibido tu solicitud y te responderá a la brevedad.
          Si tu consulta es urgente, puedes escribirnos directamente a nuestro
          correo corporativo.
        </div>
      </div>
    );
  }

  return (
    <form
      className="flex-1 flex flex-col gap-4 bg-white rounded-xl p-6 shadow"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="font-semibold text-gray-700 mb-2 block">Para</label>
        <input
          type="text"
          className="w-full rounded-2xl bg-gray-200 text-gray-600 px-6 py-4 text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition shadow-sm cursor-not-allowed"
          value="wtke90@gmail.com"
          disabled
        />
      </div>
      <div>
        <label className="font-semibold text-gray-700 mb-2 block">Asunto</label>
        <input
          type="text"
          className="w-full rounded-2xl bg-gray-200 text-gray-600 px-6 py-4 text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition shadow-sm cursor-not-allowed"
          value="Consulta de portafolio"
          disabled
        />
      </div>
      <div>
        <label className="font-semibold text-gray-700 mb-2 block">Mensaje</label>
        <textarea
          name="mensaje"
          className="w-full rounded-2xl bg-gray-200 text-gray-700 px-6 py-4 text-lg font-medium min-h-[120px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y transition shadow-sm"
          placeholder="Escribe tu consulta o mensaje para nuestro equipo..."
          value={mensaje}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <button
        type="submit"
        className="bg-blue-700 text-white font-bold py-3 rounded-lg mt-2 hover:bg-blue-800 transition"
      >
        Enviar mensaje
      </button>
    </form>
  );
}

export default ContactForm;
