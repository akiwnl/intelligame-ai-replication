import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test case 1: January (31 days)
  it("should return 31 for January", () => {
    const date = new Date(2023, 0, 15); // Jan 15, 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 2: March (31 days)
  it("should return 31 for March", () => {
    const date = new Date(2023, 2, 1); // Mar 1, 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 3: April (30 days)
  it("should return 30 for April", () => {
    const date = new Date(2023, 3, 10); // Apr 10, 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test case 4: February in a common year (28 days)
  it("should return 28 for February in a common year", () => {
    const date = new Date(2023, 1, 1); // Feb 1, 2023
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test case 5: February in a leap year (29 days) - Example case
  it("should return 29 for February in a leap year (example case)", () => {
    const date = new Date(2000, 1); // Feb 1, 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test case 6: February in another leap year (2024)
  it("should return 29 for February in 2024 (leap year)", () => {
    const date = new Date(2024, 1, 1); // Feb 1, 2024
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test case 7: February in a non-leap century year (1900)
  it("should return 28 for February in 1900 (non-leap century year)", () => {
    const date = new Date(1900, 1, 1); // Feb 1, 1900
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test case 8: February in a leap century year (2000)
  it("should return 29 for February in 2000 (leap century year)", () => {
    const date = new Date(2000, 1, 1); // Feb 1, 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test case 9: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 3, 10).getTime(); // Apr 10, 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test case 10: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2023-01-15T10:00:00Z"; // Jan 15, 2023
    expect(getDaysInMonth(dateString)).toBe(31);
  });

  // Test case 11: Invalid date input
  it("should return NaN if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDaysInMonth(invalidDate))).toBe(true);
  });

  // Test case 12: Invalid date string input
  it("should return NaN if the date string is invalid", () => {
    expect(isNaN(getDaysInMonth("invalid string"))).toBe(true);
  });

  // Test case 13: Date object with time components
  it("should return the correct number of days regardless of time components", () => {
    const date = new Date(2023, 1, 15, 23, 59, 59, 999); // Feb 15, 2023 23:59:59.999
    expect(getDaysInMonth(date)).toBe(28);
  });
});
