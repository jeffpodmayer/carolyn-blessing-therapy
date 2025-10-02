import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-primary text-white py-4 sticky top-0 z-[100]"
      style={{ boxShadow: "0 2px 8px rgba(58, 123, 213, 0.08)" }}
    >
      <div className="flex justify-between items-center max-w-[90%] mx-auto px-4">
        <div>
          <h1 className="m-0 text-2xl">Carolyn Blessing Therapy</h1>
        </div>
        <div className="flex items-center">
          <a
            href="#home"
            className="text-white no-underline ml-6 font-medium transition-colors duration-200 hover:text-accent"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white no-underline ml-6 font-medium transition-colors duration-200 hover:text-accent"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-white no-underline ml-6 font-medium transition-colors duration-200 hover:text-accent"
          >
            Experience
          </a>
          <a
            href="#services"
            className="text-white no-underline ml-6 font-medium transition-colors duration-200 hover:text-accent"
          >
            Pricing & Insurance
          </a>
          <a
            href="#contact"
            className="text-white no-underline py-2 px-4 rounded border border-white ml-8 transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5 hover:border-secondary"
            style={{ boxShadow: "0 2px 8px rgba(67, 206, 162, 0.3)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(67, 206, 162, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(67, 206, 162, 0.3)";
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
