import { getDaysInMonth } from "./index";

describe('getDaysInMonth', () => {
  // Test case 1: February in a leap year (example from JSDoc)
  it('should return 29 for February in a leap year', () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  // Test case 2: February in a common year
  it('should return 28 for February in a common year', () => {
    const date = new Date(2023, 1); // February 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  // Test case 3: A month with 31 days (e.g., January)
  it('should return 31 for a month with 31 days (e.g., January)', () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  // Test case 4: A month with 30 days (e.g., April)
  it('should return 30 for a month with 30 days (e.g., April)', () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  // Test case 5: December (last month of the year)
  it('should return correct days for December', () => {
    const date = new Date(2023, 11); // December 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  // Test case 6: Date with time components
  it('should ignore time components and return days in month', () => {
    const date = new Date(2023, 0, 15, 10, 30, 45, 123); // Jan 15, 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  // Test case 7: Invalid date object input
  it('should return NaN for an invalid date object', () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 8: Invalid date string input
  it('should return NaN for an invalid date string', () => {
    const result = getDaysInMonth('invalid date string');
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Timestamp input
  it('should handle timestamp input correctly', () => {
    const date = new Date(2023, 3, 15); // April 15, 2023
    const timestamp = date.getTime();
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(30);
  });

  // Test case 10: String input (ISO 8601 local)
  it('should handle string input (e.g., ISO 8601 local)', () => {
    const dateString = '2023-04-15T10:00:00'; // April 15, 2023 local
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });

  // Test case 11: String input (ISO 8601 UTC)
  it('should handle UTC string input and return days based on its local month', () => {
    const utcDateString = '2023-02-01T10:00:00.000Z'; // Feb 1, 2023 10:00:00 UTC
    const date = new Date(utcDateString); // Date object represents this UTC instant
    const result = getDaysInMonth(utcDateString);
    
    // The `getDaysInMonth` function uses `getFullYear()` and `getMonth()` on the Date object
    // which return local components.
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0);
    expect(result).toBe(lastDayOfMonth.getDate());
  });

  // Boundary Value Analysis: Years around 1900, 2000, 2100 for leap year rules
  it('should correctly handle February 1900 (non-leap year)', () => {
    const date = new Date(1900, 1); // February 1900
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it('should correctly handle February 2000 (leap year)', () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it('should correctly handle February 2100 (non-leap year)', () => {
    const date = new Date(2100, 1); // February 2100
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });
});
