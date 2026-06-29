import { isFuture } from "./index";

describe('isFuture', () => {
  let dateNowSpy: jest.SpyInstance<number, []>;
  const fixedNow = new Date(2014, 9, 6, 12, 0, 0, 0); // Oct 6, 2014, 12:00:00.000 (local time)

  beforeAll(() => {
    // Mock Date.now() to a fixed point in time for consistent testing
    dateNowSpy = jest.spyOn(Date, 'now').mockReturnValue(fixedNow.getTime());
  });

  afterAll(() => {
    dateNowSpy.mockRestore(); // Restore original Date.now()
  });

  // Test case 1: Date is in the future (example from JSDoc)
  it('should return true if the date is in the future relative to mocked Date.now()', () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  // Test case 2: Date is in the past
  it('should return false if the date is in the past relative to mocked Date.now()', () => {
    const pastDate = new Date(2014, 0, 1); // Jan 1, 2014
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  // Test case 3: Date is exactly 'now'
  it('should return false if the date is exactly the current time', () => {
    const currentDate = new Date(fixedNow.getTime());
    const result = isFuture(currentDate);
    expect(result).toBe(false);
  });

  // Test case 4: Date is just 1 millisecond in the future
  it('should return true if the date is 1 millisecond in the future', () => {
    const justFutureDate = new Date(fixedNow.getTime() + 1);
    const result = isFuture(justFutureDate);
    expect(result).toBe(true);
  });

  // Test case 5: Date is just 1 millisecond in the past
  it('should return false if the date is 1 millisecond in the past', () => {
    const justPastDate = new Date(fixedNow.getTime() - 1);
    const result = isFuture(justPastDate);
    expect(result).toBe(false);
  });

  // Test case 6: Invalid date object input
  it('should return false for an invalid date object', () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  // Test case 7: Invalid date string input
  it('should return false for an invalid date string', () => {
    const result = isFuture('invalid date string');
    expect(result).toBe(false);
  });

  // Test case 8: Timestamp input (future)
  it('should handle future timestamp input correctly', () => {
    const futureTimestamp = fixedNow.getTime() + 10000; // 10 seconds in future
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  // Test case 9: Timestamp input (past)
  it('should handle past timestamp input correctly', () => {
    const pastTimestamp = fixedNow.getTime() - 10000; // 10 seconds in past
    const result = isFuture(pastTimestamp);
    expect(result).toBe(false);
  });

  // Test case 10: String input (ISO 8601 future)
  it('should handle future string input (ISO 8601) correctly', () => {
    const futureDateString = new Date(fixedNow.getTime() + 1000 * 60 * 60).toISOString(); // 1 hour in future
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  // Test case 11: String input (ISO 8601 past)
  it('should handle past string input (ISO 8601) correctly', () => {
    const pastDateString = new Date(fixedNow.getTime() - 1000 * 60 * 60).toISOString(); // 1 hour in past
    const result = isFuture(pastDateString);
    expect(result).toBe(false);
  });
});
