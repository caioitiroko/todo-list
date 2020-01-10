import "./TodoApp.css";

import React, { useEffect, useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "./utils";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { fetchTodos } from "./services";

const TodoApp = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchTodos()
      .then(todos => Array.isArray(todos) && setItems(todos))
      .catch(console.error);
  }, []);

  const handleAddItem = item => setItems(addTodo(items, item));
  const handleRemoveItem = item => setItems(removeTodo(items, item));
  const handleToggleItem = item => setItems(toggleTodo(items, item));

  return (
    <div className="todo-app">
      <div className="todo-app__container">
        <h1 className="todo-app__title">Todo List</h1>
        <TodoList
          items={items}
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleItem}
        />
        <TodoForm onAddItem={handleAddItem} />
      </div>
    </div>
  );
};

export default TodoApp;
