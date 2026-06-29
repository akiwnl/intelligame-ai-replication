import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the correct day for mid-month dates", () => {
    const date = new Date(2023, 5, 15); // June 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("should return the last day for months with 31 days", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("should return the last day for months with 30 days", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp input", () => {
    const timestamp = new Date(2023, 10, 20).getTime(); // November 20, 2023
    const result = getDate(timestamp);
    expect(result).toBe(20);
  });

  it("should work with a date string input", () => {
    const dateString = "2023-07-04T12:00:00Z"; // July 4, 2023
    const result = getDate(dateString);
    expect(result).toBe(4);
  });
});
