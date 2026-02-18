import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/globals.css';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{
        padding: '4rem 2rem',
        flex: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }}>
        <h1 style={{ fontSize: '4rem', color: '#2196F3', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            background: '#2196F3',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;