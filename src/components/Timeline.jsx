import React from 'react'

const events = [
  {
    date: '2021 - 2025',
    icon: '🎓',
    title: 'Universidad Nacional José Faustino Sánchez Carrión',
    subtitle: 'Ingeniería Informática',
    description: 'Actualmente curso la carrera de Ingeniería Informática en la UNJFSC, adquiriendo conocimientos en desarrollo de software, bases de datos y tecnologías modernas.',
    side: 'left',
  },
  {
    date: 'Mayo 2025 - Julio 2025',
    icon: '💼',
    title: 'Prácticas Preprofesionales',
    subtitle: 'Soporte de TI - Instituto Tecnológico de la UNJFSC',
    description: 'Realicé mis prácticas preprofesionales brindando soporte de TI, resolviendo incidencias y colaborando en la gestión tecnológica del instituto.',
    side: 'right',
  },
]

function Timeline() {
  return (
    <section className="w-full flex flex-col items-center py-20">
      <h2 className="text-3xl font-bold text-secondary mb-12">Experiencia & Estudios</h2>
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-secondary/40 z-0" />
        {events.map((event, idx) => (
          <div key={idx} className={`w-full flex ${event.side === 'left' ? 'justify-start' : 'justify-end'} mb-16 relative z-10`}>
            <div className={`w-full max-w-md ${event.side === 'left' ? 'pr-10' : 'pl-10'}`}>
              <div className="flex items-center mb-2">
                <span className="text-secondary text-lg font-semibold mr-3">{event.date}</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary text-2xl shadow-lg border-4 border-primary">{event.icon}</span>
              </div>
              <div className="bg-card/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <h4 className="text-md text-secondary mb-2 font-semibold">{event.subtitle}</h4>
                <p className="text-text-secondary text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline 