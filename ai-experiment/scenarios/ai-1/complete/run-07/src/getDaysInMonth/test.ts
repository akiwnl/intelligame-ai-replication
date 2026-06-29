import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const date = new Date(2000, 1); // February 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a common year", () => {
    const date = new Date(2023, 1); // February 2023 (common year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("returns 31 for months with 31 days (e.g., January)", () => {
    const date = new Date(2024, 0); // January 2024
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns 30 for months with 30 days (e.g., April)", () => {
    const date = new Date(2024, 3); // April 2024
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("handles other 31-day months (March, May, July, August, October, December)", () => {
    expect(getDaysInMonth(new Date(2024, 2))).toBe(31); // March
    expect(getDaysInMonth(new Date(2024, 4))).toBe(31); // May
    expect(getDaysInMonth(new Date(2024, 6))).toBe(31); // July
    expect(getDaysInMonth(new Date(2024, 7))).toBe(31); // August
    expect(getDaysInMonth(new Date(2024, 9))).toBe(31); // October
    expect(getDaysInMonth(new Date(2024, 11))).toBe(31); // December
  });

  it("handles other 30-day months (June, September, November)", () => {
    expect(getDaysInMonth(new Date(2024, 5))).toBe(30); // June
    expect(getDaysInMonth(new Date(2024, 8))).toBe(30); // September
    expect(getDaysInMonth(new Date(2024, 10))).toBe(30); // November
  });

  it("handles February in a century year divisible by 400 (leap year)", () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("handles February in a century year not divisible by 400 (common year)", () => {
    const date = new Date(1900, 1); // February 1900
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("accepts a timestamp as the first argument", () => {
    const date = new Date(2024, 1, 15).getTime(); // February 15, 2024 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("accepts a date string as the first argument", () => {
    const date = "2023-01-20T00:00:00.000Z";
    const result = getDaysInMonth(date);
    expect(result).toBe(31); // January 2023 has 31 days
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the date string is invalid", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
