import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24); // Tomorrow
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24); // Yesterday
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly now (within milliseconds)", () => {
    const now = new Date();
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const futureTimestamp = Date.now() + 1000 * 60 * 60 * 24 * 2; // Two days from now
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    // Create a date string for a known future date relative to test run
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3);
    const dateString = futureDate.toISOString();
    const result = isFuture(dateString);
    expect(result).toBe(true);
  });

  it("should handle invalid dates gracefully, returning false", () => {
    const invalidDate = new Date(NaN);
    const result = isFuture(invalidDate);
    expect(result).toBe(false);
  });
});
