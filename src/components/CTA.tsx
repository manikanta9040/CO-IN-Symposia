import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #003d82 0%, #0052a3 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
          Ready to Plan Your Next Conference?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.8',
          opacity: 0.95
        }}>
          Let us help you organize a world-class event that brings together the brightest minds in your field. Contact our team today to discuss your conference needs.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            style={{
              background: '#00a9ac',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            Get Started
          </Link>
          <Link
            to="/services"
            style={{
              background: 'transparent',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: '2px solid white',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;