import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the given dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the given dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the given dates are not equal (different seconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45);
    const date2 = new Date(2014, 6, 2, 6, 30, 46);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the given dates are not equal (different days)", () => {
    const date1 = new Date(2014, 6, 2);
    const date2 = new Date(2014, 6, 3);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("accepts timestamps as date arguments", () => {
    const timestamp1 = new Date(2023, 0, 1, 10, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 10, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("accepts strings as date arguments", () => {
    const dateString1 = "2023-01-01T10:00:00.000Z";
    const dateString2 = "2023-01-01T10:00:00.000Z";
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is invalid", () => {
    const result = isEqual(new Date(NaN), new Date(2023, 0, 1));
    expect(result).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const result = isEqual(new Date(2023, 0, 1), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const result = isEqual(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
