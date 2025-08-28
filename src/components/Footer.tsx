import React from "react";
import psychologyTodayIcon from "../assets/images/psychology_today_icon.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>
              <strong>Phone:</strong> (509) 557-0471
            </p>
            <p>
              <strong>Email:</strong> carolynblessingtherapy@gmail.com
            </p>
            <p>
              &copy; {currentYear} Carolyn Blessing Therapy. All rights
              reserved.
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
