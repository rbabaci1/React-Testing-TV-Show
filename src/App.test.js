import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';

import axiosMock from 'axios';
import dropDownMock from 'react-dropdown';

import App from './App';

afterEach(cleanup);

const mockData = {
  data: {
    name: 'rabah',
    image: { original: '/original' },
    summary: '<p>A love letter<p>',
    _embedded: {
      episodes: [
        {
          id: 101,
          name: 'chapter 11',
          runtime: 100,
          season: 99,
          number: 11,
          image: { medium: '' },
          summary: '<p>just watch it</p>',
        },
      ],
    },
  },
};

it('fetches and renders data', async () => {
  axiosMock.get.mockResolvedValueOnce(mockData);

  const { getByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));
});
