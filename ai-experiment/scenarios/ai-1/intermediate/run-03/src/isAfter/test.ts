import { isAfter } from "./index";

describe("isAfter", () => {
  it("should return true if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("should return false if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should handle same date with different times", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 1);
    const date2 = new Date(2023, 5, 15, 10, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);

    const date3 = new Date(2023, 5, 15, 10, 0, 0);
    const date4 = new Date(2023, 5, 15, 10, 0, 1);
    expect(isAfter(date3, date4)).toBe(false);
  });

  it("should work with timestamps as input", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0);
    const date2 = new Date(2023, 5, 14, 10, 0, 0);
    expect(isAfter(date1.getTime(), date2.getTime())).toBe(true);
  });

  it("should work with date strings as input", () => {
    const date1 = "2023-06-15T10:00:00Z";
    const date2 = "2023-06-14T10:00:00Z";
    expect(isAfter(date1, date2)).toBe(true);
  });

  it("should return false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 5, 15);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 5, 15);
    const date2 = new Date(NaN);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isAfter(date1, date2)).toBe(false);
  });

  it("should return false if inputs are invalid strings", () => {
    expect(isAfter("invalid date", new Date())).toBe(false);
    expect(isAfter(new Date(), "invalid date")).toBe(false);
    expect(isAfter("invalid date1", "invalid date2")).toBe(false);
  });
});
