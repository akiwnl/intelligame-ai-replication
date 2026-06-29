import { isEqual } from "./index";

describe("isEqual", () => {
  // Test case 1: Dates are exactly equal
  it("should return true if two dates are exactly equal", () => {
    const date1 = new Date(2024, 0, 1, 10, 30, 0, 500);
    const date2 = new Date(2024, 0, 1, 10, 30, 0, 500);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 2: Dates are different by milliseconds
  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are different by seconds
  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2024, 0, 1, 10, 30, 0);
    const date2 = new Date(2024, 0, 1, 10, 30, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are different by minutes
  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2024, 0, 1, 10, 30);
    const date2 = new Date(2024, 0, 1, 10, 31);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 5: Dates are different by hours
  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2024, 0, 1, 10);
    const date2 = new Date(2024, 0, 1, 11);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 6: Dates are different by day
  it("should return false if dates differ by day", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 0, 2);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 7: Dates are different by month
  it("should return false if dates differ by month", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 1, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 8: Dates are different by year
  it("should return false if dates differ by year", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2025, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 9: Invalid date for the first argument
  it("should return false if the left date is invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date(2024, 0, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 10: Invalid date for the second argument
  it("should return false if the right date is invalid", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date("invalid date");
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 11: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date("another invalid date");
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 12: Input as timestamps (equal)
  it("should work with equal timestamps as input", () => {
    const timestamp = new Date(2024, 0, 1, 12, 0, 0, 0).getTime();
    expect(isEqual(timestamp, timestamp)).toBe(true);
  });

  // Test case 13: Input as timestamps (different)
  it("should work with different timestamps as input", () => {
    const timestamp1 = new Date(2024, 0, 1, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2024, 0, 1, 12, 0, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(false);
  });

  // Test case 14: Input as date strings (equal)
  it("should work with equal date strings as input", () => {
    const dateString = "2024-01-01T10:30:00.500Z";
    expect(isEqual(dateString, dateString)).toBe(true);
  });

  // Test case 15: Input as date strings (different)
  it("should work with different date strings as input", () => {
    const dateString1 = "2024-01-01T10:30:00.500Z";
    const dateString2 = "2024-01-01T10:30:00.600Z";
    expect(isEqual(dateString1, dateString2)).toBe(false);
  });
});
