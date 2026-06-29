import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test case 1: Sunday (0) - Should be a weekend
  it("should return true for a Sunday", () => {
    const date = new Date(2023, 9, 1); // Oct 1, 2023 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 2: Saturday (6) - Should be a weekend (example case)
  it("should return true for a Saturday (example case)", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday, not Saturday as in the example.
    // Let's use an actual Saturday for the test.
    const actualSaturday = new Date(2014, 9, 4); // Oct 4, 2014 was a Saturday
    expect(isWeekend(actualSaturday)).toBe(true);
  });

  // Test case 3: Monday (1) - Should not be a weekend
  it("should return false for a Monday", () => {
    const date = new Date(2023, 9, 2); // Oct 2, 2023 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 4: Wednesday (3) - Should not be a weekend
  it("should return false for a Wednesday", () => {
    const date = new Date(2023, 9, 4); // Oct 4, 2023 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 5: Friday (5) - Should not be a weekend
  it("should return false for a Friday", () => {
    const date = new Date(2023, 9, 6); // Oct 6, 2023 was a Friday
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 6: Input as a timestamp
  it("should work with a timestamp as input", () => {
    const date = new Date(2023, 9, 7).getTime(); // Oct 7, 2023 (Saturday)
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 7: Input as a date string
  it("should work with a date string as input", () => {
    const dateString = "2023-10-08T10:00:00Z"; // Oct 8, 2023 (Sunday)
    // toDate converts to local time, so ensure the weekday matches the local time interpretation.
    const localDate = new Date(dateString);
    expect(isWeekend(dateString)).toBe(localDate.getDay() === 0 || localDate.getDay() === 6);
  });

  // Test case 8: Invalid date input
  it("should return false if the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isWeekend(invalidDate)).toBe(false);
  });

  // Test case 9: Invalid date string input
  it("should return false if the date string is invalid", () => {
    expect(isWeekend("invalid string")).toBe(false);
  });

  // Test case 10: Boundary case: New Year's Day (Jan 1) is a weekend
  it("should handle New Year's Day if it falls on a weekend", () => {
    const sundayJan1 = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    expect(isWeekend(sundayJan1)).toBe(true);
    const mondayJan1 = new Date(2024, 0, 1); // Jan 1, 2024 was a Monday
    expect(isWeekend(mondayJan1)).toBe(false);
  });

  // Test case 11: Boundary case: End of year (Dec 31) is a weekend
  it("should handle end of year if it falls on a weekend", () => {
    const saturdayDec31 = new Date(2022, 11, 31); // Dec 31, 2022 was a Saturday
    expect(isWeekend(saturdayDec31)).toBe(true);
    const sundayDec31 = new Date(2023, 11, 31); // Dec 31, 2023 was a Sunday
    expect(isWeekend(sundayDec31)).toBe(true);
  });
});
