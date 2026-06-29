import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test case 1: January (31 days)
  it("should return 31 for January", () => {
    const date = new Date(2024, 0, 15); // Any date in January
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  // Test case 2: March (31 days)
  it("should return 31 for March", () => {
    const date = new Date(2024, 2, 1); // Any date in March
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  // Test case 3: April (30 days)
  it("should return 30 for April", () => {
    const date = new Date(2024, 3, 10); // Any date in April
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  // Test case 4: June (30 days)
  it("should return 30 for June", () => {
    const date = new Date(2024, 5, 20); // Any date in June
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  // Test case 5: February in a common year (28 days)
  it("should return 28 for February in a common year (e.g., 2023)", () => {
    const date = new Date(2023, 1, 1); // Any date in Feb 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  // Test case 6: February in a leap year (29 days) - as per example
  it("should return 29 for February in a leap year (e.g., 2000)", () => {
    const date = new Date(2000, 1, 1); // Feb 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  // Test case 7: February in a leap year (e.g., 2024)
  it("should return 29 for February in a leap year (e.g., 2024)", () => {
    const date = new Date(2024, 1, 1); // Feb 2024 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  // Test case 8: February in a century year not divisible by 400 (common year)
  it("should return 28 for February in 1900 (not a leap year)", () => {
    const date = new Date(1900, 1, 1); // Feb 1900
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  // Test case 9: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const result = getDaysInMonth(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Test case 10: Input as timestamp
  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // Jan 2024
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(31);
  });

  // Test case 11: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-03-10T00:00:00.000Z"; // March 2024 UTC
    const result = getDaysInMonth(dateString);
    expect(result).toBe(31);
  });

  // Test case 12: Date with specific time
  it("should return the correct number of days regardless of time", () => {
    const date = new Date(2024, 1, 15, 10, 30, 45); // Feb 15, 2024 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });
});
