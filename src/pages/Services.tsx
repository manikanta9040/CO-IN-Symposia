import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { detailedServicesData } from '../data/services';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1 }}>
        <h1 style={{ color: '#003d82', marginBottom: '1rem' }}>Discover what we can do for you</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#666', maxWidth: '900px', lineHeight: '1.8' }}>
          At CO-IN Symposia, we provide a comprehensive range of services to ensure that conferences are professionally organized, engaging, and customized to meet the specific needs of the scientific community. Our offerings cover both logistical and content management, ensuring a smooth and seamless experience for attendees, speakers, and sponsors. These services are also available to our collaborators and partners.
        </p>

        <div style={{ display: 'grid', gap: '2.5rem' }}>
          {detailedServicesData.map((service) => (
            <div key={service.id} style={{
              background: '#fff',
              padding: '2.5rem',
              borderRadius: '8px',
              borderLeft: '5px solid #003d82',
              boxShadow: '0 2px 8px rgba(0, 61, 130, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 61, 130, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 61, 130, 0.1)';
            }}>
              <h3 style={{ color: '#003d82', marginBottom: '0.75rem', fontSize: '1.4rem' }}>
                {service.id}. {service.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '1rem' }}>
                {service.description}
              </p>
              {service.details && service.details.length > 0 && (
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {service.details.map((detail, idx) => (
                    <li key={idx} style={{
                      paddingLeft: '1.5rem',
                      marginBottom: '0.75rem',
                      color: '#555',
                      lineHeight: '1.6',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#00a9ac',
                        fontWeight: 'bold'
                      }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
