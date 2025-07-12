import owensDocImg from '../assets/images/owens-doc.webp';

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
    title: "Clon de Klar",
    description:
      "Este proyecto simula el funcionamiento de la aplicación bancaria original (sin la posibilidad de realizar ningún movimiento bancario real). Mi objetivo con este proyecto fue mejorar mis habilidades Fullstack en React Native con Expo y Firebase.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    bg: "from-[#43cea2] to-[#185a9d]",
    codeUrl: "#",
    techs: [
      { name: "Expo", color: "bg-[#1e293b] text-white" },
      { name: "React Native", color: "bg-[#1e293b] text-blue-400" },
      { name: "TypeScript", color: "bg-[#1e293b] text-blue-300" },
      { name: "CSS", color: "bg-[#1e293b] text-cyan-300" },
      { name: "Firebase", color: "bg-orange-500 text-white" },
    ],
  },
];

export default projects; 