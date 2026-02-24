import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../../hooks/useSiteData';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const { data: footer, loading, error } = useSiteData((siteData) => siteData.content.footer);

  if (loading) {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>Loading footer...</p>
        </div>
      </footer>
    );
  }

  if (error || !footer) {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>Footer content unavailable.</p>
        </div>
      </footer>
    );
  }

  const addressText = `${footer.address.company}, ${footer.address.street}, ${footer.address.city}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
  const phoneHref = `tel:${footer.contact.phone.replace(/\s+/g, '')}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>📍 Address</h3>
          <a href={mapsHref} target="_blank" rel="noreferrer noopener" className="footer-contact-link">
            {footer.address.company}
          </a>
          <a href={mapsHref} target="_blank" rel="noreferrer noopener" className="footer-contact-link">
            {footer.address.street}, {footer.address.city}
          </a>
        </div>

        <div className="footer-section">
          <h3>✉️ Mail Us</h3>
          <a href={`mailto:${footer.contact.email}`} className="footer-contact-link">
            {footer.contact.email}
          </a>
        </div>

        <div className="footer-section">
          <h3>📞 Telephone</h3>
          <a href={phoneHref} className="footer-contact-link">
            {footer.contact.phone}
          </a>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Your privacy is our priority</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>SignUp</button>
          </div>
          <SocialLinks className="footer-social-links" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {footer.copyright}
          {' | '}
          <Link to="/terms">Terms & Conditions</Link>
          {' | '}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
