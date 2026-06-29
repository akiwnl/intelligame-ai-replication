import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (e.g., 2012)", () => {
    const date = new Date(2012, 0, 1); // Jan 1, 2012
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year (e.g., 2014)", () => {
    const date = new Date(2014, 0, 1); // Jan 1, 2014
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 366 for a century leap year (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // Jan 1, 2000
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a century common year (e.g., 1900)", () => {
    const date = new Date(1900, 0, 1); // Jan 1, 1900
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should handle date as a timestamp", () => {
    const timestamp = new Date(2024, 5, 15).getTime(); // Jun 15, 2024 (leap year)
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should handle date as a string", () => {
    const dateString = "2023-09-01"; // Sep 1, 2023 (common year)
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  it("should return NaN for an invalid date input", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
