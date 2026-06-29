import { isAfter } from "./index";

describe("isAfter", () => {
  it("should check if the first date is after the second one", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("should handle edge cases", () => {
    const date = new Date(2014, 11, 31);
    const dateToCompare = new Date(2014, 11, 31);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(false);
  });
});
