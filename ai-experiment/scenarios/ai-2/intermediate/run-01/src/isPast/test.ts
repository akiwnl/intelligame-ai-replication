import { isPast } from "./index";

describe("isPast", () => {
  test("past date returns true", () => {
    const past = new Date(Date.now() - 48 * 60 * 60 * 1000);
    expect(isPast(past)).toBe(true);
  });

  test("future date returns false", () => {
    const future = new Date(Date.now() + 48 * 60 * 60 * 1000);
    expect(isPast(future)).toBe(false);
  });

  test("now returns false", () => {
    expect(isPast(Date.now())).toBe(false);
  });
});
