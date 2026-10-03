import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      {/* Decorative tape on the navbar */}
      <div className="navbar-tape tape-left"></div>
      <div className="navbar-tape tape-right"></div>

      <nav className="navbar-container">
        {/* Left: Handwritten Logo */}
        <a href="#hero" className="navbar-logo handwritten" onClick={(e) => handleNavClick(e, 'hero')}>
          GB.
        </a>

        {/* Right: Desktop Navigation Links */}
        <ul className="nav-links-desktop">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#creative" onClick={(e) => handleNavClick(e, 'creative')}>Creative</a></li>
          <li><a href="#contact" className="nav-contact-btn" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-bar ${isMenuOpen ? 'bar-top-open' : ''}`} />
          <span className={`hamburger-bar ${isMenuOpen ? 'bar-mid-open' : ''}`} />
          <span className={`hamburger-bar ${isMenuOpen ? 'bar-bot-open' : ''}`} />
        </button>
      </nav>

      {/* Mobile Dropdown Navigation Menu */}
      {isMenuOpen && (
        <div className="nav-menu-mobile">
          <ul className="nav-links-mobile">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
            <li><a href="#creative" onClick={(e) => handleNavClick(e, 'creative')}>Creative</a></li>
            <li><a href="#contact" className="nav-mobile-contact-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
