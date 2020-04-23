import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';

import { fetchShow as mockFetchShow } from './api/fetchShow';
import dropDownMock from 'react-dropdown';

import App from './App';
import Episodes from './components/Episodes';

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
          season: 100,
          number: 11,
          image: { medium: '' },
          summary: '<p>just watch it</p>',
        },
      ],
    },
  },
};

jest.mock('react-dropdown', () => ({ options, value, onChange }) => {
  return (
    <select
      data-testid='select'
      value={value}
      onChange={(e) => {
        console.log('changed: ');
        onChange(e);
      }}
    >
      {options.map((option) => (
        <option key={Date.now()} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
});

jest.mock('./api/fetchShow');

it('fetches and renders the data', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);

  const { getByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  //   await waitFor(() => {
  //     const a = queryByTestId('episode');
  //     console.log(a);
  //   });
});
