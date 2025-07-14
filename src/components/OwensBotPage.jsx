import React from "react";
import owensDocImg from "../assets/images/owens-doc.webp";

function OwensBotPage() {
  return (
    <section className="min-h-screen bg-[#0d1117] flex flex-col items-center py-16 px-4">
      {/* Presentación principal */}
      <div className="max-w-4xl w-full bg-[#18181b] rounded-2xl shadow-xl border border-secondary/30 p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
        <img
          src={owensDocImg}
          alt="Owens Bot"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl border border-white/10"
        />
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl font-bold text-white mb-2">Owens-Bot</h1>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Automatiza tus quinielas y combates en Discord</h2>
          <p className="text-lg text-text-secondary mb-6">
            Owens-Bot es un bot de Discord para crear quinielas y calificar combates. Está diseñado para comunidades que desean organizar eventos y competencias de manera sencilla y automatizada.
          </p>
          <div className="flex gap-4 mb-4">
            <a href="/docs/owens-bot" className="px-5 py-2 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">Documentación</a>
            <a href="#" className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">Invitar Bot</a>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-green-400">NodeJS</span>
            <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-blue-400">React</span>
            <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-cyan-300">Tailwind</span>
            <span className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-[#1e293b] text-green-300">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Características del producto */}
      <div className="max-w-5xl w-full mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Características del producto</h2>
        <p className="text-lg text-text-secondary text-center mb-10">Funcionalidades que mejoran la experiencia de tu comunidad</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <span className="text-3xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Quinielas Dinámicas</h3>
            <p className="text-text-secondary text-center">Crea y gestiona quinielas de manera sencilla y visual.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <span className="text-3xl text-white">⚔️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Calificación de Combates</h3>
            <p className="text-text-secondary text-center">Evalúa y registra resultados de combates en tiempo real.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <span className="text-3xl text-white">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Acceso Seguro</h3>
            <p className="text-text-secondary text-center">Gestión de roles y permisos para una administración segura.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Automatización</h3>
            <p className="text-text-secondary text-center">Automatiza tareas repetitivas y ahorra tiempo a los moderadores.</p>
          </div>
        </div>
      </div>

      {/* Objetivos/Beneficios */}
      <div className="max-w-5xl w-full mb-10">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Beneficios para tu comunidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#18181b] rounded-2xl p-6 border border-cyan-900">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Experiencia amigable</h3>
            <p className="text-text-secondary">Interfaz intuitiva y comandos simples para que cualquier usuario pueda participar sin complicaciones.</p>
          </div>
          <div className="bg-[#18181b] rounded-2xl p-6 border border-cyan-900">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Resultados en tiempo real</h3>
            <p className="text-text-secondary">Visualiza puntajes, clasificaciones y resultados al instante, manteniendo a todos informados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwensBotPage; 