import { isEqual } from "./index";

describe("isEqual", () => {
  it("checks if the dates are equal", () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateToCompare = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const dateToCompare = new Date(NaN);
    const result = isEqual(date, dateToCompare);
    expect(result).toBe(false);
  });
});
