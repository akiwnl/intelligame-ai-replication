import { isAfter } from "./index";

describe("isAfter", () => {
  // Test case 1: First date is strictly after the second
  it("should return true if the first date is strictly after the second", () => {
    const date1 = new Date(2024, 0, 15);
    const date2 = new Date(2024, 0, 10);
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 2: First date is strictly before the second
  it("should return false if the first date is strictly before the second", () => {
    const date1 = new Date(2024, 0, 10);
    const date2 = new Date(2024, 0, 15);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are equal
  it("should return false if the dates are equal", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 0);
    const date2 = new Date(2024, 0, 10, 10, 30, 0);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 4: Dates differ by milliseconds
  it("should return true if the first date is after by milliseconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 0, 500);
    const date2 = new Date(2024, 0, 10, 10, 30, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 5: Dates differ by milliseconds, first is before
  it("should return false if the first date is before by milliseconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 0, 0);
    const date2 = new Date(2024, 0, 10, 10, 30, 0, 500);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 6: Example from JSDoc
  it("should return true for the example case", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 7: First date is invalid
  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const validDate = new Date(2024, 0, 10);
    expect(isAfter(invalidDate, validDate)).toBe(false);
  });

  // Test case 8: Second date is invalid
  it("should return false if the second date is invalid", () => {
    const validDate = new Date(2024, 0, 10);
    const invalidDate = new Date("invalid date");
    expect(isAfter(validDate, invalidDate)).toBe(false);
  });

  // Test case 9: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("invalid date 1");
    const invalidDate2 = new Date("invalid date 2");
    expect(isAfter(invalidDate1, invalidDate2)).toBe(false);
  });

  // Test case 10: Input as timestamp
  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2024, 0, 15).getTime();
    const timestamp2 = new Date(2024, 0, 10).getTime();
    expect(isAfter(timestamp1, timestamp2)).toBe(true);
  });

  // Test case 11: Input as date string
  it("should work with date strings as input", () => {
    const dateString1 = "2024-01-15T12:00:00.000Z";
    const dateString2 = "2024-01-10T12:00:00.000Z";
    expect(isAfter(dateString1, dateString2)).toBe(true);
  });

  // Test case 12: Timezone independence - ensure comparison is based on UTC time values
  it("should be timezone independent", () => {
    // Create dates that are different in local time but the same in UTC (or vice-versa)
    // E.g., Jan 1, 2024 00:00:00 UTC vs Dec 31, 2023 19:00:00 EST (same UTC instant)
    const dateUTC = new Date("2024-01-01T00:00:00.000Z"); // UTC
    const dateLocalPrior = new Date(dateUTC.getTime() - 1); // 1ms before UTC
    const dateLocalAfter = new Date(dateUTC.getTime() + 1); // 1ms after UTC

    expect(isAfter(dateUTC, dateLocalPrior)).toBe(true);
    expect(isAfter(dateLocalAfter, dateUTC)).toBe(true);
    expect(isAfter(dateLocalPrior, dateUTC)).toBe(false);
    expect(isAfter(dateUTC, dateLocalAfter)).toBe(false);
  });
});
