import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month for the given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns the day of the month for the beginning of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns the day of the month for the end of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // Jan 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns the day of the month for the end of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 15).getTime();
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("accepts a date string", () => {
    const date = "2023-01-20T10:00:00.000Z";
    const result = getDate(date);
    expect(result).toBe(20);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
