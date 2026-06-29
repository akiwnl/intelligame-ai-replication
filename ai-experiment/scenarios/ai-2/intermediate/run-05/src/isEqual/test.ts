import { isEqual } from "./index";

describe("isEqual", () => {
  test("identical timestamps", () => {
    const d = new Date(2022, 3, 5, 12, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  test("different milliseconds", () => {
    const d1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const d2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(d1, d2)).toBe(false);
  });
});
