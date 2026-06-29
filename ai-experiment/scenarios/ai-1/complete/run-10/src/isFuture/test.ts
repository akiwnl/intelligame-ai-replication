import { isFuture } from "./index";

describe("isFuture", () => {
  // Use fake timers to control `new Date()` for robust testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // Test case 1: Date is in the future
  it("should return true if the date is in the future", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 0, 1, 12, 0, 0, 1); // 1ms after 'now'
    expect(isFuture(futureDate)).toBe(true);

    const nextDay = new Date(2024, 0, 2);
    expect(isFuture(nextDay)).toBe(true);
  });

  // Test case 2: Date is in the past
  it("should return false if the date is in the past", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 0, 1, 11, 59, 59, 999); // 1ms before 'now'
    expect(isFuture(pastDate)).toBe(false);

    const previousDay = new Date(2023, 11, 31);
    expect(isFuture(previousDay)).toBe(false);
  });

  // Test case 3: Date is exactly 'now'
  it("should return false if the date is exactly the current time", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    expect(isFuture(now)).toBe(false);
  });

  // Test case 4: Invalid date input
  it("should return false for an invalid date", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);
    expect(isFuture(new Date("invalid date"))).toBe(false);
  });

  // Test case 5: Input as timestamp
  it("should work with a timestamp as input", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureTimestamp = new Date(2024, 0, 1, 12, 0, 0, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);

    const pastTimestamp = new Date(2024, 0, 1, 11, 59, 59, 999).getTime();
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  // Test case 6: Input as date string
  it("should work with a date string as input", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDateString = "2024-01-01T12:00:00.001Z"; // UTC string, depends on local timezone how it's parsed to local time
    const pastDateString = "2024-01-01T11:59:59.999Z";

    // For robust testing with strings, ensure the string represents a date relative to the mocked time.
    // Let's use a simple local date string for 'future' which is easy to reason about.
    // Example: if 'now' is Jan 1, 2024 12:00:00, then 'Jan 2, 2024' is future.
    const nowLocal = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(nowLocal);

    // Create a date string that represents a local date after nowLocal
    const futureLocalString = "2024-01-02"; // Jan 2, 2024
    expect(isFuture(futureLocalString)).toBe(true);

    const pastLocalString = "2023-12-31"; // Dec 31, 2023
    expect(isFuture(pastLocalString)).toBe(false);
  });

  // Test case 7: JSDoc example (adapted for fake timers)
  it("should match the JSDoc example (adapted for fake timers)", () => {
    // Set 'today' to 6 October 2014
    const today = new Date(2014, 9, 6); // Month is 0-indexed, so 9 is October
    jest.setSystemTime(today);

    // Check if 31 December 2014 is in the future
    const december31 = new Date(2014, 11, 31);
    expect(isFuture(december31)).toBe(true);

    // Check a date before today for completeness
    const july2 = new Date(2014, 6, 2);
    expect(isFuture(july2)).toBe(false);
  });
});
