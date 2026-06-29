import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("should return false if dates are different by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates are different by seconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates are different by minutes", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 0, 0);
    const date2 = new Date(2014, 6, 2, 6, 31, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates are different by hours", () => {
    const date1 = new Date(2014, 6, 2, 6, 0, 0, 0);
    const date2 = new Date(2014, 6, 2, 7, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if dates are different by day", () => {
    const date1 = new Date(2014, 6, 2, 0, 0, 0, 0);
    const date2 = new Date(2014, 6, 3, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp3 = new Date(2023, 0, 1, 12, 0, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
    expect(isEqual(timestamp1, timestamp3)).toBe(false);
  });

  it("should return false if the left date is invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date();
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  it("should return false if the right date is invalid", () => {
    const validDate = new Date();
    const invalidDate = new Date(NaN);
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  it("should return false for string inputs that are invalid dates", () => {
    expect(isEqual("invalid date", new Date())).toBe(false);
    expect(isEqual(new Date(), "invalid date")).toBe(false);
    expect(isEqual("invalid date 1", "invalid date 2")).toBe(false);
  });
});
