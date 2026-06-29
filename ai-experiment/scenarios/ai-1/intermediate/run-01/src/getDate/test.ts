import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return the day of the month for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the day of the month for the last day of a 31-day month", () => {
    const date = new Date(2023, 10, 31); // October 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("should return the day of the month for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return the day of the month for February in a common year", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 5, 15).getTime(); // June 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("should work with a string as input", () => {
    const date = "2023-07-20T10:00:00.000Z"; // July 20, 2023
    const result = getDate(date);
    expect(result).toBe(20);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = getDate(date);
    expect(isNaN(result)).toBe(true);
  });
});
