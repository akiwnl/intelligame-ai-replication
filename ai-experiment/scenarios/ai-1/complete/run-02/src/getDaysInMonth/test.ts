import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for months with 31 days", () => {
    // January, March, May, July, August, October, December
    expect(getDaysInMonth(new Date(2024, 0, 1))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2024, 2, 1))).toBe(31); // Mar
    expect(getDaysInMonth(new Date(2024, 4, 1))).toBe(31); // May
    expect(getDaysInMonth(new Date(2024, 6, 1))).toBe(31); // Jul
    expect(getDaysInMonth(new Date(2024, 7, 1))).toBe(31); // Aug
    expect(getDaysInMonth(new Date(2024, 9, 1))).toBe(31); // Oct
    expect(getDaysInMonth(new Date(2024, 11, 1))).toBe(31); // Dec
  });

  it("returns 30 for months with 30 days", () => {
    // April, June, September, November
    expect(getDaysInMonth(new Date(2024, 3, 1))).toBe(30); // Apr
    expect(getDaysInMonth(new Date(2024, 5, 1))).toBe(30); // Jun
    expect(getDaysInMonth(new Date(2024, 8, 1))).toBe(30); // Sep
    expect(getDaysInMonth(new Date(2024, 10, 1))).toBe(30); // Nov
  });

  it("returns 29 for February in a leap year (JSDoc example)", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29); // Feb 2000 (leap)
    expect(getDaysInMonth(new Date(2004, 1, 1))).toBe(29); // Feb 2004 (leap)
    expect(getDaysInMonth(new Date(2024, 1, 1))).toBe(29); // Feb 2024 (leap)
  });

  it("returns 28 for February in a common year", () => {
    expect(getDaysInMonth(new Date(2001, 1, 1))).toBe(28); // Feb 2001 (common)
    expect(getDaysInMonth(new Date(2023, 1, 1))).toBe(28); // Feb 2023 (common)
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("accepts a timestamp as date argument", () => {
    const date = new Date(2024, 1, 15, 11, 30, 0); // Feb 2024 (leap)
    const timestamp = date.getTime();
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("accepts a date string as date argument", () => {
    const dateString = "2023-02-10T10:00:00.000Z"; // Feb 2023 (common)
    const result = getDaysInMonth(dateString);
    expect(result).toBe(28);
  });
});
