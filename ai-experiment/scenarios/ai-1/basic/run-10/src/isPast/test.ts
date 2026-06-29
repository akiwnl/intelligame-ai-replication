import { isPast } from "./index";

describe("isPast", () => {
  beforeEach(() => {
    // Mock the current date to a fixed point for consistent testing
    jest.useFakeTimers().setSystemTime(new Date(2014, 9, 6, 10, 0, 0, 0)); // Oct 6, 2014 10:00:00.000
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(pastDate)).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isPast(futureDate)).toBe(false);
  });

  it("returns false if the given date is the current moment (exact timestamp)", () => {
    const now = new Date(); // This will be the mocked date
    expect(isPast(now)).toBe(false);
  });

  it("returns false if the given date is the current moment (using Date.now())", () => {
    const nowTimestamp = Date.now(); // This will be the mocked timestamp
    expect(isPast(nowTimestamp)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const pastTimestamp = new Date(2013, 11, 31).getTime(); // Dec 31, 2013
    expect(isPast(pastTimestamp)).toBe(true);
  });

  it("accepts a date string", () => {
    const pastDateString = "2014-01-01T00:00:00.000Z"; // Jan 1, 2014
    expect(isPast(pastDateString)).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });
});
