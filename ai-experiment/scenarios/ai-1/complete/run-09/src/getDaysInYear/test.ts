import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test case 1: Common year (365 days)
  it("should return 365 for a common year", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    expect(getDaysInYear(date)).toBe(365);
    const date2 = new Date(2021, 5, 15); // June 15, 2021
    expect(getDaysInYear(date2)).toBe(365);
  });

  // Test case 2: Leap year (366 days) - divisible by 4 but not 100
  it("should return 366 for a leap year (divisible by 4, not 100)", () => {
    const date = new Date(2024, 0, 1); // January 1, 2024
    expect(getDaysInYear(date)).toBe(366);
    const date2 = new Date(2012, 1, 29); // February 29, 2012
    expect(getDaysInYear(date2)).toBe(366);
  });

  // Test case 3: Leap year (366 days) - divisible by 400
  it("should return 366 for a leap year (divisible by 400)", () => {
    const date = new Date(2000, 0, 1); // January 1, 2000
    expect(getDaysInYear(date)).toBe(366);
    const date2 = new Date(1600, 6, 1); // July 1, 1600
    expect(getDaysInYear(date2)).toBe(366);
  });

  // Test case 4: Non-leap century year (365 days) - divisible by 100 but not 400
  it("should return 365 for a non-leap century year", () => {
    const date = new Date(1900, 0, 1); // January 1, 1900
    expect(getDaysInYear(date)).toBe(365);
    const date2 = new Date(2100, 0, 1); // January 1, 2100
    expect(getDaysInYear(date2)).toBe(365);
  });

  // Test case 5: Invalid date input
  it("should return NaN for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDaysInYear(invalidDate))).toBe(true);
  });

  // Test case 6: Timestamp input
  it("should work with timestamp input", () => {
    const timestamp = new Date(2024, 3, 10).getTime(); // April 10, 2024 (leap year)
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  // Test case 7: String input
  it("should work with string input", () => {
    const dateString = "2023-07-15T12:00:00"; // July 15, 2023 (Local time string)
    expect(getDaysInYear(dateString)).toBe(365);
  });

  // Test case 8: Date with time components
  it("should ignore time components and return days in year", () => {
    const date = new Date(2024, 0, 1, 23, 59, 59, 999); // January 1, 2024 at end of day
    expect(getDaysInYear(date)).toBe(366);
  });
});
