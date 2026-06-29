import { isPast } from "./index";

describe("isPast", () => {
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

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(pastDate)).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isPast(futureDate)).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const now = new Date(mockDate.getTime());
    expect(isPast(now)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const pastTimestamp = new Date(2013, 11, 31).getTime();
    expect(isPast(pastTimestamp)).toBe(true);
  });

  it("accepts a date string", () => {
    const pastDateString = "2013-12-31T00:00:00.000Z";
    expect(isPast(pastDateString)).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid date string", () => {
    const result = isPast("invalid date");
    expect(result).toBe(false);
  });
});
