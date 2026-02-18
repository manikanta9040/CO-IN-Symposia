import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services-grid">
        {servicesData.map((service) => (
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
