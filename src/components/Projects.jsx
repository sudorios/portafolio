import React from 'react'

const projects = [
  {
    title: 'Clon de Spotify',
    description:
      'Es una copia del diseño y funcionamiento de la aplicación de escritorio de Spotify hecha con Astro. La utilicé principalmente para aprender las bases de Framework y para conocer el funcionamiento de las View Transitions de Astro.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    bg: 'from-[#4e54c8] to-[#8f94fb]',
    codeUrl: '#',
    techs: [
      { name: 'Astro', color: 'bg-pink-600 text-white' },
      { name: 'React', color: 'bg-[#1e293b] text-blue-400' },
      { name: 'TypeScript', color: 'bg-[#1e293b] text-blue-300' },
      { name: 'Tailwind', color: 'bg-[#1e293b] text-cyan-300' },
    ],
  },
  {
    title: 'Clon de Klar',
    description:
      'Este proyecto simula el funcionamiento de la aplicación bancaria original (sin la posibilidad de realizar ningún movimiento bancario real). Mi objetivo con este proyecto fue mejorar mis habilidades Fullstack en React Native con Expo y Firebase.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    bg: 'from-[#43cea2] to-[#185a9d]',
    codeUrl: '#',
    techs: [
      { name: 'Expo', color: 'bg-[#1e293b] text-white' },
      { name: 'React Native', color: 'bg-[#1e293b] text-blue-400' },
      { name: 'TypeScript', color: 'bg-[#1e293b] text-blue-300' },
      { name: 'CSS', color: 'bg-[#1e293b] text-cyan-300' },
      { name: 'Firebase', color: 'bg-orange-500 text-white' },
    ],
  },
]

function Projects() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-primary to-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-secondary/30 bg-gradient-to-br p-1 shadow-xl"
            style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
          >
            <div className={`rounded-2xl bg-[#18181b] overflow-hidden`}>
              <div
                className={`h-56 w-full flex items-end justify-end p-4 bg-gradient-to-br ${project.bg}`}
                style={{ minHeight: '220px' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg object-cover h-40 w-full max-w-[90%] border border-white/10"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-3 py-1 rounded-lg text-sm font-semibold border border-white/10 ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 