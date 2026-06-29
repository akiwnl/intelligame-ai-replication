import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // Leap year
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // Century leap year
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366); // Leap year
  });

  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // Common year
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365); // Century common year (not divisible by 400)
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365); // Common year
  });

  it("accepts a timestamp", () => {
    const result = getDaysInYear(new Date(2023, 5, 10).getTime());
    expect(result).toBe(365);
  });

  it("accepts a date string", () => {
    const result = getDaysInYear("2024-07-01T10:00:00.000Z");
    expect(result).toBe(366);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
