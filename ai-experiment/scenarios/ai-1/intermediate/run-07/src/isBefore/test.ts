import { isBefore } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isBefore", () => {
  it("returns true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("returns false if the dates are equal", () => {
    const date1 = new Date(2023, 5, 15, 10, 30, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 30, 0, 0);
    const result = isBefore(date1, date2);
    expect(result).toBe(false);
  });

  it("returns true if dates are equal but first has earlier milliseconds", () => {
    const date1 = new Date(2023, 5, 15, 10, 30, 0, 0);
    const date2 = new Date(2023, 5, 15, 10, 30, 0, 1);
    const result = isBefore(date1, date2);
    expect(result).toBe(true);
  });

  it("accepts timestamps as arguments", () => {
    const timestamp1 = new Date(2024, 0, 1).getTime();
    const timestamp2 = new Date(2025, 0, 1).getTime();
    const result = isBefore(timestamp1, timestamp2);
    expect(result).toBe(true);
  });

  it("accepts strings as arguments", () => {
    const dateString1 = "2025-12-31T23:59:59Z";
    const dateString2 = "2026-01-01T00:00:00Z";
    const result = isBefore(dateString1, dateString2);
    expect(result).toBe(true);
  });

  it("returns false if the first date is invalid", () => {
    const result = isBefore(new Date(NaN), new Date(2023, 0, 1));
    expect(result).toBe(false);
  });

  it("returns false if the second date is invalid", () => {
    const result = isBefore(new Date(2023, 0, 1), new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if both dates are invalid", () => {
    const result = isBefore(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
