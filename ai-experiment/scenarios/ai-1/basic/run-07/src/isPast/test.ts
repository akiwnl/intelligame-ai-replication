import { isPast } from "./index";

describe("isPast", () => {
  // Use a fixed date for comparison to avoid flaky tests due to `Date.now()`
  // Let's assume "now" is 2014-10-06 00:00:00.000 for these tests, matching the example.
  const MOCK_NOW = new Date(2014, 9, 6, 0, 0, 0, 0).getTime(); // Oct 6, 2014

  // Mock Date.now() to ensure consistent test results
  const mockDateNow = jest.spyOn(Date, 'now').mockReturnValue(MOCK_NOW);

  afterAll(() => {
    mockDateNow.mockRestore(); // Restore original Date.now() after all tests
  });

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is equal to now", () => {
    const now = new Date(MOCK_NOW);
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as a date", () => {
    const pastTimestamp = new Date(2013, 11, 31).getTime(); // Dec 31, 2013
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as a date", () => {
    const pastDateString = "2014-01-01T12:00:00.000Z"; // Jan 1, 2014
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("returns false for an invalid date input", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });
});
