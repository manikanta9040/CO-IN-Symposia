import React from 'react';
import { professorsData } from '../data/professors';

const Team: React.FC = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#003d82', marginBottom: '1rem', textAlign: 'center' }}>
          Advisory Board & Leadership
        </h2>
        <p style={{
          color: '#666',
          fontSize: '1.05rem',
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Led by internationally recognized experts and pioneers in engineering and science disciplines.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {professorsData.map((prof) => (
            <div key={prof.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              border: '2px solid #e0e0e0',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 61, 130, 0.05)'
            }}>
              <div style={{
                display: 'inline-block',
                background: '#003d82',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}>
                {prof.role}
              </div>
              <h3 style={{ color: '#003d82', marginBottom: '0.25rem', fontSize: '1.1rem' }}>
                {prof.name}
              </h3>
              <p style={{ color: '#00a9ac', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {prof.title}
              </p>
              <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {prof.affiliation}
              </p>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {prof.bio}
              </p>
              {prof.email && (
                <a href={`mailto:${prof.email}`} style={{
                  color: '#003d82',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  Get In Touch →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;