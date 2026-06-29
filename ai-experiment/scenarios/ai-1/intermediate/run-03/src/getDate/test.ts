import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the correct day for other months", () => {
    const date = new Date(2023, 10, 15); // November 15, 2023
    const result = getDate(date);
    expect(result).toBe(15);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 4, 10, 12, 30, 0);
    const timestamp = date.getTime();
    const result = getDate(timestamp);
    expect(result).toBe(10);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-07-20T10:00:00Z";
    const result = getDate(dateString);
    expect(result).toBe(20);
  });

  it("should return NaN if the date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should return NaN if the input is an invalid string", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
