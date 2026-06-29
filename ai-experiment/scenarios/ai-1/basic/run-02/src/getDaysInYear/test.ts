import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year", () => {
    const leapYearDate = new Date(2012, 0, 1); // 2012 is a leap year
    const result = getDaysInYear(leapYearDate);
    expect(result).toBe(366);
  });

  it("should return 366 for a century leap year (divisible by 400)", () => {
    const centuryLeapYearDate = new Date(2000, 0, 1); // 2000 is a leap year
    const result = getDaysInYear(centuryLeapYearDate);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year", () => {
    const commonYearDate = new Date(2014, 0, 1); // 2014 is a common year
    const result = getDaysInYear(commonYearDate);
    expect(result).toBe(365);
  });

  it("should return 365 for a century common year (divisible by 100 but not 400)", () => {
    const centuryCommonYearDate = new Date(1900, 0, 1); // 1900 is a common year
    const result = getDaysInYear(centuryCommonYearDate);
    expect(result).toBe(365);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 5, 15).getTime(); // 2024 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-01-01T00:00:00.000Z"; // 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  it("should handle invalid dates gracefully", () => {
    const invalidDate = new Date(NaN);
    const result = getDaysInYear(invalidDate);
    expect(isNaN(result)).toBe(true);
  });
});
