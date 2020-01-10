import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ items, onRemoveItem, onToggleItem }) => (
  <div>
    {items.map((item, index) => (
      <TodoListItem
        key={index}
        item={item}
        onRemoveItem={() => onRemoveItem(item)}
        onToggleItem={() => onToggleItem(item)}
      />
    ))}
  </div>
);

export default TodoList;
