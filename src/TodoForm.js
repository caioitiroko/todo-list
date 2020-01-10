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
    <form
      className="todo-form"
      data-testid="todo-form"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input
        data-testid="todo-form-value"
        placeholder="add a new todo..."
        ref={inputRef}
        type="text"
      />
      <button type="submit" data-testid="todo-form-submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
