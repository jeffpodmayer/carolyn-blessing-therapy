import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-amber-50 px-4 pt-4 pb-16 scroll-mt-[75px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-primary text-2xl md:text-4xl mb-8 font-bold">
            Pricing & Insurance Information
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="flex-1 bg-white rounded-lg p-8 shadow-lg">
            <div>
              <h3 className="text-primary mb-6 text-left text-xl font-semibold">
                Accepted Insurance
              </h3>
              <div className="mb-8">
                <div>
                  <ul className="list-none p-0">
                    <li className="py-2 text-gray-600 border-b border-slate-200">
                      Aetna
                    </li>
                    <li className="py-2 text-gray-600 border-b border-slate-200">
                      Cigna
                    </li>
                    <li className="py-2 text-gray-600 border-b border-slate-200">
                      Kaiser
                    </li>
                    <li className="py-2 text-gray-600 border-b border-slate-200">
                      Premera Blue Cross
                    </li>
                    <li className="py-2 text-gray-600 border-b border-slate-200">
                      Regence
                    </li>
                    <li className="py-2 text-gray-600 border-b-0 text-gray-600">
                      United Healthcare
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-primary text-xl font-semibold mb-4">
              Session Pricing
            </h3>
            <div className="text-4xl font-bold text-secondary mb-2">$100</div>
            <div className="text-gray-500 text-lg mb-4">per session</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
