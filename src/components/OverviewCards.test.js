import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import OverviewCards from './OverviewCards';

test('renders OverviewCards with services', () => {
  const { getByText } = render(<OverviewCards />);
  expect(getByText(/Custom Web Development/i)).toBeInTheDocument();
  expect(getByText(/Responsive Design/i)).toBeInTheDocument();
  expect(getByText(/API Integrations/i)).toBeInTheDocument();
  expect(getByText(/SEO Optimization/i)).toBeInTheDocument();
});
