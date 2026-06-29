import { getDate } from "./index";

describe("getDate", () => {
  // Test case 1: Basic functionality - middle of the month
  it("should return the day of the month for a valid date", () => {
    const date = new Date(2023, 4, 15); // May 15, 2023
    expect(getDate(date)).toBe(15);
  });

  // Test case 2: First day of the month
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    expect(getDate(date)).toBe(1);
  });

  // Test case 3: Last day of a 31-day month
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 10, 31); // Nov 31, 2023 (this will resolve to Dec 1)
    // Actually, `new Date(2023, 10, 31)` becomes `December 1, 2023`
    // Let's use a valid 31st date:
    const dateOct = new Date(2023, 9, 31); // Oct 31, 2023
    expect(getDate(dateOct)).toBe(31);
  });

  // Test case 4: Last day of a 30-day month
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // Apr 30, 2023
    expect(getDate(date)).toBe(30);
  });

  // Test case 5: Last day of February in a common year
  it("should return 28 for Feb 28 in a common year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023
    expect(getDate(date)).toBe(28);
  });

  // Test case 6: Last day of February in a leap year
  it("should return 29 for Feb 29 in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024
    expect(getDate(date)).toBe(29);
  });

  // Test case 7: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 4, 15).getTime();
    expect(getDate(date)).toBe(15);
  });

  // Test case 8: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2023-05-15T10:00:00Z";
    expect(getDate(dateString)).toBe(15);
  });

  // Test case 9: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDate(invalidDate))).toBe(true);
  });

  // Test case 10: Invalid date string input
  it("should return NaN if the date string is invalid", () => {
    expect(isNaN(getDate("invalid string"))).toBe(true);
  });

  // Test case 11: Date object with time components
  it("should return the day of the month regardless of time components", () => {
    const date = new Date(2023, 4, 15, 23, 59, 59, 999); // May 15, 2023 23:59:59.999
    expect(getDate(date)).toBe(15);
  });
});
