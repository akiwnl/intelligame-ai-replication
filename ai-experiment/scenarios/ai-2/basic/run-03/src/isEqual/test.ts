import { isEqual } from "./index";

describe("isEqual", () => {
  test("identical timestamps are equal", () => {
    const d = new Date(2020, 3, 15, 12, 0, 0, 0);
    expect(isEqual(d, d)).toBe(true);
  });

  test("different timestamps are not equal", () => {
    const a = new Date(2020, 3, 15, 12, 0, 0, 0);
    const b = new Date(2020, 3, 15, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });
});
