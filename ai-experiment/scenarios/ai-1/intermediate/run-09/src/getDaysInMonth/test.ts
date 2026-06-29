import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 29 for February in a leap year (2000)", () => {
    const date = new Date(2000, 1); // February 2000
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should return 28 for February in a common year (2023)", () => {
    const date = new Date(2023, 1); // February 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(28);
  });

  it("should return 31 for a 31-day month (January)", () => {
    const date = new Date(2023, 0); // January 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it("should return 30 for a 30-day month (April)", () => {
    const date = new Date(2023, 3); // April 2023
    const result = getDaysInMonth(date);
    expect(result).toBe(30);
  });

  it("should return NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should accept a timestamp as input", () => {
    const timestamp = new Date(2023, 2, 15).getTime(); // March 2023
    const result = getDaysInMonth(timestamp);
    expect(result).toBe(31);
  });

  it("should accept a string as input", () => {
    const dateString = "2023-05-10T10:00:00.000Z"; // May 2023
    const result = getDaysInMonth(dateString);
    expect(result).toBe(31);
  });
});
