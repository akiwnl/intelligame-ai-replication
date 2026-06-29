import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if the dates are equal", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1987, 1, 11);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("should return false if the dates are not equal", () => {
    const date1 = new Date(1987, 1, 11);
    const date2 = new Date(1989, 6, 10);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if the dates have different times", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });
});
