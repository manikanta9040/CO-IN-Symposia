import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { reportsData } from '../data/reports';
import '../styles/globals.css';

const Reports: React.FC = () => {
  useEffect(() => {
    document.title = 'Reports & Publications | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h1>Reports & Publications</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Access detailed reports from our past events and conferences. These documents provide insights into outcomes, impacts, and learnings from our symposiums.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {reportsData.map((report) => (
            <div key={report.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1.5rem',
              background: '#f8f9fa'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ color: '#003d82', margin: 0 }}>{report.title}</h3>
                <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: 'bold' }}>{report.category}</span>
              </div>
              <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1rem' }}>{report.date}</p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{report.description}</p>
              <a
                href={report.downloadLink}
                style={{
                  color: '#003d82',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '0.5rem 1rem',
                  border: '1px solid #003d82',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}
              >
                Download PDF →
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
