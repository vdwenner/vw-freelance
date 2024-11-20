import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Services from './Services';

// Test to verify that the Services component renders and accordion functionality works

test('renders Services component and expands accordion items on click', () => {
  const { getByText } = render(<Services />);

  // Check if the service titles are rendered
  expect(getByText(/Custom Web Development/i)).toBeInTheDocument();
  expect(getByText(/Responsive Design/i)).toBeInTheDocument();
  expect(getByText(/API Integrations/i)).toBeInTheDocument();
  expect(getByText(/Performance Optimization/i)).toBeInTheDocument();

  // Test clicking on accordion to expand content
  const customWebDevelopment = getByText(/Custom Web Development/i);
  fireEvent.click(customWebDevelopment);
  expect(getByText(/Fully bespoke websites built to meet your specific needs/i)).toBeInTheDocument();

  const responsiveDesign = getByText(/Responsive Design/i);
  fireEvent.click(responsiveDesign);
  expect(getByText(/Optimized for all screen sizes to ensure your users have the best possible experience/i)).toBeInTheDocument();
});