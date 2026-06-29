import { isFuture } from "./index";

describe("isFuture", () => {
  // Use fake timers to control the current date/time for consistent testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return true if the given date is strictly in the future", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0); // Oct 6, 2014 10:00:00.000
    jest.setSystemTime(now);

    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDate = new Date(2014, 0, 1); // Jan 1, 2014
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly the same as now", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const sameDate = new Date(2014, 9, 6, 10, 0, 0, 0);
    const result = isFuture(sameDate);
    expect(result).toBe(false);
  });

  it("should handle dates with milliseconds correctly (future)", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 500);
    jest.setSystemTime(now);

    const slightlyFuture = new Date(2014, 9, 6, 10, 0, 0, 501);
    expect(isFuture(slightlyFuture)).toBe(true);
  });

  it("should handle dates with milliseconds correctly (not future)", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 500);
    jest.setSystemTime(now);

    const slightlyPast = new Date(2014, 9, 6, 10, 0, 0, 499);
    expect(isFuture(slightlyPast)).toBe(false);
  });

  it("should accept timestamps as input", () => {
    const now = new Date(2023, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureTimestamp = new Date(2023, 0, 1, 12, 0, 1, 0).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("should accept date strings as input", () => {
    const now = new Date(2023, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureLocal = new Date(now.getTime() + 1000); // 1 second in future
    const result = isFuture(futureLocal.toISOString());
    expect(result).toBe(true);
  });

  it("should return false if the input date is invalid", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });
});
