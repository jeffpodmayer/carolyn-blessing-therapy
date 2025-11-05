import React from "react";
import psychologyTodayIcon from "../assets/images/psychology_today_icon.webp";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center py-6">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center md:text-left my-1">
              <strong>Phone: </strong> (509) 557-0471
            </p>
            <p className="text-center md:text-left my-1">
              <strong>Email: </strong>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:carolyn@carolynblessingtherapy.com"
                className="text-white hover:text-accent"
              >
                carolyn@carolynblessingtherapy.com
              </a>
            </p>
            <p className="text-center md:text-left my-1">
              &copy; {currentYear} Carolyn Blessing Therapy. All rights
              reserved.
            </p>
          </div>

          <a
            href="https://www.psychologytoday.com/profile/1574114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={psychologyTodayIcon}
              alt="Psychology Today Verified Therapist - Carolyn Blessing LSWAIC profile"
              className="h-[150px] w-[150px] object-contain"
              width="150"
              height="150"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            telephone: "+1-509-557-0471",
            contactType: "customer service",
            email: "carolyn@carolynblessingtherapy.com",
            availableLanguage: ["English"],
            areaServed: {
              "@type": "State",
              name: "Washington",
              containedInPlace: {
                "@type": "Country",
                name: "United States",
              },
            },
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
