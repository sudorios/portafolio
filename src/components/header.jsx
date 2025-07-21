import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const hash = location.hash;

  return (
    <header className="text-white fixed top-0 z-20 flex items-center justify-center w-full mx-auto mt-4">
      <nav className="flex gap-8 px-6 text-base font-medium rounded-full bg-primary/80 backdrop-blur-md shadow-lg py-3 border border-secondary">
        <a
          className={`cursor-pointer ${isHome && !hash ? 'text-secondary font-bold' : ''}`}
          onClick={() => navigate('/')}
        >
          Daniel Rios
        </a>
        <a
          href={isHome ? '#experiencia' : '/#experiencia'}
          className={`hover:text-secondary transition-colors ${isHome && hash === '#experiencia' ? 'text-secondary font-bold' : ''}`}
        >
          Experiencia
        </a>
        <a
          href={isHome ? '#proyectos' : '/#proyectos'}
          className={`hover:text-secondary transition-colors ${isHome && hash === '#proyectos' ? 'text-secondary font-bold' : ''}`}
        >
          Proyectos
        </a>
        <a
          href={isHome ? '#contacto' : '/#contacto'}
          className={`hover:text-secondary transition-colors ${isHome && hash === '#contacto' ? 'text-secondary font-bold' : ''}`}
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header 