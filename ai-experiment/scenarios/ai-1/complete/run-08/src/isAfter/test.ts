import { isAfter } from "./index";

describe('isAfter', () => {
  // Test case 1: Basic functionality (date is after dateToCompare)
  it('should return true if the first date is after the second date', () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 2: Date is before dateToCompare
  it('should return false if the first date is before the second date', () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 3: Dates are equal
  it('should return false if the dates are equal', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 4: Dates differ by milliseconds
  it('should return true if the first date is after the second by milliseconds', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0, 1);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 5: Dates differ by seconds
  it('should return true if the first date is after the second by seconds', () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 1, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 6: Dates differ by minutes
  it('should return true if the first date is after the second by minutes', () => {
    const date1 = new Date(2023, 0, 1, 12, 1, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 7: Dates differ by hours
  it('should return true if the first date is after the second by hours', () => {
    const date1 = new Date(2023, 0, 1, 13, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 8: Dates differ by days
  it('should return true if the first date is after the second by days', () => {
    const date1 = new Date(2023, 0, 2, 0, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 23, 59, 59, 999);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 9: Invalid first date
  it('should return false if the first date is invalid', () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 10: Invalid second date
  it('should return false if the second date is invalid', () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(NaN);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 11: Both dates are invalid
  it('should return false if both dates are invalid', () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  // Test case 12: Timestamp input for both dates
  it('should handle timestamp inputs correctly', () => {
    const date1 = new Date(2023, 0, 2, 0, 0, 0, 0).getTime();
    const date2 = new Date(2023, 0, 1, 23, 59, 59, 999).getTime();
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 13: String input for both dates (ISO 8601)
  it('should handle string inputs (ISO 8601) correctly', () => {
    const date1 = '2023-01-02T00:00:00.000Z';
    const date2 = '2023-01-01T23:59:59.999Z';
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 14: Mixed input types (Date object and timestamp)
  it('should handle mixed input types (Date and timestamp)', () => {
    const date1 = new Date(2023, 0, 2, 0, 0, 0, 0);
    const date2 = new Date(2023, 0, 1, 23, 59, 59, 999).getTime();
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  // Test case 15: Mixed input types (Date object and string)
  it('should handle mixed input types (Date and string)', () => {
    const date1 = new Date(2023, 0, 2, 0, 0, 0, 0);
    const date2 = '2023-01-01T23:59:59.999Z';
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });
});
