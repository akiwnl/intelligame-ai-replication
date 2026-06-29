import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return the day of the month for a date at the beginning of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the day of the month for a date at the end of the month", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("should return the day of the month for a date in a non-leap year February", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2023, 4, 15).getTime(); // May 15, 2023
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-10-20T10:00:00Z"; // October 20, 2023
    const result = getDate(dateString);
    expect(result).toBe(20);
  });
});
