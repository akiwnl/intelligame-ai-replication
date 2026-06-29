import { isFuture } from "./index";

describe("isFuture", () => {
  let mockDate: Date;
  let originalDateNow: () => number;

  beforeAll(() => {
    // Store original Date.now
    originalDateNow = Date.now;
    // Mock Date.now to return a fixed timestamp for consistent testing
    mockDate = new Date(2014, 9, 6, 12, 0, 0, 0); // October 6, 2014 12:00:00
    Date.now = jest.fn(() => mockDate.getTime());
  });

  afterAll(() => {
    // Restore original Date.now
    Date.now = originalDateNow;
  });

  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isFuture(futureDate)).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(2014, 0, 1); // Jan 1, 2014
    expect(isFuture(pastDate)).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const now = new Date(mockDate.getTime());
    expect(isFuture(now)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  it("accepts a date string", () => {
    const futureDateString = "2015-01-01T00:00:00.000Z";
    expect(isFuture(futureDateString)).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid date string", () => {
    const result = isFuture("invalid date");
    expect(result).toBe(false);
  });
});
