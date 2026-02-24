import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSiteData } from '../hooks/useSiteData';

const News: React.FC = () => {
  const { data: newsData, loading, error } = useSiteData((siteData) => siteData.news);

  useEffect(() => {
    document.title = 'Latest News | CO-IN Symposia';
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'announcement': '#003d82',
      'event': '#00a9ac',
      'achievement': '#2ecc71',
      'partnership': '#e74c3c'
    };
    return colors[category] || '#003d82';
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#003d82' }}>Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !newsData) {
    return (
      <div className="app">
        <Header />
        <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#003d82' }}>News unavailable</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredNews = newsData.filter((item) => item.featured);
  const regularNews = newsData.filter((item) => !item.featured);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#003d82', marginBottom: '1rem' }}>Latest News & Updates</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.8' }}>
          Stay updated with the latest announcements, events, and developments from CO-IN Symposia.
        </p>

        {/* Featured News Section */}
        {featuredNews.length > 0 && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Featured</h2>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {featuredNews.map((item) => (
                <article key={item.id} style={{
                  borderRadius: '8px',
                  padding: '2rem',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f0f1f3 100%)',
                  borderTop: `4px solid ${getCategoryColor(item.category)}`,
                  boxShadow: '0 2px 8px rgba(0, 61, 130, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 61, 130, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 61, 130, 0.1)';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <span style={{
                      background: getCategoryColor(item.category),
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      textTransform: 'capitalize'
                    }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#999', fontSize: '0.85rem' }}>{item.date}</span>
                  </div>
                  <h3 style={{ color: '#003d82', marginBottom: '0.75rem', marginTop: '0.5rem', lineHeight: '1.4' }}>{item.title}</h3>
                  <p style={{ lineHeight: '1.6', color: '#555' }}>{item.summary}</p>
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} style={{
                          background: '#e8f1ff',
                          color: '#003d82',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular News Section */}
        {regularNews.length > 0 && (
          <section>
            <h2 style={{ color: '#003d82', marginBottom: '1.5rem', fontSize: '1.3rem' }}>More News</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {regularNews.map((item) => (
                <article key={item.id} style={{
                  border: `1px solid #e0e0e0`,
                  borderLeft: `4px solid ${getCategoryColor(item.category)}`,
                  borderRadius: '8px',
                  padding: '1.75rem',
                  background: '#fff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 61, 130, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ color: '#003d82', marginBottom: '0', lineHeight: '1.4', flex: 1 }}>{item.title}</h3>
                    <span style={{
                      background: getCategoryColor(item.category),
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{item.date}</p>
                  <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '0.75rem' }}>{item.summary}</p>
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} style={{
                          background: '#e8f1ff',
                          color: '#003d82',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: '500'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default News;
