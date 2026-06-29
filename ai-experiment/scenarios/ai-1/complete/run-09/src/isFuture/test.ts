import { isFuture } from "./index";

describe("isFuture", () => {
  let mockDateNow: jest.SpyInstance;
  const fixedNow = new Date(2023, 10, 15, 12, 0, 0, 0); // November 15, 2023 12:00:00.000

  beforeAll(() => {
    // Mock Date.now() to ensure tests are deterministic and not time-dependent
    mockDateNow = jest.spyOn(Date, 'now').mockReturnValue(fixedNow.getTime());
  });

  afterAll(() => {
    // Restore original Date.now() after all tests are done
    mockDateNow.mockRestore();
  });

  // Test case 1: Date is in the future
  it("should return true if the date is in the future", () => {
    const futureDate = new Date(2023, 10, 15, 12, 0, 0, 1); // 1 millisecond after fixedNow
    expect(isFuture(futureDate)).toBe(true);
  });

  // Test case 2: Date is in the past
  it("should return false if the date is in the past", () => {
    const pastDate = new Date(2023, 10, 15, 11, 59, 59, 999); // 1 millisecond before fixedNow
    expect(isFuture(pastDate)).toBe(false);
  });

  // Test case 3: Date is exactly now
  it("should return false if the date is exactly now", () => {
    const exactNowDate = new Date(fixedNow.getTime());
    expect(isFuture(exactNowDate)).toBe(false);
  });

  // Test case 4: Invalid date input
  it("should return false for an invalid date input", () => {
    const invalidDate = new Date("not a date");
    expect(isFuture(invalidDate)).toBe(false);
  });

  // Test case 5: Timestamp input (future)
  it("should work with timestamp input for a future date", () => {
    const futureTimestamp = fixedNow.getTime() + 1000; // 1 second in the future
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  // Test case 6: Timestamp input (past)
  it("should work with timestamp input for a past date", () => {
    const pastTimestamp = fixedNow.getTime() - 1000; // 1 second in the past
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  // Test case 7: String input (future)
  it("should work with string input for a future date", () => {
    const futureDateString = new Date(fixedNow.getTime() + 5000).toISOString(); // 5 seconds in the future (UTC string)
    expect(isFuture(futureDateString)).toBe(true);
  });

  // Test case 8: String input (past)
  it("should work with string input for a past date", () => {
    const pastDateString = new Date(fixedNow.getTime() - 5000).toISOString(); // 5 seconds in the past (UTC string)
    expect(isFuture(pastDateString)).toBe(false);
  });

  // Test case 9: Boundary check - very slightly in the future
  it("should return true for a date just after now", () => {
    const dateJustAfter = new Date(fixedNow.getTime() + 0.001); // Even fractional milliseconds
    expect(isFuture(dateJustAfter)).toBe(true);
  });

  // Test case 10: Boundary check - very slightly in the past
  it("should return false for a date just before now", () => {
    const dateJustBefore = new Date(fixedNow.getTime() - 0.001); // Even fractional milliseconds
    expect(isFuture(dateJustBefore)).toBe(false);
  });

  // Test case 11: Date with a different time zone that resolves to future (UTC string)
  it("should correctly identify future date regardless of timezone in string parsing", () => {
    // Create a date that is definitely in the future relative to fixedNow (24 hours in future)
    const futureDateTimestamp = fixedNow.getTime() + 3600 * 1000 * 24;
    const futureDateStringUTC = new Date(futureDateTimestamp).toISOString(); // This will be a UTC string
    expect(isFuture(futureDateStringUTC)).toBe(true);
  });
});
