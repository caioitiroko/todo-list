import { addTodo, removeTodo, toggleTodo } from "./utils";

describe("test utils", () => {
  describe(".addTodo", () => {
    it("adds an todo", () => {
      const todo = { value: "buy milk", done: false };
      const todos = [];

      expect(addTodo(todos, todo)).toEqual([todo]);
    });
  });

  describe(".removeTodo", () => {
    it("removes an todo", () => {
      const todo = { value: "buy milk", done: false };
      const todos = [todo];
      expect(removeTodo(todos, todo)).toEqual([]);
    });

    it("does nothing on empty todo", () => {
      const todo = { value: "buy milk", done: false };
      const todos = [];
      expect(removeTodo(todos, todo)).toEqual([]);
    });

    it("does nothing when dont match a todo", () => {
      const todo = { value: "buy milk", done: false };
      const todos = [{ value: "buy beer", done: false }];
      expect(removeTodo(todos, todo)).toEqual(todos);
    });
  });

  describe(".toggleTodo", () => {
    it("completes an uncompleted todo", () => {
      const todo = { value: "buy milk" };
      const todos = [{ value: "buy milk", done: false }];

      expect(toggleTodo(todos, todo)).toEqual([
        { value: "buy milk", done: true }
      ]);
    });

    it("uncomplete an completed todo", () => {
      const todo = { value: "buy milk" };
      const todos = [{ value: "buy milk", done: true }];

      expect(toggleTodo(todos, todo)).toEqual([
        { value: "buy milk", done: false }
      ]);
    });

    it("does nothing to a new todo", () => {
      const todo = { value: "buy milk" };
      const todos = [{ value: "buy beer", done: true }];

      expect(toggleTodo(todos, todo)).toEqual(todos);
    });
  });
});
