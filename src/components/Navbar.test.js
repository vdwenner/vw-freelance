import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

// Test to verify that the Navbar component renders correctly

test('renders Navbar without crashing', () => {
  render(<Navbar />);

  // Check if the logo text is rendered
  expect(screen.getByText(/Vaughn Wenner/i)).toBeInTheDocument();

  // Check if the navigation links are rendered
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();

  // Check if the social icons are rendered
  expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
});
