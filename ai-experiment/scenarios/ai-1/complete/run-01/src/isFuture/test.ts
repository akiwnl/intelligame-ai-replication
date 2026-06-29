import { isFuture } from "./index";

describe("isFuture", () => {
  // Mock Date.now() to ensure tests are robust to time changes
  const MOCK_DATE = new Date("2024-01-01T12:00:00.000Z");
  let mockDateSpy: jest.SpyInstance;

  beforeAll(() => {
    // Mock `new Date()` constructor to return a fixed date for consistency
    // This allows `new Date()` inside `isFuture` to also return the mocked date
    mockDateSpy = jest.spyOn(global, 'Date').mockImplementation((...args) => {
      if (args.length === 0) {
        return MOCK_DATE; // Return the fixed date when called without arguments
      }
      // For other calls (e.g., new Date(timestamp), new Date(string)), use original Date constructor
      return new Date(...(args as ConstructorParameters<typeof Date>));
    });
  });

  afterAll(() => {
    mockDateSpy.mockRestore(); // Restore original Date constructor after all tests
  });

  // Test case from JSDoc example (adjusted for mock date)
  test("should return true for a date in the future relative to mock date", () => {
    // If mock date is Jan 1, 2024, then Dec 31, 2024 is in the future
    const futureDate = new Date(2024, 11, 31, 10, 0, 0); // Dec 31, 2024 (local time)
    expect(isFuture(futureDate)).toBe(true);
  });

  // Test for a date in the past relative to mock date
  test("should return false for a date in the past relative to mock date", () => {
    // If mock date is Jan 1, 2024, then Dec 31, 2023 is in the past
    const pastDate = new Date(2023, 11, 31, 10, 0, 0); // Dec 31, 2023 (local time)
    expect(isFuture(pastDate)).toBe(false);
  });

  // Test for a date exactly at the mock date
  test("should return false for a date exactly equal to mock date", () => {
    // Note: The mock date is UTC, but new Date(y, m, d) is local.
    // So, we need to create a local date that has the same UTC time as MOCK_DATE.
    // MOCK_DATE: '2024-01-01T12:00:00.000Z'
    // Let's create a date that when converted to UTC is exactly MOCK_DATE.
    // To simplify, let's create a date that's very close to the mock date's local representation.
    // Or even better, compare directly using the mock date's getTime()
    const now = new Date(); // This will be MOCK_DATE due to mocking
    expect(isFuture(now)).toBe(false); // A date equal to "now" is not in the future
  });

  // Test for a date slightly before the mock date
  test("should return false for a date slightly before mock date", () => {
    const slightlyBefore = new Date(MOCK_DATE.getTime() - 1);
    expect(isFuture(slightlyBefore)).toBe(false);
  });

  // Test for a date slightly after the mock date
  test("should return true for a date slightly after mock date", () => {
    const slightlyAfter = new Date(MOCK_DATE.getTime() + 1);
    expect(isFuture(slightlyAfter)).toBe(true);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const futureDate = new Date(2024, 1, 1); // Feb 1, 2024
    expect(isFuture(futureDate)).toBe(true);
  });

  test("should work with a timestamp", () => {
    const futureTimestamp = new Date(2024, 1, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  test("should work with a date string", () => {
    const futureDateString = "2024-02-01T00:00:00Z";
    expect(isFuture(futureDateString)).toBe(true);
  });

  // Test with invalid date input
  test("should return false when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isFuture(invalidDate)).toBe(false);
  });

  test("should return false when the input timestamp is NaN", () => {
    expect(isFuture(NaN)).toBe(false);
  });

  test("should return false when the input string is invalid", () => {
    expect(isFuture("invalid date string")).toBe(false);
  });
});
