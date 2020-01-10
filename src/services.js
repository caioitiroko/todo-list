export const fetchTodos = () =>
  fetch("http://5e169e8d22b5c600140cfd19.mockapi.io/todo").then(response =>
    response.json()
  );
