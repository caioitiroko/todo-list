import "regenerator-runtime/runtime";

import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "@testing-library/react";

import React from "react";
import TodoApp from "./index";

const mockFetch = data =>
  jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );

describe("<TodoApp />", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    );
  });

  afterEach(() => {
    if (global.fetch && global.fetch.clearMocks) {
      global.fetch.clearMocks();
    }
  });

  it("renders an empty list", async () => {
    const { getByTestId } = render(<TodoApp />);

    await waitForElement(() => getByTestId("todo-list-empty"));
    expect(getByTestId("todo-form")).toBeDefined();
  });

  it("renders an fetched todo list", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ value: "buy milk", done: false }])
      })
    );

    const { getByTestId, getByText } = render(<TodoApp />);

    await waitForElement(() => getByTestId("todo-list"));
    expect(getByText("buy milk")).toBeDefined();
  });

  it("adds a new todo", async () => {
    const { getByTestId, getByText } = render(<TodoApp />);

    await waitForElement(() => getByTestId("todo-form-value"));

    const todoInput = getByTestId("todo-form-value");
    const todoSubmit = getByTestId("todo-form-submit");

    fireEvent.change(todoInput, { target: { value: "buy milk" } });
    fireEvent.click(todoSubmit);

    await waitForElement(() => getByTestId("todo-list"));
    expect(getByText("buy milk")).toBeDefined();
  });
});
