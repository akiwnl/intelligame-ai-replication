import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components correctly", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 5, 15);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 5, 15);
    const date2 = new Date(NaN);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should work with timestamps as input", () => {
    const date1 = new Date(1987, 1, 11).getTime();
    const date2 = new Date(1989, 6, 10).getTime();
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should work with date strings as input", () => {
    const date1 = "1987-02-11T00:00:00Z";
    const date2 = "1989-07-10T00:00:00Z";
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });
});
