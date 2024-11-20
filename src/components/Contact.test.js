import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './Contact';

// Test to verify that the Contact component renders and form submission works

test('renders Contact component and handles form submission', () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<Contact />);

  // Check if the form fields are rendered
  expect(getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
  expect(getByRole('combobox')).toBeInTheDocument();
  expect(getByPlaceholderText(/Your Message/i)).toBeInTheDocument();

  // Fill out the form
  fireEvent.change(getByPlaceholderText(/Your Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText(/Your Email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(getByRole('combobox'), { target: { value: 'website' } });
  fireEvent.change(getByPlaceholderText(/Your Message/i), { target: { value: 'I need a new website.' } });

  // Submit the form
  fireEvent.click(getByText(/Send Message/i));

  // Check if the form was cleared after submission
  expect(getByPlaceholderText(/Your Name/i).value).toBe('');
  expect(getByPlaceholderText(/Your Email/i).value).toBe('');
  expect(getByRole('combobox').value).toBe('');
  expect(getByPlaceholderText(/Your Message/i).value).toBe('');
});