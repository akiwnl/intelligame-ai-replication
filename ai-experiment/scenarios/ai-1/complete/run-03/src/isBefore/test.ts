import { isBefore } from "./index";

describe("isBefore", () => {
  // Test Case 1: Example from JSDoc
  it("should return false if the first date is after the second date", () => {
    const date1 = new Date(1989, 6, 10); // July 10, 1989
    const date2 = new Date(1987, 1, 11); // Feb 11, 1987
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 2: First date is before the second date
  it("should return true if the first date is before the second date", () => {
    const date1 = new Date(1987, 1, 11); // Feb 11, 1987
    const date2 = new Date(1989, 6, 10); // July 10, 1989
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test Case 3: Dates are equal
  it("should return false if both dates are equal", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 0, 0);
    const date2 = new Date(2023, 10, 15, 10, 30, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 4: Dates differ by milliseconds
  it("should return false if first date is after by milliseconds", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 0, 1);
    const date2 = new Date(2023, 10, 15, 10, 30, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 5: Dates differ by milliseconds (first is before)
  it("should return true if first date is before by milliseconds", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 0, 0);
    const date2 = new Date(2023, 10, 15, 10, 30, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test Case 6: First date is invalid
  it("should return false if the first date is invalid", () => {
    const date1 = new Date("invalid date");
    const date2 = new Date(2023, 10, 15);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 7: Second date is invalid
  it("should return false if the second date is invalid", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date("invalid date");
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 8: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const date1 = new Date("invalid date 1");
    const date2 = new Date("invalid date 2");
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Test Case 9: Input as timestamps (first before)
  it("should correctly compare timestamps when first is before", () => {
    const timestamp1 = new Date(2024, 0, 1).getTime();
    const timestamp2 = new Date(2024, 0, 2).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(true);
  });

  // Test Case 10: Input as timestamps (first after)
  it("should correctly compare timestamps when first is after", () => {
    const timestamp1 = new Date(2024, 0, 2).getTime();
    const timestamp2 = new Date(2024, 0, 1).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(false);
  });

  // Test Case 11: Input as strings (first before)
  it("should correctly compare strings when first is before", () => {
    const dateString1 = "2024-03-09T12:00:00.000Z";
    const dateString2 = "2024-03-10T12:00:00.000Z";
    expect(isBefore(dateString1, dateString2)).toBe(true);
  });

  // Test Case 12: Input as strings (first after)
  it("should correctly compare strings when first is after", () => {
    const dateString1 = "2024-03-10T12:00:00.000Z";
    const dateString2 = "2024-03-09T12:00:00.000Z";
    expect(isBefore(dateString1, dateString2)).toBe(false);
  });

  // Test Case 13: Mixed input types (Date vs Timestamp)
  it("should correctly compare mixed input types (Date before Timestamp)", () => {
    const date = new Date(2024, 4, 14);
    const timestamp = new Date(2024, 4, 15).getTime();
    expect(isBefore(date, timestamp)).toBe(true);
  });

  // Test Case 14: Mixed input types (Timestamp vs String)
  it("should correctly compare mixed input types (Timestamp before String)", () => {
    const timestamp = new Date(2024, 5, 15).getTime();
    const dateString = "2024-06-16T00:00:00.000Z";
    expect(isBefore(timestamp, dateString)).toBe(true);
  });

  // Test Case 15: Boundary - start of year
  it("should return true for Jan 1, 2024 before Jan 2, 2024", () => {
    const date1 = new Date(2024, 0, 1);
    const date2 = new Date(2024, 0, 2);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Test Case 16: Boundary - end of year
  it("should return true for Dec 31, 2024 before Jan 1, 2025", () => {
    const date1 = new Date(2024, 11, 31);
    const date2 = new Date(2025, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
  });
});
