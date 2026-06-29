import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (divisible by 4 but not 100)", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366); // Leap year
    expect(getDaysInYear(new Date(2024, 0, 1))).toBe(366); // Leap year
  });

  it("should return 366 for a leap year (divisible by 400)", () => {
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366); // Leap year (divisible by 400)
    expect(getDaysInYear(new Date(2400, 0, 1))).toBe(366); // Leap year (divisible by 400)
  });

  it("should return 365 for a common year", () => {
    expect(getDaysInYear(new Date(2014, 0, 1))).toBe(365); // Common year
    expect(getDaysInYear(new Date(2023, 0, 1))).toBe(365); // Common year
  });

  it("should return 365 for a non-leap century year (divisible by 100 but not 400)", () => {
    expect(getDaysInYear(new Date(2100, 0, 1))).toBe(365); // Common year (divisible by 100, not 400)
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365); // Common year (divisible by 100, not 400)
  });

  it("should return NaN for an invalid date", () => {
    expect(getDaysInYear(new Date(NaN))).toBeNaN();
  });

  it("should accept a timestamp as an argument", () => {
    const date = new Date(2020, 5, 15).getTime(); // 2020 is a leap year
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should accept a string as an argument", () => {
    const date = "2021-01-01T00:00:00.000Z"; // 2021 is a common year
    expect(getDaysInYear(date)).toBe(365);
  });
});
