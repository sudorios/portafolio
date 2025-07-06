import React from 'react'

function Header() {
  return (
    <header className="text-white fixed top-0 z-20 flex items-center justify-center w-full mx-auto mt-4">
      <nav className="flex gap-8 px-6 text-base font-medium rounded-full bg-primary/80 backdrop-blur-md shadow-lg py-3 border border-secondary">
        <a className="text-secondary">Daniel Rios</a>
        <a href="#experiencia" className="hover:text-secondary transition-colors">Experiencia</a>
        <a href="#proyectos" className="hover:text-secondary transition-colors">Proyectos</a>
        <a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a>
      </nav>
    </header>
  )
}

export default Header 