import React from 'react';
import './OverviewCards.css';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Fully bespoke websites built to meet your specific needs.',
  },
  {
    title: 'Responsive Design',
    description: 'Optimized for all screen sizes to ensure your users have the best possible experience.',
  },
  {
    title: 'API Integrations',
    description: 'Streamlining workflows through seamless API connections.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your site’s visibility on search engines.',
  },
];

const OverviewCards = () => {
  return (
    <div className="overview-cards">
      {services.map((service, index) => (
        <div key={index} className="overview-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
