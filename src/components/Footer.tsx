import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>
              <strong>Phone:</strong> (425)-256-3984 || <strong>Email:</strong>{" "}
              carolynblessingtherapy@gmail.com
            </p>
          </div>
          <p>
            &copy; {currentYear} Carolyn Blessing Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
