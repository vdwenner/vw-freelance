import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to send the form data to a backend server
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
        >
          <option value="">Select Project Type</option>
          <option value="website">Website Development</option>
          <option value="api">API Integration</option>
          <option value="seo">SEO Optimization</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
