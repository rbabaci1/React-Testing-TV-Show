import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import axiosMock from 'axios';
import App from './App';

afterEach(cleanup);

const mockShowData = {
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
          season: 1,
          number: 11,
          image: { medium: '' },
          summary: '<p>test</p>',
        },
      ],
    },
  },
};

// jest.mock('./api/fetchShow');

it('fetches and renders data', async () => {
  axiosMock.get.mockResolvedValueOnce(mockShowData);

  const { getByTestId, queryAllByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));
  //   await waitFor(() => {
  //     const episodes = queryAllByTestId('episode');

  //     // expect(episodes).toHaveLength(0);
  //   });
});
