import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

afterEach(cleanup);

const mockData = {
  data: {
    name: 'rabah',
    image: { original: '/original' },
    summary: '<p>A love letter<p>',
    _embedded: {
      episodes: [
        {
          id: 1,
          name: 'chapter 11',
          runtime: 100,
          season: 11,
          number: 1,
          image: { medium: '' },
          summary: '<p>test</p>',
        },
      ],
    },
  },
};

jest.mock('./api/fetchShow');

it('fetches and renders data', () => {
  console.log(mockFetchShow);
});
