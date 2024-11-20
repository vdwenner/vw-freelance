import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component with all elements', () => {
  render(<Footer />);

  // Check if footer text is rendered
  expect(screen.getByText(/Inspired by the peaks, built for progress./i)).toBeInTheDocument();

  // Check if the quick links are rendered
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Blog/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();

  // Check if the social icons are rendered using aria-label
  expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
});
