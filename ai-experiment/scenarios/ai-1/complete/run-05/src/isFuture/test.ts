import { isFuture } from "./index";

describe("isFuture", () => {
  // Use fake timers to control `new Date()` for robust testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // Test case 1: Date in the future
  it("should return true if the date is in the future", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0); // Fixed "now"
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 0, 10, 12, 0, 0, 1); // 1ms after "now"
    expect(isFuture(futureDate)).toBe(true);
  });

  // Test case 2: Date in the past
  it("should return false if the date is in the past", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 0, 10, 11, 59, 59, 999); // 1ms before "now"
    expect(isFuture(pastDate)).toBe(false);
  });

  // Test case 3: Date is exactly "now"
  it("should return false if the date is exactly 'now'", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const exactDate = new Date(2024, 0, 10, 12, 0, 0, 0);
    expect(isFuture(exactDate)).toBe(false);
  });

  // Test case 4: Example from JSDoc
  it("should return true for the example case relative to a set 'now'", () => {
    const now = new Date(2014, 9, 6); // October 6, 2014
    jest.setSystemTime(now);

    const exampleDate = new Date(2014, 11, 31); // December 31, 2014
    expect(isFuture(exampleDate)).toBe(true);
  });

  // Test case 5: Invalid date input
  it("should return false if the input date is invalid", () => {
    const now = new Date(2024, 0, 10);
    jest.setSystemTime(now);

    const invalidDate = new Date("invalid date");
    expect(isFuture(invalidDate)).toBe(false);
  });

  // Test case 6: Input as timestamp
  it("should work with a timestamp as input", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureTimestamp = new Date(2024, 0, 10, 12, 0, 0, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  // Test case 7: Input as date string
  it("should work with a date string as input", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDateString = "2024-01-10T12:00:00.001Z"; // 1ms after now UTC
    expect(isFuture(futureDateString)).toBe(true);
  });

  // Test case 8: Date in the distant future
  it("should return true for a date far in the future", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);

    const distantFuture = new Date(2050, 0, 1);
    expect(isFuture(distantFuture)).toBe(true);
  });

  // Test case 9: Date in the distant past
  it("should return false for a date far in the past", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);

    const distantPast = new Date(1990, 0, 1);
    expect(isFuture(distantPast)).toBe(false);
  });
});
