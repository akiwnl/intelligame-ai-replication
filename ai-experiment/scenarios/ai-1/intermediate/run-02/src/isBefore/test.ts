import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isBefore(date1, date2)).toBe(true);
  });

  it("should return false if the first date is after the second", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should handle dates with different times but same day", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("should return false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(NaN);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should work with timestamp inputs", () => {
    const timestamp1 = new Date(2023, 5, 15).getTime();
    const timestamp2 = new Date(2023, 5, 16).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(true);
    expect(isBefore(timestamp2, timestamp1)).toBe(false);
  });

  it("should work with date string inputs", () => {
    const dateString1 = "2023-07-01T12:00:00Z";
    const dateString2 = "2023-07-02T12:00:00Z";
    expect(isBefore(dateString1, dateString2)).toBe(true);
    expect(isBefore(dateString2, dateString1)).toBe(false);
  });
});
