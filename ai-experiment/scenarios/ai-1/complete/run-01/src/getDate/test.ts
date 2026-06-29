import { getDate } from "./index";

describe("getDate", () => {
  // Test case from JSDoc example
  test("should return 29 for 29 February 2012", () => {
    const date = new Date(2012, 1, 29); // February is month 1 (0-indexed)
    expect(getDate(date)).toBe(29);
  });

  // Test for start of month
  test("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1
    expect(getDate(date)).toBe(1);
  });

  // Test for end of month (31 days)
  test("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // Jan 31
    expect(getDate(date)).toBe(31);
  });

  // Test for end of month (30 days)
  test("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // Apr 30
    expect(getDate(date)).toBe(30);
  });

  // Test for end of month (February, non-leap year)
  test("should return 28 for the last day of Feb in a non-leap year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023
    expect(getDate(date)).toBe(28);
  });

  // Test for end of month (February, leap year)
  test("should return 29 for the last day of Feb in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024
    expect(getDate(date)).toBe(29);
  });

  // Test with different time components
  test("should return the correct day regardless of time components", () => {
    const date = new Date(2023, 5, 15, 23, 59, 59, 999);
    expect(getDate(date)).toBe(15);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 15);
    expect(getDate(date)).toBe(15);
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2023, 4, 15, 10, 0, 0).getTime();
    expect(getDate(timestamp)).toBe(15);
  });

  test("should work with a date string (ISO 8601)", () => {
    const dateString = "2023-05-20T10:00:00Z";
    expect(getDate(dateString)).toBe(20);
  });

  test("should work with a date string (common format)", () => {
    const dateString = "05/25/2023";
    expect(getDate(dateString)).toBe(25);
  });

  // Test with invalid date input
  test("should return NaN when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(getDate(invalidDate)).toBeNaN();
  });

  test("should return NaN when the input timestamp is NaN", () => {
    expect(getDate(NaN)).toBeNaN();
  });

  test("should return NaN when the input string is invalid", () => {
    expect(getDate("invalid date string")).toBeNaN();
  });
});
