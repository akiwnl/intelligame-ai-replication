import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if two dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if two dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if two dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should handle date inputs as timestamps", () => {
    const timestamp1 = new Date(2023, 5, 15, 10, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 5, 15, 10, 0, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should handle date inputs as strings", () => {
    const dateString1 = "2023-07-20T10:00:00.000Z";
    const dateString2 = "2023-07-20T10:00:00.000Z";
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should return false if one date is invalid", () => {
    expect(isEqual(new Date(NaN), new Date(2023, 0, 1))).toBe(false);
    expect(isEqual(new Date(2023, 0, 1), new Date(NaN))).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    expect(isEqual(new Date(NaN), new Date(NaN))).toBe(false);
  });
});
