import { getDate } from "./index";

describe("getDate", () => {
  // Test case 1: Regular day of the month
  it("should return the correct day of the month for a regular date", () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024
    const result = getDate(date);
    expect(result).toBe(15);
  });

  // Test case 2: First day of the month
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    const result = getDate(date);
    expect(result).toBe(1);
  });

  // Test case 3: Last day of a 31-day month
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2024, 0, 31); // Jan 31, 2024
    const result = getDate(date);
    expect(result).toBe(31);
  });

  // Test case 4: Last day of a 30-day month
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2024, 3, 30); // Apr 30, 2024
    const result = getDate(date);
    expect(result).toBe(30);
  });

  // Test case 5: Last day of February in a common year
  it("should return 28 for the last day of February in a common year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  // Test case 6: Last day of February in a leap year
  it("should return 29 for the last day of February in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024
    const result = getDate(date);
    expect(result).toBe(29);
  });

  // Test case 7: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const result = getDate(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Test case 8: Input as timestamp
  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 20).getTime();
    const result = getDate(timestamp);
    expect(result).toBe(20);
  });

  // Test case 9: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-25T00:00:00.000Z";
    const result = getDate(dateString);
    expect(result).toBe(25); // Note: getDate gets local day, so '25' if timezone offset doesn't cross day boundary
    // For robustness, let's test a date string that might cause issues with local timezone
    const utcDateString = '2024-01-01T00:00:00.000Z'; // UTC midnight
    const localDateFromUtc = new Date(utcDateString);
    expect(getDate(utcDateString)).toBe(localDateFromUtc.getDate());
  });

  // Test case 10: Date with specific time
  it("should return the correct day of the month regardless of time", () => {
    const date = new Date(2024, 0, 15, 10, 30, 45, 123); // Jan 15, 2024 10:30:45.123
    const result = getDate(date);
    expect(result).toBe(15);
  });
});
