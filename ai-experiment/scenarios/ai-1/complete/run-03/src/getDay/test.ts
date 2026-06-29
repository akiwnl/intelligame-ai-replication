import { getDay } from "./index";

describe("getDay", () => {
  // Test Case 1: Example from JSDoc
  it("should return the day of the week for 29 February 2012 (Wednesday)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3); // 0 = Sunday, 1 = Monday, ..., 3 = Wednesday
  });

  // Test Case 2: Sunday
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // Oct 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  // Test Case 3: Monday
  it("should return 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // Oct 2, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Test Case 4: Tuesday
  it("should return 2 for Tuesday", () => {
    const date = new Date(2023, 9, 3); // Oct 3, 2023 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  // Test Case 5: Wednesday
  it("should return 3 for Wednesday", () => {
    const date = new Date(2023, 9, 4); // Oct 4, 2023 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  // Test Case 6: Thursday
  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 9, 5); // Oct 5, 2023 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  // Test Case 7: Friday
  it("should return 5 for Friday", () => {
    const date = new Date(2023, 9, 6); // Oct 6, 2023 was a Friday
    expect(getDay(date)).toBe(5);
  });

  // Test Case 8: Saturday
  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // Oct 7, 2023 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Test Case 9: Date with time component
  it("should ignore the time component and return only the day of the week", () => {
    const date = new Date(2023, 9, 15, 14, 30, 45, 123); // Oct 15, 2023 14:30:45.123 (Sunday)
    expect(getDay(date)).toBe(0);
  });

  // Test Case 10: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDay(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test Case 11: Input as timestamp
  it("should return the correct day when date is provided as a timestamp", () => {
    const timestamp = new Date(2020, 0, 1).getTime(); // Jan 1, 2020 was a Wednesday
    expect(getDay(timestamp)).toBe(3);
  });

  // Test Case 12: Input as string
  it("should return the correct day when date is provided as a string", () => {
    const dateString = "2020-01-02T00:00:00.000Z"; // Jan 2, 2020 UTC was a Thursday
    const result = getDay(dateString);
    // Note: toDate converts to local time, so the day should be correct for local timezone
    // In UTC, it's Thursday (4). In a timezone like GMT-3, it would still be Thursday.
    // Let's assume a test environment where local time matches UTC for this specific test,
    // or acknowledge that getDay is locale-dependent. For robustness, fix to UTC if possible,
    // but the spec implies local time, so we test for local interpretation.
    const localDate = new Date(dateString);
    expect(result).toBe(localDate.getDay());
  });

  // Test Case 13: Boundary - New Year's Day (weekday)
  it("should correctly identify New Year's Day 2024 (Monday)", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDay(date)).toBe(1);
  });

  // Test Case 14: Boundary - New Year's Eve (weekend)
  it("should correctly identify New Year's Eve 2023 (Sunday)", () => {
    const date = new Date(2023, 11, 31); // Dec 31, 2023
    expect(getDay(date)).toBe(0);
  });
});
