import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-[200] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
      >
        Skip to main content
      </a>
      <nav
        aria-label="Main navigation"
        className="bg-primary text-white py-4 sticky top-0 z-[100] shadow-md"
      >
        <div className="flex justify-between items-center max-w-[90%] mx-auto px-4">
          <div>
            <a href="#home" className="m-0 text-2xl">
              Carolyn Blessing Therapy
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <a
              href="#home"
              className="text-white no-underline ml-6 font-normal transition-colors duration-200 hover:text-accent"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white no-underline ml-6 font-normal transition-colors duration-200 hover:text-accent"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-white no-underline ml-6 font-normal transition-colors duration-200 hover:text-accent"
            >
              Experience
            </a>
            <a
              href="#services"
              className="text-white no-underline ml-6 font-normal transition-colors duration-200 hover:text-accent"
            >
              Pricing & Insurance
            </a>
            <a
              href="#contact"
              className="text-white no-underline py-2 px-4 rounded border border-white ml-8 font-normal transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5 hover:border-secondary shadow-lg hover:shadow-xl hover:shadow-green focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
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
          id="mobile-navigation"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
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
    </>
  );
};

export default Navbar;
