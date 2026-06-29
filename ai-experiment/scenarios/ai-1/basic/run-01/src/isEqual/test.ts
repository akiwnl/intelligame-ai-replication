import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if dates are exactly equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if dates differ by any component", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 5, 15);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 5, 15);
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

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2023, 5, 15, 10, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 5, 15, 10, 0, 0, 0).getTime();
    const timestamp3 = new Date(2023, 5, 15, 10, 0, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
    expect(isEqual(timestamp1, timestamp3)).toBe(false);
  });

  it("should work with date strings as input", () => {
    const dateString1 = "2023-05-15T10:00:00.000Z";
    const dateString2 = "2023-05-15T10:00:00.000Z";
    const dateString3 = "2023-05-15T10:00:00.001Z";
    expect(isEqual(dateString1, dateString2)).toBe(true);
    expect(isEqual(dateString1, dateString3)).toBe(false);
  });
});
