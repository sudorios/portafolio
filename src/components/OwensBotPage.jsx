import {
  IconBallFootball,
  IconTrophy,
  IconStar,
  IconHelp,
} from "@tabler/icons-react";
import githubIcon from "../assets/icons/github.svg";
import owensDocImg from "../assets/images/owens-bot/owens-doc.webp";
import espPool from "../assets/images/owens-bot/esp-pool.webp";
import enPool from "../assets/images/owens-bot/en-pool.webp";
import bot from "../assets/images/owens-bot/botInCel.webp";
import Carousel from "./Carousel";
import ContactForm from "./ContactForm";

function OwensBotPage() {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-24 pb-4 bg-cuadros gap-8 md:gap-16 px-4">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center min-w-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left mb-4">
            Owens-Bot para Discord
          </h1>
          <p className="text-lg text-text-secondary text-center md:text-left mb-8 max-w-2xl">
            Un bot avanzado para gestionar quinielas, rankings y encuestas en tu
            comunidad de Discord. Automatiza, organiza y potencia la experiencia
            de tus usuarios.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/tu-usuario/owens-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#23263a] hover:bg-[#22d3ee]/10 border border-cyan-400 text-cyan-300 font-semibold transition-colors shadow"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              Código del Bot
            </a>
            <a
              href="https://github.com/tu-usuario/owens-bot-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#23263a] hover:bg-[#fde047]/10 border border-yellow-300 text-yellow-200 font-semibold transition-colors shadow"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              Documentación
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-0">
          <img
            src={owensDocImg}
            alt="Owens Bot ejemplo"
            className="rounded-2xl shadow-lg max-w-md md:max-w-xl w-full h-auto object-cover"
          />
        </div>
      </section>
      <Carousel
        slides={[
          {
            img: owensDocImg,
            alt: "Interfaz de documentación del Owens Bot",
            desc: "Consulta fácilmente la documentación del Owens Bot para gestionar pools y apuestas de forma sencilla.",
          },
          {
            img: espPool,
            alt: "Vista en español de los pools",
            desc: "Administra tus pools y apuestas en español con la interfaz fácil de usar.",
          },
          {
            img: enPool,
            alt: "Vista en inglés de los pools",
            desc: "Gestiona tus pools y apuestas en inglés para una experiencia internacional.",
          },
          {
            img: bot,
            alt: "Vista del bot",
            desc: "Interactúa con el bot de apuestas en Discord, gestionando pools y apuestas directamente desde la plataforma.",
          },
        ]}
        title="Automatiza tu servidor de Discord con nuestro bot"
      />
      <section
        className="w-full min-h-[60vh] flex flex-col items-center justify-center pt-16 pb-16"
        style={{
          backgroundSize: "40px 40px",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Principales funcionalidades
        </h2>
        <p className="text-lg text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Owens-Bot ofrece herramientas avanzadas para gestionar quinielas,
          rankings, encuestas y utilidades en tu servidor de Discord.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-2 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-8">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#23263a]">
                  <IconBallFootball size={48} stroke={2} color="#22d3ee" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  Gestión de Quinielas
                </h3>
                <ul className="text-text-secondary text-base list-disc list-inside space-y-1">
                  <li>Crear y cerrar quinielas para eventos</li>
                  <li>Añadir combates y permitir apuestas</li>
                  <li>Mostrar estado de quinielas activas</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-8">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#23263a]">
                  <IconTrophy size={48} stroke={2} color="#fde047" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Sistema de Ranking
                </h3>
                <ul className="text-text-secondary text-base list-disc list-inside space-y-1">
                  <li>Puntuación automática por aciertos</li>
                  <li>Ranking global y por evento</li>
                  <li>Soporte para temporadas y ganadores históricos</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-8">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#23263a]">
                  <IconStar size={48} stroke={2} color="#a1a1aa" />
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">
                  Encuestas de Calificación
                </h3>
                <ul className="text-text-secondary text-base list-disc list-inside space-y-1">
                  <li>Califica combates del 1 al 5</li>
                  <li>Promedio y número de votos visible</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-8">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#23263a]">
                  <IconHelp size={48} stroke={2} color="#22d3ee" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  Comandos de Utilidad
                </h3>
                <ul className="text-text-secondary text-base list-disc list-inside space-y-1">
                  <li>Ayuda y lista de comandos</li>
                  <li>Opciones para donar y apoyar el desarrollo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default OwensBotPage;
