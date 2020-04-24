import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Episodes from './Episodes';

afterEach(cleanup);

it('renders Episodes with no content', () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);
});

it('renders Episodes with valid episodes', () => {
  const mockData = [
    { id: 2020, name: 'Chapter 11', season: 11 },
    { id: 2021, name: 'Chapter 12', season: 12 },
  ];

  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);

  rerender(<Episodes episodes={mockData} />);

  expect(queryAllByTestId('episode')).toHaveLength(2);
  expect(queryAllByTestId('episode')[0]).toHaveTextContent(/chapter 11/i);
});
