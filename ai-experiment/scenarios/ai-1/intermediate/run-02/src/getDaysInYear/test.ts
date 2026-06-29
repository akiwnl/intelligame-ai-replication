import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("should return 366 for a leap year (e.g., 2012)", () => {
    const date = new Date(2012, 0, 1); // Year 2012 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 366 for a leap year (e.g., 2000 - divisible by 400)", () => {
    const date = new Date(2000, 0, 1); // Year 2000 is a leap year
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("should return 365 for a common year (e.g., 2014)", () => {
    const date = new Date(2014, 0, 1); // Year 2014 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return 365 for a common year (e.g., 1900 - divisible by 100 but not 400)", () => {
    const date = new Date(1900, 0, 1); // Year 1900 is a common year
    const result = getDaysInYear(date);
    expect(result).toBe(365);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp input for a leap year", () => {
    const timestamp = new Date(2016, 5, 15).getTime(); // Year 2016 is a leap year
    const result = getDaysInYear(timestamp);
    expect(result).toBe(366);
  });

  it("should work with a date string input for a common year", () => {
    const dateString = "2023-01-01"; // Year 2023 is a common year
    const result = getDaysInYear(dateString);
    expect(result).toBe(365);
  });
});
