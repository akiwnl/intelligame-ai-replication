import { isFuture } from "./index";

describe('isFuture', () => {
  let mockDate: Date;

  // Mock Date.now() to control the "current" time for consistent testing
  beforeAll(() => {
    // Set a fixed "now" for testing purposes (e.g., October 10, 2023, 12:00:00.000)
    mockDate = new Date(2023, 9, 10, 12, 0, 0, 0);
    jest.spyOn(global, 'Date').mockImplementation((...args: any[]) => {
      if (args.length === 0) {
        return mockDate; // When new Date() is called without arguments
      }
      return new (jest.requireActual('Date') as typeof Date)(...args); // For other Date constructor calls
    }) as any;
  });

  afterAll(() => {
    jest.restoreAllMocks(); // Restore original Date object after all tests
  });

  it('should return true if the given date is in the future', () => {
    const futureDate = new Date(2023, 9, 10, 12, 0, 0, 1); // 1 millisecond after mockDate
    expect(isFuture(futureDate)).toBe(true);
  });

  it('should return false if the given date is in the past', () => {
    const pastDate = new Date(2023, 9, 10, 11, 59, 59, 999); // 1 millisecond before mockDate
    expect(isFuture(pastDate)).toBe(false);
  });

  it('should return false if the given date is exactly "now"', () => {
    const currentDate = new Date(2023, 9, 10, 12, 0, 0, 0); // Same as mockDate
    expect(isFuture(currentDate)).toBe(false);
  });

  it('should return false for an invalid date', () => {
    const invalidDate = new Date('not a date');
    expect(isFuture(invalidDate)).toBe(false);
  });

  it('should handle timestamp input for a future date', () => {
    const futureTimestamp = new Date(2023, 9, 10, 12, 0, 0, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  it('should handle timestamp input for a past date', () => {
    const pastTimestamp = new Date(2023, 9, 10, 11, 59, 59, 999).getTime();
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  it('should handle string input for a future date', () => {
    // Ensure the string parses to a date after the mockDate
    const futureDateString = '2023-10-10T12:00:00.001Z';
    // Adjust for timezone offset if necessary, to ensure it's truly future
    const futureDateInLocal = new Date(futureDateString);
    futureDateInLocal.setMilliseconds(futureDateInLocal.getMilliseconds() + (mockDate.getTimezoneOffset() * 60 * 1000) + 1);

    expect(isFuture(futureDateInLocal)).toBe(true);
  });
});
