import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const hash = location.hash;

  return (
    <header className="text-white fixed top-0 z-20 flex items-center justify-center w-full mx-auto mt-4">
      <nav className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-6 text-sm sm:text-base font-medium rounded-full bg-primary/80 backdrop-blur-md shadow-lg py-2 sm:py-3 border border-cyan-500">
        <a
          className={`cursor-pointer ${isHome && (hash === '#hero' || !hash) ? 'text-secondary font-bold' : ''}`}
          onClick={() => {
            if (!isHome) navigate('/');
            window.location.hash = '#hero';
          }}
        >
          Daniel Rios
        </a>
        <a
          className={`cursor-pointer hover:text-secondary transition-colors ${isHome && hash === '#experiencia' ? 'text-secondary font-bold' : ''}`}
          onClick={() => {
            if (!isHome) navigate('/');
            window.location.hash = '#experiencia';
          }}
        >
          Experiencia
        </a>
        <a
          className={`cursor-pointer hover:text-secondary transition-colors ${isHome && hash === '#proyectos' ? 'text-secondary font-bold' : ''}`}
          onClick={() => {
            if (!isHome) navigate('/');
            window.location.hash = '#proyectos';
          }}
        >
          Proyectos
        </a>
        <a
          className={`cursor-pointer hover:text-secondary transition-colors ${isHome && hash === '#contacto' ? 'text-secondary font-bold' : ''}`}
          onClick={() => {
            if (!isHome) navigate('/');
            window.location.hash = '#contacto';
          }}
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header 