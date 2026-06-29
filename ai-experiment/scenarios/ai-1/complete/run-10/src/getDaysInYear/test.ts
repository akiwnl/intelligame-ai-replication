import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test case 1: Leap year (divisible by 4, not by 100)
  it("should return 366 for a common leap year (e.g., 2024)", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 2: Non-leap year
  it("should return 365 for a common non-leap year (e.g., 2023)", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 3: Century leap year (divisible by 400)
  it("should return 366 for a century leap year (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 4: Century non-leap year (divisible by 100 but not 400)
  it("should return 365 for a century non-leap year (e.g., 1900)", () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 5: Another common leap year
  it("should return 366 for 2012 (example from JSDoc)", () => {
    const date = new Date(2012, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 6: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDaysInYear(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 7: Input as timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 5, 15).getTime(); // June 15, 2023 as timestamp
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 8: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-07-20"; // July 20, 2024
    const result = getDaysInYear(dateString);
    expect(result).toBe(366);
  });

  // Test case 9: Date object with time components (should ignore them)
  it("should ignore time components and determine days in year correctly", () => {
    const date = new Date(2023, 0, 1, 10, 30, 0); // Jan 1, 2023 with time
    expect(getDaysInYear(date)).toBe(365);
  });
});
