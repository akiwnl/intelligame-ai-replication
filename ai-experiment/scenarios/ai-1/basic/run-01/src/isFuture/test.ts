import { isFuture } from "./index";

describe("isFuture", () => {
  // Use a fixed reference date for "now" in tests to ensure determinism
  const fixedNow = new Date(2023, 5, 15, 12, 0, 0, 0); // June 15, 2023 12:00:00.000

  // Mock Date.now() or new Date() to use fixedNow
  // Since the prompt restricts external tools beyond what's in the project,
  // and `new Date()` is used internally in `isFuture`, we'll make sure our test dates
  // are clearly in the future/past relative to *any* reasonable execution time,
  // or explicitly set up the test context for a specific "now".
  // For this exercise, we'll use dates clearly in future/past and acknowledge
  // that a real-world test would use Jest's fake timers.
  const realDateNow = Date.now;
  const realDate = Date;

  beforeAll(() => {
    global.Date = class extends realDate {
      constructor(date?: Date | number | string) {
        if (date) {
          return new realDate(date);
        }
        return fixedNow; // Return our fixed 'now' date when called without arguments
      }
    } as any;
  });

  afterAll(() => {
    global.Date = realDate; // Restore original Date object
  });


  it("should return true if the date is in the future", () => {
    const futureDate = new Date(2023, 5, 15, 12, 0, 0, 1); // 1ms after fixedNow
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return true for a date far in the future", () => {
    const futureDate = new Date(2025, 0, 1); // Jan 1, 2025
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the date is in the past", () => {
    const pastDate = new Date(2023, 5, 15, 11, 59, 59, 999); // 1ms before fixedNow
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false for a date far in the past", () => {
    const pastDate = new Date(2022, 0, 1); // Jan 1, 2022
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the date is exactly 'now'", () => {
    const nowishDate = new Date(fixedNow.getTime()); // Exactly fixedNow
    const result = isFuture(nowishDate);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const futureTimestamp = new Date(2023, 5, 15, 12, 0, 0, 1).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    // Note: Date strings are parsed based on local timezone or UTC depending on format.
    // Ensure the string represents a future date relative to fixedNow.
    const futureDateString = "2023-06-15T12:00:00.001Z"; // 1ms after fixedNow (in UTC if Z is used)
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });
});
