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
    const date1 = new Date(1989, 6, 10, 10, 0, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should compare dates with different time components correctly", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should work with timestamps as input", () => {
    const date1 = new Date(2000, 0, 1).getTime();
    const date2 = new Date(2000, 0, 2).getTime();
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should work with string dates as input", () => {
    const date1 = "2000-01-01T00:00:00.000Z";
    const date2 = "2000-01-02T00:00:00.000Z";
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should handle invalid dates gracefully", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2000, 0, 1);
    expect(isBefore(date1, date2)).toBe(false);
    expect(isBefore(date2, date1)).toBe(false);
    expect(isBefore(date1, new Date(NaN))).toBe(false);
  });
});
