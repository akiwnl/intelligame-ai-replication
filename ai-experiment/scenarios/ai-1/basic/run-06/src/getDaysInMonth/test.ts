import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 29 for February in a leap year (e.g., 2000)", () => {
    const date = new Date(2000, 1); // Feb 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February in a common year (e.g., 2001)", () => {
    const date = new Date(2001, 1); // Feb 2001
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for a 31-day month (e.g., January)", () => {
    const date = new Date(2023, 0); // Jan 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for a 30-day month (e.g., April)", () => {
    const date = new Date(2023, 3); // Apr 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return 31 for December", () => {
    const date = new Date(2023, 11); // Dec 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2024, 1).getTime(); // Feb 2024 (leap year)
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(29);
  });

  it("should accept a date string as input", () => {
    const dateString = "2023-06-15T10:00:00.000Z"; // June 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(30);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
