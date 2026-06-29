import { isPast } from "./index";

describe("isPast", () => {
  // Use Jest's fake timers to control the current date/time for robust testing
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns true if the given date is in the past", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0); // March 10, 2024 12:00:00.000
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 2, 10, 11, 59, 59, 999); // 1 ms before now
    const result = isPast(pastDate);
    expect(result).toBe(true);

    const pastYear = new Date(2023, 0, 1);
    expect(isPast(pastYear)).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 2, 10, 12, 0, 0, 1); // 1 ms after now
    const result = isPast(futureDate);
    expect(result).toBe(false);

    const futureYear = new Date(2025, 0, 1);
    expect(isPast(futureYear)).toBe(false);
  });

  it("returns false if the given date is equal to the current date", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const equalDate = new Date(2024, 2, 10, 12, 0, 0, 0);
    const result = isPast(equalDate);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as the argument", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastTimestamp = new Date(2024, 2, 10, 11, 59, 59, 999).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a date string as the argument", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDateString = "2024-03-10T11:59:59.999Z";
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the date string is invalid", () => {
    const now = new Date(2024, 2, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const result = isPast("invalid date string");
    expect(result).toBe(false);
  });
});
