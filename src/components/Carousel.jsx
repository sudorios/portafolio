import React from "react";

function Carousel({ slides, title, backgroundClass = "bg-gradient-to-br from-[#18181b] to-[#23263a]" }) {
  const [current, setCurrent] = React.useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={`relative w-full min-h-[32rem] flex flex-col justify-center items-center py-10 px-2 overflow-visible ${backgroundClass}`}>
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h2>
        <p className="text-base md:text-lg text-white min-h-[2.5rem] transition-all duration-300">
          {slides[current].desc}
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-2 mb-2">
        <div className="max-w-5xl w-full flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-white/80 hover:bg-gray-100 text-gray-700 rounded-full p-1.5 shadow-lg border border-gray-200 transition-colors"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 hover:bg-gray-100 text-gray-700 rounded-full p-1.5 shadow-lg border border-gray-200 transition-colors"
              aria-label="Siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="relative w-[95vw] max-w-5xl h-[28rem] md:h-[36rem] flex items-center justify-center -mx-4 mt-8 md:-mx-0">
            <img
              src={slides[current].img}
              alt={slides[current].alt}
              className="rounded-2xl w-full h-full object-cover scale-105"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? "bg-gray-700" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel; 