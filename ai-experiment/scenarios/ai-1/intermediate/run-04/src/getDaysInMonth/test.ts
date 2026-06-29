import { getDaysInMonth } from "./index";

describe('getDaysInMonth', () => {
  it('should return 31 for months with 31 days', () => {
    // January (0), March (2), May (4), July (6), August (7), October (9), December (11)
    expect(getDaysInMonth(new Date(2023, 0))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 2))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 4))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 6))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 7))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 9))).toBe(31);
    expect(getDaysInMonth(new Date(2023, 11))).toBe(31);
  });

  it('should return 30 for months with 30 days', () => {
    // April (3), June (5), September (8), November (10)
    expect(getDaysInMonth(new Date(2023, 3))).toBe(30);
    expect(getDaysInMonth(new Date(2023, 5))).toBe(30);
    expect(getDaysInMonth(new Date(2023, 8))).toBe(30);
    expect(getDaysInMonth(new Date(2023, 10))).toBe(30);
  });

  it('should return 29 for February in a leap year', () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29); // Divisible by 400
    expect(getDaysInMonth(new Date(2012, 1))).toBe(29); // Divisible by 4, not 100
    expect(getDaysInMonth(new Date(2024, 1))).toBe(29);
  });

  it('should return 28 for February in a common year', () => {
    expect(getDaysInMonth(new Date(2001, 1))).toBe(28);
    expect(getDaysInMonth(new Date(2023, 1))).toBe(28);
    expect(getDaysInMonth(new Date(1900, 1))).toBe(28); // Divisible by 100, not by 400
  });

  it('should return NaN for an invalid date', () => {
    const invalidDate = new Date('not a date');
    const result = getDaysInMonth(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = new Date(2023, 4, 15).getTime(); // May 2023 has 31 days
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(31);
  });

  it('should handle string input', () => {
    const dateString = '2023-06-01T00:00:00.000Z'; // June 2023 has 30 days
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });
});
