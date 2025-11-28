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



export default function Projects() {
  const projects = [
   { img: img18, title: "Prisma Watches Clone", link: "https://github.com/thasnimpk/prisma_clone.git" },
       { img: img19, title: "CRUD dress",  link: "https://github.com/thasnimpk/crudapp.git" },
       { img: img22, title: "Portfolio",  link: "https://github.com/thasnimpk" },
       { img: img21, title: "CRUD",  link: "https://github.com/thasnimpk/CRUD.git" },
       { img: img20, title: "Temple Run Clone", link: "https://github.com/thasnimpk/-imangistudio-templerun-clone.git" },
       { img: img23, title: "Acer laptops clone",  link: "https://github.com/thasnimpk/-acer-laptop-.git" },
       { img: img24, title: "facebook login page",  link: "https://github.com/thasnimpk/FACEBOOK-LOGIN.git" },
       { img: img25, title: "clash of clans clone",  link: "https://github.com/thasnimpk/clashofclans.git" },
       { img: img26, title: "Todos",  link: "https://github.com/thasnimpk/TODO.git" },
     
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen w-full bg-black px-4 py-10">
        <h1 className="text-white text-4xl font-bold text-center mb-10">
          All Projects
        </h1>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6
            max-w-6xl
            mx-auto
          "
        >
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
              <p className="text-yellow-300">{project.stack}</p>
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
