import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(value, task.id);
        setValue("");
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(event) => setValue(event.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm;