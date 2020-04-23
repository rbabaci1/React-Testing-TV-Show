import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';

import { fetchShow as mockFetchShow } from './api/fetchShow';
import mockDropdown from 'react-dropdown';
import App from './App';
import { mockData } from './mockData.js';

afterEach(cleanup);

jest.mock('./api/fetchShow');

it('fetches and renders the data', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);

  const { getByTestId, getAllByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  const selectInput = getByTestId('select');
  fireEvent.change(selectInput, { target: { value: 'Season 99' } });

  expect(selectInput).toHaveTextContent('Season 99');
  expect(getAllByTestId('episode')).toHaveLength(2);
});
