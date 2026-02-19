import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="legal-page">
        <h1>Terms & Conditions</h1>
        <p>
          By using this website, you agree to use the content and services for lawful purposes and in a way that
          does not harm the platform, our attendees, or our partners.
        </p>
        <p>
          Conference schedules, speakers, and services may change based on operational requirements. We make reasonable
          efforts to keep all information current and accurate.
        </p>
        <p>
          For questions about registrations, cancellations, or service terms, contact us at
          {' '}
          <a href="mailto:info@coinsymposia.org">info@coinsymposia.org</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
