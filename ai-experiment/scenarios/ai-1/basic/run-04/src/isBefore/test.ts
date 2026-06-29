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
    const date1 = new Date(2023, 9, 26, 10, 0, 0);
    const date2 = new Date(2023, 9, 26, 10, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components correctly", () => {
    const date1 = new Date(2023, 9, 26, 10, 0, 0);
    const date2 = new Date(2023, 9, 26, 10, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("should return false if either date is invalid", () => {
    expect(isBefore(new Date(NaN), new Date(2023, 0, 1))).toBe(false);
    expect(isBefore(new Date(2023, 0, 1), new Date(NaN))).toBe(false);
    expect(isBefore(new Date(NaN), new Date(NaN))).toBe(false);
  });

  it("should accept timestamps as arguments", () => {
    const date1 = new Date(1987, 1, 11).getTime();
    const date2 = new Date(1989, 6, 10).getTime();
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("should accept date strings as arguments", () => {
    const date1 = "1987-02-11T00:00:00.000Z";
    const date2 = "1989-07-10T00:00:00.000Z";
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });
});
