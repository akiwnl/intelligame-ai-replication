import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for same instant", () => {
    const a = new Date(2022, 3, 5, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("returns false for different milliseconds", () => {
    const a = new Date(2022, 3, 5, 12, 0, 0, 0);
    const b = new Date(2022, 3, 5, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });

  it("handles timestamps", () => {
    const ts = Date.UTC(2020, 0, 1);
    expect(isEqual(ts, ts)).toBe(true);
  });

  it("returns false when one is Invalid Date", () => {
    expect(isEqual(new Date(NaN), new Date())).toBe(false);
    expect(isEqual(new Date(), new Date(NaN))).toBe(false);
    expect(isEqual(new Date(NaN), new Date(NaN))).toBe(false);
  });
});
