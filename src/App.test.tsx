import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar component', () => {
  render(<App />);
  // Check that the calendar is rendered by looking for weekday headers
  const weekdayElement = screen.getByText('Su');
  expect(weekdayElement).toBeInTheDocument();
});
