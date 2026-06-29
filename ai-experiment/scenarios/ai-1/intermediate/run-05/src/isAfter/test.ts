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
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 1);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const result = isAfter(date1, date2);
    expect(result).toBe(true);
  });

  it("should handle date inputs as timestamps", () => {
    const timestamp1 = new Date(1989, 6, 10).getTime();
    const timestamp2 = new Date(1987, 1, 11).getTime();
    const result = isAfter(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should handle date inputs as strings", () => {
    const dateString1 = "1989-07-10T00:00:00.000Z";
    const dateString2 = "1987-02-11T00:00:00.000Z";
    const result = isAfter(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should return false if either date is invalid", () => {
    expect(isAfter(new Date(NaN), new Date(2023, 0, 1))).toBe(false);
    expect(isAfter(new Date(2023, 0, 1), new Date(NaN))).toBe(false);
    expect(isAfter(new Date(NaN), new Date(NaN))).toBe(false);
  });
});
