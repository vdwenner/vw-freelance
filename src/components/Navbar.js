import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarSolid(true);
    } else {
      setNavbarSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarSolid ? 'navbar-solid' : ''}`}>
      <div className="logo">
        <a href="#home">Vaughn Wenner</a>
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <div className="social-icons">
        <a
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
        >
            <i className="fab fa-linkedin" />
        </a>
        <a
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
        >
            <i className="fab fa-github" />
        </a>
        </div>
      </div>
      <div className="hamburger">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
