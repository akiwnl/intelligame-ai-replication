import { isFuture } from "./index";

describe("isFuture", () => {
  beforeEach(() => {
    // Mock the current date to a fixed point for consistent testing
    jest.useFakeTimers().setSystemTime(new Date(2014, 9, 6, 10, 0, 0, 0)); // Oct 6, 2014 10:00:00.000
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isFuture(futureDate)).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(2014, 8, 1); // Sep 1, 2014
    expect(isFuture(pastDate)).toBe(false);
  });

  it("returns false if the given date is the current moment (exact timestamp)", () => {
    const now = new Date(); // This will be the mocked date
    expect(isFuture(now)).toBe(false);
  });

  it("returns false if the given date is the current moment (using Date.now())", () => {
    const nowTimestamp = Date.now(); // This will be the mocked timestamp
    expect(isFuture(nowTimestamp)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime(); // Jan 1, 2015
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  it("accepts a date string", () => {
    const futureDateString = "2014-12-25T00:00:00.000Z"; // Dec 25, 2014
    expect(isFuture(futureDateString)).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });
});
