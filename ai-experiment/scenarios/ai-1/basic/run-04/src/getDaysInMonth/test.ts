import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 31 for months with 31 days", () => {
    // January (0), March (2), May (4), July (6), August (7), October (9), December (11)
    expect(getDaysInMonth(new Date(2023, 0, 1))).toBe(31); // January
    expect(getDaysInMonth(new Date(2023, 2, 1))).toBe(31); // March
    expect(getDaysInMonth(new Date(2023, 4, 1))).toBe(31); // May
    expect(getDaysInMonth(new Date(2023, 6, 1))).toBe(31); // July
    expect(getDaysInMonth(new Date(2023, 7, 1))).toBe(31); // August
    expect(getDaysInMonth(new Date(2023, 9, 1))).toBe(31); // October
    expect(getDaysInMonth(new Date(2023, 11, 1))).toBe(31); // December
  });

  it("should return 30 for months with 30 days", () => {
    // April (3), June (5), September (8), November (10)
    expect(getDaysInMonth(new Date(2023, 3, 1))).toBe(30); // April
    expect(getDaysInMonth(new Date(2023, 5, 1))).toBe(30); // June
    expect(getDaysInMonth(new Date(2023, 8, 1))).toBe(30); // September
    expect(getDaysInMonth(new Date(2023, 10, 1))).toBe(30); // November
  });

  it("should return 29 for February in a leap year", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29); // Leap year
    expect(getDaysInMonth(new Date(2012, 1, 1))).toBe(29); // Leap year
    expect(getDaysInMonth(new Date(2024, 1, 1))).toBe(29); // Leap year
  });

  it("should return 28 for February in a common year", () => {
    expect(getDaysInMonth(new Date(2023, 1, 1))).toBe(28); // Common year
    expect(getDaysInMonth(new Date(2014, 1, 1))).toBe(28); // Common year
    expect(getDaysInMonth(new Date(1900, 1, 1))).toBe(28); // Common year (divisible by 100 but not by 400)
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2023, 1, 15, 10, 0, 0).getTime(); // Feb 15, 2023
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(28);
  });

  it("should accept a date string as date argument", () => {
    const result = getDaysInMonth("2024-02-15T14:30:00.000Z"); // Feb 15, 2024 (leap year)
    expect(result).toBe(29);
  });
});
