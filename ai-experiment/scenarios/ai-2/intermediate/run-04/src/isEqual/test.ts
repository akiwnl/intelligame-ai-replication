import { isEqual } from "./index";

describe("isEqual", () => {
  test("identical timestamps", () => {
    const a = new Date(2020, 5, 15, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  test("different milliseconds", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });
});
