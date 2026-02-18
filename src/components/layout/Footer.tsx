import React from 'react';
import { contentData } from '../../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>📍 Address</h3>
          <p>{contentData.footer.address.company}</p>
          <p>{contentData.footer.address.street}, {contentData.footer.address.city}</p>
        </div>

        <div className="footer-section">
          <h3>✉️ Mail Us</h3>
          <p>{contentData.footer.contact.email}</p>
        </div>

        <div className="footer-section">
          <h3>📞 Telephone</h3>
          <p>{contentData.footer.contact.phone}</p>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Your privacy is our priority</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>SignUp</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{contentData.footer.copyright} |
        <a href="#">Terms & Conditions</a> |
        <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
