import { isEqual } from "./index";

describe("isEqual", () => {
  test("identical timestamps", () => {
    const a = new Date(2021, 2, 3, 4, 5, 6, 7);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  test("different milliseconds", () => {
    const a = new Date(2021, 2, 3, 4, 5, 6, 0);
    const b = new Date(2021, 2, 3, 4, 5, 6, 500);
    expect(isEqual(a, b)).toBe(false);
  });

  test("different dates", () => {
    expect(isEqual(new Date(2020, 0, 1), new Date(2021, 0, 1))).toBe(false);
  });

  test("timestamp numbers", () => {
    const ts = Date.now();
    expect(isEqual(ts, ts)).toBe(true);
  });

  test("invalid dates are not equal", () => {
    const invalid = new Date("invalid");
    expect(isEqual(invalid, invalid)).toBe(false);
  });
});
