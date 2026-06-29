import { addDays } from "./index";
// No need to import toDate directly in tests if it's implicitly used by the tested function
// import { toDate } from "../toDate/index.js"; 

describe('addDays', () => {
  // Test case 1: Basic addition of a positive number of days
  it('should add a positive number of days to a date', () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  // Test case 2: Adding 0 days should return an identical date
  it('should return the same date when adding 0 days', () => {
    const date = new Date(2023, 5, 15, 10, 30, 0, 0);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  // Test case 3: Adding negative days should subtract days
  it('should subtract days when adding a negative number', () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1);
  });

  // Test case 4: Crossing month boundary forward
  it('should correctly cross month boundaries forward', () => {
    const date = new Date(2023, 0, 30); // Jan 30, 2023
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(1); // February (month index 1)
    expect(result.getDate()).toBe(4); // Feb 4, 2023
  });

  // Test case 5: Crossing month boundary backward
  it('should correctly cross month boundaries backward', () => {
    const date = new Date(2023, 1, 5); // Feb 5, 2023
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0); // January (month index 0)
    expect(result.getDate()).toBe(26); // Jan 26, 2023
  });

  // Test case 6: Crossing year boundary forward
  it('should correctly cross year boundaries forward', () => {
    const date = new Date(2023, 11, 25); // Dec 25, 2023
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January (month index 0)
    expect(result.getDate()).toBe(4); // Jan 4, 2024
  });

  // Test case 7: Crossing year boundary backward
  it('should correctly cross year boundaries backward', () => {
    const date = new Date(2023, 0, 5); // Jan 5, 2023
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2022);
    expect(result.getMonth()).toBe(11); // December (month index 11)
    expect(result.getDate()).toBe(26); // Dec 26, 2022
  });

  // Test case 8: Leap year transition - Feb 28 to Mar 1 in a non-leap year
  it('should handle non-leap year transition (Feb 28 + 1 day)', () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Mar 1, 2023
  });

  // Test case 9: Leap year transition - Feb 29 to Mar 1 in a leap year
  it('should handle leap year transition (Feb 29 + 1 day)', () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Mar 1, 2024
  });

  // Test case 10: Leap year transition - Feb 28 + 1 day in a leap year (results in Feb 29)
  it('should handle leap year transition (Feb 28 + 1 day in leap year)', () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29); // Feb 29, 2024
  });

  // Test case 11: Large positive amount of days (e.g., crossing centuries)
  it('should handle large positive amounts of days (e.g., crossing centuries)', () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    const result = addDays(date, 365 * 100 + 25); // Add 100 years + 25 leap days (1900 is not leap, but 1904-1996 have 24, 2000 has 1)
    expect(result.getFullYear()).toBe(2000);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1);
  });

  // Test case 12: Large negative amount of days (e.g., crossing centuries)
  it('should handle large negative amounts of days (e.g., crossing centuries)', () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, -(365 * 100 + 25)); // Subtract 100 years and 25 leap days
    expect(result.getFullYear()).toBe(1900);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(1);
  });

  // Test case 13: Invalid date object input
  it('should return an Invalid Date when the input date is invalid', () => {
    const result = addDays(new Date(NaN), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 14: Invalid date string input
  it('should return an Invalid Date when the input date string is invalid', () => {
    const result = addDays('invalid date string', 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 15: amount is NaN
  it('should return an Invalid Date when amount is NaN', () => {
    const date = new Date(2023, 0, 1);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 16: amount is Infinity
  it('should return an Invalid Date when amount is Infinity', () => {
    const date = new Date(2023, 0, 1);
    const result = addDays(date, Infinity);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 17: amount is -Infinity
  it('should return an Invalid Date when amount is -Infinity', () => {
    const date = new Date(2023, 0, 1);
    const result = addDays(date, -Infinity);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 18: Original date object is not modified (immutability)
  it('should not modify the original date object', () => {
    const originalDate = new Date(2023, 0, 1, 12, 30, 0, 0);
    const dateClone = new Date(originalDate.getTime());
    addDays(originalDate, 5);
    expect(originalDate.getTime()).toBe(dateClone.getTime());
  });

  // Test case 19: Preserve time components (hours, minutes, seconds, milliseconds)
  it('should preserve time components when adding days', () => {
    const date = new Date(2023, 0, 1, 10, 30, 45, 123);
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(2);
    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(45);
    expect(result.getMilliseconds()).toBe(123);
  });

  // Test case 20: Timestamp input
  it('should handle timestamp input correctly', () => {
    const date = new Date(2014, 8, 1, 12, 0, 0, 0); // Sep 1, 2014 12:00:00
    const timestamp = date.getTime();
    const result = addDays(timestamp, 10);
    const expectedDate = new Date(2014, 8, 11, 12, 0, 0, 0); // Sep 11, 2014 12:00:00
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test case 21: String input (e.g., ISO 8601 local without Z)
  it('should handle string input (e.g., ISO 8601 local) and treat it as local time', () => {
    const dateString = '2014-09-01T12:00:00'; // This will be parsed as local time
    const result = addDays(dateString, 10);
    const expectedDate = new Date(2014, 8, 11, 12, 0, 0, 0);
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test case 22: String input (ISO 8601 UTC with Z)
  it('should handle UTC string input and operate on its local date components', () => {
    const utcDateString = '2014-09-01T12:00:00.000Z'; // This date string represents a specific UTC instant
    const initialDate = new Date(utcDateString); // `toDate` will convert this to a Date object representing the UTC instant
    const result = addDays(utcDateString, 10);

    // `setDate` operates on the local date components.
    // To verify, we create an expected date by applying the same logic as the function.
    const expectedDate = new Date(initialDate.getTime()); // Clone the original UTC date
    expectedDate.setDate(initialDate.getDate() + 10); // Apply addDays logic using local components

    expect(result.getTime()).toBe(expectedDate.getTime());
  });
});
