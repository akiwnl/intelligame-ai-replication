import { addDays } from "./index";

describe("addDays", () => {
  // Test case 1: Adding positive days
  it("should add a positive number of days to a date", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024
    const result = addDays(date, 5);
    expect(result.getTime()).toBe(new Date(2024, 0, 15).getTime()); // Jan 15, 2024
  });

  // Test case 2: Adding zero days
  it("should return the same date when adding zero days", () => {
    const date = new Date(2024, 0, 10, 10, 30, 0); // Jan 10, 2024 10:30:00
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  // Test case 3: Adding negative days
  it("should subtract a negative number of days from a date", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024
    const result = addDays(date, -5);
    expect(result.getTime()).toBe(new Date(2024, 0, 5).getTime()); // Jan 5, 2024
  });

  // Test case 4: Crossing month boundary (forward)
  it("should correctly cross a month boundary when adding days", () => {
    const date = new Date(2024, 0, 30); // Jan 30, 2024
    const result = addDays(date, 5);
    expect(result.getTime()).toBe(new Date(2024, 1, 4).getTime()); // Feb 4, 2024
  });

  // Test case 5: Crossing month boundary (backward)
  it("should correctly cross a month boundary when subtracting days", () => {
    const date = new Date(2024, 1, 5); // Feb 5, 2024
    const result = addDays(date, -10);
    expect(result.getTime()).toBe(new Date(2024, 0, 26).getTime()); // Jan 26, 2024
  });

  // Test case 6: Crossing year boundary (forward)
  it("should correctly cross a year boundary when adding days", () => {
    const date = new Date(2024, 11, 28); // Dec 28, 2024
    const result = addDays(date, 5);
    expect(result.getTime()).toBe(new Date(2025, 0, 2).getTime()); // Jan 2, 2025
  });

  // Test case 7: Crossing year boundary (backward)
  it("should correctly cross a year boundary when subtracting days", () => {
    const date = new Date(2025, 0, 3); // Jan 3, 2025
    const result = addDays(date, -5);
    expect(result.getTime()).toBe(new Date(2024, 11, 29).getTime()); // Dec 29, 2024
  });

  // Test case 8: Leap year - adding days across Feb 29
  it("should handle leap year February 29 when adding days", () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getTime()).toBe(new Date(2024, 1, 29).getTime()); // Feb 29, 2024
  });

  // Test case 9: Leap year - adding days from Feb 29
  it("should handle leap year February 29 correctly when adding from it", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getTime()).toBe(new Date(2024, 2, 1).getTime()); // Mar 1, 2024
  });

  // Test case 10: Non-leap year - adding days across Feb 28
  it("should handle non-leap year February 28 when adding days", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getTime()).toBe(new Date(2023, 2, 1).getTime()); // Mar 1, 2023
  });

  // Test case 11: Invalid date input
  it("should return an Invalid Date if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const result = addDays(invalidDate, 5);
    expect(result.toString()).toBe("Invalid Date");
  });

  // Test case 12: Invalid amount input (NaN)
  it("should return an Invalid Date if the amount is NaN", () => {
    const date = new Date(2024, 0, 10);
    const result = addDays(date, NaN);
    expect(result.toString()).toBe("Invalid Date");
  });

  // Test case 13: Large amount of days
  it("should correctly add a large number of days", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = addDays(date, 365 * 100); // Add 100 years worth of days
    expect(result.getFullYear()).toBe(2100);
    expect(result.getMonth()).toBe(0); // Jan
    expect(result.getDate()).toBe(1); // Day 1
    // (2000 is leap, 2100 is not, need to check exact day)
    // 36525 days in 100 years with 25 leap years (2000, 2004...2096)
    // 2000-01-01 + 36525 days = 2100-01-01
    expect(result.getTime()).toBe(new Date(2100, 0, 1).getTime());
  });

  // Test case 14: Input as timestamp
  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 10).getTime();
    const result = addDays(timestamp, 5);
    expect(result.getTime()).toBe(new Date(2024, 0, 15).getTime());
  });

  // Test case 15: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-10T00:00:00.000Z"; // UTC string
    const result = addDays(dateString, 5);
    // Use getTime() for comparison to avoid timezone issues with local date objects
    expect(result.getTime()).toBe(new Date("2024-01-15T00:00:00.000Z").getTime());
  });

  // Test case 16: Ensure original date is not mutated
  it("should not mutate the original date object", () => {
    const originalDate = new Date(2024, 0, 10);
    const originalDateClone = new Date(originalDate.getTime());
    addDays(originalDate, 5);
    expect(originalDate.getTime()).toBe(originalDateClone.getTime());
  });
});
