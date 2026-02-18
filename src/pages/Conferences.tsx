import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { conferencesData } from '../data/conferences';

const Conferences: React.FC = () => {
  useEffect(() => {
    document.title = 'Conferences | CO-IN Symposia';
  }, []);

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#003d82', marginBottom: '1rem' }}>Our Conferences & Events</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', lineHeight: '1.8' }}>
          Explore our upcoming conferences and past events. CO-IN Symposia organizes world-class academic and professional conferences bringing together leading experts and innovators.
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {conferencesData.map((conference) => (
            <div key={conference.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 61, 130, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 61, 130, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 61, 130, 0.1)';
            }}>
              {/* Conference Header */}
              <div style={{
                background: 'linear-gradient(135deg, #003d82 0%, #00285f 100%)',
                color: 'white',
                padding: '2rem',
                borderBottom: '4px solid #00a9ac'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <h3 style={{ margin: 0, lineHeight: '1.3', maxWidth: '80%' }}>
                    {conference.title}
                  </h3>
                  <span style={{
                    background: conference.status === 'upcoming' ? '#00a9ac' : (conference.status === 'ongoing' ? '#f39c12' : '#7f8c8d'),
                    color: 'white',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap'
                  }}>
                    {conference.status === 'upcoming' ? '📅 Upcoming' : (conference.status === 'ongoing' ? '🔴 Ongoing' : '✓ Completed')}
                  </span>
                </div>
                <p style={{ margin: 0, opacity: 0.95, fontSize: '1.05rem', fontWeight: '500' }}>
                  📆 {conference.date}
                </p>
              </div>

              {/* Conference Details */}
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div>
                    <h4 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      📍 Location
                    </h4>
                    <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>{conference.location}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      👥 Speakers
                    </h4>
                    <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>{conference.speakers ? `${conference.speakers}+` : 'TBA'}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#003d82', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      👤 Attendees
                    </h4>
                    <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>{conference.attendees ? `${conference.attendees}+` : 'TBA'}</p>
                  </div>
                </div>

                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>
                  {conference.description}
                </p>

                {/* Topics */}
                {conference.topics && conference.topics.length > 0 && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#003d82', marginBottom: '0.75rem', fontSize: '0.95rem', fontWeight: '600' }}>Key Topics:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {conference.topics.map((topic, idx) => (
                        <span key={idx} style={{
                          background: '#e8f1ff',
                          color: '#003d82',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          border: '1px solid #d0e1f9'
                        }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  <button style={{
                    background: '#003d82',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    flex: '1 0 auto',
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#002957';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#003d82';
                  }}>
                    📖 Learn More
                  </button>
                  {conference.status === 'upcoming' && (
                    <button style={{
                      background: '#00a9ac',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      flex: '1 0 auto',
                      minWidth: '120px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#008a8d';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#00a9ac';
                    }}>
                      ✓ Register Now
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