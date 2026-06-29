import { getDay } from "./index";

describe('getDay', () => {
  // Test case 1: Basic functionality - Wednesday
  it('should return the day of the week for a given date (Wednesday)', () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 (Wednesday)
    const result = getDay(date);
    expect(result).toBe(3); // 0 = Sunday, 1 = Monday, ..., 3 = Wednesday
  });

  // Test case 2: Sunday
  it('should return 0 for Sunday', () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 (Sunday)
    const result = getDay(date);
    expect(result).toBe(0);
  });

  // Test case 3: Monday
  it('should return 1 for Monday', () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 (Monday)
    const result = getDay(date);
    expect(result).toBe(1);
  });

  // Test case 4: Saturday
  it('should return 6 for Saturday', () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 (Saturday)
    const result = getDay(date);
    expect(result).toBe(6);
  });

  // Test case 5: Date with time components
  it('should ignore time components and return the day of the week', () => {
    const date = new Date(2023, 4, 15, 10, 30, 45, 123); // May 15, 2023 10:30:45.123 (Monday)
    const result = getDay(date);
    expect(result).toBe(1);
  });

  // Test case 6: Invalid date object input
  it('should return NaN for an invalid date object', () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 7: Invalid date string input
  it('should return NaN for an invalid date string', () => {
    const result = getDay('invalid date string');
    expect(isNaN(result)).toBe(true);
  });

  // Test case 8: Timestamp input
  it('should handle timestamp input correctly', () => {
    const date = new Date(2023, 6, 17, 12, 0, 0, 0); // Jul 17, 2023 (Monday)
    const timestamp = date.getTime();
    const result = getDay(timestamp);
    expect(result).toBe(1);
  });

  // Test case 9: String input (ISO 8601 local)
  it('should handle string input (e.g., ISO 8601 local) and return the local day of week', () => {
    const dateString = '2023-07-25T10:00:00'; // Jul 25, 2023 local (Tuesday)
    const result = getDay(dateString);
    expect(result).toBe(2);
  });

  // Test case 10: String input (ISO 8601 UTC)
  it('should handle UTC string input and return the local day of week', () => {
    const utcDateString = '2023-07-25T10:00:00.000Z'; // Jul 25, 2023 10:00:00 UTC
    const date = new Date(utcDateString); // Date object represents this UTC instant
    const result = getDay(utcDateString);
    expect(result).toBe(date.getDay()); // getDay returns the local day of the week
  });
});
