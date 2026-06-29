import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const d = new Date(2020, 4, 20, 12, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("returns false for different milliseconds", () => {
    const a = new Date(2020, 0, 1, 0, 0, 0, 0);
    const b = new Date(2020, 0, 1, 0, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });
});
