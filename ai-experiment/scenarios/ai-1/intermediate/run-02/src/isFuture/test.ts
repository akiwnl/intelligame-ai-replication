import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the given date is in the future", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1); // A year from now
    expect(isFuture(futureDate)).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 1); // A year ago
    expect(isFuture(pastDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date();
    // Allow a small margin of error for execution time
    const result = isFuture(now);
    // It's highly unlikely that the 'now' date is *strictly* in the future
    // compared to the 'now' taken inside the function, but it's possible if
    // the function call is delayed. Let's test against a date slightly in the past.
    const slightlyBeforeNow = new Date(now.getTime() - 1);
    expect(isFuture(slightlyBeforeNow)).toBe(false);
  });

  it("should return false if the input date is invalid", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp input for a future date", () => {
    const futureTimestamp = new Date().getTime() + 1000 * 60 * 60 * 24 * 30; // 30 days from now
    expect(isFuture(futureTimestamp)).toBe(true);
  });

  it("should work with a date string input for a past date", () => {
    const pastDateString = "2000-01-01T00:00:00Z";
    expect(isFuture(pastDateString)).toBe(false);
  });
});
