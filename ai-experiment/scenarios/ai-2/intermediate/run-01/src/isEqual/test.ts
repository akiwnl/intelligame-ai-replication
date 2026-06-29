import { isEqual } from "./index";

describe("isEqual", () => {
  test("true for same instant", () => {
    const d = new Date(2022, 2, 2, 12, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  test("false for different milliseconds", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });
});
