import { addDays } from "./index";

describe("addDays", () => {
  // Test case 1: Add a positive number of days
  it("should add a positive number of days to a date", () => {
    const date = new Date(2014, 8, 1); // September 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September (0-indexed)
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  // Test case 2: Add a negative number of days (subtract)
  it("should subtract a negative number of days from a date", () => {
    const date = new Date(2014, 8, 11); // September 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  // Test case 3: Add zero days
  it("should return the same date when adding zero days", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  // Test case 4: Cross month boundary (forward)
  it("should correctly cross a month boundary when adding days (forward)", () => {
    const date = new Date(2014, 0, 25); // January 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // January 25 + 10 days = February 4
  });

  // Test case 5: Cross month boundary (backward)
  it("should correctly cross a month boundary when subtracting days (backward)", () => {
    const date = new Date(2014, 1, 5); // February 5, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(26); // February 5 - 10 days = January 26
  });

  // Test case 6: Cross year boundary (forward)
  it("should correctly cross a year boundary when adding days (forward)", () => {
    const date = new Date(2014, 11, 25); // December 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // December 25 + 10 days = January 4
  });

  // Test case 7: Cross year boundary (backward)
  it("should correctly cross a year boundary when subtracting days (backward)", () => {
    const date = new Date(2015, 0, 5); // January 5, 2015
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(26); // January 5 - 10 days = December 26
  });

  // Test case 8: Leap year considerations (adding days)
  it("should handle leap year when adding days", () => {
    const date = new Date(2020, 1, 28); // Feb 28, 2020 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1); // Feb
    expect(result.getDate()).toBe(29); // Should be Feb 29
  });

  it("should handle leap year when adding days past Feb 29", () => {
    const date = new Date(2020, 1, 28); // Feb 28, 2020 (leap year)
    const result = addDays(date, 2);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Should be March 1
  });

  // Test case 9: Non-leap year considerations (adding days)
  it("should handle non-leap year when adding days", () => {
    const date = new Date(2019, 1, 28); // Feb 28, 2019 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2019);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Should be March 1
  });

  // Test case 10: Invalid date input
  it("should return an Invalid Date if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    const result = addDays(invalidDate, 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 11: Timestamp input
  it("should work with timestamp input", () => {
    const timestamp = new Date(2014, 8, 1).getTime();
    const result = addDays(timestamp, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  // Test case 12: String input
  it("should work with string input", () => {
    // Using a local time string for consistency with new Date(Y,M,D) behavior
    const dateString = "2014-09-01T00:00:00"; 
    const result = addDays(dateString, 10);
    const expectedDate = new Date(2014, 8, 11); // Sep 11, 2014
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Test case 13: Large amount
  it("should handle large amounts of days", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, 36500); // ~100 years
    expect(result.getFullYear()).toBe(2100);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1); // Jan 1, 2100
  });

  // Test case 14: Time part should be preserved
  it("should preserve the time part of the date", () => {
    const date = new Date(2014, 8, 1, 10, 30, 45, 123); // Sept 1, 2014 10:30:45.123
    const result = addDays(date, 5);
    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(45);
    expect(result.getMilliseconds()).toBe(123);
    expect(result.getDate()).toBe(6);
  });
});
