import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSiteData } from '../hooks/useSiteData';

const Reports: React.FC = () => {
  const { data: reportsData, loading, error } = useSiteData((siteData) => siteData.reports);

  useEffect(() => {
    document.title = 'Reports & Publications | CO-IN Symposia';
  }, []);

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

  if (error || !reportsData) {
    return (
      <div className="app">
        <Header />
        <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#003d82' }}>Reports unavailable</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#003d82', marginBottom: '1rem' }}>Reports & Publications</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: '1.8' }}>
          Access detailed reports from our past events and conferences. These documents provide insights into outcomes, impacts, and learnings from our symposiums.
        </p>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {reportsData.map((report) => (
            <div key={report.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '2rem',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0, 61, 130, 0.08)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 61, 130, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 61, 130, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  background: '#e8f1ff',
                  color: '#003d82',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {report.category}
                </span>
              </div>
              <h3 style={{ color: '#003d82', margin: '0 0 0.75rem 0', lineHeight: '1.4', flex: 1 }}>
                {report.title}
              </h3>
              <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: '500' }}>📅 {report.date}</p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#555', flex: 1 }}>
                {report.description}
              </p>
              <a
                href={report.downloadLink}
                style={{
                  color: '#fff',
                  backgroundColor: '#003d82',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#002957';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#003d82';
                }}
              >
                📥 Download PDF
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
