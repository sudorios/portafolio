import ContactForm from "./ContactForm";
import githubIcon from "../assets/icons/github.svg";
import freeImg from "../assets/images/freestyle-shop/free.webp";
import carritoImg from "../assets/images/freestyle-shop/carrito.webp";
import productoImg from "../assets/images/freestyle-shop/producto.webp";
import vistaCategoriasImg from "../assets/images/freestyle-shop/vista_categorias.webp";
import dashboardImg from "../assets/images/freestyle-shop/dashboard.webp";
import usuariosImg from "../assets/images/freestyle-shop/usuarios.webp";
import catalogoImg from "../assets/images/freestyle-shop/catalogo.webp";
import Carousel from "./Carousel";
import {
  IconShoppingBag,
  IconClipboardList,
  IconUsers,
  IconChartBar,
} from "@tabler/icons-react";

function EcommercePage() {
  return (
    <>
     <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-24 pb-8 bg-cuadros gap-8 md:gap-16 px-4">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center min-w-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left mb-4">
            FreeStyle Shop
          </h1>
          <p className="text-lg text-text-secondary text-center md:text-left mb-8 max-w-2xl">
            Plataforma de e-commerce desarrollada para la venta de ropa y
            accesorios urbanos. FreeStyle Shop permite a los usuarios explorar
            productos, gestionar su carrito y realizar compras de forma segura y
            sencilla.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/sudorios/freestyle-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#23263a] hover:bg-[#22d3ee]/10 border border-cyan-400 text-cyan-300 font-semibold transition-colors shadow"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              Código del Proyecto
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center min-w-0">
          <img
            src={freeImg}
            alt="FreeStyle Shop ejemplo"
            className="rounded-2xl shadow-lg max-w-md md:max-w-xl w-full h-auto object-cover"
          />
        </div>
      </section>
      <Carousel
        slides={[
          {
            img: carritoImg,
            alt: "Vista del carrito de compras",
            desc: "Gestiona tu carrito y revisa tus productos antes de comprar.",
          },
          {
            img: productoImg,
            alt: "Detalle de producto",
            desc: "Explora los detalles de cada producto disponible en la tienda.",
          },
          {
            img: vistaCategoriasImg,
            alt: "Vista de categorías",
            desc: "Navega fácilmente por las diferentes categorías de productos.",
          },
          {
            img: freeImg,
            alt: "Página principal FreeStyle Shop",
            desc: "Disfruta de una experiencia de compra moderna y segura.",
          },
        ]}
        title="Solución e-commerce para potenciar tu negocio"
      />
      <section
        className="w-full min-h-[60vh] flex flex-col items-center justify-center pt-8 sm:pt-16 pb-8 sm:pb-16"
        style={{ backgroundSize: "40px 40px" }}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
          Funcionalidades principales
        </h2>
        <p className="text-base sm:text-lg text-text-secondary text-center mb-6 sm:mb-10 max-w-2xl mx-auto">
          Descubre las herramientas clave para gestionar tu tienda online de
          manera eficiente y profesional.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-1 sm:px-2 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-4 sm:p-8">
                <div className="mb-4 sm:mb-5 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#23263a]">
                  <IconShoppingBag size={28} sm:size={40} className="text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  Gestión de Productos
                </h3>
                <ul className="text-xs sm:text-base text-text-secondary list-none space-y-1 mt-2">
                  <li><span className="mr-2">•</span>Agrega, edita y elimina productos fácilmente</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Control de inventario en tiempo real</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Categorización avanzada</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-4 sm:p-8">
                <div className="mb-4 sm:mb-5 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#23263a]">
                  <IconClipboardList size={28} sm:size={40} className="text-yellow-400" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-yellow-400 mb-1 sm:mb-2">
                  Gestión de Pedidos
                </h3>
                <ul className="text-xs sm:text-base text-text-secondary list-none space-y-1 mt-2">
                  <li><span className="mr-2">•</span>Visualiza y administra pedidos en curso</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Actualización de estados y seguimiento</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Historial de compras</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-4 sm:p-8">
                <div className="mb-4 sm:mb-5 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#23263a]">
                  <IconUsers size={28} sm:size={40} className="text-gray-300" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-300 mb-1 sm:mb-2">
                  Clientes y Usuarios
                </h3>
                <ul className="text-xs sm:text-base text-text-secondary list-none space-y-1 mt-2">
                  <li><span className="mr-2">•</span>Gestión de clientes y perfiles</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Historial de compras por usuario</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Soporte para roles y permisos</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center bg-[#18181b] rounded-2xl shadow-lg border border-secondary/30 p-4 sm:p-8">
                <div className="mb-4 sm:mb-5 flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#23263a]">
                  <IconChartBar size={28} sm:size={40} className="text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  Reportes y Estadísticas
                </h3>
                <ul className="text-xs sm:text-base text-text-secondary list-none space-y-1 mt-2">
                  <li><span className="mr-2">•</span>Panel de ventas y métricas clave</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Exportación de reportes</li>
                  <hr className="border-t border-white/10 my-1" />
                  <li><span className="mr-2">•</span>Gráficos y visualización de datos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carousel
        slides={[
          {
            img: dashboardImg,
            alt: "Panel principal del dashboard",
            desc: "Visualiza y gestiona toda la información clave de tu tienda desde un solo lugar.",
          },
          {
            img: usuariosImg,
            alt: "Gestión de usuarios",
            desc: "Administra los usuarios, roles y permisos de tu plataforma de manera sencilla.",
          },
          {
            img: catalogoImg,
            alt: "Catálogo de productos",
            desc: "Organiza y actualiza tu catálogo de productos de forma eficiente y profesional.",
          },
        ]}
        title="Gestiona tu panel de control de manera profesional"
      />
        <ContactForm />
    </>
  );
}
export default EcommercePage;