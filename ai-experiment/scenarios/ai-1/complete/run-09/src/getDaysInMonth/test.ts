import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test case 1: Month with 31 days (January)
  it("should return 31 for January", () => {
    const date = new Date(2023, 0, 15); // January 15, 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 2: Month with 31 days (December)
  it("should return 31 for December", () => {
    const date = new Date(2023, 11, 15); // December 15, 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test case 3: Month with 30 days (April)
  it("should return 30 for April", () => {
    const date = new Date(2023, 3, 15); // April 15, 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test case 4: Month with 30 days (November)
  it("should return 30 for November", () => {
    const date = new Date(2023, 10, 15); // November 15, 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test case 5: February in a leap year (29 days)
  it("should return 29 for February in a leap year", () => {
    const date = new Date(2000, 1, 1); // February 1, 2000 (leap year)
    expect(getDaysInMonth(date)).toBe(29);
    const date2 = new Date(2012, 1, 1); // February 1, 2012 (leap year)
    expect(getDaysInMonth(date2)).toBe(29);
    const date3 = new Date(2024, 1, 1); // February 1, 2024 (leap year)
    expect(getDaysInMonth(date3)).toBe(29);
  });

  // Test case 6: February in a non-leap year (28 days)
  it("should return 28 for February in a non-leap year", () => {
    const date = new Date(2001, 1, 1); // February 1, 2001 (non-leap year)
    expect(getDaysInMonth(date)).toBe(28);
    const date2 = new Date(2023, 1, 1); // February 1, 2023 (non-leap year)
    expect(getDaysInMonth(date2)).toBe(28);
    const date3 = new Date(1900, 1, 1); // February 1, 1900 (non-leap century year)
    expect(getDaysInMonth(date3)).toBe(28);
  });

  // Test case 7: Invalid date input
  it("should return NaN for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDaysInMonth(invalidDate))).toBe(true);
  });

  // Test case 8: Timestamp input
  it("should work with timestamp input", () => {
    const timestamp = new Date(2023, 4, 10).getTime(); // May 10, 2023 (31 days)
    expect(getDaysInMonth(timestamp)).toBe(31);
  });

  // Test case 9: String input
  it("should work with string input", () => {
    const dateString = "2023-06-15T12:00:00"; // June 15, 2023 (Local time string)
    expect(getDaysInMonth(dateString)).toBe(30);
  });

  // Test case 10: Date with time components
  it("should ignore time components and return days in month", () => {
    const date = new Date(2023, 0, 1, 23, 59, 59, 999); // January 1, 2023 at end of day
    expect(getDaysInMonth(date)).toBe(31);
  });
});
