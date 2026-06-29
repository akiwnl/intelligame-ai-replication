import { getDate } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDate", () => {
  it("returns the day of the month for the given date", () => {
    const date = new Date(2012, 1, 29); // 29 February 2012
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("returns the day of the month for the start of the month", () => {
    const date = new Date(2023, 0, 1); // 1 January 2023
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("returns the day of the month for the end of a 31-day month", () => {
    const date = new Date(2023, 0, 31); // 31 January 2023
    const result = getDate(date);
    expect(result).toBe(31);
  });

  it("returns the day of the month for the end of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // 30 April 2023
    const result = getDate(date);
    expect(result).toBe(30);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2023, 4, 15).getTime(); // 15 May 2023
    const result = getDate(timestamp);
    expect(result).toBe(15);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-06-20T10:00:00Z"; // 20 June 2023 UTC
    const result = getDate(dateString);
    expect(result).toBe(20);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid string date", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
