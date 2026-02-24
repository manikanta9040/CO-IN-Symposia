import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../../hooks/useSiteData';

const Services: React.FC = () => {
  const { data: services, loading, error } = useSiteData((siteData) => siteData.services);

  if (loading || error || !services) {
    return null;
  }

  return (
    <section className="services">
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/services" className="learn-more">Learn More →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
