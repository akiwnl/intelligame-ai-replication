import { isAfter } from "./index";

describe("isAfter", () => {
  it("should return true if the first date is after the second", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("should return false if the first date is before the second", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 30, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 30, 0, 0);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return true if only milliseconds differ and first is after", () => {
    const date1 = new Date(2023, 5, 15, 10, 30, 0, 500);
    const date2 = new Date(2023, 5, 15, 10, 30, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2024, 0, 1).getTime();
    const timestamp2 = new Date(2023, 0, 1).getTime();
    expect(isAfter(timestamp1, timestamp2)).toBe(true);
    expect(isAfter(timestamp2, timestamp1)).toBe(false);
  });

  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date();
    expect(isAfter(invalidDate, validDate)).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const validDate = new Date();
    const invalidDate = new Date(NaN);
    expect(isAfter(validDate, invalidDate)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    expect(isAfter(invalidDate1, invalidDate2)).toBe(false);
  });

  it("should return false for string inputs that are invalid dates", () => {
    expect(isAfter("invalid date", new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid date")).toBe(false);
    expect(isAfter("invalid date 1", "invalid date 2")).toBe(false);
  });
});
