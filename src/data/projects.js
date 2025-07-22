import owensDocImg from '../assets/images/owens-doc.webp';
import freeImg from '../assets/images/freestyle-shop/free.webp';

const projects = [
  {
    title: "Owens-Bot",
    description:
      "Un bot de Discord para crear quinielas y calificar combates. Owens-Bot está diseñado para comunidades que desean organizar eventos y competencias de manera sencilla y automatizada.",
    image: owensDocImg,
    codeUrl: "",
    techs: [
      { name: "NodeJS", color: "bg-[#1e293b] text-green-400" },
      { name: "React", color: "bg-[#1e293b] text-blue-400" },
      { name: "Tailwind", color: "bg-[#1e293b] text-cyan-300" },
      { name: "MongoDB", color: "bg-[#1e293b] text-green-300" },
    ],
  },
  {
    title: "FreeStyle Shop",
    description: "Freestyle Shop es una plataforma web de e-commerce desarrollada en PHP y PostgreSQL, orientada a la gestión y venta de productos de moda. Incluye un panel administrativo robusto y una experiencia de compra moderna para el cliente final",
    image: freeImg,
    techs: [
      { name: "PHP", color: "bg-[#1e293b] text-purple-400" },
      { name: "PostgreSQL", color: "bg-[#1e293b] text-blue-300" },
      { name: "Tailwind", color: "bg-[#1e293b] text-cyan-300" },
      { name: "Cloudinary", color: "bg-[#1e293b] text-yellow-300" },
    ],
  },
];

export default projects; 