import { getDate } from "./index";

describe("getDate", () => {
  // Test case 1: Standard date
  it("should return the correct day of the month for a standard date", () => {
    const date = new Date(2023, 10, 15); // November 15, 2023
    expect(getDate(date)).toBe(15);
  });

  // Test case 2: First day of the month
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    expect(getDate(date)).toBe(1);
  });

  // Test case 3: Last day of a 31-day month
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2023, 11, 31); // December 31, 2023
    expect(getDate(date)).toBe(31);
  });

  // Test case 4: Last day of a 30-day month
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2023, 3, 30); // April 30, 2023
    expect(getDate(date)).toBe(30);
  });

  // Test case 5: Last day of February in a leap year
  it("should return 29 for February 29 in a leap year", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 (leap year)
    expect(getDate(date)).toBe(29);
  });

  // Test case 6: Last day of February in a non-leap year
  it("should return 28 for February 28 in a non-leap year", () => {
    const date = new Date(2023, 1, 28); // February 28, 2023 (non-leap year)
    expect(getDate(date)).toBe(28);
  });

  // Test case 7: Invalid date input
  it("should return NaN for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDate(invalidDate))).toBe(true);
  });

  // Test case 8: Timestamp input
  it("should work with timestamp input", () => {
    const timestamp = new Date(2023, 10, 20).getTime();
    expect(getDate(timestamp)).toBe(20);
  });

  // Test case 9: String input
  it("should work with string input", () => {
    const dateString = "2023-10-25T10:00:00"; // Local time string
    const localDate = new Date(dateString);
    expect(getDate(dateString)).toBe(localDate.getDate());
  });

  // Test case 10: Date with time components
  it("should ignore time components and return only the day of the month", () => {
    const date = new Date(2023, 10, 15, 23, 59, 59, 999); // Nov 15, 2023 23:59:59.999
    expect(getDate(date)).toBe(15);
  });
});
