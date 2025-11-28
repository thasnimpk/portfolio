import React from "react";
import img from "../../src/assets/Home Page.png";
import img1 from "../../src/assets/download (11).png";
import img2 from "../../src/assets/download.png";
import img3 from "../../src/assets/download (1).png";
import img4 from "../../src/assets/download (2).png";
import img5 from "../../src/assets/download (3).png";
import img6 from "../../src/assets/download (4).png";
import img7 from "../../src/assets/download (5).png";
import img8 from "../../src/assets/download (6).png";
import img9 from "../../src/assets/download (7).png";
import img10 from "../../src/assets/download (8).png";
import img11 from "../../src/assets/download (9).png";
import img16 from "../../src/assets/download (10).png";
import img12 from "../../src/assets/download (12).png";
import img13 from "../../src/assets/icons8-instagram-logo-24.png";
import img14 from "../../src/assets/linkdin.png";
import img15 from "../../src/assets/github.png";
import img17 from "../../src/assets/Untitled.png";
import img18 from "../../src/assets/Screenshot 2025-11-18 115849.png";
import img19 from "../../src/assets/Screenshot 2025-11-21 144044.png";
import img20 from "../../src/assets/Screenshot 2025-11-21 145909.png";
import img21 from "../../src/assets/Screenshot 2025-11-21 150652.png";
import img22 from "../../src/assets/Screenshot 2025-11-24 095843.png";
import img23 from "../../src/assets/Screenshot 2025-11-24 100820.png";
import img24 from "../../src/assets/Screenshot 2025-11-24 105403.png";
import img25 from "../../src/assets/Screenshot 2025-11-24 161233.png";
import img26 from "../../src/assets/Screenshot 2025-11-28 143431.png";

import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const [showMore, setShowMore] = React.useState(false);

  const projectData = [
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

      {/* HERO SECTION */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-[750px] sm:h-[850px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      >
        <div className="z-10 text-center flex flex-col items-center justify-center w-full h-full">
          <p className="text-lime-300 text-base sm:text-lg mb-2">Hey There I'm</p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-wide leading-tight">
            FATHIMA THASNIM <span className="text-gray-400">PK</span>
          </h1>

          <img className="h-[250px] sm:h-[350px] md:h-[500px] mt-4" src={img17} alt="Profile" />

          <p className="text-gray-300 mt-4 max-w-md sm:max-w-xl text-sm sm:text-base px-4">
            I'm a MERN Stack Developer and UI/UX Designer creating clean, fast, and intuitive web experiences.
          </p>

          <div className="flex h-[20px] sm:h-[40px] mt-4 gap-3 w-[20px]">
            <img className=" sm:w-10 h-[25px]" src={img1} alt="" />
            <img className=" sm:w-10 h-[25px]" src={img12} alt="" />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full bg-black py-16 px-4">
        <div className="w-full sm:w-[80%] bg-gray-400 bg-opacity-60 rounded-lg p-6 sm:p-10 shadow-xl mx-auto">
          <h1 className="text-center text-4xl sm:text-5xl font-serif text-black mb-6">About</h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            I'm a Full Stack Web Developer & UI/UX Designer passionate about creating impactful
            online experiences. I specialize in building responsive, high-performing web
            applications using the MERN stack and crafting user-centered designs.
          </p>

          <div className="flex justify-center sm:justify-end mt-6">
            <Link to="/about">
              <button className="bg-lime-500 text-black px-6 py-2 rounded-md hover:bg-lime-400 transition">
                More...
              </button>
            </Link>
          </div>
        </div>

        {/* SKILLS */}
        <div className="w-full bg-black py-16 px-4">
          <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">Skills</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-center max-w-5xl mx-auto">
            {[
              { img: img2, label: "HTML5" },
              { img: img3, label: "CSS3" },
              { img: img4, label: "JAVASCRIPT" },
              { img: img5, label: "REACT" },
              { img: img6, label: "FIGMA" },
              { img: img7, label: "FIREBASE" },
              { img: img8, label: "NODEJS" },
              { img: img9, label: "GIT" },
              { img: img10, label: "MYSQL" },
              { img: img11, label: "MONGODB" },
              { img: img16, label: "EXPRESSJS" },
            ].map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={item.label} className="mx-auto w-12 sm:w-14" />
                <p className="mt-3 text-gray-300 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="w-full bg-black px-4 pb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[90%] bg-gray-900 rounded-lg px-6 py-6 mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Recent Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {(showMore ? projectData : projectData.slice(0, 4)).map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-2xl overflow-hidden p-4 block hover:scale-105 transition"
            >
              <img src={project.img} className="rounded-lg" alt="Project" />
              <h5 className="text-white mt-3">{project.title}</h5>
              <p className="text-yellow-300 text-sm">{project.stack}</p>
            </a>
          ))}
        </div>

        <p
          onClick={() => setShowMore(!showMore)}
          className="text-white text-center mt-4 text-sm cursor-pointer"
        >
          {showMore ? "See less" : "See more"}
        </p>
      </div>

      {/* CONTACT */}
      <div className="w-full bg-gray-400 text-black py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          
          <div className="md:w-1/2">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4">
              Get in Touch
            </h1>

            <p className="text-sm sm:text-base max-w-md leading-relaxed">
              If you are interested in my work or want to provide feedback about this website,
              I am open to exchanging ideas.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center md:items-end text-center md:text-right">
            <p className="font-semibold text-lg mb-3">Follow me on</p>

            <div className="flex gap-4 mb-6">
              <img src={img13} className="w-7 sm:w-8" alt="Instagram" />
              <img src={img14} className="w-7 sm:w-8 invert" alt="LinkedIn" />
              <img src={img15} className="w-7 sm:w-8" alt="GitHub" />
            </div>

            <button className="border border-black px-6 py-3 rounded-xl text-lg hover:bg-black hover:text-white transition mb-6 flex items-center gap-2">
              Contact Me
            </button>

            {/* Resume Download */}
            <p className="text-sm sm:text-base mt-2">
              For more info, here’s my
              <a
                href="https://drive.google.com/uc?export=download&id=1Fr-PPxMUJSTIAmef3WsRhL9LmMWpcPCC"
                download="Fathima_Resume.pdf"
                className="underline ml-1"
              >
                resume
              </a>
            </p>

            <p className="text-sm sm:text-base">
              Say hello at{" "}
              <a href="mailto:fathimathasnim220@gmail.com" className="underline ml-1">
                fathimathasnim220@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
