import React from "react";
import owensDocImg from "../assets/images/owens-doc.webp";

function OwensBotPage() {
  return (
    <section className="min-h-screen bg-[#0d1117] flex flex-col items-center py-16 px-4">
      <div className="max-w-3xl w-full bg-[#18181b] rounded-2xl shadow-xl border border-secondary/30 p-8">
        <img
          src={owensDocImg}
          alt="Owens Bot"
          className="w-full h-80 object-cover rounded-xl mb-8 border border-white/10"
        />
        <h1 className="text-4xl font-bold text-white mb-4">Owens-Bot</h1>
        <p className="text-lg text-text-secondary mb-6">
          Owens-Bot es un bot de Discord para crear quinielas y calificar combates. Está diseñado para comunidades que desean organizar eventos y competencias de manera sencilla y automatizada.
        </p>
        <ul className="list-disc pl-6 text-white mb-6">
          <li>Gestión de quinielas y participantes</li>
          <li>Control de puntajes y calificación en tiempo real</li>
          <li>Comandos intuitivos y panel de administración</li>
          <li>Integración con bases de datos</li>
        </ul>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-green-400">NodeJS</span>
          <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-blue-400">React</span>
          <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-cyan-300">Tailwind</span>
          <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-green-300">MongoDB</span>
        </div>
        <p className="text-text-secondary">¡Próximamente más detalles, capturas y documentación!</p>
      </div>
    </section>
  );
}

export default OwensBotPage; 