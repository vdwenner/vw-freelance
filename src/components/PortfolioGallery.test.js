import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PortfolioGallery from './PortfolioGallery';

test('renders PortfolioGallery with project titles', () => {
  const { getByText } = render(
    <BrowserRouter>
      <PortfolioGallery />
    </BrowserRouter>
  );
  expect(getByText(/E-commerce Site for Outdoor Gear/i)).toBeInTheDocument();
  expect(getByText(/Portfolio Redesign for Local Artist/i)).toBeInTheDocument();
});
