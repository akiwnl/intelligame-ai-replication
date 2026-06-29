import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // Jan 31, 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // Apr 30, 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("handles date arguments", () => {
    const result = getDate(new Date(2023, 0, 15));
    expect(result).toBe(15);
  });

  it("handles timestamp arguments", () => {
    const result = getDate(new Date(2023, 0, 15).getTime());
    expect(result).toBe(15);
  });

  it("handles string arguments", () => {
    const result = getDate("2023-01-15T10:00:00.000Z");
    expect(result).toBe(15);
  });

  it("returns NaN for Invalid Date argument", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for invalid string argument", () => {
    const result = getDate("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
