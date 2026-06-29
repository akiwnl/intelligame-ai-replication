import { isEqual } from "./index";

describe("isEqual", () => {
  // Test case 1: Dates are strictly equal
  it("should return true if two dates are strictly equal", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 123);
    const date2 = new Date(2024, 0, 10, 10, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 2: Dates differ by milliseconds
  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 123);
    const date2 = new Date(2024, 0, 10, 10, 30, 45, 124);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 3: Dates differ by seconds
  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 0);
    const date2 = new Date(2024, 0, 10, 10, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 4: Dates differ by minutes
  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 0, 0);
    const date2 = new Date(2024, 0, 10, 10, 31, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 5: Dates differ by hours
  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2024, 0, 10, 10, 0, 0, 0);
    const date2 = new Date(2024, 0, 10, 11, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 6: Dates differ by days
  it("should return false if dates differ by days", () => {
    const date1 = new Date(2024, 0, 10, 0, 0, 0, 0);
    const date2 = new Date(2024, 0, 11, 0, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 7: Example from JSDoc
  it("should return false for the example case", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 8: Left date is invalid
  it("should return false if the left date is invalid", () => {
    const invalidDate = new Date("invalid date");
    const validDate = new Date(2024, 0, 10);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  // Test case 9: Right date is invalid
  it("should return false if the right date is invalid", () => {
    const validDate = new Date(2024, 0, 10);
    const invalidDate = new Date("invalid date");
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  // Test case 10: Both dates are invalid
  it("should return false if both dates are invalid (NaN === NaN is false)", () => {
    const invalidDate1 = new Date("invalid date 1");
    const invalidDate2 = new Date("invalid date 2");
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  // Test case 11: Input as timestamp
  it("should work with timestamps as input", () => {
    const timestamp1 = new Date(2024, 0, 10, 12, 0, 0, 0).getTime();
    const timestamp2 = new Date(2024, 0, 10, 12, 0, 0, 0).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
  });

  // Test case 12: Input as date string
  it("should work with date strings as input", () => {
    const dateString1 = "2024-01-10T12:00:00.000Z";
    const dateString2 = "2024-01-10T12:00:00.000Z";
    expect(isEqual(dateString1, dateString2)).toBe(true);
  });

  // Test case 13: Timezone independence - comparison based on UTC time values
  it("should be timezone independent", () => {
    // These two dates represent the same exact instant in time (UTC)
    const date1 = new Date("2024-01-01T00:00:00.000Z");
    const date2 = new Date(date1.getTime());
    expect(isEqual(date1, date2)).toBe(true);

    // Dates that might look different in local time but are same UTC
    // E.g., new Date(2024, 0, 1, 0, 0, 0) and new Date('2024-01-01T00:00:00.000Z')
    // will be equal if their getTime() are equal
    const dateLocal = new Date(2024, 0, 1, 10, 0, 0); // Local time
    const dateUTC = new Date(dateLocal.getTime()); // UTC representation of same instant
    expect(isEqual(dateLocal, dateUTC)).toBe(true);
  });
});
