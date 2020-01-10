import "./TodoForm.css";

import React, { useRef } from "react";

const TodoForm = ({ onAddItem }) => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputRef && inputRef.current.value.trim().length > 0) {
      onAddItem({ value: inputRef.current.value, done: false });
    }

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="todo-form">
      <input type="text" ref={inputRef} placeholder="add a new todo..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
