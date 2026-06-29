import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns the last day of the month", () => {
    const date = new Date(2023, 0, 31); // Jan 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2023, 0, 15).getTime(); // Jan 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("accepts a date string", () => {
    const date = "2023-01-20T00:00:00.000Z"; // Jan 2023
    const result = getDate(date);
    expect(result).toBe(20);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid date string", () => {
    const result = getDate("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
