import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="legal-page">
        <h1>Privacy Policy</h1>
        <p>
          We collect only the information needed to respond to inquiries, manage conference communication, and deliver
          requested services.
        </p>
        <p>
          We do not sell personal information. Data may be shared with trusted service providers only when required to
          operate events and communications.
        </p>
        <p>
          If you need data access, correction, or deletion assistance, contact us at
          {' '}
          <a href="mailto:info@coinsymposia.org">info@coinsymposia.org</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
