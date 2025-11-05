import React from "react";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-4 md:px-8 py-4 mb-8 scroll-mt-[75px] mt-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-primary text-2xl md:text-4xl mb-4 font-bold">
            Experience & Training
          </h2>
          <p className="text-textPrimary text-base md:text-lg mb-8">
            Professional background and therapeutic approaches that inform my
            practice.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="font-bold text-primary mb-6 text-xl">Training</h3>
            <ul className="list-none p-0 text-left">
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                Cognitive Behavioral Therapy (CBT)
              </li>
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                Acceptance and Commitment Therapy (ACT)
              </li>
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                Dialectical Behavior Therapy (DBT)
              </li>
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                Reality Therapy
              </li>
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                Motivational Interviewing
              </li>
              <li className="py-3 text-gray-600 border-b-0 leading-relaxed">
                Trauma‑Informed Care
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="font-bold text-primary mb-6 text-xl">Experience</h3>
            <ul className="list-none p-0 text-left">
              <li className="py-3 text-gray-600 border-b border-slate-200 leading-relaxed">
                10 years in outdoor education – leading wilderness expeditions
                for youth and adults, fostering resilience and promoting
                self‑discovery
              </li>
              <li className="py-3 text-gray-600 border-b-0 leading-relaxed">
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
