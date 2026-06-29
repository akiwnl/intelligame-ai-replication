import { getDay } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDay", () => {
  it("returns the day of the week for the given date (Sunday is 0)", () => {
    const date = new Date(2012, 1, 29); // 29 February 2012, which was a Wednesday
    const result = getDay(date);
    expect(result).toBe(3); // Wednesday
  });

  it("returns 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // 1 October 2023, a Sunday
    const result = getDay(date);
    expect(result).toBe(0);
  });

  it("returns 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // 2 October 2023, a Monday
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("returns 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // 7 October 2023, a Saturday
    const result = getDay(date);
    expect(result).toBe(6);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2023, 10, 8).getTime(); // 8 November 2023, a Wednesday
    const result = getDay(timestamp);
    expect(result).toBe(3);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-11-09T10:00:00Z"; // 9 November 2023 UTC, a Thursday
    const result = getDay(dateString);
    expect(result).toBe(4);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDay(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid string date", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
