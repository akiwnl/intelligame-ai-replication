import { addDays } from "./index";

describe("addDays", () => {
  // Test case 1: Add a positive number of days
  it("should add a positive number of days to a date", () => {
    const date = new Date(2014, 8, 1, 10, 30, 0); // Sep 1, 2014 10:30:00
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September (0-indexed)
    expect(result.getDate()).toBe(11);
    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(0);
  });

  // Test case 2: Add zero days
  it("should return the same date when adding zero days", () => {
    const date = new Date(2020, 0, 15, 12, 0, 0);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  // Test case 3: Subtract a number of days (negative amount)
  it("should subtract a number of days when amount is negative", () => {
    const date = new Date(2014, 8, 11, 10, 30, 0); // Sep 11, 2014 10:30:00
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1);
    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(0);
  });

  // Test case 4: Crossing month boundaries
  it("should correctly cross month boundaries", () => {
    const date = new Date(2023, 0, 30); // Jan 30, 2023
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4);
  });

  // Test case 5: Crossing year boundaries
  it("should correctly cross year boundaries", () => {
    const date = new Date(2023, 11, 28); // Dec 28, 2023
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(2);
  });

  // Test case 6: Leap year (February 28 -> 29)
  it("should handle leap years correctly (Feb 28 to 29)", () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29);
  });

  // Test case 7: Leap year (February 29 -> March 1)
  it("should handle leap years correctly (Feb 29 to Mar 1)", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1);
  });

  // Test case 8: Non-leap year (February 28 -> March 1)
  it("should handle non-leap years correctly (Feb 28 to Mar 1)", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1);
  });

  // Test case 9: Large number of days
  it("should handle large positive numbers of days", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, 36500); // ~100 years
    expect(result.getFullYear()).toBe(2099);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(27);
  });

  // Test case 10: Large negative number of days
  it("should handle large negative numbers of days", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, -36500); // ~100 years back
    expect(result.getFullYear()).toBe(1900);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(5);
  });

  // Test case 11: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2014, 8, 1, 10, 30, 0).getTime();
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  // Test case 12: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2014-09-01T10:30:00.000Z"; // UTC string
    const result = addDays(dateString, 10);
    // Note: toDate converts to local time, so expect local time components.
    // We'll create a reference date in local time for comparison.
    const expectedDate = new Date(2014, 8, 11);
    expect(result.getFullYear()).toBe(expectedDate.getFullYear());
    expect(result.getMonth()).toBe(expectedDate.getMonth());
    expect(result.getDate()).toBe(expectedDate.getDate());
  });

  // Test case 13: Invalid date input
  it("should return an Invalid Date if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    const result = addDays(invalidDate, 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 14: Invalid amount input (NaN)
  it("should return an Invalid Date if the amount is NaN", () => {
    const date = new Date(2023, 0, 15);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 15: Invalid date string input
  it("should return an Invalid Date if the date string is invalid", () => {
    const result = addDays("invalid string", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Test case 16: Ensure original date object is not mutated
  it("should not mutate the original date object", () => {
    const originalDate = new Date(2023, 0, 15, 10, 0, 0);
    const dateClone = new Date(originalDate.getTime());
    addDays(originalDate, 5);
    expect(originalDate.getTime()).toBe(dateClone.getTime());
  });
});
