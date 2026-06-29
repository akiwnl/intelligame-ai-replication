import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const a = new Date(2021, 5, 10, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("returns false for different milliseconds", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });
});
