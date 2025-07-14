import React from "react";
import owensDocImg from "../assets/images/owens-doc.webp";
import SVGLGithub from '../assets/icons/github.svg';
const icons = {
  quinielas: (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-clubs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 0 0 -4.488 2.797l-.103 .225a4.998 4.998 0 0 0 -.334 2.837l.027 .14a5 5 0 0 0 -3.091 9.009l.198 .14a4.998 4.998 0 0 0 4.42 .58l.174 -.066l-.773 3.095a1 1 0 0 0 .97 1.243h6l.113 -.006a1 1 0 0 0 .857 -1.237l-.774 -3.095l.174 .065a5 5 0 1 0 1.527 -9.727l.028 -.14a4.997 4.997 0 0 0 -4.925 -5.86z" /></svg>  ),
  ranking: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l4.472 9.072L34 16.18l-7 6.828L28.944 34 20 28.944 11.056 34 13 23.008 6 16.18l9.528-1.108L20 6z" fill="#f5a425"/></svg>
  ),
  encuesta: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16zm0-2C12.268 34 6 27.732 6 20S12.268 6 20 6s14 6.268 14 14-6.268 14-14 14zm-2-10h4v4h-4v-4zm0-12h4v10h-4V12z" fill="#a1a1aa"/></svg>
  ),
  ayuda: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16zm0-2C12.268 34 6 27.732 6 20S12.268 6 20 6s14 6.268 14 14-6.268 14-14 14zm-1-10h2v2h-2v-2zm1-14c-3.314 0-6 2.686-6 6h2a4 4 0 118 0c0 2.21-1.79 4-4 4h-1v2h1a6 6 0 100-12z" fill="#06b6d4"/></svg>
  ),
};

function OwensBotPage() {
  return (
    <>
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center pb-12 border-b-2 border-secondary/40 mb-12 mt-32" style={{ backgroundColor: '#0d1117', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0\' y=\'0\' width=\'40\' height=\'40\' fill=\'none\'/%3E%3Cpath d=\'M40 0H0V40\' stroke=\'%2327272a\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }}>
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 text-center md:text-left">
              Owens-Bot
            </h1>
            <p className="text-lg md:text-xl text-text-secondary text-center md:text-left mb-6 max-w-2xl">
              Un bot de Discord para crear quinielas y calificar combates. Owens-Bot está diseñado para comunidades que desean organizar eventos y competencias de manera sencilla y automatizada.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com/tuusuario/owens-bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#18181b] text-white font-semibold hover:bg-[#23232b] transition border border-white/10">
                <img src={SVGLGithub} alt="GitHub" className="w-5 h-5" />
                Bot en GitHub
              </a>
              <a href="https://github.com/tuusuario/owens-bot-docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#18181b] text-white font-semibold hover:bg-[#23232b] transition border border-white/10">
                <img src={SVGLGithub} alt="GitHub" className="w-5 h-5" />
                Docs en GitHub
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <img
              src={owensDocImg}
              alt="Owens Bot"
              className="relative w-[500px] h-[340px] rounded-2xl object-cover z-10"
            />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center pb-12 border-b-2 border-secondary/40" style={{ backgroundColor: '#0d1117', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0\' y=\'0\' width=\'40\' height=\'40\' fill=\'none\'/%3E%3Cpath d=\'M40 0H0V40\' stroke=\'%2327272a\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }}>
        <h2 className="text-3xl font-bold text-white text-center mb-2">Principales funcionalidades</h2>
        <p className="text-lg text-text-secondary text-center mb-10">Owens-Bot ofrece herramientas avanzadas para gestionar quinielas, rankings, encuestas y utilidades en tu servidor de Discord.</p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl bg-[#18181b]/80 rounded-2xl shadow-xl border border-secondary/30 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{icons.quinielas}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-1">Gestión de Quinielas</h3>
                <ul className="text-text-secondary text-sm list-disc list-inside">
                  <li>Crear y cerrar quinielas para eventos</li>
                  <li>Añadir combates y permitir apuestas</li>
                  <li>Mostrar estado de quinielas activas</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{icons.ranking}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-1">Sistema de Ranking</h3>
                <ul className="text-text-secondary text-sm list-disc list-inside">
                  <li>Puntuación automática por aciertos</li>
                  <li>Ranking global y por evento</li>
                  <li>Soporte para temporadas y ganadores históricos</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{icons.encuesta}</div>
                <h3 className="text-xl font-bold text-gray-300 mb-1">Encuestas de Calificación</h3>
                <ul className="text-text-secondary text-sm list-disc list-inside">
                  <li>Califica combates del 1 al 5</li>
                  <li>Promedio y número de votos visible</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{icons.ayuda}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-1">Comandos de Utilidad</h3>
                <ul className="text-text-secondary text-sm list-disc list-inside">
                  <li>Ayuda y lista de comandos</li>
                  <li>Opciones para donar y apoyar el desarrollo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl w-full mb-10">
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
      </section>
    </>
  );
}

export default OwensBotPage; 