import { isEqual } from "./index";

describe("isEqual", () => {
  // Test case from JSDoc example
  test("should return false when dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates are exactly equal
  test("should return true when dates are exactly equal", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0, 123);
    const date2 = new Date(2023, 4, 15, 10, 30, 0, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test when dates differ by seconds
  test("should return false when dates differ by seconds", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0);
    const date2 = new Date(2023, 4, 15, 10, 30, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates differ by minutes
  test("should return false when dates differ by minutes", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0);
    const date2 = new Date(2023, 4, 15, 10, 31, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates differ by hours
  test("should return false when dates differ by hours", () => {
    const date1 = new Date(2023, 4, 15, 10, 0, 0);
    const date2 = new Date(2023, 4, 15, 11, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates differ by day
  test("should return false when dates differ by day", () => {
    const date1 = new Date(2023, 4, 15);
    const date2 = new Date(2023, 4, 16);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates differ by month
  test("should return false when dates differ by month", () => {
    const date1 = new Date(2023, 4, 15);
    const date2 = new Date(2023, 5, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test when dates differ by year
  test("should return false when dates differ by year", () => {
    const date1 = new Date(2023, 4, 15);
    const date2 = new Date(2024, 4, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test with different input types
  test("should work with Date objects", () => {
    const date1 = new Date(2023, 4, 15);
    const date2 = new Date(2023, 4, 15);
    expect(isEqual(date1, date2)).toBe(true);
  });

  test("should work with timestamps", () => {
    const timestamp1 = new Date(2023, 4, 15, 10, 0, 0).getTime();
    const timestamp2 = new Date(2023, 4, 15, 10, 0, 0).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
  });

  test("should work with date strings (ISO 8601)", () => {
    const dateString1 = "2023-05-15T10:00:00.000Z";
    const dateString2 = "2023-05-15T10:00:00.000Z";
    expect(isEqual(dateString1, dateString2)).toBe(true);
  });

  test("should work with mixed input types", () => {
    const date = new Date(2023, 4, 15, 10, 0, 0, 0);
    const timestamp = new Date(2023, 4, 15, 10, 0, 0, 0).getTime();
    const dateString = "2023-05-15T10:00:00.000"; // Local time string

    expect(isEqual(date, timestamp)).toBe(true);
    // Note: Comparing local date object with a string that might be parsed as local time
    // `toDate` uses `new Date(string)` which can be locale dependent for some strings.
    // For robust tests, use ISO strings or explicit UTC.
    const dateLocal = new Date(2023, 4, 15, 10, 0, 0, 0);
    const dateStringLocal = "2023-05-15T10:00:00.000";
    expect(isEqual(dateLocal, dateStringLocal)).toBe(true);
  });

  // Test with invalid dates
  test("should return false if the left date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 4, 15);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  test("should return false if the right date is invalid", () => {
    const validDate = new Date(2023, 4, 15);
    const invalidDate = new Date("not a date");
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  test("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  test("should return false if dateLeft is NaN timestamp", () => {
    const validDate = new Date(2023, 4, 15);
    expect(isEqual(NaN, validDate)).toBe(false);
  });

  test("should return false if dateRight is NaN timestamp", () => {
    const validDate = new Date(2023, 4, 15);
    expect(isEqual(validDate, NaN)).toBe(false);
  });
});
