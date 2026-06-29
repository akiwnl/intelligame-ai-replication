import { getDate } from "./index";

describe("getDate", () => {
  // Test Case 1: Example from JSDoc
  it("should return the day of the month for 29 February 2012", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    expect(getDate(date)).toBe(29);
  });

  // Test Case 2: Regular date in the middle of the month
  it("should return the correct day for a regular date", () => {
    const date = new Date(2023, 9, 15); // Oct 15, 2023
    expect(getDate(date)).toBe(15);
  });

  // Test Case 3: First day of the month
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 5, 1); // Jun 1, 2023
    expect(getDate(date)).toBe(1);
  });

  // Test Case 4: Last day of a 31-day month
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // Jan 31, 2023
    expect(getDate(date)).toBe(31);
  });

  // Test Case 5: Last day of a 30-day month
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // Apr 30, 2023
    expect(getDate(date)).toBe(30);
  });

  // Test Case 6: Last day of February in a common year
  it("should return 28 for the last day of February in a common year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023
    expect(getDate(date)).toBe(28);
  });

  // Test Case 7: Last day of February in a leap year
  it("should return 29 for the last day of February in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024
    expect(getDate(date)).toBe(29);
  });

  // Test Case 8: Date with time component
  it("should ignore the time component and return only the day of the month", () => {
    const date = new Date(2023, 10, 20, 14, 30, 45, 123); // Nov 20, 2023 14:30:45.123
    expect(getDate(date)).toBe(20);
  });

  // Test Case 9: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDate(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test Case 10: Input as timestamp
  it("should return the correct day when date is provided as a timestamp", () => {
    const timestamp = new Date(2020, 0, 15).getTime(); // Jan 15, 2020
    expect(getDate(timestamp)).toBe(15);
  });

  // Test Case 11: Input as string
  it("should return the correct day when date is provided as a string", () => {
    const dateString = "2020-02-10T00:00:00.000Z"; // Feb 10, 2020 UTC
    const result = getDate(dateString);
    // Note: toDate converts to local time, so the day should be correct
    expect(result).toBe(10);
  });

  // Test Case 12: Edge case - very early date
  it("should handle very early dates", () => {
    const date = new Date(0, 0, 1); // Year 0, Jan 1
    expect(getDate(date)).toBe(1);
  });

  // Test Case 13: Edge case - very late date
  it("should handle very late dates", () => {
    const date = new Date(9999, 11, 31); // Year 9999, Dec 31
    expect(getDate(date)).toBe(31);
  });
});
