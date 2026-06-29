import { isEqual } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isEqual", () => {
  it("returns true if the dates are equal", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 500);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
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
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 46, 0);
    const result = isEqual(date1, date2);
    expect(result).toBe(false);
  });

  it("accepts timestamps as arguments", () => {
    const timestamp1 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2023, 0, 1, 12, 0, 0, 0).getTime();
    const result = isEqual(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("accepts strings as arguments", () => {
    const dateString1 = "2023-01-01T12:00:00.000Z";
    const dateString2 = "2023-01-01T12:00:00.000Z";
    const result = isEqual(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("returns true if both dates are invalid", () => {
    const result = isEqual(new Date(NaN), new Date(NaN));
    expect(result).toBe(true);
  });

  it("returns false if one date is invalid and the other is valid", () => {
    const result1 = isEqual(new Date(NaN), new Date(2023, 0, 1));
    const result2 = isEqual(new Date(2023, 0, 1), new Date(NaN));
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });
});
