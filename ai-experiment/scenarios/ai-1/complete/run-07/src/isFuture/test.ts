import { isFuture } from "./index";

describe("isFuture", () => {
  // Use Jest's fake timers to control the current date/time for robust testing
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns true if the given date is in the future", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0); // March 10, 2024 12:00:00.000
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 2, 10, 12, 0, 0, 1); // 1 ms after now
    const result = isFuture(futureDate);
    expect(result).toBe(true);

    const futureYear = new Date(2025, 0, 1);
    expect(isFuture(futureYear)).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 2, 10, 11, 59, 59, 999); // 1 ms before now
    const result = isFuture(pastDate);
    expect(result).toBe(false);

    const pastYear = new Date(2023, 0, 1);
    expect(isFuture(pastYear)).toBe(false);
  });

  it("returns false if the given date is equal to the current date", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const equalDate = new Date(2024, 2, 10, 12, 0, 0, 0);
    const result = isFuture(equalDate);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as the argument", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureTimestamp = new Date(2024, 2, 10, 12, 0, 0, 1).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a date string as the argument", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDateString = "2024-03-10T12:00:00.001Z";
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the date string is invalid", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isFuture("invalid date string");
    expect(result).toBe(false);
  });
});
