import { isEqual } from "./index";

describe("isEqual", () => {
  it("should return true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("should return false if the dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if the dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45);
    const date2 = new Date(2014, 6, 2, 6, 30, 46);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("should return false if one date is invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2023, 0, 1);
    expect(isEqual(invalidDate, validDate)).toBe(false);
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  it("should return false if both dates are invalid (NaN comparison is false)", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  it("should accept timestamps as date arguments", () => {
    const timestamp = new Date(2023, 5, 10, 10, 0, 0, 123).getTime();
    expect(isEqual(timestamp, timestamp)).toBe(true);
    expect(isEqual(timestamp, timestamp + 1)).toBe(false);
  });

  it("should accept date strings as date arguments", () => {
    const dateString = "2023-01-10T10:00:00.000Z";
    const dateStringSame = "2023-01-10T10:00:00.000Z";
    const dateStringDiff = "2023-01-10T10:00:00.001Z";

    expect(isEqual(dateString, dateStringSame)).toBe(true);
    expect(isEqual(dateString, dateStringDiff)).toBe(false);
  });
});
