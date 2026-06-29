import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 10000); // 10 seconds in the future
    expect(isFuture(futureDate)).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 10000); // 10 seconds in the past
    expect(isFuture(pastDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date();
    // A date exactly `now` is not strictly in the future.
    expect(isFuture(now)).toBe(false);
  });

  it("should return true for a date just milliseconds in the future", () => {
    const futureDate = new Date(Date.now() + 1); // 1 millisecond in the future
    expect(isFuture(futureDate)).toBe(true);
  });

  it("should return false for an invalid date", () => {
    expect(isFuture(new Date(NaN))).toBe(false);
  });

  it("should accept a timestamp as an argument", () => {
    const futureTimestamp = Date.now() + 5000;
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  it("should accept a string as an argument", () => {
    const futureString = new Date(Date.now() + 5000).toISOString();
    expect(isFuture(futureString)).toBe(true);
  });
});
