import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("returns 28 for February in a common year", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2014, 8, 15).getTime();
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-07-20T10:00:00Z";
    const result = getDate(dateString);
    // Note: When parsing from string, Date might be in UTC.
    // We'll test for the local date values as per toDate's description.
    expect(result).toBe(20);
  });

  it("returns NaN if the date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the input is an invalid string", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
