import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 29 for February in a leap year", () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February in a common year", () => {
    const date = new Date(2001, 1); // February 2001
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for a 31-day month (e.g., January)", () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for a 30-day month (e.g., April)", () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should work with a timestamp as input", () => {
    const timestamp = new Date(2024, 1, 15).getTime(); // February 2024 (leap year)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("should work with a date string as input", () => {
    const dateString = "2023-07-01T00:00:00.000Z"; // July 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(31);
  });

  it("should handle invalid dates gracefully", () => {
    const invalidDate = new Date(NaN);
    const result = getDaysInMonth(invalidDate);
    expect(isNaN(result)).toBe(true);
  });
});
