import React from "react";

import TodoListItem from "../TodoListItem";

const TodoList = ({ items, onRemoveItem, onToggleItem }) => {
  if (!items || items.length === 0) {
    return <div data-testid="todo-list-empty" />;
  }

  return (
    <div data-testid="todo-list">
      {items.map((item, index) => (
        <TodoListItem
          key={index}
          index={index}
          item={item}
          onRemoveItem={() => onRemoveItem(item)}
          onToggleItem={() => onToggleItem(item)}
        />
      ))}
    </div>
  );
};

export default TodoList;
