import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <div className="header-topbar-left">
            <span className="topbar-item">📍 Our Location</span>
            <span className="topbar-separator" aria-hidden="true">|</span>
            <a href="mailto:info@coinsymposia.com" className="topbar-item">✉ info@coinsymposia.com</a>
          </div>
          <div className="header-topbar-right">
            <SocialLinks />
            <span className="topbar-separator" aria-hidden="true">|</span>
            <button type="button" className="language-btn">English ▾</button>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-inner">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <span className="logo-text">CO</span>
              <span className="logo-box">IN</span>
            </Link>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About</Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={closeMenu}>Services</Link>
            <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`} onClick={closeMenu}>Reports</Link>
            <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`} onClick={closeMenu}>News</Link>
            <Link to="/conferences" className={`nav-link ${isActive('/conferences') ? 'active' : ''}`} onClick={closeMenu}>Conferences</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
            <Link to="/admin" className={`nav-link ${isActive('/admin') ? 'active' : ''}`} onClick={closeMenu}>Admin</Link>
          </nav>

          <div className="header-call">
            <div className="call-icon" aria-hidden="true">📞</div>
            <div>
              <p className="call-label">Call Us @</p>
              <a href="tel:+15122702990" className="call-number">+1 512 270 2990</a>
            </div>
          </div>

          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
