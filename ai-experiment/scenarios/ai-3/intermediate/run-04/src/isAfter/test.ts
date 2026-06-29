import { isAfter } from "./index";

describe("isAfter", () => {
  it("should check if the first date is after the second one", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("should handle dates in the same day", () => {
    const date = new Date(2014, 8, 1, 12);
    const dateToCompare = new Date(2014, 8, 1, 10);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });
});
