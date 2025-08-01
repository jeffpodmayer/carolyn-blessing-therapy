import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h1>About Me</h1>
          <p>
            Licensed therapist dedicated to helping individuals navigate life's
            challenges and find their path to healing.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Professional Experience</h3>
            <p>
              With over 10 years of experience in mental health counseling, I
              specialize in helping clients overcome anxiety, depression,
              relationship issues, and life transitions. My approach combines
              evidence-based therapeutic techniques with a warm, empathetic
              presence.
            </p>
            <p>
              I believe in creating a safe, non-judgmental space where clients
              can explore their thoughts, feelings, and experiences. Together,
              we work to develop practical strategies for managing challenges
              and building a more fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
