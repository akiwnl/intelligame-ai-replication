import { isPast } from "./index";

describe("isPast", () => {
  // Use fake timers to control the current date/time for consistent testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return true if the given date is strictly in the past", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0); // Oct 6, 2014 10:00:00.000
    jest.setSystemTime(now);

    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly the same as now", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const sameDate = new Date(2014, 9, 6, 10, 0, 0, 0);
    const result = isPast(sameDate);
    expect(result).toBe(false);
  });

  it("should handle dates with milliseconds correctly (past)", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 500);
    jest.setSystemTime(now);

    const slightlyPast = new Date(2014, 9, 6, 10, 0, 0, 499);
    expect(isPast(slightlyPast)).toBe(true);
  });

  it("should handle dates with milliseconds correctly (not past)", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 500);
    jest.setSystemTime(now);

    const slightlyFuture = new Date(2014, 9, 6, 10, 0, 0, 501);
    expect(isPast(slightlyFuture)).toBe(false);
  });

  it("should accept timestamps as input", () => {
    const now = new Date(2023, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastTimestamp = new Date(2023, 0, 1, 11, 59, 59, 0).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should accept date strings as input", () => {
    const now = new Date(2023, 0, 1, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastLocal = new Date(now.getTime() - 1000); // 1 second in past
    const result = isPast(pastLocal.toISOString());
    expect(result).toBe(true);
  });

  it("should return false if the input date is invalid", () => {
    const now = new Date(2014, 9, 6, 10, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });
});
