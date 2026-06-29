import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (2012)", () => {
    const date = new Date(2012, 0, 1); // January 1, 2012
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year (2014)", () => {
    const date = new Date(2014, 0, 1); // January 1, 2014
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 366 for a century leap year (2000)", () => {
    const date = new Date(2000, 0, 1); // January 1, 2000
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a century common year (1900)", () => {
    const date = new Date(1900, 0, 1); // January 1, 1900
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should work with a timestamp as input", () => {
    const date = new Date(2024, 5, 15).getTime(); // 2024 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should work with a string as input", () => {
    const date = "2023-07-20T10:00:00.000Z"; // 2023 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = getDaysInYear(date);
    expect(isNaN(result)).toBe(true);
  });
});
