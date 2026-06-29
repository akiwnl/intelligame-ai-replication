import { isPast } from "./index";

describe("isPast", () => {
  // Mock Date.now() to ensure tests are robust to time changes
  const MOCK_DATE = new Date("2024-01-01T12:00:00.000Z");
  let mockDateSpy: jest.SpyInstance;

  beforeAll(() => {
    // Mock `new Date()` constructor to return a fixed date for consistency
    mockDateSpy = jest.spyOn(global, 'Date').mockImplementation((...args) => {
      if (args.length === 0) {
        return MOCK_DATE; // Return the fixed date when called without arguments
      }
      // For other calls, use original Date constructor
      return new Date(...(args as ConstructorParameters<typeof Date>));
    });
  });

  afterAll(() => {
    mockDateSpy.mockRestore(); // Restore original Date constructor after all tests
  });

  // Test case from JSDoc example (adjusted for mock date)
  test("should return true for a date in the past relative to mock date", () => {
    // If mock date is Jan 1, 2024, then July 2, 2014 is in the past
    const pastDate = new Date(2014, 6, 2); // July 2, 2014 (local time)
    expect(isPast(pastDate)).toBe(true);
  });

  // Test for a date in the future relative to mock date
  test("should return false for a date in the future relative to mock date", () => {
    // If mock date is Jan 1, 2024, then Feb 1, 2024 is in the future
    const futureDate = new Date(2024, 1, 1); // Feb 1, 2024 (local time)
    expect(isPast(futureDate)).toBe(false);
  });

  // Test for a date exactly at the mock date
  test("should return false for a date exactly equal to mock date", () => {
    const now = new Date(); // This will be MOCK_DATE due to mocking
    expect(isPast(now)).toBe(false); // A date equal to "now" is not in the past
  });

  // Test for a date slightly before the mock date
  test("should return true for a date slightly before mock date", () => {
    const slightlyBefore = new Date(MOCK_DATE.getTime() - 1);
    expect(isPast(slightlyBefore)).toBe(true);
  });

  // Test for a date slightly after the mock date
  test("should return false for a date slightly after mock date", () => {
    const slightlyAfter = new Date(MOCK_DATE.getTime() + 1);
    expect(isPast(slightlyAfter)).toBe(false);
  });

  // Test with different input types
  test("should work with a Date object", () => {
    const pastDate = new Date(2023, 11, 31); // Dec 31, 2023
    expect(isPast(pastDate)).toBe(true);
  });

  test("should work with a timestamp", () => {
    const pastTimestamp = new Date(2023, 11, 31).getTime();
    expect(isPast(pastTimestamp)).toBe(true);
  });

  test("should work with a date string", () => {
    const pastDateString = "2023-12-31T00:00:00Z";
    expect(isPast(pastDateString)).toBe(true);
  });

  // Test with invalid date input
  test("should return false when the input date is invalid", () => {
    const invalidDate = new Date("not a date");
    expect(isPast(invalidDate)).toBe(false);
  });

  test("should return false when the input timestamp is NaN", () => {
    expect(isPast(NaN)).toBe(false);
  });

  test("should return false when the input string is invalid", () => {
    expect(isPast("invalid date string")).toBe(false);
  });
});
