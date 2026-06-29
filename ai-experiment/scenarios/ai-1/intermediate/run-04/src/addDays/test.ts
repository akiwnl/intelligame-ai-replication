import { addDays } from "./index";

describe('addDays', () => {
  it('should add the specified number of days to the given date', () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it('should handle adding zero days', () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    const result = addDays(date, 0);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(15);
  });

  it('should handle adding negative days', () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    const result = addDays(date, -5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(10);
  });

  it('should cross month boundaries correctly', () => {
    const date = new Date(2023, 0, 25); // January 25, 2023
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it('should cross year boundaries correctly', () => {
    const date = new Date(2023, 11, 25); // December 25, 2023
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it('should handle leap years correctly', () => {
    const date = new Date(2020, 1, 27); // February 27, 2020 (leap year)
    const result = addDays(date, 3);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Feb 27 + 3 days = Mar 1 (Feb 29, Mar 1)
  });

  it('should handle non-leap years correctly', () => {
    const date = new Date(2021, 1, 27); // February 27, 2021 (non-leap year)
    const result = addDays(date, 3);
    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(2); // Feb 27 + 3 days = Mar 2 (Feb 28, Mar 1, Mar 2)
  });

  it('should return an Invalid Date if the input date is invalid', () => {
    const invalidDate = new Date('not a date');
    const result = addDays(invalidDate, 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = new Date(2014, 8, 1).getTime();
    const result = addDays(timestamp, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it('should handle string input', () => {
    const dateString = '2014-09-01T00:00:00.000Z'; // UTC date
    const result = addDays(dateString, 10);
    // Note: toDate converts to local time, so expect a local date 10 days later
    // The exact date depends on the timezone offset.
    const expectedDate = new Date(new Date(dateString).setDate(new Date(dateString).getDate() + 10));
    expect(result.getFullYear()).toBe(expectedDate.getFullYear());
    expect(result.getMonth()).toBe(expectedDate.getMonth());
    expect(result.getDate()).toBe(expectedDate.getDate());
  });
});
