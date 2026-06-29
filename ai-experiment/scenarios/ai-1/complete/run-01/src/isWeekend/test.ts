import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test case from JSDoc example
  test("should return true for 5 October 2014 (Sunday)", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Test for Sunday
  test("should return true for a Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Test for Saturday
  test("should return true for a Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  // Test for Monday (weekday)
  test("should return false for a Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  // Test for Tuesday (weekday)
  test("should return false for a Tuesday", () => {
    const date = new Date(2023, 0, 3); // Jan 3, 2023 was a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test for Wednesday (weekday)
  test("should return false for a Wednesday", () => {
    const date = new Date(2023, 0, 4); // Jan 4, 2023 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test for Thursday (weekday)
  test("should return false for a Thursday", () => {
    const date = new Date(2023, 0, 5); // Jan 5, 2023 was a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  // Test for Friday (weekday)
  test("should return false for a Friday", () => {
    const date = new Date(2023, 0, 6); // Jan 6, 2023 was a Friday
    expect(isWeekend(date)).toBe(false);
  });

  // Test with different time components (should not affect result)
  test("should return the correct result regardless of time components on a weekend", () => {
    const date = new Date(2023, 0, 1, 23, 59, 59, 999); // Jan 1, 2023 (Sunday)
    expect(isWeekend(date)).toBe(true);
  });

  test("should return the correct result regardless of time components on a weekday", () => {
    const date = new Date(2023, 0, 2, 0, 0, 0, 0); // Jan 2, 2023 (Monday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 20); // May 20, 2023 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2023, 4, 21, 10, 0, 0).getTime(); // May 21, 2023 was a Sunday
    expect(isWeekend(timestamp)).toBe(true);
  });

  test("should work with a date string (ISO 8601)", () => {
    const dateString = "2023-05-22T10:00:00Z"; // May 22, 2023 was a Monday
    expect(isWeekend(dateString)).toBe(false);
  });

  test("should work with a date string (common format)", () => {
    const dateString = "05/27/2023"; // May 27, 2023 was a Saturday
    expect(isWeekend(dateString)).toBe(true);
  });

  // Test with invalid date input
  test("should return false when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isWeekend(invalidDate)).toBe(false);
  });

  test("should return false when the input timestamp is NaN", () => {
    expect(isWeekend(NaN)).toBe(false);
  });

  test("should return false when the input string is invalid", () => {
    expect(isWeekend("invalid date string")).toBe(false);
  });
});
