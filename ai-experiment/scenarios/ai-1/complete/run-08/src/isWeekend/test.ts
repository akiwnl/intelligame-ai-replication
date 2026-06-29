import { isWeekend } from "./index";

describe('isWeekend', () => {
  // Test case 1: Sunday (example from JSDoc)
  it('should return true for a Sunday', () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 (Sunday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  // Test case 2: Saturday
  it('should return true for a Saturday', () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 (Saturday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  // Test case 3: Monday (weekday)
  it('should return false for a Monday', () => {
    const date = new Date(2023, 0, 9); // Jan 9, 2023 (Monday)
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  // Test case 4: Friday (weekday)
  it('should return false for a Friday', () => {
    const date = new Date(2023, 0, 6); // Jan 6, 2023 (Friday)
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  // Test case 5: Mid-week day (e.g., Wednesday)
  it('should return false for a Wednesday', () => {
    const date = new Date(2023, 0, 4); // Jan 4, 2023 (Wednesday)
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  // Test case 6: Date with time components
  it('should ignore time components and correctly identify weekend', () => {
    const date = new Date(2023, 0, 8, 10, 30, 45, 123); // Jan 8, 2023 (Sunday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  // Test case 7: Invalid date object input
  it('should return false for an invalid date object', () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  // Test case 8: Invalid date string input
  it('should return false for an invalid date string', () => {
    const result = isWeekend('invalid date string');
    expect(result).toBe(false);
  });

  // Test case 9: Timestamp input (Saturday)
  it('should handle timestamp input correctly for a Saturday', () => {
    const date = new Date(2023, 6, 15, 12, 0, 0, 0); // Jul 15, 2023 (Saturday)
    const timestamp = date.getTime();
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  // Test case 10: Timestamp input (Tuesday)
  it('should handle timestamp input correctly for a Tuesday', () => {
    const date = new Date(2023, 6, 18, 12, 0, 0, 0); // Jul 18, 2023 (Tuesday)
    const timestamp = date.getTime();
    const result = isWeekend(timestamp);
    expect(result).toBe(false);
  });

  // Test case 11: String input (ISO 8601 local - Sunday)
  it('should handle string input (e.g., ISO 8601 local) for a Sunday', () => {
    const dateString = '2023-07-23T10:00:00'; // Jul 23, 2023 local (Sunday)
    const result = isWeekend(dateString);
    expect(result).toBe(true);
  });

  // Test case 12: String input (ISO 8601 UTC - Wednesday)
  it('should handle UTC string input and return based on its local day of week', () => {
    const utcDateString = '2023-07-26T10:00:00.000Z'; // Jul 26, 2023 10:00:00 UTC
    const date = new Date(utcDateString); // Date object represents this UTC instant
    const result = isWeekend(utcDateString);
    expect(result).toBe(date.getDay() === 0 || date.getDay() === 6); // Check against local day
  });
});
