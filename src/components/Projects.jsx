import React from "react";
import Header from "./Header";

import img18 from "../../src/assets/Screenshot 2025-11-18 115849.png";
import img19 from "../../src/assets/Screenshot 2025-11-21 144044.png";
import img20 from "../../src/assets/Screenshot 2025-11-21 145909.png";
import img21 from "../../src/assets/Screenshot 2025-11-21 150652.png";
import img22 from "../../src/assets/Screenshot 2025-11-24 095843.png";
import img23 from "../../src/assets/Screenshot 2025-11-24 100820.png";
import img24 from "../../src/assets/Screenshot 2025-11-24 105403.png";
import img25 from "../../src/assets/Screenshot 2025-11-24 161233.png";
import img26 from "../../src/assets/Screenshot 2025-11-28 143431.png";
import img27 from "../../src/assets/new.png";
import img28 from "../../src/assets/nw1.png";

export default function Projects() {
  const projects = [
    {
      img: img27,
      title: "DISTRICT chatroom",
      github: "https://github.com/amaannii/district-frontend.git",
      live: "https://district-frontend.onrender.com"
    },
    {
      img: img28,
      title: "Profilo resume builder",
      github: "https://github.com/thasnimpk/resume-builder-profilo.git",
      live: "https://resume-builder-profilo.onrender.com"
    },
    {
      img: img19,
      title: "CRUD dress",
      github: "https://github.com/thasnimpk/crudapp.git",
       live: "https://crudapp-vhnr.onrender.com"
    },
    {
      img: img18,
      title: "Prisma Watches Clone",
      github: "https://github.com/thasnimpk/prisma_clone.git",
      live: "https://prisma-clone-sw3a.onrender.com"
    },
    {
      img: img22,
      title: "Portfolio",
      github: "https://github.com/thasnimpk/portfolio.git",
       live: "https://portfolio-p8ef.onrender.com/"
    },
    {
      img: img21,
      title: "CRUD",
      github: "https://github.com/thasnimpk/CRUD.git",
    },
    {
      img: img26,
      title: "Todos",
      github: "https://github.com/thasnimpk/TODO.git"
    },
    {
      img: img20,
      title: "Temple Run Clone",
      github: "https://github.com/thasnimpk/-imangistudio-templerun-clone.git"
    },
    {
      img: img23,
      title: "Acer laptops clone",
      github: "https://github.com/thasnimpk/-acer-laptop-.git"
    },
    {
      img: img24,
      title: "facebook login page",
      github: "https://github.com/thasnimpk/FACEBOOK-LOGIN.git"
    },
    {
      img: img25,
      title: "clash of clans clone",
      github: "https://github.com/thasnimpk/clashofclans.git"
    },
    
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen w-full bg-black px-4 py-10">
        <h1 className="text-white text-4xl font-bold text-center mb-10">
          All Projects
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-4 hover:scale-[1.02] transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl w-full object-cover"
              />

              <h5 className="text-white mt-3 text-lg font-semibold">
                {project.title}
              </h5>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
                >
                  💻 GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-500"
                  >
                    🚀 Live
                  </a>
                )}
              </div>
            </div>
          ))}

        </div>

        <p className="text-gray-400 text-center mt-10 text-sm">
          End of projects
        </p>
      </div>
    </>
  );
}