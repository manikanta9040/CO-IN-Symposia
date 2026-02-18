import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Strategic Planning',
      description: 'Comprehensive planning from concept to execution with clear timelines and deliverables.'
    },
    {
      icon: '👥',
      title: 'Expert Coordination',
      description: 'Management of participant recruitment, speaker coordination, and sponsor relations.'
    },
    {
      icon: '📊',
      title: 'Technical Excellence',
      description: 'State-of-the-art technology for virtual, hybrid, and in-person conference delivery.'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'International experience with multi-language support and cultural expertise.'
    },
    {
      icon: '💼',
      title: 'Professional Support',
      description: 'Dedicated team available 24/7 to ensure seamless event execution.'
    },
    {
      icon: '📈',
      title: 'Post-Event Analytics',
      description: 'Detailed reporting and insights to measure conference success and ROI.'
    }
  ];

  return (
    <section style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#003d82', marginBottom: '1rem', textAlign: 'center' }}>
          Our Approach & Capabilities
        </h2>
        <p style={{
          color: '#666',
          fontSize: '1.05rem',
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          We offer comprehensive conference management services designed to deliver exceptional experiences for all stakeholders.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              border: '2px solid #e0e0e0',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 61, 130, 0.05)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;