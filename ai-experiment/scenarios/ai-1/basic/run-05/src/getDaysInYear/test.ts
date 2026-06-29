import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // Leap year
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // Leap year (divisible by 400)
  });

  it("returns 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // Common year
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365); // Common year (divisible by 100 but not 400)
  });

  it("accepts a timestamp", () => {
    const date = new Date(2012, 0, 1).getTime();
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("accepts a date string", () => {
    const date = "2014-07-01T00:00:00.000Z";
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid date string", () => {
    const result = getDaysInYear("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
