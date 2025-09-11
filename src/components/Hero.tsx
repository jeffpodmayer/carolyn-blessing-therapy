import React from "react";
import headshot from "../assets/carolyn_blessing_headshot.jpg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={headshot} alt="Carolyn Blessing" />
        </div>
        <div className="hero-text">
          <h1>Welcome, I'm Carolyn</h1>
          <p>
            Grounded, relational therapy dedicated to helping you navigate
            life's challenges and tap into your resilience.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
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
