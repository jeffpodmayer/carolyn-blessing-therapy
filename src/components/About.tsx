import React, { useState } from "react";
import aboutImage from "../assets/images/about_pic_2.jpg";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="bg-green-200/35 px-8 md:px-16 pt-4 pb-8 text-gray-700"
    >
      <div className="ml-1">
        <div className="header-with-icon">
          <h1 className="text-blue-600 text-left mb-1 ">About Me</h1>
        </div>
        <p className="text-gray-700 text-left mb-4 text-md md:text-lg">
          Licensed Clinical Social Work Associate, LSWAIC, Washington State
        </p>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start text-base xl:text-lg gap-4 xl:gap-8">
        <div className="flex-1 text-gray-700 bg-white rounded-lg p-4 md:p-8 shadow-sm">
          <p className="mb-4 md:text-left text-center font-bold">
            I'm glad you're here! Whatever you're struggling with, you're not
            alone.
          </p>

          <div className={`${isExpanded ? "" : "hidden lg:block"}`}>
            <p className="mb-4 md:text-left text-center">
              I work with individuals navigating a wide range of life's
              challenges, including trauma, anxiety, grief, and stress. I
              welcome people of all identities and backgrounds and practice from
              a lens that acknowledges how our lived experiences shape our
              emotional lives.
            </p>
            <p className="mb-4 md:text-left text-center">
              My background includes work in outdoor education, children's
              advocacy, and community mental health. These experiences have
              informed my deep respect for each person's resilience and my
              belief in therapy as a space for grounded reflection and
              meaningful change.
            </p>
            <p className="mb-4 md:text-left text-center">
              My approach is relational, trauma-informed, and rooted in
              mindfulness. I incorporate strategies from evidence-based
              therapeutic practices to support your goals, adapting our work to
              align with your needs, strengths, and what matters most to you.
            </p>
            <p className="mb-4 md:text-left text-center">
              I hope therapy can feel like a steady and supportive place to
              land. I'd be honored to walk alongside you.
            </p>
          </div>
          <div className="text-center mt-2 text-md lg:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-primary text-white border border-primary py-2 px-4 rounded font-medium focus:outline-none"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start">
          <img
            src={aboutImage}
            alt="Carolyn Blessing"
            className="w-full xl:max-w-[550px] h-auto object-cover rounded-lg shadow-lg mt-0"
          />
          <p className="w-full xl:w-[550px] text-center xl:text-left break-words italic mt-4">
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
