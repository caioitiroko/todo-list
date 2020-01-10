import "./index.css";

import React from "react";

const TodoListItem = ({ index, item, onRemoveItem, onToggleItem }) => (
  <div className="todo-list-item" data-testid={`todo-list-item-${index}`}>
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
