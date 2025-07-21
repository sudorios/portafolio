import React from "react";
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

function Footer() {
  return (
    <footer className="w-full bg-[#18181b] border-t border-secondary/30 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-text-secondary text-sm text-center md:text-left">
          © {new Date().getFullYear()} Daniel Rios. Todos los derechos reservados.
        </span>
        <div className="flex gap-4 items-center justify-center">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 