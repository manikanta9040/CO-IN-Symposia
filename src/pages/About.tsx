import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contentData } from '../data/content';
import '../styles/globals.css';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h1>{contentData.about.title}</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: '#666' }}>
          {contentData.about.description}
        </p>

        <h2>Our Mission</h2>
        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
          {contentData.about.mission}
        </p>

        <h2>What We Do</h2>
        <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
          {contentData.about.whatWeDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Our Commitment</h2>
        <p style={{ lineHeight: '1.6' }}>
          {contentData.about.commitment}
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
