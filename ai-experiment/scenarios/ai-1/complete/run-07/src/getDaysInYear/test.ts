import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    const date = new Date(2012, 0, 1); // 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a common year", () => {
    const date = new Date(2023, 0, 1); // 2023 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("returns 366 for a century year divisible by 400 (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a century year not divisible by 400 (e.g., 1900)", () => {
    const date = new Date(1900, 0, 1); // 1900 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("returns 366 for the next leap year (e.g., 2024)", () => {
    const date = new Date(2024, 0, 1); // 2024 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("accepts a timestamp as the first argument", () => {
    const date = new Date(2024, 6, 15).getTime(); // July 15, 2024 (leap year)
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("accepts a date string as the first argument", () => {
    const date = "2023-07-20T00:00:00.000Z";
    const result = getDaysInYear(date);
    expect(result).toBe(365); // 2023 is a common year
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the date string is invalid", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
