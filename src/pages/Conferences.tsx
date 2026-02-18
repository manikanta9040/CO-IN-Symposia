import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { conferencesData } from '../data/conferences';
import '../styles/globals.css';

const Conferences: React.FC = () => {
  useEffect(() => {
    document.title = 'Conferences | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1>Our Conferences & Events</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
          Explore our upcoming conferences and past events. CO-IN Symposia organizes world-class academic and professional conferences bringing together leading experts and innovators.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {conferencesData.map((conference) => (
            <div key={conference.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {/* Conference Header */}
              <div style={{
                background: '#003d82',
                color: 'white',
                padding: '1.5rem',
                borderBottom: '4px solid #00a9ac'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>
                  {conference.title}
                </h3>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  {conference.date}
                </p>
              </div>

              {/* Conference Details */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      📍 Location
                    </h4>
                    <p style={{ color: '#666', margin: 0 }}>{conference.location}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      � Speakers
                    </h4>
                    <p style={{ color: '#666', margin: 0 }}>{conference.speakers || 'TBA'}</p>
                  </div>
                </div>

                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {conference.description}
                </p>

                {/* Key Information */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
                    <div>
                      <span style={{ color: '#999' }}>Expected Attendees:</span>
                      <p style={{ color: '#333', fontWeight: 'bold', margin: '0.25rem 0 0 0' }}>
                        {conference.attendees || 'TBA'}
                      </p>
                    </div>
                    <div>
                      <span style={{ color: '#999' }}>Status:</span>
                      <p style={{
                        color: '#333',
                        fontWeight: 'bold',
                        margin: '0.25rem 0 0 0',
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: conference.status === 'upcoming' ? '#d4edda' : '#e2e3e5',
                        borderRadius: '4px'
                      }}>
                        {conference.status.charAt(0).toUpperCase() + conference.status.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{
                    background: '#003d82',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    flex: 1
                  }}>
                    Learn More
                  </button>
                  {conference.status === 'upcoming' && (
                    <button style={{
                      background: '#00a9ac',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      flex: 1
                    }}>
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div style={{
          marginTop: '3rem',
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px'
        }}>
          <h2 style={{ color: '#003d82', marginBottom: '1rem' }}>Interested in Hosting a Conference?</h2>
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            We help organizations plan and execute successful conferences. From concept to completion, our team handles every detail to ensure your event is memorable and impactful.
          </p>
          <button style={{
            background: '#003d82',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            Get in Touch
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Conferences;