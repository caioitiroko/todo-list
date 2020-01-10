export const addTodo = (todos, todo) => [...todos, todo];

export const removeTodo = (todos, todo) =>
  todos.filter(element => element.value !== todo.value);

export const toggleTodo = (todos, todo) =>
  todos.map(element =>
    element.value === todo.value ? { ...element, done: !element.done } : element
  );
