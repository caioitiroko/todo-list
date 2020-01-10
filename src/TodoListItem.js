import "./TodoListItem.css";

import React from "react";

const TodoListItem = ({ item, onRemoveItem, onToggleItem }) => (
  <div className="todo-list-item">
    <span
      className={`todo-list-item__value ${item.done &&
        "todo-list-item__value-done"}`}
    >
      {item.value}
    </span>
    <button type="button" onClick={onToggleItem}>
      {item.done ? "Undone" : "Done"}
    </button>
    <button type="button" onClick={onRemoveItem}>
      Remove
    </button>
  </div>
);

export default TodoListItem;
