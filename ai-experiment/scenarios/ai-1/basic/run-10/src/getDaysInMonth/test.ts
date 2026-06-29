import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    const result = getDaysInMonth(new Date(2000, 1)); // Feb 2000 (leap year)
    expect(result).toBe(29);
  });

  it("returns the number of days in February of a common year", () => {
    const result = getDaysInMonth(new Date(2001, 1)); // Feb 2001 (common year)
    expect(result).toBe(28);
  });

  it("returns the number of days in a 31-day month (January)", () => {
    const result = getDaysInMonth(new Date(2023, 0)); // Jan 2023
    expect(result).toBe(31);
  });

  it("returns the number of days in a 30-day month (April)", () => {
    const result = getDaysInMonth(new Date(2023, 3)); // Apr 2023
    expect(result).toBe(30);
  });

  it("accepts a timestamp", () => {
    const result = getDaysInMonth(new Date(2024, 1, 15).getTime()); // Feb 2024 (leap year)
    expect(result).toBe(29);
  });

  it("accepts a date string", () => {
    const result = getDaysInMonth("2023-02-15T10:00:00.000Z"); // Feb 2023 (common year)
    expect(result).toBe(28);
  });

  it("returns NaN for an invalid date", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
