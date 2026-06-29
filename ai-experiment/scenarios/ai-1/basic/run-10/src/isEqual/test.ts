import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the given dates are equal (same milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("returns false if the given dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the given dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the given dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 3, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("accepts timestamps", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0).getTime();
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0).getTime();
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("accepts date strings", () => {
    const date1 = "2014-07-02T06:30:45.000Z";
    const date2 = "2014-07-02T06:30:45.000Z";
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("returns false for an invalid left date", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false for an invalid right date", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false for both invalid dates", () => {
    const date1 = new Date(NaN);
    const date2 = new Date(NaN);
    expect(isEqual(date1, date2)).toBe(false);
  });
});
