import { isPast } from "./index";

describe("isPast", () => {
  // Use fake timers to control `new Date()` for robust testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // Test case 1: Date is in the past
  it("should return true if the date is in the past", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 0, 1, 11, 59, 59, 999); // 1ms before 'now'
    expect(isPast(pastDate)).toBe(true);

    const previousDay = new Date(2023, 11, 31);
    expect(isPast(previousDay)).toBe(true);
  });

  // Test case 2: Date is in the future
  it("should return false if the date is in the future", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 0, 1, 12, 0, 0, 1); // 1ms after 'now'
    expect(isPast(futureDate)).toBe(false);

    const nextDay = new Date(2024, 0, 2);
    expect(isPast(nextDay)).toBe(false);
  });

  // Test case 3: Date is exactly 'now'
  it("should return false if the date is exactly the current time", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    expect(isPast(now)).toBe(false);
  });

  // Test case 4: Invalid date input
  it("should return false for an invalid date", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);
    expect(isPast(new Date("invalid date"))).toBe(false);
  });

  // Test case 5: Input as timestamp
  it("should work with a timestamp as input", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastTimestamp = new Date(2024, 0, 1, 11, 59, 59, 999).getTime();
    expect(isPast(pastTimestamp)).toBe(true);

    const futureTimestamp = new Date(2024, 0, 1, 12, 0, 0, 1).getTime();
    expect(isPast(futureTimestamp)).toBe(false);
  });

  // Test case 6: Input as date string
  it("should work with a date string as input", () => {
    const now = new Date(2024, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    // Create a date string that represents a local date before nowLocal
    const pastLocalString = "2023-12-31"; // Dec 31, 2023
    expect(isPast(pastLocalString)).toBe(true);

    const futureLocalString = "2024-01-02"; // Jan 2, 2024
    expect(isPast(futureLocalString)).toBe(false);
  });

  // Test case 7: JSDoc example (adapted for fake timers)
  it("should match the JSDoc example (adapted for fake timers)", () => {
    // Set 'today' to 6 October 2014
    const today = new Date(2014, 9, 6); // Month is 0-indexed, so 9 is October
    jest.setSystemTime(today);

    // Check if 2 July 2014 is in the past
    const july2 = new Date(2014, 6, 2);
    expect(isPast(july2)).toBe(true);

    // Check a date after today for completeness
    const december31 = new Date(2014, 11, 31);
    expect(isPast(december31)).toBe(false);
  });
});
