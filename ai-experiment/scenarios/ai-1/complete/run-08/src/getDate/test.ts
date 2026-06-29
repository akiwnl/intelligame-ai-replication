import { getDate } from "./index";

describe('getDate', () => {
  // Test case 1: Basic functionality - middle of the month
  it('should return the day of the month for a given date', () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  // Test case 2: First day of the month
  it('should return 1 for the first day of the month', () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  // Test case 3: Last day of a 31-day month
  it('should return 31 for the last day of a 31-day month', () => {
    const date = new Date(2023, 10, 31); // Oct 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  // Test case 4: Last day of a 30-day month
  it('should return 30 for the last day of a 30-day month', () => {
    const date = new Date(2023, 8, 30); // Sep 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  // Test case 5: Last day of February in a common year
  it('should return 28 for Feb 28 in a common year', () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  // Test case 6: Last day of February in a leap year
  it('should return 29 for Feb 29 in a leap year', () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024
    const result = getDate(date);
    expect(result).toBe(29);
  });

  // Test case 7: Date with time components
  it('should ignore time components and return the day of the month', () => {
    const date = new Date(2023, 4, 15, 10, 30, 45, 123); // May 15, 2023 10:30:45.123
    const result = getDate(date);
    expect(result).toBe(15);
  });

  // Test case 8: Invalid date object input
  it('should return NaN for an invalid date object', () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Invalid date string input
  it('should return NaN for an invalid date string', () => {
    const result = getDate('invalid date string');
    expect(isNaN(result)).toBe(true);
  });

  // Test case 10: Timestamp input
  it('should handle timestamp input correctly', () => {
    const date = new Date(2023, 6, 17, 12, 0, 0, 0); // Jul 17, 2023
    const timestamp = date.getTime();
    const result = getDate(timestamp);
    expect(result).toBe(17);
  });

  // Test case 11: String input (ISO 8601 local)
  it('should handle string input (e.g., ISO 8601 local)', () => {
    const dateString = '2023-07-25T10:00:00'; // Jul 25, 2023 local
    const result = getDate(dateString);
    expect(result).toBe(25);
  });

  // Test case 12: String input (ISO 8601 UTC)
  it('should handle UTC string input and return the local day of month', () => {
    const utcDateString = '2023-07-25T10:00:00.000Z'; // Jul 25, 2023 10:00:00 UTC
    const date = new Date(utcDateString); // Date object represents this UTC instant
    const result = getDate(utcDateString);
    expect(result).toBe(date.getDate()); // getDate returns the local day of the month
  });
});
