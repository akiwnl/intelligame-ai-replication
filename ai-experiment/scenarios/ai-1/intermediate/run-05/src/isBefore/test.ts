import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return false if the first date is NOT before the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false); // Example: 10 July 1989 is NOT before 11 February 1987
  });

  it("should return true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different time components", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should handle date inputs as timestamps", () => {
    const timestamp1 = new Date(1987, 1, 11).getTime();
    const timestamp2 = new Date(1989, 6, 10).getTime();
    const result = isBefore(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should handle date inputs as strings", () => {
    const dateString1 = "1987-02-11T00:00:00.000Z";
    const dateString2 = "1989-07-10T00:00:00.000Z";
    const result = isBefore(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should return false if either date is invalid", () => {
    expect(isBefore(new Date(NaN), new Date(2023, 0, 1))).toBe(false);
    expect(isBefore(new Date(2023, 0, 1), new Date(NaN))).toBe(false);
    expect(isBefore(new Date(NaN), new Date(NaN))).toBe(false);
  });
});
