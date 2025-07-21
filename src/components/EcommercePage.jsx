import React from "react";
import githubIcon from '../assets/icons/github.svg';
import freeImg from '../assets/images/free.webp';

function EcommercePage() {
  return (
    <>
      {/* Hero del proyecto FreeStyle Shop */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-24 pb-8 bg-cuadros gap-8 md:gap-16 px-4">
        {/* Columna de texto y botones */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center min-w-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left mb-4">
            FreeStyle Shop
          </h1>
          <p className="text-lg text-text-secondary text-center md:text-left mb-8 max-w-2xl">
            Plataforma de e-commerce desarrollada para la venta de ropa y accesorios urbanos. FreeStyle Shop permite a los usuarios explorar productos, gestionar su carrito y realizar compras de forma segura y sencilla.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/tu-usuario/freestyle-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#23263a] hover:bg-[#22d3ee]/10 border border-cyan-400 text-cyan-300 font-semibold transition-colors shadow"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              Código del Proyecto
            </a>
            <a
              href="https://freestyle-shop-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#23263a] hover:bg-[#fde047]/10 border border-yellow-300 text-yellow-200 font-semibold transition-colors shadow"
            >
              <img src={githubIcon} alt="Demo" className="w-5 h-5" />
              Ver Demo
            </a>
          </div>
        </div>
        {/* Columna de imagen */}
        <div className="flex-1 flex justify-center items-center min-w-0">
          <img src={freeImg} alt="FreeStyle Shop ejemplo" className="rounded-2xl shadow-lg max-w-md md:max-w-xl w-full h-auto object-cover" />
        </div>
      </section>
    </>
  );
}

export default EcommercePage; 