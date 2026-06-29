import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year", () => {
    const date = new Date(2012, 0, 1); // Year 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year", () => {
    const date = new Date(2023, 0, 1); // Year 2023 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 365 for a year divisible by 100 but not 400 (e.g., 1900)", () => {
    const date = new Date(1900, 0, 1); // Year 1900 is not a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 366 for a year divisible by 400 (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // Year 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return NaN for an invalid date", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2024, 5, 15).getTime(); // 2024 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should accept a string as input", () => {
    const dateString = "2021-01-01T10:00:00.000Z"; // 2021 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });
});
