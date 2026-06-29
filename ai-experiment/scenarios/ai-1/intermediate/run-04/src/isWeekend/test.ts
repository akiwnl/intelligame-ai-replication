import { isWeekend } from "./index";

describe('isWeekend', () => {
  it('should return true for a Sunday', () => {
    const sunday = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    expect(isWeekend(sunday)).toBe(true);
  });

  it('should return true for a Saturday', () => {
    const saturday = new Date(2023, 9, 7); // October 7, 2023 is a Saturday
    expect(isWeekend(saturday)).toBe(true);
  });

  it('should return false for a Monday', () => {
    const monday = new Date(2023, 9, 9); // October 9, 2023 is a Monday
    expect(isWeekend(monday)).toBe(false);
  });

  it('should return false for a Friday', () => {
    const friday = new Date(2023, 9, 6); // October 6, 2023 is a Friday
    expect(isWeekend(friday)).toBe(false);
  });

  it('should return false for any other weekday (Tuesday, Wednesday, Thursday)', () => {
    expect(isWeekend(new Date(2023, 9, 10))).toBe(false); // Tuesday
    expect(isWeekend(new Date(2023, 9, 11))).toBe(false); // Wednesday
    expect(isWeekend(new Date(2023, 9, 12))).toBe(false); // Thursday
  });

  it('should return false for an invalid date', () => {
    const invalidDate = new Date('not a date');
    expect(isWeekend(invalidDate)).toBe(false);
  });

  it('should handle timestamp input for a weekend', () => {
    const saturdayTimestamp = new Date(2023, 9, 7).getTime();
    expect(isWeekend(saturdayTimestamp)).toBe(true);
  });

  it('should handle timestamp input for a weekday', () => {
    const mondayTimestamp = new Date(2023, 9, 9).getTime();
    expect(isWeekend(mondayTimestamp)).toBe(false);
  });

  it('should handle string input for a weekend', () => {
    const sundayString = '2023-10-08T00:00:00.000Z'; // October 8, 2023 UTC is a Sunday
    expect(isWeekend(sundayString)).toBe(true);
  });

  it('should handle string input for a weekday', () => {
    const tuesdayString = '2023-10-10T00:00:00.000Z'; // October 10, 2023 UTC is a Tuesday
    expect(isWeekend(tuesdayString)).toBe(false);
  });
});
```
