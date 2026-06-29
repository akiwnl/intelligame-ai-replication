import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("returns false if the dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500); // JSDoc example
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different minutes)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 0, 0);
    const date2 = new Date(2014, 6, 2, 6, 31, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different hours)", () => {
    const date1 = new Date(2014, 6, 2, 6, 0, 0, 0);
    const date2 = new Date(2014, 6, 2, 7, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2, 0, 0, 0, 0);
    const date2 = new Date(2014, 6, 3, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different months)", () => {
    const date1 = new Date(2014, 6, 1, 0, 0, 0, 0);
    const date2 = new Date(2014, 7, 1, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different years)", () => {
    const date1 = new Date(2014, 0, 1, 0, 0, 0, 0);
    const date2 = new Date(2015, 0, 1, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the first date is invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2014, 6, 2);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("accepts timestamps as date arguments", () => {
    const timestamp1 = new Date(2014, 6, 2, 6, 30, 45, 0).getTime();
    const timestamp2 = new Date(2014, 6, 2, 6, 30, 45, 0).getTime();
    const timestamp3 = new Date(2014, 6, 2, 6, 30, 45, 500).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
    expect(isEqual(timestamp1, timestamp3)).toBe(false);
  });

  it("accepts date strings as date arguments", () => {
    const dateString1 = "2014-07-02T06:30:45.000Z";
    const dateString2 = "2014-07-02T06:30:45.000Z";
    const dateString3 = "2014-07-02T06:30:45.500Z";
    expect(isEqual(dateString1, dateString2)).toBe(true);
    expect(isEqual(dateString1, dateString3)).toBe(false);
  });
});
