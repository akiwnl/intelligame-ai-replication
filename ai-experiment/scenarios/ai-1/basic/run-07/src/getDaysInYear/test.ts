import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("returns 366 for a leap year", () => {
    const result = getDaysInYear(new Date(2012, 0, 1)); // 2012 is a leap year
    expect(result).toBe(366);
  });

  it("returns 365 for a common year", () => {
    const result = getDaysInYear(new Date(2014, 0, 1)); // 2014 is a common year
    expect(result).toBe(365);
  });

  it("returns 366 for a year divisible by 400 (e.g., 2000)", () => {
    const result = getDaysInYear(new Date(2000, 0, 1)); // 2000 is a leap year
    expect(result).toBe(366);
  });

  it("returns 365 for a year divisible by 100 but not by 400 (e.g., 1900)", () => {
    const result = getDaysInYear(new Date(1900, 0, 1)); // 1900 is a common year
    expect(result).toBe(365);
  });

  it("accepts a timestamp as a date", () => {
    const timestamp = new Date(2024, 5, 10).getTime(); // 2024 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("accepts a string as a date", () => {
    const dateString = "2023-07-01T00:00:00.000Z"; // 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });

  it("returns NaN for an invalid date input", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
