import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects identical dates", () => {
    const d = new Date(2021, 3, 5, 12, 0, 0, 0);
    expect(isEqual(d, d)).toBe(true);
  });

  it("detects different milliseconds", () => {
    const d1 = new Date(2021, 3, 5, 12, 0, 0, 0);
    const d2 = new Date(2021, 3, 5, 12, 0, 0, 1);
    expect(isEqual(d1, d2)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts = 1609459200000;
    expect(isEqual(ts, "2021-01-01T00:00:00.000Z")).toBe(true);
  });

  it("invalid dates are equal only to invalid dates", () => {
    const invalid = new Date("invalid");
    expect(isEqual(invalid, invalid)).toBe(true);
    expect(isEqual(invalid, new Date())).toBe(false);
  });
});
