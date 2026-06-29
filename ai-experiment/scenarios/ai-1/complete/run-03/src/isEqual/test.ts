import { isEqual } from "./index";

describe("isEqual", () => {
  // Test Case 1: Example from JSDoc - dates are not equal due to milliseconds
  it("should return false for dates differing only by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 2: Dates are exactly equal
  it("should return true for two identical dates", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 45, 123);
    const date2 = new Date(2023, 10, 15, 10, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test Case 3: Dates are not equal (different day)
  it("should return false for dates on different days", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2023, 10, 16);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 4: Dates are not equal (different month)
  it("should return false for dates in different months", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2023, 9, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 5: Dates are not equal (different year)
  it("should return false for dates in different years", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2022, 10, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 6: First date is invalid
  it("should return false if the first date is invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date(2023, 10, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 7: Second date is invalid
  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date("invalid date");
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 8: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const date1 = new Date("invalid date 1");
    const date2 = new Date("invalid date 2");
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test Case 9: Input as timestamps (equal)
  it("should correctly compare timestamps when equal", () => {
    const timestamp = new Date(2024, 0, 1, 10, 0, 0, 0).getTime();
    expect(isEqual(timestamp, timestamp)).toBe(true);
  });

  // Test Case 10: Input as timestamps (not equal)
  it("should correctly compare timestamps when not equal", () => {
    const timestamp1 = new Date(2024, 0, 1).getTime();
    const timestamp2 = new Date(2024, 0, 2).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(false);
  });

  // Test Case 11: Input as strings (equal)
  it("should correctly compare strings when equal", () => {
    const dateString = "2024-03-10T12:00:00.000Z";
    expect(isEqual(dateString, dateString)).toBe(true);
  });

  // Test Case 12: Input as strings (not equal)
  it("should correctly compare strings when not equal", () => {
    const dateString1 = "2024-03-10T12:00:00.000Z";
    const dateString2 = "2024-03-10T12:00:00.001Z";
    expect(isEqual(dateString1, dateString2)).toBe(false);
  });

  // Test Case 13: Mixed input types (Date vs Timestamp - equal)
  it("should correctly compare mixed input types (Date vs Timestamp) when equal", () => {
    const date = new Date(2024, 4, 15, 11, 22, 33, 44);
    const timestamp = date.getTime();
    expect(isEqual(date, timestamp)).toBe(true);
  });

  // Test Case 14: Mixed input types (Date vs Timestamp - not equal)
  it("should correctly compare mixed input types (Date vs Timestamp) when not equal", () => {
    const date = new Date(2024, 4, 15);
    const timestamp = new Date(2024, 4, 16).getTime();
    expect(isEqual(date, timestamp)).toBe(false);
  });

  // Test Case 15: Different Date objects but same time value
  it("should return true for different Date objects with the same time value", () => {
    const date1 = new Date(2023, 5, 10, 10, 0, 0);
    const date2 = new Date(2023, 5, 10, 10, 0, 0);
    expect(date1).not.toBe(date2); // Ensure they are different objects
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test Case 16: Dates with different time zones that represent the same UTC instant
  // Note: `toDate` creates dates in local time. `getTime()` returns UTC milliseconds.
  // So, this should work as long as the UTC timestamps are the same.
  it("should return true for dates from different timezones representing the same UTC instant", () => {
    // These two dates represent the same UTC point in time, just interpreted differently locally.
    const date1 = new Date("2024-01-01T00:00:00.000Z"); // UTC midnight
    const date2 = new Date("2023-12-31T19:00:00.000-05:00"); // 5 hours behind UTC, same instant
    expect(isEqual(date1, date2)).toBe(true);
  });
});
