import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioGallery.css';

const projects = [
  {
    id: 'ecommerce-outdoor-gear',
    title: 'E-commerce Site for Outdoor Gear',
    description: 'Built with React and Node.js, this site provides a seamless shopping experience for outdoor enthusiasts.',
    thumbnail: 'https://example.com/outdoor-gear-thumbnail.jpg',
  },
  {
    id: 'artist-portfolio-redesign',
    title: 'Portfolio Redesign for Local Artist',
    description: 'Focused on responsive design to showcase the artist’s work beautifully on any device.',
    thumbnail: 'https://example.com/artist-portfolio-thumbnail.jpg',
  },
  {
    id: 'small-business-landing-page',
    title: 'Small Business Landing Page',
    description: 'A sleek and informative landing page for a local coffee shop, built with HTML, CSS, and JavaScript.',
    thumbnail: 'https://example.com/coffee-shop-thumbnail.jpg',
  },
];

const PortfolioGallery = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <Link to={`/portfolio/${project.id}`}>
              <img src={project.thumbnail} alt={project.title} className="gallery-thumbnail" />
              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
