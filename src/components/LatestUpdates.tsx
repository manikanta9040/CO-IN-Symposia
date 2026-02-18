import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/news';

const LatestUpdates: React.FC = () => {
  const recentNews = newsData.slice(0, 3);

  return (
    <section style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#003d82', marginBottom: '1rem', textAlign: 'center' }}>
          Latest Updates & News
        </h2>
        <p style={{
          color: '#666',
          fontSize: '1.05rem',
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Stay informed about upcoming events, news, and developments from CO-IN Symposia.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {recentNews.map((item) => (
            <article key={item.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1.5rem',
              background: '#f8f9fa',
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
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                {item.category}
              </div>
              <h3 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {item.date}
              </p>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {item.summary}
              </p>
              <Link
                to="/news"
                style={{
                  color: '#003d82',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/news"
            style={{
              background: '#003d82',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;