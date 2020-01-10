import { fetchTodos } from "./todo-service";

const mockFetch = data =>
  jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data)
    })
  );
describe("test services", () => {
  describe(".fetchTodos", () => {
    beforeEach(() => {
      global.fetch = mockFetch([{ value: "buy milk", done: false }]);
    });

    afterEach(() => {
      if (global.fetch && global.fetch.clearMocks) {
        global.fetch.clearMocks();
      }
    });

    it("mocks fetch response", () => {
      const onResponse = jest.fn();
      const onError = jest.fn();

      return fetchTodos()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();

          expect(onResponse.mock.calls[0][0]).toEqual([
            { value: "buy milk", done: false }
          ]);
        });
    });
  });
});
