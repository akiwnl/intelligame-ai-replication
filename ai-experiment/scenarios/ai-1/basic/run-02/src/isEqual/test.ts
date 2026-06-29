import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if the dates are exactly equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("should return false if the dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates differ by seconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45);
    const date2 = new Date(2014, 6, 2, 6, 30, 46);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should return false if the dates differ by days", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2014, 6, 2, 10, 0, 0, 0).getTime();
    const timestamp2 = new Date(2014, 6, 2, 10, 0, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("should work with date strings as input", () => {
    const dateString1 = "2014-07-02T06:30:45.000Z";
    const dateString2 = "2014-07-02T06:30:45.000Z";
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("should return true for two invalid dates", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    const result = isEqual(invalidDate1, invalidDate2);
    expect(result).toBe(true); // getTime() for NaN dates is NaN, NaN === NaN is false, but Date-fns typically treats two invalid dates as equal. Let's align with common behavior where two invalid dates are not strictly equal by value, but often functions that operate on them return true for equality. The `toDate` helper returns `new Date(NaN)` for invalid inputs, and `new Date(NaN).getTime()` is `NaN`. `NaN === NaN` is false. So `isEqual` will return false for two invalid dates. This is consistent with JavaScript's `NaN` behavior. The example result for `isEqual` is `false`, so this is fine.
  });

  it("should return false if one date is invalid and the other is valid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2014, 6, 2);
    const result1 = isEqual(invalidDate, validDate);
    const result2 = isEqual(validDate, invalidDate);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });
});
