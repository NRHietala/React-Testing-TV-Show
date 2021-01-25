import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Episodes from './Episodes';

const dummyData = {
  id: 1,
  name: "Episode 1",
}

test('Episodes renders without errors', () => {

  render(<Episodes episodes={[]}/>);

})

test('Episodes renders without errors', async () => {

  const { rerender } = await render(<Episodes episodes={[dummyData]}/>);

  rerender(<Episodes espisodes={dummyData}/>)

  const episode = screen.getByText(/episode/i)

  expect(episode).toHaveLength(1);

})
