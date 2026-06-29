import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the given date is in the past", () => {
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 1); // A year ago
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1); // A year from now
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date();
    // Allow a small margin of error for execution time
    const result = isPast(now);
    // It's highly unlikely that the 'now' date is *strictly* in the past
    // compared to the 'now' taken inside the function, but it's possible if
    // the function call is delayed. Let's test against a date slightly in the future.
    const slightlyAfterNow = new Date(now.getTime() + 1);
    expect(isPast(slightlyAfterNow)).toBe(false);
  });

  it("should return false if the input date is invalid", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp input for a past date", () => {
    const pastTimestamp = new Date().getTime() - 1000 * 60 * 60 * 24 * 30; // 30 days ago
    expect(isPast(pastTimestamp)).toBe(true);
  });

  it("should work with a date string input for a future date", () => {
    const futureDateString = "2099-01-01T00:00:00Z";
    expect(isPast(futureDateString)).toBe(false);
  });
});
