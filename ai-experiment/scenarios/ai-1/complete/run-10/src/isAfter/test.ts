import { isAfter } from "./index";

describe("isAfter", () => {
  // Test case 1: First date is strictly after the second
  it("should return true if the first date is strictly after the second", () => {
    const date1 = new Date(2024, 0, 2); // Jan 2, 2024
    const date2 = new Date(2024, 0, 1); // Jan 1, 2024
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 2: First date is strictly before the second
  it("should return false if the first date is strictly before the second", () => {
    const date1 = new Date(2024, 0, 1); // Jan 1, 2024
    const date2 = new Date(2024, 0, 2); // Jan 2, 2024
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are equal
  it("should return false if the dates are equal", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 0); // Jan 1, 2024 10:00:00
    const date2 = new Date(2024, 0, 1, 10, 0, 0); // Jan 1, 2024 10:00:00
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are equal but different time components (first is later)
  it("should return true if the first date is after the second due to time components", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 1); // Jan 1, 2024 10:00:01
    const date2 = new Date(2024, 0, 1, 10, 0, 0); // Jan 1, 2024 10:00:00
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 5: Dates are equal but different time components (first is earlier)
  it("should return false if the first date is before the second due to time components", () => {
    const date1 = new Date(2024, 0, 1, 10, 0, 0); // Jan 1, 2024 10:00:00
    const date2 = new Date(2024, 0, 1, 10, 0, 1); // Jan 1, 2024 10:00:01
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 6: Invalid date for the first argument
  it("should return false if the first date is invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date(2024, 0, 1);
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 7: Invalid date for the second argument
  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date("invalid date");
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 8: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date("another invalid date");
    expect(isAfter(date1, date2)).toBe(false);
  });

  // Test case 9: Input as timestamps
  it("should work with timestamps as input", () => {
    const date1 = new Date(2024, 0, 2).getTime();
    const date2 = new Date(2024, 0, 1).getTime();
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 10: Input as date strings
  it("should work with date strings as input", () => {
    const date1 = "2024-01-02";
    const date2 = "2024-01-01";
    expect(isAfter(date1, date2)).toBe(true);
  });

  // Test case 11: Example from JSDoc
  it("should match the JSDoc example", () => {
    const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
    expect(result).toBe(true);
  });

  // Test case 12: Boundary condition - dates are very close (milliseconds)
  it("should correctly compare dates differing by milliseconds", () => {
    const date1 = new Date(2024, 0, 1, 0, 0, 0, 1);
    const date2 = new Date(2024, 0, 1, 0, 0, 0, 0);
    expect(isAfter(date1, date2)).toBe(true);
    expect(isAfter(date2, date1)).toBe(false);
  });
});
