import { isBefore } from "./index";

describe("isBefore", () => {
  // Test case 1: First date is strictly before the second
  it("should return true if the first date is strictly before the second", () => {
    const date1 = new Date(1987, 1, 11); // February 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 2: First date is strictly after the second
  it("should return false if the first date is strictly after the second", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // February 11, 1987
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are equal
  it("should return false if the dates are equal", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 0);
    const date2 = new Date(2023, 10, 15, 10, 30, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are equal, but different object references
  it("should return false if dates are equal but different objects", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(date1.getTime());
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 5: Same day, different times (first date is before by time)
  it("should consider time components: first date before by time", () => {
    const date1 = new Date(2023, 10, 15, 11, 59, 59);
    const date2 = new Date(2023, 10, 15, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test case 6: Same day, different times (first date is after by time)
  it("should consider time components: first date after by time", () => {
    const date1 = new Date(2023, 10, 15, 12, 0, 1);
    const date2 = new Date(2023, 10, 15, 12, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test case 7: First date is invalid
  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 10, 15);
    expect(isBefore(invalidDate, validDate)).toBe(false);
  });

  // Test case 8: Second date is invalid
  it("should return false if the second date is invalid", () => {
    const validDate = new Date(2023, 10, 15);
    const invalidDate = new Date("not a date");
    expect(isBefore(validDate, invalidDate)).toBe(false);
  });

  // Test case 9: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isBefore(invalidDate1, invalidDate2)).toBe(false);
  });

  // Test case 10: Timestamp input
  it("should work with timestamp inputs", () => {
    const timestamp1 = new Date(2024, 0, 1).getTime();
    const timestamp2 = new Date(2024, 0, 10).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(true);
    expect(isBefore(timestamp2, timestamp1)).toBe(false);
    expect(isBefore(timestamp1, timestamp1)).toBe(false);
  });

  // Test case 11: String input
  it("should work with string inputs", () => {
    const dateString1 = "2024-01-01T00:00:00"; // Local time string
    const dateString2 = "2024-02-01T00:00:00"; // Local time string
    expect(isBefore(dateString1, dateString2)).toBe(true);
    expect(isBefore(dateString2, dateString1)).toBe(false);
    expect(isBefore(dateString1, dateString1)).toBe(false);
  });

  // Test case 12: Mixed input types
  it("should work with mixed input types (Date, timestamp, string)", () => {
    const dateObj = new Date(2024, 2, 15, 12, 0, 0); // March 15, 2024 12:00:00
    const timestamp = new Date(2024, 2, 16, 12, 0, 0).getTime(); // March 16, 2024 12:00:00
    const dateString = "2024-03-14T12:00:00"; // March 14, 2024 12:00:00 (Local time string)

    expect(isBefore(dateObj, timestamp)).toBe(true);
    expect(isBefore(dateString, dateObj)).toBe(true);
    expect(isBefore(timestamp, dateString)).toBe(false);
  });
});
