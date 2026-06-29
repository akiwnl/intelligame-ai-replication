import { getDaysInYear } from "./index";

describe('getDaysInYear', () => {
  // Test case 1: Leap year (example from JSDoc)
  it('should return 366 for a leap year (e.g., 2012)', () => {
    const date = new Date(2012, 0, 1); // Jan 1, 2012
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 2: Common year
  it('should return 365 for a common year (e.g., 2013)', () => {
    const date = new Date(2013, 0, 1); // Jan 1, 2013
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 3: Year divisible by 100 but not 400 (common year)
  it('should return 365 for the year 1900 (common year)', () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 4: Year divisible by 400 (leap year)
  it('should return 366 for the year 2000 (leap year)', () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 5: Year divisible by 4 but not 100 (leap year)
  it('should return 366 for the year 2024 (leap year)', () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 6: Year divisible by 100 but not 400 (common year) - future
  it('should return 365 for the year 2100 (common year)', () => {
    const date = new Date(2100, 0, 1); // Jan 1, 2100
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 7: Date with time components
  it('should ignore time components and return days in year', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45, 123); // Jan 15, 2023
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 8: Invalid date object input
  it('should return NaN for an invalid date object', () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Invalid date string input
  it('should return NaN for an invalid date string', () => {
    const result = getDaysInYear('invalid date string');
    expect(isNaN(result)).toBe(true);
  });

  // Test case 10: Timestamp input
  it('should handle timestamp input correctly', () => {
    const date = new Date(2024, 6, 17, 12, 0, 0, 0); // Jul 17, 2024 (leap year)
    const timestamp = date.getTime();
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  // Test case 11: String input (ISO 8601 local)
  it('should handle string input (e.g., ISO 8601 local)', () => {
    const dateString = '2023-07-25T10:00:00'; // Jul 25, 2023 local
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  // Test case 12: String input (ISO 8601 UTC)
  it('should handle UTC string input and return days based on its local year', () => {
    const utcDateString = '2024-01-01T10:00:00.000Z'; // Jan 1, 2024 10:00:00 UTC (leap year)
    const date = new Date(utcDateString); // Date object represents this UTC instant
    const result = getDaysInYear(utcDateString);
    
    // The `getDaysInYear` function uses `getFullYear()` on the Date object
    // which returns the local year.
    const year = date.getFullYear();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    expect(result).toBe(isLeapYear ? 366 : 365);
  });
});
