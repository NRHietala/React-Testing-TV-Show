import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Episodes from './Episodes';

test('Episodes renders without errors', () => {
  
  render(<Episodes episodes={[]}/>);

})

test('Episodes renders without errors', () => {
  // Arrange
  render(<Episodes episodes={[]}/>);

  // Act

  // Assert
})