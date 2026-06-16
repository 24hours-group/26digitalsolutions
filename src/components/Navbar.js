import React, { useEffect, useState } from 'react';
import useStore from '../store/useStore';

export default function Navbar() {
  const { isNavOpen, toggleNav, setNavOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setNavOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setNavOpen]);

  const closeMenu = () => setNavOpen(false);

  return (
    <nav className={`top ${isScrolled ? 'scrolled' : ''}`} id="topNav">
      <div className="nav-inner">
        <a href="/#hero" className="logo" onClick={closeMenu}>
          <span className="num">26</span>
          <span className="small">Digital Solutions</span>
        </a>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="/#intro" onClick={closeMenu}>About</a></li>
          <li><a href="/#solutions" onClick={closeMenu}>Solutions</a></li>
          <li><a href="/#engine" onClick={closeMenu}>Technology</a></li>
          <li><a href="/#global" onClick={closeMenu}>Global</a></li>
          <li><a href="/#insights" onClick={closeMenu}>Insights</a></li>
          <li><a href="/#careers" onClick={closeMenu}>Careers</a></li>
          <li><a href="/#contact" className="nav-cta" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button
          className={`hamburger ${isNavOpen ? 'open' : ''}`}
          id="hamburger"
          aria-label="Open menu"
          aria-controls="navLinks"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
