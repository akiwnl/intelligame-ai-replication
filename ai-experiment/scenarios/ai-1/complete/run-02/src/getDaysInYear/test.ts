import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year (JSDoc example)", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // 2012 is a leap year
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // 2000 is a leap year (divisible by 400)
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366); // 2024 is a leap year
  });

  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // 2014 is a common year
    expect(getDaysInYear(new Date(2001, 0, 1))).toBe(365); // 2001 is a common year
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365); // 2023 is a common year
  });

  it("returns 365 for a century year not divisible by 400 (common year)", () => {
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365); // 1900 is a common year
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365); // 2100 is a common year
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("accepts a timestamp as date argument", () => {
    const date = new Date(2024, 5, 15, 11, 30, 0); // 2024 is a leap year
    const timestamp = date.getTime();
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("accepts a date string as date argument", () => {
    const dateString = "2023-07-20T10:00:00.000Z"; // 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });
});
