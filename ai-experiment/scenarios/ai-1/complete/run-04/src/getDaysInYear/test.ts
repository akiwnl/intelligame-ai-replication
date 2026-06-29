import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test case 1: Common year (365 days)
  it("should return 365 for a common year (e.g., 2023)", () => {
    const date = new Date(2023, 5, 15); // June 15, 2023
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 2: Leap year (366 days) - Example case
  it("should return 366 for a leap year (e.g., 2012)", () => {
    const date = new Date(2012, 0, 1); // Jan 1, 2012
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 3: Another leap year (2024)
  it("should return 366 for another leap year (e.g., 2024)", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 4: Non-leap century year (1900)
  it("should return 365 for a non-leap century year (e.g., 1900)", () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 5: Leap century year (2000)
  it("should return 366 for a leap century year (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test case 6: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 5, 15).getTime();
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test case 7: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2024-01-01T10:00:00Z";
    expect(getDaysInYear(dateString)).toBe(366);
  });

  // Test case 8: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDaysInYear(invalidDate))).toBe(true);
  });

  // Test case 9: Invalid date string input
  it("should return NaN if the date string is invalid", () => {
    expect(isNaN(getDaysInYear("invalid string"))).toBe(true);
  });

  // Test case 10: Date object with time components
  it("should return the correct number of days regardless of time components", () => {
    const date = new Date(2023, 0, 1, 23, 59, 59, 999); // Jan 1, 2023 23:59:59.999
    expect(getDaysInYear(date)).toBe(365);
  });
});
