import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Building robust web solutions, inspired by the simplicity and elegance of nature.</h1>
        <p className="hero-subtext">Let’s scale your next project to new heights.</p>
        <a href="#contact" className="hero-button">Hire Me</a>
      </div>
    </div>
  );
};

export default HeroSection;
