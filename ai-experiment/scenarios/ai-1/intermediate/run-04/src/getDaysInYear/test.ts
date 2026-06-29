import { getDaysInYear } from "./index";

describe('getDaysInYear', () => {
  it('should return 366 for a leap year', () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // Divisible by 400
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366);
  });

  it('should return 365 for a common year', () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365);
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365);
  });

  it('should return 365 for a year divisible by 100 but not by 400', () => {
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365);
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365);
  });

  it('should return NaN for an invalid date', () => {
    const invalidDate = new Date('not a date');
    const result = getDaysInYear(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = new Date(2020, 5, 15).getTime(); // 2020 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it('should handle string input', () => {
    const dateString = '2021-01-01T00:00:00.000Z'; // 2021 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });
});
