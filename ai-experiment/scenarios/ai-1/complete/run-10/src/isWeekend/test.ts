import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test case 1: Sunday (0) - weekend
  it("should return true for a Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7, 2024 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 2: Saturday (6) - weekend
  it("should return true for a Saturday", () => {
    const date = new Date(2024, 0, 6); // Jan 6, 2024 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 3: Monday (1) - not weekend
  it("should return false for a Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8, 2024 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 4: Tuesday (2) - not weekend
  it("should return false for a Tuesday", () => {
    const date = new Date(2024, 0, 9); // Jan 9, 2024 was a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 5: Wednesday (3) - not weekend
  it("should return false for a Wednesday", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 6: Thursday (4) - not weekend
  it("should return false for a Thursday", () => {
    const date = new Date(2024, 0, 11); // Jan 11, 2024 was a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 7: Friday (5) - not weekend
  it("should return false for a Friday", () => {
    const date = new Date(2024, 0, 12); // Jan 12, 2024 was a Friday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 8: Invalid date input
  it("should return false for an invalid date", () => {
    expect(isWeekend(new Date("invalid date"))).toBe(false);
  });

  // Test case 9: Input as timestamp (Saturday)
  it("should work with a timestamp for a Saturday", () => {
    const date = new Date(2024, 0, 6).getTime(); // Jan 6, 2024 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 10: Input as timestamp (Tuesday)
  it("should work with a timestamp for a Tuesday", () => {
    const date = new Date(2024, 0, 9).getTime(); // Jan 9, 2024 was a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 11: Input as date string (Sunday)
  it("should work with a date string for a Sunday", () => {
    const dateString = "2024-01-07"; // Jan 7, 2024 was a Sunday
    expect(isWeekend(dateString)).toBe(true);
  });

  // Test case 12: Input as date string (Thursday)
  it("should work with a date string for a Thursday", () => {
    const dateString = "2024-01-04"; // Jan 4, 2024 was a Thursday
    expect(isWeekend(dateString)).toBe(false);
  });

  // Test case 13: JSDoc example
  it("should match the JSDoc example", () => {
    const result = isWeekend(new Date(2014, 9, 5)); // Oct 5, 2014 was a Sunday
    expect(result).toBe(true);
  });

  // Test case 14: Boundary of month (end of month, weekday)
  it("should correctly identify weekend status at month end (weekday)", () => {
    const date = new Date(2024, 0, 31); // Jan 31, 2024 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 15: Boundary of month (end of month, weekend)
  it("should correctly identify weekend status at month end (weekend)", () => {
    const date = new Date(2024, 2, 30); // Mar 30, 2024 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });
});
