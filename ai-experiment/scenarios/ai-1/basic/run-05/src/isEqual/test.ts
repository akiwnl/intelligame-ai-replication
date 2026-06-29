import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    expect(isEqual(date1, date2)).toBe(true);
  });

  it("returns false if the dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  it("returns false if the dates are not equal (different years)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2015, 6, 2);
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
});
