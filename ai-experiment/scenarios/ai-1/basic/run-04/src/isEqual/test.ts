import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if one date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2014, 6, 2);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should accept timestamps as arguments", () => {
    const date1 = new Date(2023, 9, 26, 10, 0, 0).getTime();
    const date2 = new Date(2023, 9, 26, 10, 0, 0).getTime();
    const date3 = new Date(2023, 9, 26, 10, 0, 1).getTime();
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });

  it("should accept date strings as arguments", () => {
    const date1 = "2023-10-26T10:00:00.000Z";
    const date2 = "2023-10-26T10:00:00.000Z";
    const date3 = "2023-10-26T10:00:01.000Z";
    expect(isEqual(date1, date2)).toBe(true);
    expect(isEqual(date1, date3)).toBe(false);
  });
});
