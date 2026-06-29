import { getDay } from "./index";

describe("getDay", () => {
  // Test case from JSDoc example
  test("should return 3 (Wednesday) for 29 February 2012", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  // Test for each day of the week
  test("should return 0 for Sunday", () => {
    const date = new Date(2023, 0, 1); // Jan 1, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  test("should return 1 for Monday", () => {
    const date = new Date(2023, 0, 2); // Jan 2, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  test("should return 2 for Tuesday", () => {
    const date = new Date(2023, 0, 3); // Jan 3, 2023 was a Tuesday
    expect(getDay(date)).toBe(2);
  });

  test("should return 3 for Wednesday", () => {
    const date = new Date(2023, 0, 4); // Jan 4, 2023 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  test("should return 4 for Thursday", () => {
    const date = new Date(2023, 0, 5); // Jan 5, 2023 was a Thursday
    expect(getDay(date)).toBe(4);
  });

  test("should return 5 for Friday", () => {
    const date = new Date(2023, 0, 6); // Jan 6, 2023 was a Friday
    expect(getDay(date)).toBe(5);
  });

  test("should return 6 for Saturday", () => {
    const date = new Date(2023, 0, 7); // Jan 7, 2023 was a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Test with different time components
  test("should return the correct day regardless of time components", () => {
    const date = new Date(2023, 0, 1, 23, 59, 59, 999); // Jan 1, 2023 (Sunday)
    expect(getDay(date)).toBe(0);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 15); // May 15, 2023 was a Monday
    expect(getDay(date)).toBe(1);
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2023, 4, 16, 10, 0, 0).getTime(); // May 16, 2023 was a Tuesday
    expect(getDay(timestamp)).toBe(2);
  });

  test("should work with a date string (ISO 8601)", () => {
    const dateString = "2023-05-17T10:00:00Z"; // May 17, 2023 was a Wednesday
    expect(getDay(dateString)).toBe(3);
  });

  test("should work with a date string (common format)", () => {
    const dateString = "05/18/2023"; // May 18, 2023 was a Thursday
    expect(getDay(dateString)).toBe(4);
  });

  // Test with invalid date input
  test("should return NaN when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(getDay(invalidDate)).toBeNaN();
  });

  test("should return NaN when the input timestamp is NaN", () => {
    expect(getDay(NaN)).toBeNaN();
  });

  test("should return NaN when the input string is invalid", () => {
    expect(getDay("invalid date string")).toBeNaN();
  });
});
