import { getDate } from "./index";

describe("getDate", () => {
  // Test case 1: Basic date, mid-month
  it("should return the day of the month for a valid date", () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024
    expect(getDate(date)).toBe(15);
  });

  // Test case 2: First day of the month
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDate(date)).toBe(1);
  });

  // Test case 3: Last day of a 31-day month
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2024, 0, 31); // Jan 31, 2024
    expect(getDate(date)).toBe(31);
  });

  // Test case 4: Last day of a 30-day month
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2024, 3, 30); // Apr 30, 2024
    expect(getDate(date)).toBe(30);
  });

  // Test case 5: Last day of February in a leap year
  it("should return 29 for Feb 29 in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
    expect(getDate(date)).toBe(29);
  });

  // Test case 6: Last day of February in a non-leap year
  it("should return 28 for Feb 28 in a non-leap year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    expect(getDate(date)).toBe(28);
  });

  // Test case 7: Date with time components
  it("should ignore time components and return the day of the month", () => {
    const date = new Date(2024, 5, 15, 10, 30, 45, 123); // June 15, 2024 10:30:45.123
    expect(getDate(date)).toBe(15);
  });

  // Test case 8: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDate(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 9: Input as timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 0, 20).getTime(); // Jan 20, 2024 as timestamp
    expect(getDate(date)).toBe(20);
  });

  // Test case 10: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-03-05"; // March 5, 2024
    const result = getDate(dateString);
    // Note: new Date("YYYY-MM-DD") creates a date in local timezone at midnight
    expect(result).toBe(5);
  });
});
