import { isWeekend } from "./index";

describe("isWeekend", () => {
  // Test case 1: Sunday (weekend)
  it("should return true for Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7, 2024 (Sunday)
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 2: Monday (weekday)
  it("should return false for Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8, 2024 (Monday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 3: Tuesday (weekday)
  it("should return false for Tuesday", () => {
    const date = new Date(2024, 0, 9); // Jan 9, 2024 (Tuesday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 4: Wednesday (weekday)
  it("should return false for Wednesday", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024 (Wednesday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 5: Thursday (weekday)
  it("should return false for Thursday", () => {
    const date = new Date(2024, 0, 11); // Jan 11, 2024 (Thursday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 6: Friday (weekday)
  it("should return false for Friday", () => {
    const date = new Date(2024, 0, 12); // Jan 12, 2024 (Friday)
    expect(isWeekend(date)).toBe(false);
  });

  // Test case 7: Saturday (weekend)
  it("should return true for Saturday", () => {
    const date = new Date(2024, 0, 13); // Jan 13, 2024 (Saturday)
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 8: Example from JSDoc
  it("should return true for 5 October 2014 (Sunday)", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 (Sunday)
    expect(isWeekend(date)).toBe(true);
  });

  // Test case 9: Invalid date input
  it("should return false if the input date is invalid", () => {
    const invalidDate = new Date("invalid date");
    expect(isWeekend(invalidDate)).toBe(false);
  });

  // Test case 10: Input as timestamp (weekday)
  it("should work with a timestamp for a weekday", () => {
    const timestamp = new Date(2024, 0, 1).getTime(); // Jan 1, 2024 (Monday)
    expect(isWeekend(timestamp)).toBe(false);
  });

  // Test case 11: Input as timestamp (weekend)
  it("should work with a timestamp for a weekend", () => {
    const timestamp = new Date(2024, 0, 6).getTime(); // Jan 6, 2024 (Saturday)
    expect(isWeekend(timestamp)).toBe(true);
  });

  // Test case 12: Input as date string (weekday)
  it("should work with a date string for a weekday", () => {
    const dateString = "2024-01-02T00:00:00.000Z"; // Jan 2, 2024 UTC (Tuesday)
    // getDay returns local day, so 'Tuesday' if timezone offset doesn't change it to Sun/Sat
    // We need to ensure the local interpretation of the date string is checked.
    const localDate = new Date(dateString);
    expect(isWeekend(dateString)).toBe(localDate.getDay() === 0 || localDate.getDay() === 6);
  });

  // Test case 13: Input as date string (weekend)
  it("should work with a date string for a weekend", () => {
    const dateString = "2024-01-07T00:00:00.000Z"; // Jan 7, 2024 UTC (Sunday)
    const localDate = new Date(dateString);
    expect(isWeekend(dateString)).toBe(localDate.getDay() === 0 || localDate.getDay() === 6);
  });
});
