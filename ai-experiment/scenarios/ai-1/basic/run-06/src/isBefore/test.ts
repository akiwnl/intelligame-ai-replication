import { isBefore } from "./index";

describe("isBefore", () => {
  it("should return true if the first date is strictly before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is strictly after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are exactly equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle dates with different times correctly (first is before)", () => {
    const date1 = new Date(2023, 5, 15, 10, 0, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 0, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("should accept timestamps as input", () => {
    const timestamp1 = new Date(1987, 1, 11).getTime();
    const timestamp2 = new Date(1989, 6, 10).getTime();
    const result = isBefore(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should accept date strings as input", () => {
    const dateString1 = "1987-02-11T10:00:00.000Z";
    const dateString2 = "1989-07-10T10:00:00.000Z";
    const result = isBefore(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should return false if the first date is invalid", () => {
    const result = isBefore(new Date(NaN), new Date(2023, 0, 1));
    expect(result).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const result = isBefore(new Date(2023, 0, 1), new Date(NaN));
    expect(result).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const result = isBefore(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
