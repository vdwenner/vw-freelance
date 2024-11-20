import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-hero">
        <img src="path/to/hiking-image.jpg" alt="Vaughn Outdoors" />
      </div>
      <div className="about-content">
        <h2>About Vaughn Wenner</h2>
        <p>Building web solutions while embracing the simplicity and resilience found in nature.</p>
        <p>With a deep love for web development, Vaughn draws parallels between solving coding challenges and climbing mountains, emphasizing persistence, precision, and the satisfaction of reaching the peak.</p>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <h3>Fun Facts</h3>
        <p><strong>Favorite Mountain:</strong> Mount Rainier</p>
        <p><strong>Hours Spent Outdoors in 2023:</strong> 250+</p>
      </div>
    </div>
  );
};

export default About;
