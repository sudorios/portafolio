import React from "react";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-primary to-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-secondary/30 bg-gradient-to-br p-1 shadow-xl relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            }}
          >
            <div className={`rounded-2xl bg-[#18181b] overflow-hidden`}>
              <div
                className={`h-80 w-full bg-gradient-to-br ${project.bg}`}
                style={{ minHeight: "320px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-2xl object-cover w-full h-full border-b border-white/10"
                  style={{ objectFit: "cover" }}
                />
                {project.title === "Owens-Bot" ? (
                  <a href="/owens-bot" className="absolute cursor-pointer top-0 left-0 w-full h-80 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl text-white text-xl font-bold">
                    Leer más
                  </a>
                ) : (
                  <div className="absolute cursor-pointer top-0 left-0 w-full h-80 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                    <span className="text-white text-xl font-bold">Leer más</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
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
  );
}

export default Projects;
