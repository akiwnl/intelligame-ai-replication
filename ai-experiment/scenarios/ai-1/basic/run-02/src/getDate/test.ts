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
    const date = new Date(2023, 2, 31); // March 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("should return the day of the month for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return the day of the month for a non-leap February", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 4, 15, 10, 30, 0).getTime(); // May 15, 2023
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-06-20T14:00:00.000Z"; // June 20, 2023 UTC
    const result = getDate(dateString);
    // getDate returns the day of the month in local time.
    // Assuming a timezone where 2023-06-20T14:00:00Z is still June 20.
    expect(result).toBe(20);
  });

  it("should handle invalid dates gracefully", () => {
    const invalidDate = new Date(NaN);
    const result = getDate(invalidDate);
    expect(isNaN(result)).toBe(true);
  });
});
