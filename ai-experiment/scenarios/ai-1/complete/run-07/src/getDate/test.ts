import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month for the given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const date = new Date(2024, 0, 1); // January 1, 2024
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns the last day of a 31-day month", () => {
    const date = new Date(2024, 0, 31); // January 31, 2024
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns the last day of a 30-day month", () => {
    const date = new Date(2024, 3, 30); // April 30, 2024
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("returns the last day of February in a leap year", () => {
    const date = new Date(2024, 1, 29); // February 29, 2024
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns the last day of February in a non-leap year", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("accepts a timestamp as the first argument", () => {
    const date = new Date(2024, 0, 15).getTime(); // January 15, 2024 as timestamp
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("accepts a date string as the first argument", () => {
    const date = "2024-01-20T00:00:00.000Z";
    const result = getDate(date);
    // Note: Date parsing from string can be timezone dependent.
    // For getDate, it should still return the day of month correctly.
    const expectedDay = new Date(date).getDate(); // Get date from parsed string
    expect(result).toBe(expectedDay);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the date string is invalid", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
