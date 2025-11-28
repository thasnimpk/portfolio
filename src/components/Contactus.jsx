import React from "react";
import Header from "./Header";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="w-full min-h-screen bg-[#0d0d0e] text-white py-12 px-4 flex flex-col items-center">

        {/* TITLE */}
        <div className="bg-[#0e1217] w-full sm:w-[90%] md:w-[80%] py-5 rounded-md mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            CONTACT
          </h1>
        </div>

        {/* MAIN CARD */}
        <div className="
          bg-[#D6FF2A] 
          w-full sm:w-[90%] md:w-[80%] 
          p-6 sm:p-10 
          rounded-xl 
          text-black 
          flex flex-col md:flex-row 
          gap-10
        ">

          {/* LEFT SIDE */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif leading-tight">
              Get in Touch
            </h1>

            <p className="mt-4 text-base sm:text-lg">
              Say hello at{" "}
              <span className="underline break-all">
                fathimathasnim220@gmail.com
              </span>
            </p>

            <p className="mt-2 text-base sm:text-lg">
     <a
  href="https://drive.google.com/uc?export=download&id=1Fr-PPxMUJSTIAmef3WsRhL9LmMWpcPCC"
  download="Fathima_Resume.pdf"
  className="underline ml-1"
>
  resume
</a>
            </p>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form
            action="https://formsubmit.co/fathimathasnim220@gmail.com"
            method="POST"
            className="flex-1 flex flex-col gap-4 sm:gap-5"
          >
            {/* Disable CAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Email Template Style */}
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="font-semibold text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 p-3 rounded-md outline-none text-black bg-gray-200"
              />
            </div>

            <div>
              <label className="font-semibold text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-3 rounded-md outline-none text-black bg-gray-200"
              />
            </div>

            <div>
              <label className="font-semibold text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 p-3 rounded-md outline-none text-black bg-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0d0f11] text-[#D6FF2A] py-3 rounded-md font-semibold mt-2 hover:opacity-90"
            >
              Send
            </button>
          </form>

        </div>

      </div>
    </>
  );
};

export default ContactUs;
