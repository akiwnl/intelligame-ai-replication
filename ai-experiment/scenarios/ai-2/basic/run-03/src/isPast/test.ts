import { isPast } from "./index";

describe("isPast", () => {
  test("date before now returns true", () => {
    const past = Date.now() - 5000;
    expect(isPast(past)).toBe(true);
  });

  test("date after now returns false", () => {
    const future = Date.now() + 5000;
    expect(isPast(future)).toBe(false);
  });
});
