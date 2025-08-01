import React from "react";
import psychologyTodayIcon from "../assets/images/psychology_today_verified.png";

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
          <a
            href="https://www.psychologytoday.com/profile/1574114"
            target="_blank"
            rel="noopener noreferrer"
            className="psychology-today-link"
          >
            <img
              src={psychologyTodayIcon}
              alt="Psychology Today Verified"
              className="psychology-today-icon"
            />
          </a>
          <p>
            &copy; {currentYear} Carolyn Blessing Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
