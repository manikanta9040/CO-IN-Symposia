import React from 'react';

const About: React.FC = () => {
  return (
    <section style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#003d82', marginBottom: '2rem', textAlign: 'center' }}>
          Why Choose CO-IN Symposia?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              CO-IN Symposia is a premier conference organization platform that brings together experts, innovators, and thought leaders from diverse engineering and science disciplines. With years of experience in organizing world-class events, we are committed to creating platforms for meaningful collaboration and knowledge exchange.
            </p>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our team of dedicated professionals understands the complexities of organizing large-scale conferences and provides comprehensive solutions tailored to your specific needs.
            </p>
            <ul style={{ color: '#666', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ Experienced team with 15+ years in event management</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Expertise across engineering, science, and technology sectors</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ End-to-end solutions from planning to execution</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Track record of 50+ successful conferences</li>
            </ul>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafb 0%, #eef2f7 100%)',
            padding: '2rem',
            borderRadius: '10px',
            border: '2px solid #e0e0e0'
          }}>
            <h3 style={{ color: '#003d82', marginBottom: '1.5rem' }}>Our Impact</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a9ac', marginBottom: '0.5rem' }}>
                  50+
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Conferences Organized</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a9ac', marginBottom: '0.5rem' }}>
                  10K+
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Participants Worldwide</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a9ac', marginBottom: '0.5rem' }}>
                  30+
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Countries Represented</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00a9ac', marginBottom: '0.5rem' }}>
                  100%
                </div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;