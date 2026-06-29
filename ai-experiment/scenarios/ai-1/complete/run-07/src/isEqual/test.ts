import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the dates are not equal (different milliseconds)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the dates are not equal (different seconds)", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 0);
    const date2 = new Date(2024, 0, 1, 10, 0, 1);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the dates are not equal (different days)", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 0, 2);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("accepts timestamps as arguments", () => {
    const date1 = new Date(2024, 0, 1, 12, 0, 0).getTime();
    const date2 = new Date(2024, 0, 1, 12, 0, 0).getTime();
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("accepts date strings as arguments", () => {
    const date1 = "2024-01-01T12:00:00.000Z";
    const date2 = "2024-01-01T12:00:00.000Z";
    const result = isEqual(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is invalid", () => {
    const result = isEqual(new Date(NaN), new Date(2024, 0, 1));
    expect(result).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const result = isEqual(new Date(2024, 0, 1), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const result = isEqual(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if one of the date strings is invalid", () => {
    const result = isEqual("invalid date", new Date(2024, 0, 1));
    expect(result).toBe(false);
  });
});
