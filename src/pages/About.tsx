import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSiteData } from '../hooks/useSiteData';

const About: React.FC = () => {
  const { data: about, loading, error } = useSiteData((siteData) => siteData.content.about);

  useEffect(() => {
    document.title = 'About Us | CO-IN Symposia';
  }, []);

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#003d82' }}>Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !about) {
    return (
      <div className="app">
        <Header />
        <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#003d82' }}>About content unavailable</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#003d82', marginBottom: '2rem' }}>About CO-IN Symposia</h1>

        {/* About Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Who We Are</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#666' }}>
            {about.description}
          </p>
        </section>

        {/* Aim Section */}
        <section style={{ marginBottom: '3rem', background: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Our Aim</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#666' }}>
            {about.mission}
          </p>
        </section>

        {/* We Serve Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Who We Serve</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {about.whatWeDo.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderLeft: '4px solid #00a9ac',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0, 61, 130, 0.05)'
                }}
              >
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#666' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section style={{ marginBottom: '3rem', background: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Our Commitment</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#666' }}>
            {about.commitment}
          </p>
        </section>

        {/* Key Values */}
        <section>
          <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Why Choose Us</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Expert Team', desc: 'Experienced professionals dedicated to conference excellence' },
              { title: 'Global Network', desc: 'Connected with leaders and experts worldwide' },
              { title: 'Technical Excellence', desc: 'State-of-the-art technology and infrastructure' },
              { title: 'Customized Solutions', desc: 'Tailored services meeting specific needs' },
              { title: 'End-to-End Management', desc: 'Complete conference organization from concept to execution' },
              { title: '24/7 Support', desc: 'Dedicated support throughout the event lifecycle' }
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                  boxShadow: '0 2px 8px rgba(0, 61, 130, 0.05)'
                }}
              >
                <h3 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
