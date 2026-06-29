import { isFuture } from "./index";

describe("isFuture", () => {
  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60); // 1 hour ago
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is now (or very close)", () => {
    // Due to execution time, a date created right now might be slightly in the past
    // or exactly now. For this check, we expect it not to be strictly in the future.
    const now = new Date();
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("returns true if the given date is now + a few ms", () => {
    const nowPlusMs = new Date(Date.now() + 50); // 50ms in future
    const result = isFuture(nowPlusMs);
    expect(result).toBe(true);
  });

  it("handles date arguments", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 2); // 2 hours from now
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("handles timestamp arguments", () => {
    const futureTimestamp = Date.now() + 1000 * 60 * 60 * 3; // 3 hours from now
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("handles string arguments", () => {
    const futureDateString = new Date(Date.now() + 1000 * 60 * 60 * 4).toISOString();
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  it("returns false for Invalid Date argument", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for invalid string argument", () => {
    const result = isFuture("invalid date");
    expect(result).toBe(false);
  });
});
