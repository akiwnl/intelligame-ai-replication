import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test Case 1: Example from JSDoc - Sunday
  it("should return true for 5 October 2014 (Sunday)", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Test Case 2: Saturday
  it("should return true for a Saturday", () => {
    const date = new Date(2023, 9, 7); // Oct 7, 2023 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  // Test Case 3: Monday
  it("should return false for a Monday", () => {
    const date = new Date(2023, 9, 2); // Oct 2, 2023 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 4: Tuesday
  it("should return false for a Tuesday", () => {
    const date = new Date(2023, 9, 3); // Oct 3, 2023 was a Tuesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 5: Wednesday
  it("should return false for a Wednesday", () => {
    const date = new Date(2023, 9, 4); // Oct 4, 2023 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 6: Thursday
  it("should return false for a Thursday", () => {
    const date = new Date(2023, 9, 5); // Oct 5, 2023 was a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 7: Friday
  it("should return false for a Friday", () => {
    const date = new Date(2023, 9, 6); // Oct 6, 2023 was a Friday
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 8: Invalid date input
  it("should return false for an invalid date", () => {
    const invalidDate = new Date("invalid date");
    expect(isWeekend(invalidDate)).toBe(false);
  });

  // Test Case 9: Input as timestamp (weekend)
  it("should return true when timestamp falls on a weekend", () => {
    const saturdayTimestamp = new Date(2024, 0, 6).getTime(); // Jan 6, 2024 was a Saturday
    expect(isWeekend(saturdayTimestamp)).toBe(true);
  });

  // Test Case 10: Input as timestamp (weekday)
  it("should return false when timestamp falls on a weekday", () => {
    const mondayTimestamp = new Date(2024, 0, 8).getTime(); // Jan 8, 2024 was a Monday
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  // Test Case 11: Input as string (weekend)
  it("should return true when date string falls on a weekend", () => {
    const sundayDateString = "2024-01-07T12:00:00.000Z"; // Jan 7, 2024 UTC was a Sunday
    expect(isWeekend(sundayDateString)).toBe(true);
  });

  // Test Case 12: Input as string (weekday)
  it("should return false when date string falls on a weekday", () => {
    const tuesdayDateString = "2024-01-09T12:00:00.000Z"; // Jan 9, 2024 UTC was a Tuesday
    expect(isWeekend(tuesdayDateString)).toBe(false);
  });

  // Test Case 13: Date with time component
  it("should ignore the time component and correctly identify weekend", () => {
    const saturdayWithTime = new Date(2023, 10, 18, 14, 30, 45, 123); // Nov 18, 2023 14:30:45.123 (Saturday)
    expect(isWeekend(saturdayWithTime)).toBe(true);
  });

  // Test Case 14: Boundary - first day of year (weekday)
  it("should correctly identify Jan 1, 2024 (Monday) as not a weekend", () => {
    const date = new Date(2024, 0, 1);
    expect(isWeekend(date)).toBe(false);
  });

  // Test Case 15: Boundary - last day of year (weekend)
  it("should correctly identify Dec 31, 2023 (Sunday) as a weekend", () => {
    const date = new Date(2023, 11, 31);
    expect(isWeekend(date)).toBe(true);
  });
});
