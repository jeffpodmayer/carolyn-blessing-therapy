import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h1>Pricing & Insurance Information</h1>
          <p>
            Professional therapy services with flexible payment options and
            insurance coverage.
          </p>
        </div>

        <div className="services-content">
          {/* <div className="services-grid">
            <div className="service-card">
              <h3>Individual Therapy</h3>
              <p>
                One-on-one sessions focused on your personal growth and healing
                journey. We'll work together to address anxiety, depression,
                life transitions, and other challenges you're facing.
              </p>
              <div className="service-details">
                <span className="duration">50-minute sessions</span>
                <span className="price">$150 per session</span>
              </div>
            </div>

            <div className="service-card">
              <h3>Couples Counseling</h3>
              <p>
                Relationship therapy to help couples improve communication,
                resolve conflicts, and strengthen their bond. Create a
                healthier, more fulfilling partnership.
              </p>
              <div className="service-details">
                <span className="duration">60-minute sessions</span>
                <span className="price">$175 per session</span>
              </div>
            </div>

            <div className="service-card">
              <h3>Initial Consultation</h3>
              <p>
                A 30-minute free consultation to discuss your needs, answer
                questions, and determine if we're a good fit to work together.
              </p>
              <div className="service-details">
                <span className="duration">30-minute session</span>
                <span className="price">Free</span>
              </div>
            </div>
          </div> */}

          <div className="insurance-pricing">
            <div className="insurance-info">
              <h3>Insurance & Payment</h3>
              <div className="insurance-details">
                <div className="insurance-item">
                  <h4>Accepted Insurance</h4>
                  <ul>
                    <li>Blue Cross Blue Shield</li>
                    <li>Aetna</li>
                    <li>Cigna</li>
                    <li>UnitedHealthcare</li>
                    <li>Out-of-network benefits accepted</li>
                  </ul>
                </div>

                <div className="payment-options">
                  <h4>Payment Options</h4>
                  <ul>
                    <li>Credit/Debit Cards</li>
                    <li>Health Savings Account (HSA)</li>
                    <li>Flexible Spending Account (FSA)</li>
                    <li>Cash or Check</li>
                    <li>Sliding scale available for qualifying clients</li>
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
