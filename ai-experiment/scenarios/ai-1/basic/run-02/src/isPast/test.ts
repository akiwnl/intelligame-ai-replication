import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24); // Yesterday
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24); // Tomorrow
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly now (within milliseconds)", () => {
    const now = new Date();
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const pastTimestamp = Date.now() - 1000 * 60 * 60 * 24 * 2; // Two days ago
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    // Create a date string for a known past date relative to test run
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
    const dateString = pastDate.toISOString();
    const result = isPast(dateString);
    expect(result).toBe(true);
  });

  it("should handle invalid dates gracefully, returning false", () => {
    const invalidDate = new Date(NaN);
    const result = isPast(invalidDate);
    expect(result).toBe(false);
  });
});
