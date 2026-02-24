import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSiteData } from '../hooks/useSiteData';

const Contact: React.FC = () => {
  const { data: content, loading, error } = useSiteData((siteData) => siteData.content);

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

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main className="contact-page">
          <section className="contact-hero">
            <h1>Loading...</h1>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="app">
        <Header />
        <main className="contact-page">
          <section className="contact-hero">
            <h1>Contact data unavailable</h1>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const addressLines = [
    content.footer.address.company,
    content.footer.address.street,
    content.footer.address.city
  ];

  return (
    <div className="app">
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <h1>{content.contact.heroTitle}</h1>
          <p>{content.contact.heroDescription}</p>
        </section>

        <section className="contact-grid">
          <article className="contact-card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <h4>Email</h4>
              <a href={`mailto:${content.footer.contact.email}`}>{content.footer.contact.email}</a>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>
              <a href={`tel:${content.footer.contact.phone.replace(/\s+/g, '')}`}>{content.footer.contact.phone}</a>
            </div>

            <div className="contact-item">
              <h4>Address</h4>
              <p>
                {addressLines.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="contact-item">
              <h4>Business Hours</h4>
              <p>
                {content.contact.businessHours.map((hoursLine) => (
                  <React.Fragment key={hoursLine}>
                    {hoursLine}
                    <br />
                  </React.Fragment>
                ))}
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
              src={content.contact.mapEmbedUrl}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="contact-map-note">{content.contact.mapNote}</p>
        </section>

        <section className="contact-faq">
          <h3>FAQ</h3>
          <div className="contact-faq-grid">
            {content.contact.faq.map((item) => (
              <div key={item.question}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
