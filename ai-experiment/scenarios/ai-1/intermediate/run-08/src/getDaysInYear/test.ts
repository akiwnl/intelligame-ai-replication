import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    const date = new Date(2012, 0, 1); // 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a common year", () => {
    const date = new Date(2014, 0, 1); // 2014 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("returns 366 for a century leap year (divisible by 400)", () => {
    const date = new Date(2000, 0, 1); // 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a century common year (divisible by 100 but not 400)", () => {
    const date = new Date(1900, 0, 1); // 1900 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("works with dates later in the year", () => {
    const date = new Date(2024, 11, 31); // 2024 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("accepts a timestamp as the date argument", () => {
    const date = new Date(2023, 5, 15, 12, 0, 0); // 2023 is a common year
    const result = getDaysInYear(date.getTime());
    expect(result).toBe(365);
  });

  it("accepts a date string as the date argument", () => {
    const result = getDaysInYear("2028-07-01T00:00:00.000Z"); // 2028 is a leap year
    expect(result).toBe(366);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input date string is invalid", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
