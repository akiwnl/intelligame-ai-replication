import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is before the second", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isBefore(date1, date2)).toBe(true);
  });

  it("should return false if the first date is after the second", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 0, 1, 12, 0, 0);
    const date2 = new Date(2023, 0, 1, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("should return false if one or both dates are invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2023, 0, 1);
    expect(isBefore(invalidDate, validDate)).toBe(false);
    expect(isBefore(validDate, invalidDate)).toBe(false);
    expect(isBefore(invalidDate, invalidDate)).toBe(false);
  });

  it("should accept timestamps as date arguments", () => {
    const timestamp1 = new Date(2023, 5, 9).getTime();
    const timestamp2 = new Date(2023, 5, 10).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(true);
    expect(isBefore(timestamp2, timestamp1)).toBe(false);
  });

  it("should accept date strings as date arguments", () => {
    const dateString1 = "2023-01-09";
    const dateString2 = "2023-01-10";
    expect(isBefore(dateString1, dateString2)).toBe(true);
    expect(isBefore(dateString2, dateString1)).toBe(false);
  });

  it("should compare dates with different time components", () => {
    const date1 = new Date(2023, 0, 1, 9, 59, 59);
    const date2 = new Date(2023, 0, 1, 10, 0, 0);
    expect(isBefore(date1, date2)).toBe(true);
  });
});
