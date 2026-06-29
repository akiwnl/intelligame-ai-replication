import { isAfter } from "./index";

describe("isAfter", () => {
  it("should return true if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 9, 26, 10, 0, 0);
    const date2 = new Date(2023, 9, 26, 10, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components correctly", () => {
    const date1 = new Date(2023, 9, 26, 10, 0, 1);
    const date2 = new Date(2023, 9, 26, 10, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);
    expect(isAfter(date2, date1)).toBe(false);
  });

  it("should return false if either date is invalid", () => {
    expect(isAfter(new Date(NaN), new Date(2023, 0, 1))).toBe(false);
    expect(isAfter(new Date(2023, 0, 1), new Date(NaN))).toBe(false);
    expect(isAfter(new Date(NaN), new Date(NaN))).toBe(false);
  });

  it("should accept timestamps as arguments", () => {
    const date1 = new Date(1989, 6, 10).getTime();
    const date2 = new Date(1987, 1, 11).getTime();
    expect(isAfter(date1, date2)).toBe(true);
    expect(isAfter(date2, date1)).toBe(false);
  });

  it("should accept date strings as arguments", () => {
    const date1 = "1989-07-10T00:00:00.000Z";
    const date2 = "1987-02-11T00:00:00.000Z";
    expect(isAfter(date1, date2)).toBe(true);
    expect(isAfter(date2, date1)).toBe(false);
  });
});
