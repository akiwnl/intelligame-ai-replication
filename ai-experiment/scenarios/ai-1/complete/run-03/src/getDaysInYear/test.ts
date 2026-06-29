import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test Case 1: Example from JSDoc - Leap year
  it("should return 366 for a leap year (2012)", () => {
    const date = new Date(2012, 0, 1); // Jan 1, 2012
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test Case 2: Common year
  it("should return 365 for a common year (2023)", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test Case 3: Another leap year
  it("should return 366 for another leap year (2020)", () => {
    const date = new Date(2020, 5, 15); // Jun 15, 2020
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test Case 4: Another common year
  it("should return 365 for another common year (2021)", () => {
    const date = new Date(2021, 11, 31); // Dec 31, 2021
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test Case 5: Year divisible by 100 but not by 400 (not a leap year)
  it("should return 365 for the year 1900", () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test Case 6: Year divisible by 400 (is a leap year)
  it("should return 366 for the year 2000", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test Case 7: Year 2100 (not a leap year)
  it("should return 365 for the year 2100", () => {
    const date = new Date(2100, 0, 1); // Jan 1, 2100
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test Case 8: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDaysInYear(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test Case 9: Input as timestamp
  it("should return the correct number of days when date is provided as a timestamp", () => {
    const timestamp = new Date(2024, 5, 1).getTime(); // Jun 1, 2024 (leap year)
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  // Test Case 10: Input as string
  it("should return the correct number of days when date is provided as a string", () => {
    const dateString = "2023-07-10T00:00:00.000Z"; // Jul 10, 2023 UTC
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  // Test Case 11: Date with time component
  it("should ignore the time component and return only the days in the year", () => {
    const date = new Date(2023, 10, 15, 14, 30, 45, 123); // Nov 15, 2023 14:30:45.123
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test Case 12: Year 4 (first leap year in common calendar)
  it("should return 366 for the year 4", () => {
    const date = new Date(4, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test Case 13: Year 1 (common year)
  it("should return 365 for the year 1", () => {
    const date = new Date(1, 0, 1);
    expect(getDaysInYear(date)).toBe(365);
  });
});
