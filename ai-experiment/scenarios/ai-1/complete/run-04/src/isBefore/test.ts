import { isBefore } from "./index";

describe("isBefore", () => {
  // Test case 1: First date is clearly before the second
  it("should return true if the first date is before the second date", () => {
    const date1 = new Date(2023, 9, 10); // Oct 10, 2023
    const date2 = new Date(2023, 10, 15); // Nov 15, 2023
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 2: First date is clearly after the second
  it("should return false if the first date is after the second date", () => {
    const date1 = new Date(2023, 10, 15); // Nov 15, 2023
    const date2 = new Date(2023, 9, 10); // Oct 10, 2023
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are equal
  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 9, 10, 12, 0, 0);
    const date2 = new Date(2023, 9, 10, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are equal but milliseconds differ (first is before)
  it("should return true if the first date is before due to milliseconds", () => {
    const date1 = new Date(2023, 9, 10, 12, 0, 0, 0);
    const date2 = new Date(2023, 9, 10, 12, 0, 0, 500);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 5: Dates are equal but milliseconds differ (first is after)
  it("should return false if the first date is after due to milliseconds", () => {
    const date1 = new Date(2023, 9, 10, 12, 0, 0, 500);
    const date2 = new Date(2023, 9, 10, 12, 0, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 6: Example case
  it("should return false for the example case", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 7: Input as timestamps
  it("should work with timestamps as input", () => {
    const date1 = new Date(2023, 9, 10).getTime();
    const date2 = new Date(2023, 10, 15).getTime();
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 8: Input as date strings
  it("should work with date strings as input", () => {
    const date1 = "2023-10-10T12:00:00Z";
    const date2 = "2023-11-15T12:00:00Z";
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 9: Mixed input types
  it("should work with mixed input types (Date and timestamp)", () => {
    const date1 = new Date(2023, 9, 10);
    const date2 = new Date(2023, 10, 15).getTime();
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 10: Invalid first date
  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 0, 1);
    expect(isBefore(invalidDate, validDate)).toBe(false);
  });

  // Test case 11: Invalid second date
  it("should return false if the second date is invalid", () => {
    const validDate = new Date(2023, 0, 1);
    const invalidDate = new Date("not a date");
    expect(isBefore(validDate, invalidDate)).toBe(false);
  });

  // Test case 12: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isBefore(invalidDate1, invalidDate2)).toBe(false);
  });
});
