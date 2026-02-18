import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | CO-IN Symposia';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="app">
      <Header />
      <main style={{ padding: '4rem 2rem', flex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          Have questions about our services or want to discuss your conference needs? Get in touch with us today.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Contact Information */}
          <div>
            <h3 style={{ color: '#003d82', marginBottom: '1.5rem' }}>Contact Information</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#1a1a1a', marginBottom: '0.5rem' }}>Email</h4>
              <a href="mailto:info@coinsymposia.org" style={{ color: '#003d82', textDecoration: 'none' }}>
                info@coinsymposia.org
              </a>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#1a1a1a', marginBottom: '0.5rem' }}>Phone</h4>
              <a href="tel:+1234567890" style={{ color: '#003d82', textDecoration: 'none' }}>
                +1 (234) 567-890
              </a>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Address</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                CO-IN Symposia<br />
                123 Innovation Street<br />
                Tech City, TC 12345<br />
                Country
              </p>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Business Hours</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 style={{ color: '#003d82', marginBottom: '1.5rem' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#003d82',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          borderLeft: '4px solid #003d82'
        }}>
          <h3 style={{ color: '#003d82', marginBottom: '1rem' }}>FAQ</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>How long does it take to plan a conference?</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>
                Typically 3-6 months depending on the size and complexity of the event.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Do you offer virtual conference options?</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>
                Yes, we provide full virtual and hybrid conference solutions.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>What is your cancellation policy?</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>
                Contact our team to discuss cancellation and refund policies.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Do you handle sponsorships?</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>
                Yes, we manage all sponsorship and exhibition arrangements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;