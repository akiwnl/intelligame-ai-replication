import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month for the given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns the day of the month for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns the day of the month for the last day of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns the day of the month for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("returns the day of the month for a date in a non-leap year February", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("accepts a timestamp as the date argument", () => {
    const date = new Date(2023, 10, 15, 12, 30, 0); // Nov 15, 2023
    const result = getDate(date.getTime());
    expect(result).toBe(15);
  });

  it("accepts a date string as the date argument", () => {
    const result = getDate("2023-11-20T10:00:00.000Z");
    expect(result).toBe(20);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input date string is invalid", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
