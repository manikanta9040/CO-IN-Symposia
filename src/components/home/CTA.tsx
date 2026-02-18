import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Build Your Next Symposium With CO-IN</h2>
        <p>
          From board-guided scientific curation to full operational delivery, CO-IN helps you run
          conferences that are credible, efficient, and globally connected.
        </p>

        <div className="cta-actions">
          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>
          <Link to="/services" className="secondary-button">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
