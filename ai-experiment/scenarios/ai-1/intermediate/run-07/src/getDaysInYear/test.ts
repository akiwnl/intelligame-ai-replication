import { getDaysInYear } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    const date = new Date(2012, 0, 1); // 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a common year", () => {
    const date = new Date(2014, 0, 1); // 2014 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("returns 366 for a century leap year (divisible by 400)", () => {
    const date = new Date(2000, 0, 1); // 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns 365 for a century common year (divisible by 100 but not 400)", () => {
    const date = new Date(1900, 0, 1); // 1900 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2024, 5, 15).getTime(); // 2024 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-01-01T00:00:00Z"; // 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid string date", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
