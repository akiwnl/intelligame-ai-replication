import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isBefore(date, dateToCompare)).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    expect(isBefore(date, dateToCompare)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    expect(isBefore(date, dateToCompare)).toBe(false);
  });
});
