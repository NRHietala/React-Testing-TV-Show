import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('App renders without errors', () => {

  render(<App />);

});

test('App renders without shows, shows"...fetching data"', () => {
  // Arrange
  render(<App shows={null}/>);

  // Act 
  const item = screen.getByText(/fetching data/i)

  // Assert
  expect(item).toBeInTheDocument();
});


