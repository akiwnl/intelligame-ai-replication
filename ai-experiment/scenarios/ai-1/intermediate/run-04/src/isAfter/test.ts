import { isAfter } from "./index";

describe('isAfter', () => {
  it('should return true if the first date is after the second date', () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  it('should return false if the first date is before the second date', () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isAfter(date1, date2)).toBe(false);
  });

  it('should return false if the dates are equal', () => {
    const date1 = new Date(2023, 9, 10, 10, 0, 0, 0);
    const date2 = new Date(2023, 9, 10, 10, 0, 0, 0);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it('should return true if only milliseconds differ and first is after', () => {
    const date1 = new Date(2023, 9, 10, 10, 0, 0, 1);
    const date2 = new Date(2023, 9, 10, 10, 0, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);
  });

  it('should return false if only milliseconds differ and first is before', () => {
    const date1 = new Date(2023, 9, 10, 10, 0, 0, 0);
    const date2 = new Date(2023, 9, 10, 10, 0, 0, 1);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it('should return false if either date is invalid', () => {
    const validDate = new Date(2023, 0, 1);
    const invalidDate = new Date('not a date');

    expect(isAfter(invalidDate, validDate)).toBe(false);
    expect(isAfter(validDate, invalidDate)).toBe(false);
    expect(isAfter(invalidDate, invalidDate)).toBe(false);
  });

  it('should handle timestamp input', () => {
    const timestamp1 = new Date(1989, 6, 10).getTime();
    const timestamp2 = new Date(1987, 1, 11).getTime();
    expect(isAfter(timestamp1, timestamp2)).toBe(true);
    expect(isAfter(timestamp2, timestamp1)).toBe(false);
  });

  it('should handle string input', () => {
    const dateString1 = '1989-07-10T00:00:00.000Z';
    const dateString2 = '1987-02-11T00:00:00.000Z';
    expect(isAfter(dateString1, dateString2)).toBe(true);
    expect(isAfter(dateString2, dateString1)).toBe(false);
  });
});
