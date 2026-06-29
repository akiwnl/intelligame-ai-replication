import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  // Test case from JSDoc example
  test("should return 29 for February 2000 (leap year)", () => {
    const date = new Date(2000, 1); // Feb 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test for months with 31 days
  test("should return 31 for January", () => {
    const date = new Date(2023, 0); // Jan 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for March", () => {
    const date = new Date(2023, 2); // Mar 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for May", () => {
    const date = new Date(2023, 4); // May 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for July", () => {
    const date = new Date(2023, 6); // Jul 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for August", () => {
    const date = new Date(2023, 7); // Aug 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for October", () => {
    const date = new Date(2023, 9); // Oct 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  test("should return 31 for December", () => {
    const date = new Date(2023, 11); // Dec 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test for months with 30 days
  test("should return 30 for April", () => {
    const date = new Date(2023, 3); // Apr 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  test("should return 30 for June", () => {
    const date = new Date(2023, 5); // Jun 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  test("should return 30 for September", () => {
    const date = new Date(2023, 8); // Sep 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  test("should return 30 for November", () => {
    const date = new Date(2023, 10); // Nov 2023
    expect(getDaysInMonth(date)).toBe(30);
  });

  // Test for February in a common year (28 days)
  test("should return 28 for February in a common year (e.g., 2023)", () => {
    const date = new Date(2023, 1); // Feb 2023
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test for February in a leap year (29 days)
  test("should return 29 for February in a leap year (e.g., 2024)", () => {
    const date = new Date(2024, 1); // Feb 2024
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test for year divisible by 100 but not 400 (not a leap year)
  test("should return 28 for February 1900 (not a leap year)", () => {
    const date = new Date(1900, 1); // Feb 1900
    expect(getDaysInMonth(date)).toBe(28);
  });

  // Test for year divisible by 400 (a leap year)
  test("should return 29 for February 2000 (a leap year)", () => {
    const date = new Date(2000, 1); // Feb 2000
    expect(getDaysInMonth(date)).toBe(29);
  });

  // Test with different time components (should not affect result)
  test("should return the correct days regardless of time components", () => {
    const date = new Date(2023, 0, 15, 23, 59, 59, 999); // Jan 15, 2023
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 15);
    expect(getDaysInMonth(date)).toBe(31); // May has 31 days
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2023, 1, 15, 10, 0, 0).getTime(); // Feb 2023
    expect(getDaysInMonth(timestamp)).toBe(28);
  });

  test("should work with a date string (ISO 8601)", () => {
    const dateString = "2024-02-17T10:00:00Z"; // Feb 2024 (leap)
    expect(getDaysInMonth(dateString)).toBe(29);
  });

  test("should work with a date string (common format)", () => {
    const dateString = "04/01/2023"; // Apr 2023
    expect(getDaysInMonth(dateString)).toBe(30);
  });

  // Test with invalid date input
  test("should return NaN when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(getDaysInMonth(invalidDate)).toBeNaN();
  });

  test("should return NaN when the input timestamp is NaN", () => {
    expect(getDaysInMonth(NaN)).toBeNaN();
  });

  test("should return NaN when the input string is invalid", () => {
    expect(getDaysInMonth("invalid date string")).toBeNaN();
  });
});
