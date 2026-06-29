import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true when first date is later", () => {
    expect(isAfter(new Date(2022, 5, 1), new Date(2022, 4, 30))).toBe(true);
  });

  it("returns false when first date is earlier", () => {
    expect(isAfter(new Date(2022, 0, 1), new Date(2022, 0, 2))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2022, 3, 15, 12, 0, 0, 0);
    expect(isAfter(d, d)).toBe(false);
  });

  it("accepts timestamps and strings", () => {
    const a = 1609459200000; // 2021-01-01
    const b = "1609545600000"; // 2021-01-02
    expect(isAfter(b, a)).toBe(true);
  });

  it("handles Invalid Date as NaN => comparison false", () => {
    expect(isAfter("invalid", new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid")).toBe(false);
  });
});
