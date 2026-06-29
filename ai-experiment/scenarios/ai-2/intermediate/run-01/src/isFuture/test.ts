import { isFuture } from "./index";

describe("isFuture", () => {
  test("future date returns true", () => {
    const future = new Date(Date.now() + 24 * 60 * 60 * 1000);
    expect(isFuture(future)).toBe(true);
  });

  test("past date returns false", () => {
    const past = new Date(Date.now() - 24 * 60 * 60 * 1000);
    expect(isFuture(past)).toBe(false);
  });

  test("now returns false", () => {
    expect(isFuture(Date.now())).toBe(false);
  });
});
