import { isBefore } from "./index";

describe("isBefore", () => {
  it("checks if a date is before another", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 8, 1);
    const dateToCompare = new Date(2014, 8, 1);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
