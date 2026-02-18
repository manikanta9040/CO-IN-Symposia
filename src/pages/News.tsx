import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/news';
import '../styles/globals.css';

const News: React.FC = () => {
  useEffect(() => {
    document.title = 'Latest News | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h1>Latest News & Updates</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Stay updated with the latest announcements, events, and developments from CO-IN Symposia.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {newsData.map((item) => (
            <article key={item.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1.5rem',
              background: '#fff'
            }}>
              <h3 style={{ color: '#003d82', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1rem' }}>{item.date}</p>
              <p style={{ lineHeight: '1.6' }}>{item.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
