import React from 'react';
import { useSiteData } from '../../hooks/useSiteData';

const Features: React.FC = () => {
  const { data: features, loading, error } = useSiteData((siteData) => siteData.content.features);

  if (loading || error || !features) {
    return null;
  }

  return (
    <section className="home-section home-section-muted">
      <div className="home-container">
        <h2 className="home-section-title">{features.title}</h2>
        <p className="home-section-subtitle">{features.subtitle}</p>

        <div className="home-card-grid">
          {features.items.map((feature) => (
            <article key={feature.title} className="home-card home-card-centered">
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
