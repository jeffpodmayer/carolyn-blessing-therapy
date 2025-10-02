import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-primary text-white py-4 sticky top-0 z-[100]"
      style={{ boxShadow: "0 2px 8px rgba(58, 123, 213, 0.08)" }}
    >
      <div className="flex justify-between items-center max-w-[90%] mx-auto px-4">
        <div>
          <h1 className="m-0 text-2xl">Carolyn Blessing Therapy</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-2 space-y-2">
          <a
            href="#home"
            className="block text-white no-underline py-2 font-medium transition-colors duration-200 hover:text-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white no-underline py-2 font-medium transition-colors duration-200 hover:text-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="block text-white no-underline py-2 font-medium transition-colors duration-200 hover:text-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#services"
            className="block text-white no-underline py-2 font-medium transition-colors duration-200 hover:text-accent text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing & Insurance
          </a>
          <a
            href="#contact"
            className="block text-white no-underline py-2 px-4 mt-4 rounded border border-white font-medium transition-all duration-200 hover:bg-secondary hover:border-secondary text-center"
            style={{ boxShadow: "0 2px 8px rgba(67, 206, 162, 0.3)" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
