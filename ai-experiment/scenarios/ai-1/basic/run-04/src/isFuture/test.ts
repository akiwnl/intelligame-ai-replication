import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(new Date().getTime() + 10000); // 10 seconds from now
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(new Date().getTime() - 10000); // 10 seconds ago
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is the current date/time", () => {
    // This test can be flaky if the execution time is exactly the same,
    // but getTime() comparison should typically make it false as current date is not strictly > itself.
    const now = new Date();
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("should return false if the given date is invalid", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should accept a timestamp as date argument", () => {
    const futureTimestamp = new Date().getTime() + 5000;
    const pastTimestamp = new Date().getTime() - 5000;
    expect(isFuture(futureTimestamp)).toBe(true);
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  it("should accept a date string as date argument", () => {
    const futureDateString = new Date(new Date().getTime() + 7000).toISOString();
    const pastDateString = new Date(new Date().getTime() - 7000).toISOString();
    expect(isFuture(futureDateString)).toBe(true);
    expect(isFuture(pastDateString)).toBe(false);
  });
});
