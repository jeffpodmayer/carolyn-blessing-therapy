import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h1 className="text-blue-600 text-left mb-1 ">
            Pricing & Insurance Information
          </h1>
        </div>

        <div className="services-content">
          <div className="insurance-pricing">
            <div className="insurance-info">
              <h3>Accepted Insurance</h3>
              <div className="insurance-details">
                <div className="insurance-column">
                  <ul>
                    <li>Aetna</li>
                    <li>Cigna</li>
                    {/* <li>First Choice</li> */}
                    <li>Kaiser</li>
                    {/* <li>PacificSource</li> */}
                    <li>Premera Blue Cross</li>
                    <li>Regence</li>
                    <li>United Healthcare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <h3>Session Pricing</h3>
            <div className="price">$100</div>
            <div className="price-detail">per session</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
