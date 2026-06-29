import { isPast } from "./index";

describe("isPast", () => {
  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60); // 1 hour ago
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is now (or very close)", () => {
    // Due to execution time, a date created right now might be slightly in the future
    // or exactly now. For this check, we expect it not to be strictly in the past.
    const now = new Date();
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("returns true if the given date is now - a few ms", () => {
    const nowMinusMs = new Date(Date.now() - 50); // 50ms in past
    const result = isPast(nowMinusMs);
    expect(result).toBe(true);
  });

  it("handles date arguments", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 2); // 2 hours ago
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("handles timestamp arguments", () => {
    const pastTimestamp = Date.now() - 1000 * 60 * 60 * 3; // 3 hours ago
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("handles string arguments", () => {
    const pastDateString = new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString();
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("returns false for Invalid Date argument", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for invalid string argument", () => {
    const result = isPast("invalid date");
    expect(result).toBe(false);
  });
});
