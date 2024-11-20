import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import for React 18
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProjectDetails from './components/ProjectDetails';
import PortfolioGallery from './components/PortfolioGallery';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProjectDetails/:projectId" element={<ProjectDetails />} />
        <Route path="/PortfolioGallery" element={<PortfolioGallery />} />
      </Routes>
    </Router>
);