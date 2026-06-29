import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month for a given date", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should return the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("should return the last day of the month (31 days)", () => {
    const date = new Date(2023, 0, 31); // January 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("should return the last day of the month (30 days)", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("should return the last day of the month (28 days)", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023 (non-leap year)
    const result = getDate(date);
    expect(result).toBe(28);
  });

  it("should return NaN for an invalid date", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 0, 15).getTime();
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("should accept a string as input", () => {
    const dateString = "2023-01-20T10:00:00.000Z";
    const result = getDate(dateString);
    expect(result).toBe(20);
  });
});
