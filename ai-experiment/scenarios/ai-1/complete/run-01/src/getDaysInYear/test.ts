// import { describe, expect, it } from "vitest"; // Commented out as per project setup using Jest
import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  // Test case from JSDoc example
  test("should return 366 for 2012 (a leap year)", () => {
    const date = new Date(2012, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test for a common year (365 days)
  test("should return 365 for a common year (e.g., 2023)", () => {
    const date = new Date(2023, 0, 1);
    expect(getDaysInYear(date)).toBe(365);
  });

  test("should return 365 for another common year (e.g., 2014)", () => {
    const date = new Date(2014, 0, 1);
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test for a leap year (divisible by 4 but not 100) (366 days)
  test("should return 366 for a leap year (e.g., 2024)", () => {
    const date = new Date(2024, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  test("should return 366 for another leap year (e.g., 2004)", () => {
    const date = new Date(2004, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test for a year divisible by 100 but not 400 (not a leap year) (365 days)
  test("should return 365 for 1900 (not a leap year)", () => {
    const date = new Date(1900, 0, 1);
    expect(getDaysInYear(date)).toBe(365);
  });

  test("should return 365 for 2100 (not a leap year)", () => {
    const date = new Date(2100, 0, 1);
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test for a year divisible by 400 (a leap year) (366 days)
  test("should return 366 for 2000 (a leap year)", () => {
    const date = new Date(2000, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  test("should return 366 for 2400 (a leap year)", () => {
    const date = new Date(2400, 0, 1);
    expect(getDaysInYear(date)).toBe(366);
  });

  // Test with different time components (should not affect result)
  test("should return the correct days regardless of time components", () => {
    const date = new Date(2023, 0, 15, 23, 59, 59, 999);
    expect(getDaysInYear(date)).toBe(365);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const date = new Date(2023, 4, 15);
    expect(getDaysInYear(date)).toBe(365);
  });

  test("should work with a timestamp", () => {
    const timestamp = new Date(2024, 1, 15, 10, 0, 0).getTime(); // Leap year
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  test("should work with a date string (ISO 8601)", () => {
    const dateString = "2023-02-17T10:00:00Z";
    expect(getDaysInYear(dateString)).toBe(365);
  });

  test("should work with a date string (common format)", () => {
    const dateString = "04/01/2024"; // Leap year
    expect(getDaysInYear(dateString)).toBe(366);
  });

  // Test with invalid date input
  test("should return NaN when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(getDaysInYear(invalidDate)).toBeNaN();
  });

  test("should return NaN when the input timestamp is NaN", () => {
    expect(getDaysInYear(NaN)).toBeNaN();
  });

  test("should return NaN when the input string is invalid", () => {
    expect(getDaysInYear("invalid date string")).toBeNaN();
  });
});
