import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

// Project data as a static object.
const projects = {
  "ecommerce-outdoor-gear": {
    title: 'E-commerce Site for Outdoor Gear',
    clientGoal: 'Create an online presence for an outdoor gear retailer with a focus on a user-friendly shopping experience.',
    developmentProcess: 'Built the site with React and Node.js, focusing on a modern and seamless user experience. Integrated a product catalog with detailed filtering options.',
    technologiesUsed: ['React', 'Node.js', 'Express', 'MongoDB'],
    outcomes: 'Increased online sales by 40% and received excellent customer feedback on usability.',
    imageUrl: 'https://example.com/outdoor-gear-detailed.jpg',
  },
  "artist-portfolio-redesign": {
    title: 'Portfolio Redesign for Local Artist',
    clientGoal: 'Showcase the artist’s portfolio in a responsive format to highlight their work across multiple devices.',
    developmentProcess: 'Created a fully responsive website using HTML, CSS, and JavaScript. Emphasized design aesthetics to match the artist’s unique style.',
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    outcomes: 'Improved engagement and visibility of the artist’s work, increasing inquiries by 30%.',
    imageUrl: 'https://example.com/artist-portfolio-detailed.jpg',
  },
};

const ProjectDetails = () => {
  // Use useParams to get the projectId from the route parameters.
  const { projectId } = useParams();

  console.log('projectId:', projectId); //see if useParams() is returning expected value

  // Retrieve the project data based on the projectId.
  const project = projects[projectId];

  // Render a not found message if the projectId is invalid.
  if (!project) {
    return <div>Project not found.</div>;
  }

  // Render the project details.
  return (
    <div className="project-details-container">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} className="project-details-image" />
      <div className="project-details-content">
        <h3>Client Goal</h3>
        <p>{project.clientGoal}</p>
        <h3>Development Process</h3>
        <p>{project.developmentProcess}</p>
        <h3>Technologies Used</h3>
        <ul>
          {project.technologiesUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3>Outcomes</h3>
        <p>{project.outcomes}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
