import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if the dates are equal", () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateToCompare = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date, dateToCompare)).toBe(true);
  });

  it("should return false if the dates are not equal", () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateToCompare = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date, dateToCompare)).toBe(false);
  });
});
