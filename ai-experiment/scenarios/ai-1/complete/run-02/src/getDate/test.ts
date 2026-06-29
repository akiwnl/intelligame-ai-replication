import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29th, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const date = new Date(2024, 0, 1); // January 1st, 2024
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns 31 for a month with 31 days", () => {
    const date = new Date(2024, 0, 31); // January 31st, 2024
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns 30 for a month with 30 days", () => {
    const date = new Date(2024, 3, 30); // April 30th, 2024
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("returns 28 for February in a common year", () => {
    const date = new Date(2023, 1, 28); // February 28th, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("returns 29 for February in a leap year", () => {
    const date = new Date(2024, 1, 29); // February 29th, 2024
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("accepts a timestamp as date argument", () => {
    const date = new Date(2014, 8, 15, 11, 30, 0);
    const timestamp = date.getTime();
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("accepts a date string as date argument", () => {
    const dateString = "2024-03-05T10:00:00.000Z";
    const result = getDate(dateString);
    // The actual date will depend on the timezone, but getDate should be consistent.
    // Let's create a date object from the string and check its date.
    const d = new Date(dateString);
    expect(result).toBe(d.getDate());
  });
});
