import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ProjectDetails from './ProjectDetails';
import { BrowserRouter } from 'react-router-dom';

test('renders ProjectDetails with correct project info', () => {
  const { getByText, getAllByText } = render(
    <BrowserRouter>
      <ProjectDetails />
    </BrowserRouter>
  );

  // Check if the main project title is rendered
  expect(getByText(/E-commerce Site for Outdoor Gear/i)).toBeInTheDocument();
  
  // Check if the "Client Goal" section is rendered
  expect(getByText(/Client Goal/i)).toBeInTheDocument();

  // Handle the duplicate "React" elements issue by using getAllByText
  expect(getAllByText(/React/i)[0]).toBeInTheDocument();
});
