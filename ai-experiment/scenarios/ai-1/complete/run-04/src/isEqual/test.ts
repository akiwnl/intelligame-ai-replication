import { isEqual } from "./index";

describe("isEqual", () => {
  // Test case 1: Dates are exactly equal
  it("should return true if dates are exactly equal", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45, 123);
    const date2 = new Date(2023, 9, 10, 12, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 2: Dates are not equal (different milliseconds) - Example case
  it("should return false if dates differ by milliseconds (example case)", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are not equal (different seconds)
  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45);
    const date2 = new Date(2023, 9, 10, 12, 30, 46);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are not equal (different minutes)
  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2023, 9, 10, 12, 30);
    const date2 = new Date(2023, 9, 10, 12, 31);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 5: Dates are not equal (different hours)
  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2023, 9, 10, 12);
    const date2 = new Date(2023, 9, 10, 13);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 6: Dates are not equal (different days)
  it("should return false if dates differ by days", () => {
    const date1 = new Date(2023, 9, 10);
    const date2 = new Date(2023, 9, 11);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 7: Dates are not equal (different months)
  it("should return false if dates differ by months", () => {
    const date1 = new Date(2023, 9, 10);
    const date2 = new Date(2023, 10, 10);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 8: Dates are not equal (different years)
  it("should return false if dates differ by years", () => {
    const date1 = new Date(2023, 9, 10);
    const date2 = new Date(2024, 9, 10);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 9: Input as timestamps, equal
  it("should work with timestamps as input and return true for equal dates", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45, 123).getTime();
    const date2 = new Date(2023, 9, 10, 12, 30, 45, 123).getTime();
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 10: Input as timestamps, not equal
  it("should work with timestamps as input and return false for non-equal dates", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45, 123).getTime();
    const date2 = new Date(2023, 9, 10, 12, 30, 45, 124).getTime();
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 11: Input as date strings, equal
  it("should work with date strings as input and return true for equal dates", () => {
    const date1 = "2023-10-10T12:30:45.123Z";
    const date2 = "2023-10-10T12:30:45.123Z";
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 12: Input as date strings, not equal
  it("should work with date strings as input and return false for non-equal dates", () => {
    const date1 = "2023-10-10T12:30:45.123Z";
    const date2 = "2023-10-10T12:30:45.124Z";
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 13: Mixed input types, equal
  it("should work with mixed input types (Date and timestamp) and return true for equal dates", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45, 123);
    const date2 = new Date(2023, 9, 10, 12, 30, 45, 123).getTime();
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 14: Mixed input types, not equal
  it("should work with mixed input types (Date and timestamp) and return false for non-equal dates", () => {
    const date1 = new Date(2023, 9, 10, 12, 30, 45, 123);
    const date2 = new Date(2023, 9, 10, 12, 30, 45, 124).getTime();
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 15: Invalid left date
  it("should return false if the left date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 0, 1);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  // Test case 16: Invalid right date
  it("should return false if the right date is invalid", () => {
    const validDate = new Date(2023, 0, 1);
    const invalidDate = new Date("not a date");
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  // Test case 17: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });
});
