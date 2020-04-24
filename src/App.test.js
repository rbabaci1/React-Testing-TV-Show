import React from 'react';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';

import mockAxios from 'axios';
import mockDropdown from 'react-dropdown';
import App from './App';
import { mockData } from './mockData';

afterEach(cleanup);

it('fetches and renders the data', async () => {
  mockAxios.get.mockResolvedValueOnce(mockData);

  const { getByTestId, getAllByTestId } = render(<App />);

  expect(getByTestId('fetching')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => getByTestId('fetching'));

  const selectInput = getByTestId('select');
  fireEvent.change(selectInput, { target: { value: 'Season 99' } });

  expect(selectInput).toHaveTextContent('Season 99');
  expect(getAllByTestId('episode')).toHaveLength(2);
});
