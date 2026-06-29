import { getDay } from "./index";

describe('getDay', () => {
  it('should return 0 for Sunday', () => {
    const sunday = new Date(2023, 9, 8); // October 8, 2023 is a Sunday
    expect(getDay(sunday)).toBe(0);
  });

  it('should return 1 for Monday', () => {
    const monday = new Date(2023, 9, 9); // October 9, 2023 is a Monday
    expect(getDay(monday)).toBe(1);
  });

  it('should return 2 for Tuesday', () => {
    const tuesday = new Date(2012, 1, 28); // Feb 28, 2012 is a Tuesday
    expect(getDay(tuesday)).toBe(2);
  });

  it('should return 3 for Wednesday', () => {
    const wednesday = new Date(2012, 1, 29); // Feb 29, 2012 is a Wednesday
    expect(getDay(wednesday)).toBe(3);
  });

  it('should return 4 for Thursday', () => {
    const thursday = new Date(2023, 9, 5); // October 5, 2023 is a Thursday
    expect(getDay(thursday)).toBe(4);
  });

  it('should return 5 for Friday', () => {
    const friday = new Date(2023, 9, 6); // October 6, 2023 is a Friday
    expect(getDay(friday)).toBe(5);
  });

  it('should return 6 for Saturday', () => {
    const saturday = new Date(2023, 9, 7); // October 7, 2023 is a Saturday
    expect(getDay(saturday)).toBe(6);
  });

  it('should return NaN for an invalid date', () => {
    const invalidDate = new Date('not a date');
    const result = getDay(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = new Date(2023, 9, 10).getTime(); // October 10, 2023 is a Tuesday
    expect(getDay(timestamp)).toBe(2);
  });

  it('should handle string input', () => {
    const dateString = '2023-10-11T00:00:00.000Z'; // October 11, 2023 UTC is a Wednesday
    // The exact day depends on the timezone offset, but it should match the local getDay()
    expect(getDay(dateString)).toBe(new Date(dateString).getDay());
  });
});
