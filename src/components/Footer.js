import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-message">
          <h3>Inspired by the peaks, built for progress.</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
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
        <p>&copy; {new Date().getFullYear()} Vaughn Wenner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
