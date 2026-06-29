import { isAfter } from "./index";

describe("isAfter", () => {
  it("checks if the first date is after the second one", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const dateToCompare = new Date(NaN);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(false);
  });
});
