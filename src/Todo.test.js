import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component without crashing', () => {
  // Provide mock props
  const removeTodo = jest.fn();
  render(<Todo id="1" task="Test Todo" removeTodo={removeTodo} />);
});

test('Todo component snapshot', () => {
  const removeTodo = jest.fn();
  const { asFragment } = render(<Todo id="1" task="Test Todo" removeTodo={removeTodo} />);
  expect(asFragment()).toMatchSnapshot();
});
