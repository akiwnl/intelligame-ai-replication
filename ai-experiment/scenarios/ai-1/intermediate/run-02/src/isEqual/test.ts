import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if two dates are exactly equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 0, 0);
    const date2 = new Date(2014, 6, 2, 6, 31, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2014, 6, 2, 6, 0, 0, 0);
    const date2 = new Date(2014, 6, 2, 7, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by day", () => {
    const date1 = new Date(2014, 6, 2, 0, 0, 0, 0);
    const date2 = new Date(2014, 6, 3, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by month", () => {
    const date1 = new Date(2014, 6, 1, 0, 0, 0, 0);
    const date2 = new Date(2014, 7, 1, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates differ by year", () => {
    const date1 = new Date(2014, 0, 1, 0, 0, 0, 0);
    const date2 = new Date(2015, 0, 1, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if one date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should work with timestamp inputs", () => {
    const timestamp1 = new Date(2023, 5, 15, 10, 30, 0, 123).getTime();
    const timestamp2 = new Date(2023, 5, 15, 10, 30, 0, 123).getTime();
    const timestamp3 = new Date(2023, 5, 15, 10, 30, 0, 456).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
    expect(isEqual(timestamp1, timestamp3)).toBe(false);
  });

  it("should work with date string inputs", () => {
    const dateString1 = "2023-07-01T12:30:00.123Z";
    const dateString2 = "2023-07-01T12:30:00.123Z";
    const dateString3 = "2023-07-01T12:30:00.456Z";
    expect(isEqual(dateString1, dateString2)).toBe(true);
    expect(isEqual(dateString1, dateString3)).toBe(false);
  });
});
