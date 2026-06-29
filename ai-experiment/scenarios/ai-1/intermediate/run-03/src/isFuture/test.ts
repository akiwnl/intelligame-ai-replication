import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 5); // 5 minutes from now
    expect(isFuture(futureDate)).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 5); // 5 minutes ago
    expect(isFuture(pastDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    // Note: This test can be flaky if the execution time is not precise.
    // By definition, "future" usually means strictly after the current moment.
    const now = new Date();
    expect(isFuture(now)).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const futureTimestamp = Date.now() + 1000 * 60 * 10; // 10 minutes from now
    expect(isFuture(futureTimestamp)).toBe(true);

    const pastTimestamp = Date.now() - 1000 * 60 * 10; // 10 minutes ago
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  it("should work with a date string as input", () => {
    const futureDateString = new Date(Date.now() + 1000 * 60 * 15).toISOString(); // 15 minutes from now
    expect(isFuture(futureDateString)).toBe(true);

    const pastDateString = new Date(Date.now() - 1000 * 60 * 15).toISOString(); // 15 minutes ago
    expect(isFuture(pastDateString)).toBe(false);
  });

  it("should return false if the date is invalid", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should return false if the input is an invalid string", () => {
    const result = isFuture("invalid date string");
    expect(result).toBe(false);
  });
});
