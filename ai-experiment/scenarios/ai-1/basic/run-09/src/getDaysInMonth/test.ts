import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns the number of days in February of a leap year", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29); // Feb 2000 is leap
    expect(getDaysInMonth(new Date(2004, 1))).toBe(29); // Feb 2004 is leap
  });

  it("returns the number of days in February of a common year", () => {
    expect(getDaysInMonth(new Date(2001, 1))).toBe(28); // Feb 2001 is common
    expect(getDaysInMonth(new Date(1900, 1))).toBe(28); // Feb 1900 is common (divisible by 100 but not 400)
  });

  it("returns the number of days in a 31-day month", () => {
    expect(getDaysInMonth(new Date(2023, 0))).toBe(31); // January
    expect(getDaysInMonth(new Date(2023, 2))).toBe(31); // March
    expect(getDaysInMonth(new Date(2023, 4))).toBe(31); // May
    expect(getDaysInMonth(new Date(2023, 6))).toBe(31); // July
    expect(getDaysInMonth(new Date(2023, 7))).toBe(31); // August
    expect(getDaysInMonth(new Date(2023, 9))).toBe(31); // October
    expect(getDaysInMonth(new Date(2023, 11))).toBe(31); // December
  });

  it("returns the number of days in a 30-day month", () => {
    expect(getDaysInMonth(new Date(2023, 3))).toBe(30); // April
    expect(getDaysInMonth(new Date(2023, 5))).toBe(30); // June
    expect(getDaysInMonth(new Date(2023, 8))).toBe(30); // September
    expect(getDaysInMonth(new Date(2023, 10))).toBe(30); // November
  });

  it("handles date arguments", () => {
    const result = getDaysInMonth(new Date(2023, 1, 15)); // Feb 2023
    expect(result).toBe(28);
  });

  it("handles timestamp arguments", () => {
    const result = getDaysInMonth(new Date(2024, 1, 15).getTime()); // Feb 2024 (leap)
    expect(result).toBe(29);
  });

  it("handles string arguments", () => {
    const result = getDaysInMonth("2023-04-01T10:00:00.000Z"); // April 2023
    expect(result).toBe(30);
  });

  it("returns NaN for Invalid Date argument", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN for invalid string argument", () => {
    const result = getDaysInMonth("invalid date");
    expect(isNaN(result)).toBe(true);
  });
});
