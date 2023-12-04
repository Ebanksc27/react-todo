import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component without crashing', () => {
  render(<TodoList />);
});

test('TodoList component snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
