import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Carolyn Blessing Therapy. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a> | <a href="#about">About</a> |{" "}
          <a href="#services">Services</a> | <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
