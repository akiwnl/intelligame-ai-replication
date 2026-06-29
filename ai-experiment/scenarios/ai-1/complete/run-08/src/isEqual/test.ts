import { isEqual } from "./index";

describe('isEqual', () => {
  // Test case 1: Basic functionality (dates are equal)
  it('should return true if the dates are equal', () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 2: Dates are not equal (example from JSDoc)
  it('should return false if the dates are not equal (different milliseconds)', () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 3: Dates differ by seconds
  it('should return false if the dates differ by seconds', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 1, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 4: Dates differ by minutes
  it('should return false if the dates differ by minutes', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 1, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 5: Dates differ by hours
  it('should return false if the dates differ by hours', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 13, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 6: Dates differ by days
  it('should return false if the dates differ by days', () => {
    const date1 = new Date(2023, 0, 1, 0, 0, 0, 0);
    const date2 = new Date(2023, 0, 2, 0, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 7: Invalid first date
  it('should return false if the first date is invalid', () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 8: Invalid second date
  it('should return false if the second date is invalid', () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 9: Both dates are invalid
  it('should return false if both dates are invalid', () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 10: Timestamp input for both dates
  it('should handle timestamp inputs correctly', () => {
    const timestamp1 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  // Test case 11: Timestamp input not equal
  it('should handle unequal timestamp inputs correctly', () => {
    const timestamp1 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 1).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(false);
  });

  // Test case 12: String input for both dates (ISO 8601)
  it('should handle string inputs (ISO 8601) correctly', () => {
    const dateString1 = '2023-01-01T12:00:00.000Z';
    const dateString2 = '2023-01-01T12:00:00.000Z';
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(true);
  });

  // Test case 13: String input not equal
  it('should handle unequal string inputs correctly', () => {
    const dateString1 = '2023-01-01T12:00:00.000Z';
    const dateString2 = '2023-01-01T12:00:00.001Z';
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(false);
  });

  // Test case 14: Mixed input types (Date object and timestamp)
  it('should handle mixed input types (Date and timestamp)', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const result = isEqual(date1, timestamp2);
    expect(result).toBe(true);
  });

  // Test case 15: Mixed input types (Date object and string)
  it('should handle mixed input types (Date and string)', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const dateString2 = '2023-01-01T12:00:00.000Z'; // Assuming local timezone for new Date() to match UTC string
    // This test might be fragile if the local timezone offset changes the exact millisecond.
    // It's safer to compare UTC timestamps directly.
    const date1Utc = date1.toISOString(); // Convert local date to UTC string for comparison
    const result = isEqual(date1, dateString2);
    // This will only be true if the local date is exactly 2023-01-01 12:00:00 UTC.
    // Let's adjust to be robust to local timezones by providing a UTC date.
    const date1UTC = new Date(Date.UTC(2023, 0, 1, 12, 0, 0, 0));
    const dateString2UTC = '2023-01-01T12:00:00.000Z';
    const resultUTC = isEqual(date1UTC, dateString2UTC);
    expect(resultUTC).toBe(true);
  });
});
