import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true when first date is earlier", () => {
    expect(isBefore(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(true);
  });

  it("returns false when first date is later", () => {
    expect(isBefore(new Date(2020, 5, 10), new Date(2020, 4, 10))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2021, 2, 3);
    expect(isBefore(d, d)).toBe(false);
  });

  it("accepts timestamps and strings", () => {
    const early = 1000;
    const later = "2000";
    expect(isBefore(early, later)).toBe(true);
  });

  it("handles Invalid Date as NaN => comparison false", () => {
    expect(isBefore("bad", new Date())).toBe(false);
    expect(isBefore(new Date(), "bad")).toBe(false);
  });
});
