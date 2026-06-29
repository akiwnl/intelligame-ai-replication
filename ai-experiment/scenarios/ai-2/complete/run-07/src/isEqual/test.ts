import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical dates", () => {
    const d = new Date(2021, 3, 5, 12, 0, 0);
    expect(isEqual(d, d)).toBe(true);
  });

  it("returns false when milliseconds differ", () => {
    const a = new Date(2021, 3, 5, 12, 0, 0, 0);
    const b = new Date(2021, 3, 5, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("handles timestamps", () => {
    const ts = new Date(2020, 9, 10).getTime();
    expect(isEqual(ts, new Date(2020, 9, 10))).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isEqual("invalid", new Date())).toBe(false);
    expect(isEqual(new Date(), "invalid")).toBe(false);
  });
});
