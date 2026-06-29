import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (divisible by 4, not by 100)", () => {
    const date = new Date(2012, 0, 1); // 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 366 for a leap year (divisible by 400)", () => {
    const date = new Date(2000, 0, 1); // 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year", () => {
    const date = new Date(2014, 0, 1); // 2014 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 365 for a century year not divisible by 400", () => {
    const date = new Date(1900, 0, 1); // 1900 is not a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // 2024 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-07-15T10:00:00Z"; // 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });
});
