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
            <div className="credentials">
              <div className="credential-item">
                <span className="bullet"></span>
                <span>Licensed Professional Counselor</span>
              </div>
              <div className="credential-item">
                <span className="bullet"></span>
                <span>Certified in Cognitive Behavioral Therapy</span>
              </div>
              <div className="credential-item">
                <span className="bullet"></span>
                <span>Specialized in Anxiety & Depression</span>
              </div>
            </div>
          </div>

          <div className="approach-box">
            <h3>My Approach</h3>
            <div className="approach-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div>
                  <h4>Assessment & Understanding</h4>
                  <p>
                    We begin by understanding your unique situation and goals.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div>
                  <h4>Personalized Treatment</h4>
                  <p>
                    Develop strategies tailored to your specific needs and
                    preferences.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div>
                  <h4>Ongoing Support</h4>
                  <p>
                    Continued guidance and support as you implement positive
                    changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
