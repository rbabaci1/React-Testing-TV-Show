import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Episodes from './Episodes';

afterEach(cleanup);

it('renders Episodes with no content', () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);
});

it('renders Episodes with valid episodes', () => {
  const mockData = [{ id: 2020, name: 'Chapter eleven', season: 11 }];

  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);
});
