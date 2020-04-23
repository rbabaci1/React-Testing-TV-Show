import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';

import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

const mockEpisodesData = [
  {
    id: 101,
    name: 'chapter 11',
    runtime: 90,
    season: 99,
    number: 11,
    image: { medium: '/first' },
    summary: '<p>just watch it</p>',
  },
  {
    id: 102,
    name: 'chapter 12',
    runtime: 100,
    season: 99,
    number: 12,
    image: { medium: '/second' },
    summary: '<p>do not watch it</p>',
  },
];

const mockShowData = {
  data: {
    name: 'rabah',
    image: { original: '/original' },
    summary: '<p>A love letter<p>',
    _embedded: {
      episodes: mockEpisodesData,
    },
  },
};

afterEach(cleanup);

jest.mock('react-dropdown', () => ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target)}
      data-testid='select'
    >
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});

jest.mock('./api/fetchShow');

it('fetches and renders the data', async () => {
  mockFetchShow.mockResolvedValueOnce(mockShowData);

  const { getByTestId, getAllByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  const selectInput = getByTestId('select');
  fireEvent.change(selectInput, { target: { value: 'Season 99' } });

  expect(selectInput).toHaveTextContent('Season 99');
  expect(getAllByTestId('episode')).toHaveLength(2);
});
