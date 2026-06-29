import { isAfter } from "./index";

describe("isAfter", () => {
  // Test case from JSDoc example
  test("should return true when the first date is after the second", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test when the first date is before the second
  test("should return false when the first date is before the second", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test when dates are equal (same moment in time)
  test("should return false when dates are equal", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0, 500);
    const date2 = new Date(2023, 4, 15, 10, 30, 0, 500);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test when dates are equal but different milliseconds
  test("should return true when first date is after second by milliseconds", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0, 501);
    const date2 = new Date(2023, 4, 15, 10, 30, 0, 500);
    expect(isAfter(date1, date2)).toBe(true);
  });

  test("should return false when first date is before second by milliseconds", () => {
    const date1 = new Date(2023, 4, 15, 10, 30, 0, 499);
    const date2 = new Date(2023, 4, 15, 10, 30, 0, 500);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test with different input types
  test("should work with Date objects", () => {
    const date1 = new Date(2023, 4, 15);
    const date2 = new Date(2023, 4, 14);
    expect(isAfter(date1, date2)).toBe(true);
  });

  test("should work with timestamps", () => {
    const timestamp1 = new Date(2023, 4, 15).getTime();
    const timestamp2 = new Date(2023, 4, 16).getTime();
    expect(isAfter(timestamp1, timestamp2)).toBe(false);
  });

  test("should work with date strings", () => {
    const dateString1 = "2023-05-15T12:00:00Z";
    const dateString2 = "2023-05-14T12:00:00Z";
    expect(isAfter(dateString1, dateString2)).toBe(true);
  });

  test("should work with mixed input types", () => {
    const date = new Date(2023, 4, 15);
    const timestamp = new Date(2023, 4, 14).getTime();
    const dateString = "2023-05-16T12:00:00Z";

    expect(isAfter(date, timestamp)).toBe(true);
    expect(isAfter(dateString, date)).toBe(true);
    expect(isAfter(timestamp, dateString)).toBe(false);
  });

  // Test with invalid dates
  test("should return false if the first date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 4, 15);
    expect(isAfter(invalidDate, validDate)).toBe(false);
  });

  test("should return false if the second date is invalid", () => {
    const validDate = new Date(2023, 4, 15);
    const invalidDate = new Date("not a date");
    expect(isAfter(validDate, invalidDate)).toBe(false);
  });

  test("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isAfter(invalidDate1, invalidDate2)).toBe(false);
  });

  test("should return false if date is NaN timestamp", () => {
    const validDate = new Date(2023, 4, 15);
    expect(isAfter(NaN, validDate)).toBe(false);
  });

  test("should return false if dateToCompare is NaN timestamp", () => {
    const validDate = new Date(2023, 4, 15);
    expect(isAfter(validDate, NaN)).toBe(false);
  });
});
