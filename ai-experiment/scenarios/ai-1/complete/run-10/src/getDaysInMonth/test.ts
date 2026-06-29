import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test case 1: January (31 days)
  it("should return 31 for January", () => {
    const date = new Date(2024, 0, 15); // January
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 2: February in a leap year (29 days)
  it("should return 29 for February in a leap year", () => {
    const date = new Date(2024, 1, 15); // February 2024 (leap year)
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test case 3: February in a non-leap year (28 days)
  it("should return 28 for February in a non-leap year", () => {
    const date = new Date(2023, 1, 15); // February 2023 (non-leap year)
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test case 4: April (30 days)
  it("should return 30 for April", () => {
    const date = new Date(2024, 3, 15); // April
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test case 5: July (31 days)
  it("should return 31 for July", () => {
    const date = new Date(2024, 6, 15); // July
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 6: December (31 days)
  it("should return 31 for December", () => {
    const date = new Date(2024, 11, 15); // December
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 7: Year 1900 (not a leap year, divisible by 100 but not 400)
  it("should return 28 for February 1900 (non-leap year)", () => {
    const date = new Date(1900, 1, 1); // February 1900
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test case 8: Year 2000 (a leap year, divisible by 400)
  it("should return 29 for February 2000 (leap year)", () => {
    const date = new Date(2000, 1, 1); // February 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test case 9: Invalid date input
  it("should return NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date("invalid date"));
    expect(isNaN(result)).toBe(true);
  });

  // Test case 10: Input as timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 0, 1).getTime(); // January 2024 as timestamp
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 11: Input as date string
  it("should work with a date string as input", () => {
    const dateString = "2024-02-10"; // February 2024 (leap year)
    const result = getDaysInMonth(dateString);
    expect(result).toBe(29);
  });
});
