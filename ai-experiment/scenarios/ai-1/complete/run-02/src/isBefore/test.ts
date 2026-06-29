import { isBefore } from "./index";

describe("isBefore", () => {
  it("returns true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(true);
  });

  it("returns false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10);
    const date2 = new Date(1987, 1, 11);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("returns false if the dates are equal", () => {
    const date1 = new Date(1989, 6, 10, 12, 0, 0, 0);
    const date2 = new Date(1989, 6, 10, 12, 0, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("handles dates differing by milliseconds", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 0, 0);
    const date2 = new Date(2024, 0, 1, 10, 0, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("handles dates with different times on the same day", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 0);
    const date2 = new Date(2024, 0, 1, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(true);
    expect(isBefore(date2, date1)).toBe(false);
  });

  it("returns false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2024, 0, 1);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(NaN);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isBefore(date1, date2)).toBe(false);
  });

  it("accepts timestamps as date arguments", () => {
    const date1 = new Date(1987, 1, 11, 10, 0, 0);
    const date2 = new Date(1989, 6, 10, 12, 0, 0);
    expect(isBefore(date1.getTime(), date2.getTime())).toBe(true);
    expect(isBefore(date2.getTime(), date1.getTime())).toBe(false);
  });

  it("accepts date strings as date arguments", () => {
    const dateString1 = "1987-02-11T10:00:00.000Z";
    const dateString2 = "1989-07-10T12:00:00.000Z";
    expect(isBefore(dateString1, dateString2)).toBe(true);
    expect(isBefore(dateString2, dateString1)).toBe(false);
  });
});
