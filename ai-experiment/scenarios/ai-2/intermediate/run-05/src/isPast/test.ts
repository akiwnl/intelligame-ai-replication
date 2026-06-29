import { isPast } from "./index";

describe("isPast", () => {
  test("past date returns true", () => {
    const past = new Date(Date.now() - 1000 * 60 * 60);
    expect(isPast(past)).toBe(true);
  });

  test("future date returns false", () => {
    const future = new Date(Date.now() + 1000 * 60 * 60);
    expect(isPast(future)).toBe(false);
  });
});
