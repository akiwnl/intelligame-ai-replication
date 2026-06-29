import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const date = new Date(2000, 1); // February 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a non-leap year", () => {
    const date = new Date(2001, 1); // February 2001 (non-leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("returns the number of days in a 31-day month (January)", () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns the number of days in a 30-day month (April)", () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("works with dates at the end of the month", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("works with dates at the beginning of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("accepts a timestamp as the date argument", () => {
    const date = new Date(2023, 10, 15, 12, 30, 0); // November 2023
    const result = getDaysInMonth(date.getTime());
    expect(result).toBe(30);
  });

  it("accepts a date string as the date argument", () => {
    const result = getDaysInMonth("2023-12-01T00:00:00.000Z"); // December 2023
    expect(result).toBe(31);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input date string is invalid", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
