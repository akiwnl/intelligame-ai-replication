import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(1989, 6, 10, 10, 30, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 30, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components correctly", () => {
    const date1 = new Date(1989, 6, 10, 10, 30, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 30, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(1987, 1, 11).getTime();
    const timestamp2 = new Date(1989, 6, 10).getTime();
    const result = isBefore(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should work with date strings as input", () => {
    const dateString1 = "1987-02-11T12:00:00.000Z";
    const dateString2 = "1989-07-10T12:00:00.000Z";
    const result = isBefore(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should handle invalid dates gracefully, returning false", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date();
    expect(isBefore(invalidDate, validDate)).toBe(false);
    expect(isBefore(validDate, invalidDate)).toBe(false);
    expect(isBefore(invalidDate, invalidDate)).toBe(false);
  });
});
