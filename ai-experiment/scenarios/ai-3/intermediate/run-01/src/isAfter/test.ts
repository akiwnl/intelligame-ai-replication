import { isAfter } from "./index";

describe("isAfter", () => {
  it("should return true if the first date is after the second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    expect(isAfter(date, dateToCompare)).toBe(true);
  });

  it("should return false if the first date is before the second date", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isAfter(date, dateToCompare)).toBe(false);
  });
});
