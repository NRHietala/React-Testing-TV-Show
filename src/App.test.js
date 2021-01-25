import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// import { fetchShow as mockFetchShows } from './api/fetchShow';
// jest.mock('./api/fetchShow');

test('App renders without errors', () => {
  render(<App />);
});

test('App renders without shows, shows"...fetching data"', () => {
  // Arrange
  render(<App show={null}/>);

  // Act 
  const item = screen.getByText(/fetching data/i)

  // Assert
  expect(item).toBeInTheDocument();
});

// test('App renders with menu', async () => {

//   render(<App show={true}/>);

//   const menu = screen.getByText(/select a season/i);

//   expect(menu).toBeInTheDocument();
// })
