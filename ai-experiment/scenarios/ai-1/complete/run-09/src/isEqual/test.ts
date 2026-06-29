import { isEqual } from "./index";

describe("isEqual", () => {
  // Test case 1: Dates are exactly equal (same timestamp)
  it("should return true if two dates are exactly equal", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 45, 123);
    const date2 = new Date(2023, 10, 15, 10, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Test case 2: Dates are not equal (different milliseconds)
  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2014, 6, 2, 6, 30, 45, 0);
    const date2 = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 3: Dates are not equal (different seconds)
  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2023, 10, 15, 10, 30, 0);
    const date2 = new Date(2023, 10, 15, 10, 30, 1);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 4: Dates are not equal (different minutes)
  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2023, 10, 15, 10, 0, 0);
    const date2 = new Date(2023, 10, 15, 10, 1, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 5: Dates are not equal (different hours)
  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2023, 10, 15, 10, 0, 0);
    const date2 = new Date(2023, 10, 15, 11, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 6: Dates are not equal (different days)
  it("should return false if dates differ by days", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2023, 10, 16);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 7: Dates are not equal (different months)
  it("should return false if dates differ by months", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2023, 11, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 8: Dates are not equal (different years)
  it("should return false if dates differ by years", () => {
    const date1 = new Date(2023, 10, 15);
    const date2 = new Date(2024, 10, 15);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Test case 9: One date is invalid
  it("should return false if the left date is invalid", () => {
    const invalidDate = new Date("not a date");
    const validDate = new Date(2023, 10, 15);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  // Test case 10: The other date is invalid
  it("should return false if the right date is invalid", () => {
    const validDate = new Date(2023, 10, 15);
    const invalidDate = new Date("not a date");
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  // Test case 11: Both dates are invalid
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date("not a date 1");
    const invalidDate2 = new Date("not a date 2");
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  // Test case 12: Timestamp input
  it("should work with timestamp inputs", () => {
    const timestamp1 = new Date(2024, 0, 1, 12, 30, 0, 0).getTime();
    const timestamp2 = new Date(2024, 0, 1, 12, 30, 0, 0).getTime();
    const timestamp3 = new Date(2024, 0, 1, 12, 30, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(true);
    expect(isEqual(timestamp1, timestamp3)).toBe(false);
  });

  // Test case 13: String input
  it("should work with string inputs", () => {
    const dateString1 = "2024-01-01T10:00:00"; // Local time string
    const dateString2 = "2024-01-01T10:00:00"; // Local time string
    const dateString3 = "2024-01-01T10:00:00.001"; // Local time string with milliseconds
    expect(isEqual(dateString1, dateString2)).toBe(true);
    expect(isEqual(dateString1, dateString3)).toBe(false);
  });

  // Test case 14: Mixed input types
  it("should work with mixed input types (Date, timestamp, string)", () => {
    const localRefDate = new Date(2024, 2, 15, 11, 0, 0, 0); // March 15, 2024 11:00:00.000 local
    const localRefTimestamp = localRefDate.getTime();
    
    // Create a string that when parsed by new Date(), results in the same local time
    const localRefString = `${localRefDate.getFullYear()}-${(localRefDate.getMonth() + 1).toString().padStart(2, '0')}-${localRefDate.getDate().toString().padStart(2, '0')}T${localRefDate.getHours().toString().padStart(2, '0')}:${localRefDate.getMinutes().toString().padStart(2, '0')}:${localRefDate.getSeconds().toString().padStart(2, '0')}.${localRefDate.getMilliseconds().toString().padStart(3, '0')}`;

    expect(isEqual(localRefDate, localRefTimestamp)).toBe(true);
    expect(isEqual(localRefDate, localRefString)).toBe(true);
    expect(isEqual(localRefTimestamp, localRefString)).toBe(true);

    const differentTimestamp = localRefTimestamp + 1;
    expect(isEqual(localRefDate, differentTimestamp)).toBe(false);

    const differentLocalString = `${localRefDate.getFullYear()}-${(localRefDate.getMonth() + 1).toString().padStart(2, '0')}-${(localRefDate.getDate() + 1).toString().padStart(2, '0')}T${localRefDate.getHours().toString().padStart(2, '0')}:${localRefDate.getMinutes().toString().padStart(2, '0')}:${localRefDate.getSeconds().toString().padStart(2, '0')}.${localRefDate.getMilliseconds().toString().padStart(3, '0')}`;
    expect(isEqual(localRefDate, differentLocalString)).toBe(false);
  });
});
