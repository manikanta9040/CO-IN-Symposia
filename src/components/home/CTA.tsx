import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../../hooks/useSiteData';

const CTA: React.FC = () => {
  const { data: cta, loading, error } = useSiteData((siteData) => siteData.content.cta);

  if (loading || error || !cta) {
    return null;
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>{cta.title}</h2>
        <p>{cta.description}</p>

        <div className="cta-actions">
          <Link to="/contact" className="primary-button">
            {cta.primaryLabel}
          </Link>
          <Link to="/services" className="secondary-button">
            {cta.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
