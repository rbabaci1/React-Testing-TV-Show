import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Episodes from './Episodes';

afterEach(cleanup);

it('renders Episodes with no content', () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);
});
