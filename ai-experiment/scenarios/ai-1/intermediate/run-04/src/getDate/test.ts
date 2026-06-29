import { getDate } from "./index";

describe('getDate', () => {
  it('should return the day of the month for a given date', () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it('should return the correct day for the beginning of a month', () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it('should return the correct day for the end of a month (31 days)', () => {
    const date = new Date(2023, 10, 31); // October 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it('should return the correct day for the end of a month (30 days)', () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it('should return the correct day for a mid-month date', () => {
    const date = new Date(2023, 5, 15); // June 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it('should return NaN for an invalid date', () => {
    const invalidDate = new Date('not a date');
    const result = getDate(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = new Date(2023, 7, 18).getTime(); // August 18, 2023
    const result = getDate(timestamp);
    expect(result).toBe(18);
  });

  it('should handle string input', () => {
    const dateString = '2023-09-22T00:00:00.000Z'; // September 22, 2023 UTC
    const result = getDate(dateString);
    // The date value will be local, but the day of month should remain 22
    expect(result).toBe(new Date(dateString).getDate());
  });
});
