import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if two dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if two dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by seconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by minutes", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 0, 0);
    const date2 = new Date(2014, 6, 2, 6, 31, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by hours", () => {
    const date1 = new Date(2014, 6, 2, 6, 0, 0, 0);
    const date2 = new Date(2014, 6, 2, 7, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by day", () => {
    const date1 = new Date(2014, 6, 2, 0, 0, 0, 0);
    const date2 = new Date(2014, 6, 3, 0, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by month", () => {
    const date1 = new Date(2014, 6, 1, 0, 0, 0, 0);
    const date2 = new Date(2014, 7, 1, 0, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates differ by year", () => {
    const date1 = new Date(2014, 0, 1, 0, 0, 0, 0);
    const date2 = new Date(2015, 0, 1, 0, 0, 0, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if one date is invalid", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should accept timestamps as input", () => {
    const date1 = new Date(2023, 0, 1, 10, 0, 0).getTime();
    const date2 = new Date(2023, 0, 1, 10, 0, 0).getTime();
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should accept strings as input", () => {
    const date1 = "2023-01-01T10:00:00.000Z";
    const date2 = "2023-01-01T10:00:00.000Z";
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });
});
