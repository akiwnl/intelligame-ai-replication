import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is after the second", () => {
    const date1 = new Date(1989, 6, 10);
    const date2 = new Date(1987, 1, 11);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 0, 1);
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

  it("should accept timestamps as input", () => {
    const date1 = new Date(2023, 0, 1).getTime();
    const date2 = new Date(2023, 0, 2).getTime();
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should accept strings as input", () => {
    const date1 = "2023-01-01T10:00:00.000Z";
    const date2 = "2023-01-02T10:00:00.000Z";
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should compare dates with different time components correctly", () => {
    const date1 = new Date(2023, 0, 1, 9, 59, 59, 999);
    const date2 = new Date(2023, 0, 1, 10, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });
});
