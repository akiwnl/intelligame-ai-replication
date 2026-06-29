import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true when first date is later", () => {
    expect(isAfter(new Date(2020, 5, 1), new Date(2020, 4, 30))).toBe(true);
  });

  it("returns false when first date is earlier", () => {
    expect(isAfter(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2020, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts1 = 1609459200000; // 2021-01-01
    const ts2 = 1609545600000; // 2021-01-02
    expect(isAfter(ts2, ts1)).toBe(true);
    expect(isAfter("2021-01-01T00:00:00Z", "2021-01-02T00:00:00Z")).toBe(false);
  });

  it("invalid dates are treated as NaN and return false", () => {
    expect(isAfter(new Date("invalid"), new Date())).toBe(false);
    expect(isAfter(new Date(), new Date("invalid"))).toBe(false);
  });
});
