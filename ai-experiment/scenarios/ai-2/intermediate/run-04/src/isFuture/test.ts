import { isFuture } from "./index";

describe("isFuture", () => {
  test("future date returns true", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60);
    expect(isFuture(future)).toBe(true);
  });

  test("past date returns false", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isFuture(past)).toBe(false);
  });
});
