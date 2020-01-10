import { fetchTodos } from "./services";

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        json: () => [{ value: "buy milk", done: false }]
      });
    });
  });
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
