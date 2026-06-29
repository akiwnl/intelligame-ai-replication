import { getDay } from "./index";

describe("getDay", () => {
  // Test case 1: Sunday (0)
  it("should return 0 for Sunday", () => {
    const date = new Date(2023, 9, 1); // October 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  // Test case 2: Monday (1)
  it("should return 1 for Monday", () => {
    const date = new Date(2023, 9, 2); // October 2, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Test case 3: Tuesday (2)
  it("should return 2 for Tuesday", () => {
    const date = new Date(2023, 9, 3); // October 3, 2023 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  // Test case 4: Wednesday (3)
  it("should return 3 for Wednesday", () => {
    const date = new Date(2012, 1, 29); // February 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  // Test case 5: Thursday (4)
  it("should return 4 for Thursday", () => {
    const date = new Date(2023, 9, 5); // October 5, 2023 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  // Test case 6: Friday (5)
  it("should return 5 for Friday", () => {
    const date = new Date(2023, 9, 6); // October 6, 2023 was a Friday
    expect(getDay(date)).toBe(5);
  });

  // Test case 7: Saturday (6)
  it("should return 6 for Saturday", () => {
    const date = new Date(2023, 9, 7); // October 7, 2023 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Test case 8: Invalid date input
  it("should return NaN for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isNaN(getDay(invalidDate))).toBe(true);
  });

  // Test case 9: Timestamp input
  it("should work with timestamp input", () => {
    const timestamp = new Date(2023, 9, 8).getTime(); // Oct 8, 2023 was a Sunday
    expect(getDay(timestamp)).toBe(0);
  });

  // Test case 10: String input
  it("should work with string input", () => {
    const dateString = "2023-10-09T12:00:00"; // Oct 9, 2023 (Local time string)
    const localDate = new Date(dateString);
    expect(getDay(dateString)).toBe(localDate.getDay());
  });

  // Test case 11: Date with time components
  it("should return the day of the week regardless of time components", () => {
    const date = new Date(2023, 9, 1, 23, 59, 59, 999); // Sunday, Oct 1, 2023 at end of day
    expect(getDay(date)).toBe(0);
  });

  // Test case 12: Year transition
  it("should correctly identify day of week across year transition", () => {
    const date = new Date(2023, 11, 31); // Dec 31, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
    const nextYearDate = new Date(2024, 0, 1); // Jan 1, 2024 was a Monday
    expect(getDay(nextYearDate)).toBe(1);
  });
});
