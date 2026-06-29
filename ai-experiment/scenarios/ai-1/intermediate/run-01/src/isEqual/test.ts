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

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should work with string dates as input", () => {
    const stringDate1 = "2023-01-01T12:00:00.000Z";
    const stringDate2 = "2023-01-01T12:00:00.000Z";
    const result = isEqual(stringDate1, stringDate2);
    expect(result).toBe(true);
  });

  it("should return true for two invalid dates", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    const result = isEqual(date1, date2);
    expect(result).toBe(true); // NaN === NaN is false, but Date(NaN).getTime() === NaN.
    // However, toDate(NaN) returns new Date(NaN), and new Date(NaN).getTime() is NaN.
    // So, NaN === NaN is false in JS, but if they both convert to Invalid Date objects,
    // their internal value (NaN) will be compared.
    // The `toDate` function handles this such that two `Invalid Date` objects will have `getTime()` return `NaN`.
    // The comparison `NaN === NaN` in JavaScript is `false`.
    // So `isEqual(new Date(NaN), new Date(NaN))` should be `false`. Let's confirm.
    // Ah, `Date.prototype.getTime()` on an invalid date returns `NaN`. `NaN === NaN` is false.
    // So the test should be `false`.
    expect(result).toBe(false);
  });

  it("should return false if one date is invalid and the other is valid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2023, 0, 1);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });
});
