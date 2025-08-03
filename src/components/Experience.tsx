import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h1>Experience & Training</h1>
          <p>
            Professional background and therapeutic approaches that inform my
            practice.
          </p>
        </div>

        <div className="experience-content">
          <div className="training-card">
            <h3>Training</h3>
            <ul>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Acceptance and Commitment Therapy (ACT)</li>
              <li>Dialectical Behavior Therapy (DBT)</li>
              <li>Reality Therapy</li>
              <li>Motivational Interviewing</li>
              <li>Trauma‑Informed Care</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Experience</h3>
            <ul>
              <li>
                10 years in outdoor education – leading wilderness expeditions
                for youth and adults, fostering resilience and promoting
                self‑discovery
              </li>
              <li>
                1.5 years in clinical roles – working with youth, families, and
                adults
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
