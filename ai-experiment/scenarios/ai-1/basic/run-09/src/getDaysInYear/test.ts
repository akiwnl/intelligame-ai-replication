import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // 2012 is a leap year
    expect(getDaysInYear(new Date(2000, 6, 15))).toBe(366); // 2000 is a leap year
    expect(getDaysInYear(new Date(2004, 11, 31))).toBe(366); // 2004 is a leap year
  });

  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2013, 0, 1))).toBe(365); // 2013 is a common year
    expect(getDaysInYear(new Date(2001, 6, 15))).toBe(365); // 2001 is a common year
    expect(getDaysInYear(new Date(1900, 11, 31))).toBe(365); // 1900 is a common year (divisible by 100 but not 400)
  });

  it("handles date arguments", () => {
    const result = getDaysInYear(new Date(2023, 0, 15));
    expect(result).toBe(365);
  });

  it("handles timestamp arguments", () => {
    const result = getDaysInYear(new Date(2024, 0, 15).getTime()); // 2024 is leap
    expect(result).toBe(366);
  });

  it("handles string arguments", () => {
    const result = getDaysInYear("2023-01-01T10:00:00.000Z");
    expect(result).toBe(365);
  });

  it("returns NaN for Invalid Date argument", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for invalid string argument", () => {
    const result = getDaysInYear("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
