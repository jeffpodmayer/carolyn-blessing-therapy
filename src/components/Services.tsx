import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h1>Pricing & Insurance Information</h1>
        </div>

        <div className="services-content">
          <div className="insurance-pricing">
            <div className="insurance-info">
              <h3>Accepted Insurance</h3>
              <div className="insurance-details">
                <div className="insurance-column">
                  <ul>
                    <li>Aetna</li>
                    <li>Aetna Medicare Advantage</li>
                    <li>Cigna</li>
                    <li>Cigna EAP</li>
                    <li>Cigna Medicare Advantage</li>
                    <li>First Choice</li>
                    <li>Kaiser Northwest Medicare Advantage</li>
                    <li>Kaiser Permanente</li>
                    <li>Kaiser Permanente Northwest</li>
                    <li>Kaiser Washington Medicare Advantage</li>
                  </ul>
                </div>

                <div className="insurance-column">
                  <ul>
                    <li>Medicare</li>
                    <li>PacificSource</li>
                    <li>PacificSource Medicare Advantage</li>
                    <li>Premera Blue Cross</li>
                    <li>Regence</li>
                    <li>Regence Medicare Advantage</li>
                    <li>United Healthcare</li>
                    <li>United Healthcare EAP</li>
                    <li>United Medicare Advantage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="pricing-note">
              <h4>Important Information</h4>
              <ul>
                <li>Payment is due at the time of service</li>
                <li>24-hour cancellation policy applies</li>
                <li>Superbills provided for insurance reimbursement</li>
                <li>Sliding scale available based on income and need</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
