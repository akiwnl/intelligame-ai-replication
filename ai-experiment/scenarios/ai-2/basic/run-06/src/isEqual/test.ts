import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const d = new Date(2020, 5, 15, 12, 0, 0, 123);
    expect(isEqual(d, d)).toBe(true);
  });
  it("returns false for different timestamps", () => {
    const d1 = new Date(2020, 5, 15, 12, 0, 0, 0);
    const d2 = new Date(2020, 5, 15, 12, 0, 0, 1);
    expect(isEqual(d1, d2)).toBe(false);
  });
});
