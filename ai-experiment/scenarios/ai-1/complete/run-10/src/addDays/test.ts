import { addDays } from "./index";

describe("addDays", () => {
  // Test case 1: Basic addition of positive days
  it("should add a positive number of days to a date", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(15);
  });

  // Test case 2: Basic subtraction of days (adding a negative number)
  it("should subtract a negative number of days from a date", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024
    const result = addDays(date, -5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(5);
  });

  // Test case 3: Crossing month boundary forward
  it("should correctly cross month boundaries forward", () => {
    const date = new Date(2024, 0, 30); // Jan 30, 2024
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Feb 4, 2024
  });

  // Test case 4: Crossing month boundary backward
  it("should correctly cross month boundaries backward", () => {
    const date = new Date(2024, 1, 5); // Feb 5, 2024
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(26); // Jan 26, 2024
  });

  // Test case 5: Crossing year boundary forward
  it("should correctly cross year boundaries forward", () => {
    const date = new Date(2023, 11, 30); // Dec 30, 2023
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Jan 4, 2024
  });

  // Test case 6: Crossing year boundary backward
  it("should correctly cross year boundaries backward", () => {
    const date = new Date(2024, 0, 5); // Jan 5, 2024
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(26); // Dec 26, 2023
  });

  // Test case 7: Adding zero days
  it("should return the same date when adding zero days", () => {
    const date = new Date(2024, 5, 15, 10, 30, 0);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  // Test case 8: Handling leap years (forward)
  it("should handle leap year correctly when adding days forward", () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29); // Feb 29, 2024
  });

  // Test case 9: Handling leap years (crossing Feb 29)
  it("should handle leap year correctly when crossing Feb 29", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Mar 1, 2024
  });

  // Test case 10: Handling non-leap years (forward)
  it("should handle non-leap year correctly when adding days forward", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Mar 1, 2023
  });

  // Test case 11: Invalid date input
  it("should return an Invalid Date when the input date is invalid", () => {
    const result = addDays(new Date("invalid date"), 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 12: Input as timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 0, 10).getTime(); // Jan 10, 2024 as timestamp
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(15);
  });

  // Test case 13: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-10T00:00:00.000Z";
    const result = addDays(dateString, 5);
    // Note: When parsing strings, make sure timezone doesn't shift the date unexpectedly
    // For ISO string, it's usually UTC, so expect UTC date parts.
    // For local date, new Date("YYYY-MM-DD") creates local date at midnight.
    // The toDate function uses new Date(argument) which is locale-dependent for strings.
    // For consistency with example, let's test with a local date string.
    const localDateResult = addDays("2024/01/10", 5);
    expect(localDateResult.getFullYear()).toBe(2024);
    expect(localDateResult.getMonth()).toBe(0);
    expect(localDateResult.getDate()).toBe(15);
  });

  // Test case 14: Adding a very large number of days
  it("should handle very large positive amounts", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, 365 * 100); // Add 100 years worth of days
    expect(result.getFullYear()).toBe(2100); // 2100 is not a leap year (divisible by 100 but not 400)
    // The `setDate` method handles leap years and year boundaries correctly.
    // The exact date might vary based on leap years in between, but the year should be roughly correct.
    // A simpler check: 100 years from 2000-01-01 should be 2100-01-01 if all years were 365.
    // With leap years, it will be slightly different.
    // The key is that `setDate` correctly moves the date forward.
    // Let's check a more predictable large number that crosses a few leap years.
    const date2 = new Date(2000, 0, 1);
    const result2 = addDays(date2, 365 * 4 + 1); // 4 years + 1 day, includes one leap day
    expect(result2.getFullYear()).toBe(2004);
    expect(result2.getMonth()).toBe(0);
    expect(result2.getDate()).toBe(2); // Jan 2, 2004
  });

  // Test case 15: Adding a very large negative number of days
  it("should handle very large negative amounts", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, -(365 * 4 + 1)); // Subtract 4 years + 1 day
    expect(result.getFullYear()).toBe(1995); // (2000 - 4 = 1996, then -1 day crosses year boundary to 1995)
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(31); // Dec 31, 1995
  });
});
