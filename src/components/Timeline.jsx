import React, { useState, useEffect } from 'react';
import { IconSchool, IconBriefcase } from '@tabler/icons-react';

const events = [
  {
    date: '2021 - 2025',
    icon: <IconSchool size={28} className="text-primary" />, 
    title: 'Universidad Nacional José Faustino Sánchez Carrión',
    subtitle: 'Ingeniería Informática',
    description: 'Actualmente curso la carrera de Ingeniería Informática en la UNJFSC, adquiriendo conocimientos en desarrollo de software, bases de datos y tecnologías modernas.',
    side: 'left',
  },
  {
    date: 'Mayo 2025 - Julio 2025',
    icon: <IconBriefcase size={28} className="text-primary" />,
    title: 'Prácticas Preprofesionales',
    subtitle: 'Soporte de TI - Instituto Tecnológico de la UNJFSC',
    description: 'Realicé mis prácticas preprofesionales brindando soporte de TI, resolviendo incidencias y colaborando en la gestión tecnológica del instituto.',
    side: 'right',
  },
];


function Timeline() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 100);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section name="experiencia" id="experiencia" className="w-full flex flex-col items-center py-6 sm:py-10 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Experiencia & Estudios</h2>
      <div className="relative w-full max-w-2xl sm:max-w-4xl flex flex-col items-center px-2 sm:px-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-secondary/40 z-0" />
        {events.map((event, idx) => (
          <div key={idx} className={`w-full flex ${event.side === 'left' ? 'justify-start' : 'justify-end'} mb-10 sm:mb-16 relative z-10`}> 
            <div className={`w-full max-w-xs sm:max-w-md ${event.side === 'left' ? 'pr-3 sm:pr-10' : 'pl-3 sm:pl-10'}`}> 
              <div className="bg-card rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-primary text-lg sm:text-xl shadow-lg border-2 border-primary">
                    {event.icon}
                  </span>
                  <span className="text-secondary text-xs sm:text-sm font-semibold">{event.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{event.title}</h3>
                <h4 className="text-sm sm:text-md text-secondary mb-2 font-semibold">{event.subtitle}</h4>
                <p className="text-text-secondary text-xs sm:text-sm">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-secondary text-primary px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg hover:bg-secondary/80 transition flex items-center gap-2"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </button>
      )}
    </section>
  )
}

export default Timeline 