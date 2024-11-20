import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Custom Web Development',
    content: 'Fully bespoke websites built to meet your specific needs. From simple landing pages to complex web applications, I offer tailored solutions to help you succeed.'
  },
  {
    title: 'Responsive Design',
    content: 'Optimized for all screen sizes to ensure your users have the best possible experience, regardless of the device they are using.'
  },
  {
    title: 'API Integrations',
    content: 'Streamlining workflows through custom API connections, I integrate third-party services to extend the functionality of your web applications.'
  },
  {
    title: 'Performance Optimization',
    content: 'Ensuring fast, smooth site performance by optimizing images, code, and server configurations to deliver an excellent user experience.'
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="services-container" id="services">
      <h2 className="services-title">My Services</h2>
      <div className="accordion">
        {servicesData.map((service, index) => (
          <div key={index} className="accordion-item">
            <div 
              className={`accordion-title ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => handleAccordionClick(index)}
            >
              {service.title}
            </div>
            <div 
              className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
            >
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
