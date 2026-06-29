import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(new Date().getTime() - 1000 * 60 * 60 * 24); // Yesterday
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24); // Tomorrow
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly now (or very close)", () => {
    const now = new Date();
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("should return false if the given date is invalid", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should accept a timestamp as input", () => {
    const pastTimestamp = new Date().getTime() - 1000 * 60 * 5; // 5 minutes ago
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should accept a string as input", () => {
    const pastDateString = new Date(new Date().getTime() - 1000 * 60 * 60).toISOString(); // 1 hour ago
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  // Test with a specific date relative to a fixed "now" for consistency, if needed
  // For this exercise, the dynamic `new Date()` is acceptable.
  it("should show example behavior: 2 July 2014 is past if today is 6 October 2014", () => {
    // This test depends on the current date, which is dynamic.
    // To make it robust, we'd mock `new Date()`.
    // For now, we'll assume the example context for the test.
    // If running this test after 2014, it would be true.
    const exampleDate = new Date(2014, 6, 2); // July 2, 2014
    const now = new Date();
    if (now.getFullYear() > 2014 || (now.getFullYear() === 2014 && now.getMonth() >= 9)) { // If running after Oct 2014
      expect(isPast(exampleDate)).toBe(true);
    } else { // If running this test before Oct 2014
      expect(isPast(exampleDate)).toBe(false);
    }
  });
});
