import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 31 for a 31-day month (e.g., January)", () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for a 30-day month (e.g., April)", () => {
    const date = new Date(2023, 3, 15); // April 15, 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 29 for February in a leap year", () => {
    const date = new Date(2000, 1, 15); // February 15, 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);

    const date2 = new Date(2012, 1, 1); // February 1, 2012 (leap year)
    const result2 = getDaysInMonth(date2);
    expect(result2).toBe(29);
  });

  it("should return 28 for February in a non-leap year", () => {
    const date = new Date(2001, 1, 15); // February 15, 2001 (non-leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);

    const date2 = new Date(2014, 1, 1); // February 1, 2014 (non-leap year)
    const result2 = getDaysInMonth(date2);
    expect(result2).toBe(28);
  });

  it("should work correctly for century leap years (divisible by 400)", () => {
    const date = new Date(2000, 1, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should work correctly for century non-leap years (divisible by 100 but not 400)", () => {
    const date = new Date(1900, 1, 1); // February 1900
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 1, 5, 12, 0, 0); // February 5, 2024 (leap year)
    const timestamp = date.getTime();
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-06-10T10:00:00Z"; // June 10, 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });

  it("should return NaN if the date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN if the input is an invalid string", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
