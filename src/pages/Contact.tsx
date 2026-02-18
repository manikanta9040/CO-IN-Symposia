import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="app">
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            Have questions about our services or want to discuss your conference needs? Get in touch with us today.
          </p>
        </section>

        <section className="contact-grid">
          <article className="contact-card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <h4>Email</h4>
              <a href="mailto:info@coinsymposia.org">info@coinsymposia.org</a>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>
              <a href="tel:+15122702990">+1 512 270 2990</a>
            </div>

            <div className="contact-item">
              <h4>Address</h4>
              <p>
                CO-IN Symposia
                <br />
                123 Innovation Street
                <br />
                Tech City, TC 12345
                <br />
                Country
              </p>
            </div>

            <div className="contact-item">
              <h4>Business Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </article>

          <article className="contact-card">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />

              <button type="submit">Send Message</button>
            </form>
          </article>
        </section>

        <section className="contact-map-wrap">
          <h2>Visit Us</h2>
          <div className="contact-map">
            <iframe
              title="CO-IN Symposia Location"
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567891234!2d-74.00601234567891!3d40.71234567891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU0LjQiTiA3NMOuMDAnMjguMyJX!5e0!3m2!1sen!2sus!4v1234567891234"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="contact-map-note">
            123 Innovation Street, Tech City, TC 12345 | Mon-Fri: 9AM-6PM | Sat: 10AM-4PM
          </p>
        </section>

        <section className="contact-faq">
          <h3>FAQ</h3>
          <div className="contact-faq-grid">
            <div>
              <h4>How long does it take to plan a conference?</h4>
              <p>Typically 3-6 months depending on the size and complexity of the event.</p>
            </div>
            <div>
              <h4>Do you offer virtual conference options?</h4>
              <p>Yes, we provide full virtual and hybrid conference solutions.</p>
            </div>
            <div>
              <h4>What is your cancellation policy?</h4>
              <p>Contact our team to discuss cancellation and refund policies.</p>
            </div>
            <div>
              <h4>Do you handle sponsorships?</h4>
              <p>Yes, we manage all sponsorship and exhibition arrangements.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
