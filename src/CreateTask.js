import { useState } from 'react';
import './assets/scss/CreateTask.scss';

export const CreateTask = ( {onAddItem} ) => {
  const [todo, setTodo] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    onAddItem(e, todo);
    setTodo('');
  }

  return (
    <form className='form-todo' onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Create a new todo...'></input>
    </form>
  );
};
