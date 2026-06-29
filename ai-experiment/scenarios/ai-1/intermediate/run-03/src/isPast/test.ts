import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 5); // 5 minutes ago
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 5); // 5 minutes from now
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    // Note: This test can be flaky if the execution time is not precise.
    // By definition, "past" usually means strictly before the current moment.
    const now = new Date();
    expect(isPast(now)).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const pastTimestamp = Date.now() - 1000 * 60 * 10; // 10 minutes ago
    expect(isPast(pastTimestamp)).toBe(true);

    const futureTimestamp = Date.now() + 1000 * 60 * 10; // 10 minutes from now
    expect(isPast(futureTimestamp)).toBe(false);
  });

  it("should work with a date string as input", () => {
    const pastDateString = new Date(Date.now() - 1000 * 60 * 15).toISOString(); // 15 minutes ago
    expect(isPast(pastDateString)).toBe(true);

    const futureDateString = new Date(Date.now() + 1000 * 60 * 15).toISOString(); // 15 minutes from now
    expect(isPast(futureDateString)).toBe(false);
  });

  it("should return false if the date is invalid", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should return false if the input is an invalid string", () => {
    const result = isPast("invalid date string");
    expect(result).toBe(false);
  });
});
