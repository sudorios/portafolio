import meImg from "../assets/images/me.webp";
import linkedinIcon from "../assets/icons/linkedin.svg";

function Hero() {
  return (
    <section id="hero" className="w-full min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-12">
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-xl shadow p-8">
        <div className="flex-shrink-0 flex flex-col items-center">
          <img
            src={meImg}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-secondary object-cover mb-4"
          />
          <span className="inline-block bg-transparent border border-cyan-400 text-white px-4 py-1 rounded-full font-semibold text-sm mb-2">
            Disponible para trabajar
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center md:text-left">
            Daniel Rios
          </h1>
          <p className="text-lg text-white mb-4 text-center md:text-left">
            <span className="text-base text-gray-200">+2 años de experiencia. </span>
            <span className="font-bold text-cyan-500">Desarrollador Web y Estudiante de Ingeniería Informática</span> de Huacho, Perú.<br className="hidden md:block" />
            <span className="text-gray-200">Apasionado por crear aplicaciones web modernas y eficientes.</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#contacto"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5M21 10.5l-9 7.5-9-7.5" /></svg>
              Contáctame
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
