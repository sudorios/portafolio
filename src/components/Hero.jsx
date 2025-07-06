import React from "react";
import meImg from "../assets/images/me.webp";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import gmailIcon from "../assets/icons/gmail.svg";

function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-12">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2 text-center md:text-left">
            Daniel Rios
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl md:text-2xl text-text text-center md:text-left">
              Desarrollador Web
            </h2>
            <span className="bg-secondary text-primary text-sm font-semibold px-3 py-1 rounded-full">
              +2 años
            </span>
          </div>
          <hr className="w-full border-white my-4 border rounded-full" />
          <div className="flex gap-3 mb-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="mailto:daniel.rios@email.com"
              className="hover:scale-110 transition-transform"
            >
              <img src={gmailIcon} alt="Gmail" className="w-6 h-6" />
            </a>
            <span className="text-text-secondary ml-2 select-all">
              daniel.rios@email.com
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-2 bg-green-900/60 rounded-full blur-2xl z-0" />
          <img
            src={meImg}
            alt="Avatar"
            className="relative w-40 h-40 rounded-full border-4 border-secondary object-cover z-10"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mt-12">
        <h3 className="text-2xl font-bold text-text mb-2">Biografía</h3>
        <hr className="border-card mb-4" />
        <p className="text-text text-lg leading-relaxed">
          Llevo 2 años desarrollando proyectos web, tanto en el ámbito
          universitario como de manera personal. Me he centrado en crear
          soluciones interactivas, adaptables y enfocadas en la experiencia del
          usuario. Como autodidacta, me apasiona seguir aprendiendo, lo que me
          ha permitido mejorar constantemente en el manejo de tecnologías
          actuales y en la creación de soluciones eficientes. Siempre busco
          desafíos que me impulsen a seguir creciendo y perfeccionando mis
          habilidades.
        </p>
      </div>
    </section>
  );
}

export default Hero;
