import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the given date is in the past", () => {
    const date = new Date(2014, 6, 2);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles dates in the future", () => {
    const date = new Date(2024, 0, 1);
    const result = isPast(date);
    expect(result).toBe(false);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
