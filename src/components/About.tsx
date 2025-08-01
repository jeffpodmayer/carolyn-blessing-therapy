import React from "react";
import aboutImage from "../assets/images/about_pic_2.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <div className="header-with-icon">
          <h1>About Me</h1>
        </div>
        <p>Licensed Clinical Social Work Associate, LSWAIC, Washington State</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm glad you're here! Whatever you’re struggling with, you’re not
            alone.
          </p>
          <p>
            I work with individuals navigating a wide range of life’s
            challenges, including trauma, anxiety, grief, and stress. I welcome
            people of all identities and backgrounds and practice from a lens
            that acknowledges how our lived experiences shape our emotional
            lives.
          </p>
          <p>
            My background includes work in outdoor education, children’s
            advocacy, and community mental health. These experiences have shaped
            my deep respect for each person’s resilience and my belief in
            therapy as a space for grounded reflection and meaningful change.
          </p>
          <p>
            My approach is relational, trauma-informed, and rooted in
            mindfulness. I incorporate strategies from evidence-based
            therapeutic practices to support your goals, adapting our work to
            align with your needs, strengths, and what matters most to you.
          </p>
          <p>
            I hope therapy can feel like a steady and supportive place to land.
            I’d be honored to walk alongside you.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Carolyn Blessing" />
          <p>
            Spending time outside has been a steady source of joy, connection,
            and healing in my life. This photo is from one of my favorite
            backpacking trips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
