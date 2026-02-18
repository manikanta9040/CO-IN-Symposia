import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

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
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
          <span className="logo-text">CO</span>
          <span className="logo-box">IN</span>
        </Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`nav-link ${isActive('/services') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/conferences"
          className={`nav-link ${isActive('/conferences') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Conferences
        </Link>
        <Link
          to="/news"
          className={`nav-link ${isActive('/news') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          News
        </Link>
        <Link
          to="/reports"
          className={`nav-link ${isActive('/reports') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Reports
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
      <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
};

export default Header;