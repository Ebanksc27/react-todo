import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component without crashing', () => {
  // Pass a mock addTodo function as a prop
  const addTodo = jest.fn();
  render(<NewTodoForm addTodo={addTodo} />);
});

test('NewTodoForm component snapshot', () => {
  const addTodo = jest.fn();
  const { asFragment } = render(<NewTodoForm addTodo={addTodo} />);
  expect(asFragment()).toMatchSnapshot();
});
