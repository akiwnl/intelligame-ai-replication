import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(true);
  });

  it("detects earlier date", () => {
    expect(isAfter(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2000, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps and strings", () => {
    const ts = Date.UTC(2020, 5, 15);
    expect(isAfter(ts, "2020-06-14T00:00:00.000Z")).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isAfter("invalid" as any, new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid" as any)).toBe(false);
  });
});
