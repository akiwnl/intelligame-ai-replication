import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should get the number of days in a year of the given date", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should handle non-date inputs", () => {
    const date = "2012-01-01";
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should handle non-leap years", () => {
    const date = new Date(2013, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });
});
