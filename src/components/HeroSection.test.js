import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from './HeroSection';

test('renders HeroSection with tagline and button', () => {
  const { getByText } = render(<HeroSection />);
  expect(getByText(/Building robust web solutions/i)).toBeInTheDocument();
  expect(getByText(/Hire Me/i)).toBeInTheDocument();
});
