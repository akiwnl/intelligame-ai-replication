import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true when first date is later", () => {
    expect(isAfter(new Date(2021, 5, 10), new Date(2021, 5, 5))).toBe(true);
  });

  it("returns false when first date is earlier", () => {
    expect(isAfter(new Date(2021, 0, 1), new Date(2021, 0, 2))).toBe(false);
  });

  it("returns false when dates are equal", () => {
    const d = new Date(2022, 2, 2);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps", () => {
    const a = new Date(2020, 0, 1).getTime();
    const b = new Date(2019, 11, 31).getTime();
    expect(isAfter(a, b)).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isAfter("invalid", new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid")).toBe(false);
  });
});
