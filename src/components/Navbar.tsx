import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Carolyn Blessing Therapy</h1>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Pricing & Insurance</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
