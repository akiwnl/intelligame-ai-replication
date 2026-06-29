import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the dates are equal", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("handles dates with different times correctly", () => {
    const date1 = new Date(1989, 6, 10, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 10, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("accepts timestamps as dates", () => {
    const timestamp1 = new Date(1987, 1, 11).getTime();
    const timestamp2 = new Date(1989, 6, 10).getTime();
    const result = isBefore(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("accepts strings as dates", () => {
    const dateString1 = "1987-02-11T00:00:00.000Z";
    const dateString2 = "1989-07-10T00:00:00.000Z";
    const result = isBefore(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("returns false for invalid date inputs", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2023, 0, 1);
    expect(isBefore(invalidDate, validDate)).toBe(false);
    expect(isBefore(validDate, invalidDate)).toBe(false);
    expect(isBefore(invalidDate, invalidDate)).toBe(false);
  });
});
