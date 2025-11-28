import React from "react";
import pc from "../../src/assets/download.png";
import pc1 from "../../src/assets/download (1).png";
import pc2 from "../../src/assets/download (2).png";
import pc3 from "../../src/assets/download (3).png";
import pc4 from "../../src/assets/download (4).png";
import pc5 from "../../src/assets/download (5).png";
import pc6 from "../../src/assets/download (6).png";
import pc7 from "../../src/assets/download (7).png";
import pc8 from "../../src/assets/download (8).png";
import pc9 from "../../src/assets/download (9).png";
import my from "../../src/assets/Untitled.png";
import img16 from "../../src/assets/download (10).png";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />

      <div className="w-full min-h-screen bg-[#0d0f12] text-white">

        {/* ================= MAIN TITLE ================= */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-wide ">
          ABOUT
        </h1>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="w-[92%] sm:w-[90%] md:w-[80%] mx-auto mt-10 bg-[#0e141a] p-6 sm:p-10 rounded-xl flex flex-col md:flex-row gap-8 md:gap-10">

          {/* ---- LEFT IMAGE ---- */}
          <div className="flex-1 flex justify-center">
            <img
              src={my}
              alt="profile"
              className="h-64 sm:h-80 md:h-[380px] rounded-xl object-cover"
            />
          </div>

          {/* ---- RIGHT TEXT ---- */}
          <div className="flex-1 flex flex-col justify-center text-gray-300">
            <p className="leading-7 text-base sm:text-lg">
              I am a Full Stack Web Developer and UI/UX Designer passionate about
              creating meaningful and intuitive digital experiences. I specialize
              in building responsive, high-performance applications using the MERN
              stack and crafting user-centered interfaces that feel effortless to
              use. My goal is to blend creativity with clean, scalable code—
              transforming ideas into functional, beautiful products that leave a
              lasting impact.
            </p>

         <a
  href="https://drive.google.com/uc?export=download&id=1Fr-PPxMUJSTIAmef3WsRhL9LmMWpcPCC"
  download="Fathima_Resume.pdf"
  className="underline ml-1"
>
  resume
</a>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="w-[72%] sm:w-[70%] md:w-[50%] mx-auto mt-10 bg-[#0e141a] p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-white">
            {[pc, pc1, pc2, pc3, pc4, pc5, pc6, pc7, pc8, img16].map((img, i) => (
              <img key={i} src={img} className="h-8 sm:h-10 object-contain" alt="" />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
