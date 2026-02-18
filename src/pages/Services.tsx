import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { detailedServicesData } from '../data/services';
import '../styles/globals.css';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1 }}>
        <h1>Discover what we can do for you</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#666' }}>
          At CO-IN Symposia, we provide a comprehensive range of services to ensure that conferences are professionally organized, engaging, and customized to meet the specific needs of the scientific community. Our offerings cover both logistical and content management, ensuring a smooth and seamless experience for attendees, speakers, and sponsors. These services are also available to our collaborators and partners.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {detailedServicesData.map((service) => (
            <div key={service.id} style={{
              background: '#f8f9fa',
              padding: '2rem',
              borderRadius: '8px',
              borderLeft: '4px solid #003d82'
            }}>
              <h3 style={{ color: '#003d82', marginBottom: '1rem' }}>
                {service.id}. {service.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
