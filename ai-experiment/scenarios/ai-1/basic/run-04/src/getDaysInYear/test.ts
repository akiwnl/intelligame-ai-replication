import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // Leap year
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // Leap year (divisible by 400)
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366); // Leap year
  });

  it("should return 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // Common year
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365); // Common year
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365); // Common year (divisible by 100 but not by 400)
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as date argument", () => {
    const timestamp = new Date(2020, 5, 15, 10, 0, 0).getTime(); // June 15, 2020 (leap year)
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should accept a date string as date argument", () => {
    const result = getDaysInYear("2023-01-01T14:30:00.000Z"); // Jan 1, 2023 (common year)
    expect(result).toBe(365);
  });
});
