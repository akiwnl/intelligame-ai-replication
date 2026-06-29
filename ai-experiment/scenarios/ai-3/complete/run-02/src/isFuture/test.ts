import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if the given date is in the future", () => {
    const date = new Date(2024, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles dates in the past", () => {
    const date = new Date(2014, 11, 31);
    const result = isFuture(date);
    expect(result).toBe(false);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
