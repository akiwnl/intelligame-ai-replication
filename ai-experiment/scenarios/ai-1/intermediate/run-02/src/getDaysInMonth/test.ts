import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return 31 for January", () => {
    const date = new Date(2023, 0, 15); // January 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  it("should return 28 for February in a common year", () => {
    const date = new Date(2222, 1, 1); // February 2222 (common year)
    expect(getDaysInMonth(date)).toBe(28);
  });

  it("should return 29 for February in a leap year (divisible by 4, not by 100)", () => {
    const date = new Date(2024, 1, 1); // February 2024 (leap year)
    expect(getDaysInMonth(date)).toBe(29);
  });

  it("should return 29 for February in a leap year (divisible by 400)", () => {
    const date = new Date(2000, 1, 1); // February 2000 (leap year)
    expect(getDaysInMonth(date)).toBe(29);
  });

  it("should return 28 for February in a common year (divisible by 100 but not by 400)", () => {
    const date = new Date(1900, 1, 1); // February 1900 (common year)
    expect(getDaysInMonth(date)).toBe(28);
  });

  it("should return 30 for April", () => {
    const date = new Date(2023, 3, 15); // April 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  it("should return 31 for December", () => {
    const date = new Date(2023, 11, 15); // December 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  it("should return NaN if the input date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("should work with a timestamp input", () => {
    const timestamp = new Date(2023, 4, 10).getTime(); // May 2023
    expect(getDaysInMonth(timestamp)).toBe(31);
  });

  it("should work with a date string input", () => {
    const dateString = "2023-06-01"; // June 2023
    expect(getDaysInMonth(dateString)).toBe(30);
  });
});
