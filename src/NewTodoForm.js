import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const uniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ task, id: uniqueId() }); 
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={e => setTask(e.target.value)} 
        placeholder="New task" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
