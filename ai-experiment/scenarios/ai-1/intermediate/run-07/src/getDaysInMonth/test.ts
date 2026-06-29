import { getDaysInMonth } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDaysInMonth", () => {
  it("returns 31 for January (a 31-day month)", () => {
    const date = new Date(2023, 0, 15); // January
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("returns 28 for February in a common year", () => {
    const date = new Date(2023, 1, 15); // February 2023 (not a leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("returns 29 for February in a leap year", () => {
    const date = new Date(2000, 1, 15); // February 2000 (leap year)
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns 30 for April (a 30-day month)", () => {
    const date = new Date(2023, 3, 15); // April
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2024, 1, 1).getTime(); // February 2024 (leap year)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-07-01T00:00:00Z"; // July 2023 (31 days)
    const result = getDaysInMonth(dateString);
    expect(result).toBe(31);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for an invalid string date", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });
});
