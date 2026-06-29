import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (2012)", () => {
    const date = new Date(2012, 0, 1); // Jan 1, 2012
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should return 366 for a leap year (2000 - century leap year)", () => {
    const date = new Date(2000, 5, 15); // June 15, 2000
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should return 365 for a common year (2014)", () => {
    const date = new Date(2014, 0, 1); // Jan 1, 2014
    expect(getDaysInYear(date)).toBe(365);
  });

  it("should return 365 for a common century year (1900 - not a leap year)", () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    expect(getDaysInYear(date)).toBe(365);
  });

  it("should return 365 for a common century year (2100 - not a leap year)", () => {
    const date = new Date(2100, 0, 1); // Jan 1, 2100
    expect(getDaysInYear(date)).toBe(365);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // Jan 1, 2024 (leap year)
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN for an invalid string input", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
