import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year", () => {
    // 2012 is a leap year
    const date1 = new Date(2012, 0, 1);
    expect(getDaysInYear(date1)).toBe(366);

    // 2000 is a leap year (divisible by 400)
    const date2 = new Date(2000, 6, 15);
    expect(getDaysInYear(date2)).toBe(366);
  });

  it("should return 365 for a non-leap year", () => {
    // 2014 is not a leap year
    const date1 = new Date(2014, 0, 1);
    expect(getDaysInYear(date1)).toBe(365);

    // 1900 is not a leap year (divisible by 100 but not 400)
    const date2 = new Date(1900, 1, 1);
    expect(getDaysInYear(date2)).toBe(365);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 5, 20, 12, 0, 0); // 2024 is a leap year
    const timestamp = date.getTime();
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-01-01T00:00:00Z"; // 2023 is a non-leap year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  it("should return NaN if the date is invalid", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN if the input is an invalid string", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
