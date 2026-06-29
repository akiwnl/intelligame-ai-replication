import { isEqual } from "./index";

describe('isEqual', () => {
  it('should return true if two dates are exactly equal', () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it('should return false if two dates differ by milliseconds', () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it('should return false if two dates differ by seconds', () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it('should return false if two dates differ by any component', () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it('should return false for two invalid dates', () => {
    const invalidDate1 = new Date('not a date');
    const invalidDate2 = new Date('another invalid date');
    // new Date(NaN).getTime() is NaN. NaN === NaN is false.
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  it('should return false if one date is valid and the other is invalid', () => {
    const validDate = new Date(2023, 0, 1);
    const invalidDate = new Date('not a date');
    expect(isEqual(validDate, invalidDate)).toBe(false);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  it('should handle timestamp input for equal dates', () => {
    const timestamp1 = new Date(2023, 9, 10, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 9, 10, 12, 0, 0, 0).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
  });

  it('should handle timestamp input for unequal dates', () => {
    const timestamp1 = new Date(2023, 9, 10, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 9, 10, 12, 0, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(false);
  });

  it('should handle string input for equal dates', () => {
    const dateString1 = '2023-10-10T12:00:00.000Z';
    const dateString2 = '2023-10-10T12:00:00.000Z';
    expect(isEqual(dateString1, dateString2)).toBe(true);
  });

  it('should handle string input for unequal dates', () => {
    const dateString1 = '2023-10-10T12:00:00.000Z';
    const dateString2 = '2023-10-10T12:00:00.500Z';
    expect(isEqual(dateString1, dateString2)).toBe(false);
  });
});
