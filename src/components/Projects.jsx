import projects from "../data/projects";

function Projects() {
  return (
    <section id="proyectos" className="w-full py-6 sm:py-10 bg-gradient-to-br from-[#18181b] to-[#23263a]">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Mis Proyectos
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-secondary/30 bg-gradient-to-br p-1 shadow-xl relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div
                className={`rounded-2xl bg-[#18181b] min-h-[260px] sm:min-h-[340px] flex flex-col h-full`}
              >
                <div
                  className={`h-48 sm:h-80 w-full bg-gradient-to-br ${project.bg}`}
                  style={{ minHeight: "200px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl object-cover w-full h-full border-b border-white/10"
                    style={{ objectFit: "cover" }}
                  />
                  {project.title === "Owens-Bot" ? (
                    <a
                      href="/owens-bot"
                      className="absolute cursor-pointer top-0 left-0 w-full h-48 sm:h-80 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl text-white text-lg sm:text-xl font-bold"
                    >
                      Leer más
                    </a>
                  ) : project.title === "FreeStyle Shop" ? (
                    <a
                      href="/freestyle-shop"
                      className="absolute cursor-pointer top-0 left-0 w-full h-48 sm:h-80 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl text-white text-lg sm:text-xl font-bold"
                    >
                      Leer más
                    </a>
                  ) : (
                    <div className="absolute cursor-pointer top-0 left-0 w-full h-48 sm:h-80 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                      <span className="text-white text-lg sm:text-xl font-bold">
                        Leer más
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-base text-text-secondary mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold border border-white/10 ${tech.color}`}
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
      </div>
    </section>
  );
}

export default Projects;
