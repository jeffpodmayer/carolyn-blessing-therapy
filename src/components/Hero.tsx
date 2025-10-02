import React from "react";
import headshot from "../assets/carolyn_blessing_headshot.jpg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-[90%] mx-auto py-16 px-4 pb-12 text-center">
      <div className="flex items-center justify-between gap-10 mx-auto flex-wrap md:flex-nowrap">
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={headshot}
            alt="Carolyn Blessing"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
            style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
          />
        </div>
        <div className="flex-1 min-w-[300px] text-left text-center md:text-left">
          <h1 className="text-primary mb-4 text-4xl md:text-5xl font-bold">
            Welcome, I'm Carolyn
          </h1>
          <p className="text-text text-xl mb-8 leading-relaxed">
            Grounded, relational therapy dedicated to helping you navigate
            life's challenges and tap into your resilience.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="bg-primary text-white border border-primary py-3 px-6 rounded font-medium text-xl cursor-pointer transition-colors duration-200 hover:bg-secondary hover:border-secondary w-full md:w-auto min-w-[200px]"
              onClick={() => {
                window.open(
                  "https://mindfultherapygroup.com/find-a-provider/?providerId=4339273000330875632",
                  "_blank"
                );
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
