import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 10000); // 10 seconds in the past
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 10000); // 10 seconds in the future
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date();
    // A date exactly `now` is not strictly in the past.
    expect(isPast(now)).toBe(false);
  });

  it("should return true for a date just milliseconds in the past", () => {
    const pastDate = new Date(Date.now() - 1); // 1 millisecond in the past
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false for an invalid date", () => {
    expect(isPast(new Date(NaN))).toBe(false);
  });

  it("should accept a timestamp as an argument", () => {
    const pastTimestamp = Date.now() - 5000;
    expect(isPast(pastTimestamp)).toBe(true);
  });

  it("should accept a string as an argument", () => {
    const pastString = new Date(Date.now() - 5000).toISOString();
    expect(isPast(pastString)).toBe(true);
  });
});
