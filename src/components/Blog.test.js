import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

// Test to verify that the Blog component renders all posts correctly

test('renders Blog component with all blog posts', () => {
  const { getByText } = render(<Blog />);

  // Check if the blog titles are rendered
  expect(getByText(/What Hiking Teaches Us About Problem-Solving in Web Development/i)).toBeInTheDocument();
  expect(getByText(/Nature-Inspired Design: Enhancing User Experience/i)).toBeInTheDocument();
  expect(getByText(/APIs in the Wild: Streamlining Digital Adventures/i)).toBeInTheDocument();

  // Check if the blog excerpts are rendered
  expect(getByText(/Hiking and coding have more in common than you think/i)).toBeInTheDocument();
  expect(getByText(/Learn how incorporating elements from nature can enhance user experience/i)).toBeInTheDocument();
  expect(getByText(/Explore how APIs are like trails connecting different parts of a digital forest/i)).toBeInTheDocument();
});