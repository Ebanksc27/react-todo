import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
  
    const addTodo = newTodo => {
      setTodos(oldTodos => [...oldTodos, newTodo]);
    };
  
    const removeTodo = id => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
      };
      
      return (
        <div>
          <NewTodoForm addTodo={addTodo} />
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} removeTodo={removeTodo} />
          ))}
        </div>
      );
  }

export default TodoList;
