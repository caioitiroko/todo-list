import {
  render,
  waitForElement,
  cleanup,
  fireEvent
} from "@testing-library/react";

import React from "react";
import TodoApp from "./TodoApp";

const mockedFetch = jest.spyOn(window, "fetch");

describe("<TodoApp />", () => {
  it("renders an empty list", async () => {
    const { getByTestId } = render(<TodoApp />);

    await waitForElement(() => getByTestId("todo-list-empty"));
    expect(getByTestId("todo-form")).toBeDefined();
  });

  it("renders an fetched todo list", async () => {
    mockedFetch.mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { value: "buy milk", done: false },
            { value: "buy beer", done: false }
          ])
      });
    });

    const { getByTestId, getByText } = render(<TodoApp />);

    await waitForElement(() => getByTestId("todo-list"));
    expect(getByText("buy milk")).toBeDefined();
    expect(getByText("buy beer")).toBeDefined();
  });

  it("adds a new todo", async () => {
    const { getByTestId, getByText } = render(<TodoApp />);

    const todoInput = getByTestId("todo-form-value");
    const todoSubmit = getByTestId("todo-form-submit");

    fireEvent.change(todoInput, { target: { value: "buy milk" } });
    fireEvent.click(todoSubmit);

    await waitForElement(() => getByTestId("todo-list"));
    expect(getByText("buy milk")).toBeDefined();
  });
});
