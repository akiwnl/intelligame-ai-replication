import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test case 1: Leap year (e.g., 2012 from example)
  it("should return 366 for a leap year like 2012", () => {
    const date = new Date(2012, 0, 1); // Any date in 2012
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 2: Another leap year (e.g., 2000 - century leap year)
  it("should return 366 for a century leap year like 2000", () => {
    const date = new Date(2000, 5, 15); // Any date in 2000
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 3: Another leap year (e.g., 2024)
  it("should return 366 for a leap year like 2024", () => {
    const date = new Date(2024, 10, 30); // Any date in 2024
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  // Test case 4: Common year (e.g., 2013)
  it("should return 365 for a common year like 2013", () => {
    const date = new Date(2013, 0, 1); // Any date in 2013
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 5: Common year (e.g., 1900 - century non-leap year)
  it("should return 365 for a century common year like 1900", () => {
    const date = new Date(1900, 0, 1); // Any date in 1900
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 6: Common year (e.g., 2023)
  it("should return 365 for a common year like 2023", () => {
    const date = new Date(2023, 0, 1); // Any date in 2023
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  // Test case 7: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const result = getDaysInYear(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Test case 8: Input as timestamp
  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // Any date in 2024
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  // Test case 9: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2023-07-01T00:00:00.000Z"; // Any date in 2023
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  // Test case 10: Date with specific time
  it("should return the correct number of days regardless of time", () => {
    const date = new Date(2024, 1, 15, 10, 30, 45); // Feb 15, 2024
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });
});
